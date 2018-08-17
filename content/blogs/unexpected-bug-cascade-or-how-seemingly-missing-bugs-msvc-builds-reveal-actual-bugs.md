---
title:       "Unexpected bug cascade - or how seemingly missing bugs in MSVC builds reveal actual bugs"
author:      "ThePhysicist"
date:        2015-12-27
aliases:     [ node/3449 ]

---

<p>I was looking into CORE-9105, a crash in wget.exe, but I couldn't reproducde it, so I asked Daniel whether he was using an MSVC build or a GCC build. He used a GCC build and I was using an MSVC build. So I tried with a GCC build and the bug appeared. So I looked at this thing with kdbg. And there the first bug showed up.<br>
<strong>Bug #1: KDBG and break points</strong>
I set a breakpoint at a position that I wanted to step through and KDBG stopped there. But the problem was that it didn't stop <strong>at</strong> the int3, but after it. This is correct for an int3 that has already been in the code, but this was an int3 placed by KDBG and it is supposed to remove it&nbsp; - i.e. restore the original instruction - and then stop at that instruction, not in the middle of it. So I first had to fix KDBG to take that into account. After that was fixed, KDBG stopped at the correct location.<br>
<strong>Bug #2: KDBG and single stepping</strong>
Trying to step through the code after the break point resulted in simply continuing, instead of single stepping. It turned out that this was, because the next single step was used to step over the original instruction and then restore the breakpoint. But KDBG assumed this single step was only to restore the break point, skipping it, even though it was an actual attempt to single step. So this also had to be fixed to be able to single step after the break point.<br>
<strong>Bug #3: Wrong function used on MSVC builds</strong>
After stepping through the code, I identified the problem. The code was calling _vsnprintf with a NULL buffer, which returned -1 and the calling function (a statically linked version of aprintf) returned NULL instead of an allocated buffer. The caller of aprintf didn't check the return value and simply passed the NULL buffer to _stati64, which crashed. Stepping through it on MSVC builds showed that _vsnprintf was not returning -1, but correctly returning the count. The reason was, that msvcrt.dll built with MSVC would not use the same _vsnprintf version. Instead it resolved it's export by using the stub function from libntdll, which called the same function in ntdll.dll. This function is different from the msvcrt version and by chance handled the issue correctly. So I fixed the exports of msvcrt.dll on MSVC builds, by explicitly referencing the desired functions, so that the ones from libntdll would not get linked in at all. So now I expected to see the same crash on MSVC builds, but it didn't happen...<br>
<strong>Bug #4: Broken strlen implementation</strong>
What was making the app crash on GCC was a call to strlen with a NULL buffer. On MSVC this call didn't crash. But it was supposed to. The reason was that on MSVC we used the assembly version in our CRT, which was checking for that NULL buffer, even though this is not what the native function does. On GCC builds, the builtin strlen was used, which behaved like the native function and thus crashed. After fixing our asm implementation of strlen, I could see the crash on MSVC builds as well.</p>
<p><strong>Bug #5: Followup on the strlen fix</strong>
As usual, when fixing one bug, another one appears. So the fix to strlen caused a function in setupapi, which also passed a NULL buffer to strlen, to break, which showed up in our testbot. This one was luckily easy to fix and hopefully the only one of these.</p>
<p><strong>Bug #6: The actual bug</strong>
As already mentioned _vsnprintf behaves differently in ntdll and msvcrt. Therefore we compile multiple versions of the printf code for crt (used by msvcrt) and libcntpr (used by ntdll). There was a wrong #ifdef that caused the function to misbehave in this matter in crt, while it was correct in libcntpr. I fixed this and wget was working on both GCC and MSVC builds now.<br>
<strong>Bug #7: crtdll is screwed</strong>
After fixing _vsnprintf for msvcrt.dll, it broke for crtdll.dll. Fixing the function itself is not too difficult, but there are many other issues. Most of the exports are forwarded to msvcrt.dll, but since the dll also links to the static crt, there is a big mess. Some stuff is initialized locally, other stuff relies on msvcrt. Fixing this is a major task, but not really important, since crtdll is obsolete and not used by any application these days.</p>

