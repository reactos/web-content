---
title:       "How do security issues happen?"
author:      "ThFabba"
date:        2015-02-11
aliases:     [ node/932 ]

---

<p>
If you are a Windows user, you may be used to seeing a bunch of updates pop up around the second Tuesday of every month that purport to fix "critical security issues."
Microsoft's continuous effort to fix these vulnerabilities in its operating system consumes a lot of resources, but it is well worth it to the users: in a world of ever-increasing cyber security threats, no hole in our computers' defenses should be left open to potential attackers.
</p>

<p>
The <a href="https://www.reactos.org/pipermail/ros-dev/2015-February/017103.html">recent mailing list discussion around ReactOS SVN revision 66192</a> shows just how easy it is to introduce a critical security issue into kernel code.
I will be using this instance as an example of a simple but security-relevant bug, and to illustrate some of the steps kernel code must take to ensure the security of the system it runs on.
</p>

<h3>Spotting the vulnerability</h3>
<p>
So let's get right on it and have a look at the code in question:
</p>
<pre style="font-family: 'Source Code Pro', 'Consolas', 'Courier New', monospace; color: block; background-color: white"><code>
NTSTATUS
APIENTRY
NtUserSetInformationThread(IN HANDLE ThreadHandle,
                           IN USERTHREADINFOCLASS ThreadInformationClass,
                           IN PVOID <span style="background-color: #ffc080">ThreadInformation</span>,
                           IN ULONG <span style="background-color: #ffc080">ThreadInformationLength</span>)
{
    <small style="color: grey">[...]</small>
    <span style="color: blue">switch</span> (ThreadInformationClass)
    {
        <span style="color: blue">case</span> UserThreadInitiateShutdown:
        {
            ERR(<span style="color: #c000c0">"Shutdown initiated\n"</span>);

            <span style="color: blue">if</span> (<span style="background-color: #ffc080">ThreadInformationLength</span> != <span style="color: blue">sizeof</span>(ULONG))
            {
                Status = STATUS_INFO_LENGTH_MISMATCH;
                <span style="color: blue">break</span>;
            }

            Status = UserInitiateShutdown(Thread, (PULONG)<span style="background-color: #ffc080">ThreadInformation</span>);
            <span style="color: blue">break</span>;
        }
        <small style="color: grey">[...]</small>
}
</code></pre>

<p>
The above is a snippet from NtUserSetInformationThread, which is a system call routine in win32k.sys that can be (more or less) directly called from a user-mode program.
ThreadInformation is a pointer to some arbitrary piece of data whose meaning depends on the ThreadInformationClass parameter.
In the UserThreadInitiateShutdown case, it is supposed to be a single 4-byte integer.
ThreadInformationLength describes the size of this data, and as we can see, the code validates that this value is correct and fails with STATUS_INFO_LENGTH_MISMATCH if it is not.
Note that both these parameters come directly from the user program, so a piece of malware calling this function would have direct control over their values.
</p>

<p>
Now let's look at what happens with ThreadInformation as it gets passed to UserInitiateShutdown:
</p>
<pre style="font-family: 'Source Code Pro', 'Consolas', 'Courier New', monospace; color: block; background-color: white"><code>
NTSTATUS
UserInitiateShutdown(IN PETHREAD Thread,
                     IN OUT PULONG <span style="background-color: #ffc080">pFlags</span>)
{
    NTSTATUS Status;
    ULONG Flags = *<span style="background-color: #ffc080">pFlags</span>;
    <small style="color: grey">[...]</small>
    *<span style="background-color: #ffc080">pFlags</span> = Flags;
    <small style="color: grey">[...]</small>
    <span style="color: #00c000">/* If the caller is not Winlogon, do some security checks */</span>
    <span style="color: blue">if</span> (PsGetThreadProcessId(Thread) != gpidLogon)
    {
        <span style="color: #00c000">// FIXME: Play again with flags...</span>
        *<span style="background-color: #ffc080">pFlags</span> = Flags;
        <small style="color: grey">[...]</small>
    }
    <small style="color: grey">[...]</small>
    *<span style="background-color: #ffc080">pFlags</span> = Flags;

    <span style="color: blue">return</span> STATUS_SUCCESS;
}
</code></pre>

<p>
Because large parts of this function are unimplemented, all that happens is that the 4 byte value the user pointed us to gets read, and then written back unmodified a number of times.
</p>

<h3>So what's the problem, you ask?</h3>
<p>
Well, the act of dereferencing an unchecked pointer alone is enough to allow a denial-of-service (DoS) attack &mdash; a malicious program could simply shut down the system without acquiring any permission to do so.
As an easy example, a program could just pass in a NULL pointer to exploit this vulnerability.
This would cause UserInitiateShutdown to dereference said pointer, which would result in an instance of the infamous Blue Screen of Death, usually referred to as a "bug check" by kernel programmers.
In this case the calling user even has an opportunity to write to memory, though (and remember that this is an arbitrary pointer &mdash; it can even point to kernel memory!).
While writing back the same value that was previously read from this memory location may not seem too bad at first glance, it is actually quite problematic.
Some memory locations change frequently, and restoring a previous value found at such a location may for example compromise the quality of entropy used for cryptographic random number generation; or you may choose to restore an old page table mapping that should have been deleted, allowing you access to more memory that may be used to compromise the system.
However these are just examples I came up with within a few minutes &mdash; determined attackers may have months to figure out the best way to achieve their goals, so a seemingly small vulnerability like this may well be enough for them to steal all your secrets and gain complete control over your machine.
Finally of course, if the function was fully implemented, it would actually change the Flags variable prior to writing it back, offering up the option to modify arbitrary (kernel) memory in a controlled way &mdash; a feast for any attacker.
</p>

<h3>Knowing all this, how do we fix it?</h3>
<p>
To protect against this kind of problem, the NT kernel offers two mechanisms: Probing, and Structured Exception Handling (SEH).
Probing the memory fixes a large part of the problem: it ensures that the pointer we receive from the user program actually points to a user-mode address.
Performing this check on all pointer parameters ensures that user-mode software does not get access to kernel-mode memory in this way.
However this does not protect us from simply receiving a NULL or other invalid pointer.
This is where the second technique, SEH, comes in: wrapping every access to data through a user-provided (and thus untrusted) pointer in an exception handling block ensures that the code retains control even if this pointer is invalid.
The kernel-mode code provides an exception handler for this case, which gets called whenever the protected piece of code raises an exception (such as an access violation due to the use of an invalid pointer).
The exception handler collects available information (such as an exception code), performs any necessary clean-up and usually simply returns to the user with a failure code.
</p>

<p>
Let's have a look at the fixed code (<a href="https://code.reactos.org/changelog/reactos?cs=66223">as of r66223</a>):
</p>
<pre style="font-family: 'Source Code Pro', 'Consolas', 'Courier New', monospace; color: block; background-color: white"><code>
            ULONG CapturedFlags = 0;

            ERR(<span style="color: #c000c0">"Shutdown initiated\n"</span>);

            <span style="color: blue">if</span> (<span style="background-color: #ffc080">ThreadInformationLength</span> != <span style="color: blue">sizeof</span>(ULONG))
            {
                Status = STATUS_INFO_LENGTH_MISMATCH;
                <span style="color: blue">break</span>;
            }

            <span style="color: #00c000">/* Capture the caller value */</span>
            Status = STATUS_SUCCESS;
            _SEH2_TRY
            {
                ProbeForWrite(<span style="background-color: #ffc080">ThreadInformation</span>, <span style="color: blue">sizeof</span>(CapturedFlags), <span style="color: blue">sizeof</span>(PVOID));
                CapturedFlags = *(PULONG)<span style="background-color: #ffc080">ThreadInformation</span>;
            }
            _SEH2_EXCEPT(EXCEPTION_EXECUTE_HANDLER)
            {
                Status = _SEH2_GetExceptionCode();
            }
            _SEH2_END;

            <span style="color: blue">if</span> (NT_SUCCESS(Status))
                Status = UserInitiateShutdown(Thread, &CapturedFlags);

            <span style="color: #00c000">/* Return the modified value to the caller */</span>
            _SEH2_TRY
            {
                *(PULONG)<span style="background-color: #ffc080">ThreadInformation</span> = CapturedFlags;
            }
            _SEH2_EXCEPT(EXCEPTION_EXECUTE_HANDLER)
            {
                Status = _SEH2_GetExceptionCode();
            }
            _SEH2_END;
</code></pre>

<p>
Notice that all accesses to the untrusted ThreadInformation pointer are now performed inside _SEH2_TRY blocks.
Exceptions occurring inside these blocks will be handled in a controlled manner by the code in the _SEH2_EXCEPT block.
Additionally, ProbeForWrite is called before the pointer is dereferenced for the first time; this will raise a STATUS_ACCESS_VIOLATION or STATUS_DATATYPE_MISALIGNMENT exception if it detects an invalid (e.g. kernel-mode) pointer or non-writable memory.
Finally, note the use of a "CapturedFlags" variable that's being passed to UserInitiateShutdown.
This is a trick that simplifies handling of the untrusted pointer: instead of having to use SEH every single time pFlags is accessed inside the function, the value is saved to a trusted location by NtUserSetInformationThread, and written back to user memory after UserInitiateShutdown returns.
This way, there is no need to modify UserInitiateShutdown itself, since its argument is now a trusted kernel-mode pointer (to CapturedFlags).
As a result of applying these measures, this case of the function can now handle arbitrary valid or invalid user input without adverse effects on the system.
Mission accomplished!
</p>

<h3>What should we learn from this?</h3>
<p>
As we've seen, with a watchful eye early on in development, it is possible to spot code that may prove to be a severe security issue later on.
We can't afford to have too many of those, because to be honest, you can be sure we'll have enough security problems anyway &mdash; in fact, if all goes well, we'll go hunting after them in the future, and providing regular fixes just like you see in Windows Update every month.
</p>

<p>
As an interesting side note, Alex Ionescu pointed out that Windows has been shown to have a vulnerability in the very same function, NtUserSetInformationThread.
According to Alex, this one is still unfixed, and is used for example to jailbreak devices such as the Surface RT.
It was described in 2012 by well-known security researcher Mateusz "j00ru" Jurczyk (who likes to hang out in our IRC channel, too ;]). You can find his blog entry on this subject at http://j00ru.vexillium.org/?p=1393
</p>

<p>
Discussion: https://reactos.org/forum/viewtopic.php?f=2&t=13999
</p>
