---
title:       "Newsletter 49"
author:      "Z98"
date:        2008-11-17
aliases:     [ "newsletter-49", "node/189" ]
---

<h2>Network Configuration</h2>
<p>
Johannes Anderwald has been working to fix a persistent bug in the network settings that resulted after he reimplemented the network configuration and settings dialog in netcfgx.dll using COM interfaces.  Johannes also had to implement the COM interfaces, since they didn't exist before, and they are now in netshell.dll.  Unfortunately, it seems that the dhcpclient was storing settings in the wrong registry key, which resulted in failure to retrieve DNS information and crashing of applications that relied on such information.  This combined with bugs in iphlpapi and the new code set the release back since we couldn't exactly release with broken network tools.
</p>
<h2>Timing</h2>
<p>
Stefan Ginsberg stumbled across a series of timing bugs in the kernel a while back and had been trying to fix it.  After consulting with the other developers, the issue was finally resolved.  One of the more serious issues was when changing the system time, the changes were not being done in the correct order and could result in a race condition and deadlock the system.  Another less serious issue involved the timer not expiring under certain conditions when the system time was changed.
</p>
<h2>PSEH 2.0</h2>
<p>
In the words of KJK::Hyperion, "PSEH 2.0 is a horrible, GCC-only, x86-only hack...Overall, it must be a world record for compiler abuse."  Even though PSEH 2.0 remains a vertable hack, it is still a vast improvement over version 1.1, which used setjmp, fake loops, and all sorts of odd optimization behaviors to provide a semblance of SEH support.
</p>
<p>
Real SEH manages to hide the fact that some of its elements were actually functions nested in other functions, so they look like any other block of code.  This is important, since those subfunctions need to be able to share variables with the outer function for exception handling purposes.  One way this is achieved is through the forementioned hiding.  The end result is that SEH allows several functions to share the same stack, something the C standard technically does not support.
</p>
<p>
PSEH 1.1 did not do this, which required a very painful workaround.  Essentially, you needed to declare all shared variables in a structure defined in the main function as a local variable and have PSEH pass a pointer to that structure to the subfunctions that might need it.  While 2.0 still technically does not do the function hiding, it does achieve the same functionality by taking advantage of a very nonstandard feature of GCC and gets rid of the need to define that structure of shared variables.  GCC itself actually does this anyways, so it is only a matter of getting a pointer to that structure.  It is doable, but results in some very ugly code.  However, this does make PSEH 2.0 about 99% syntatically identical to using real SEH.  As for what 1.1 was, well, let's say it is best forgotten.
</p>
<p>
As far as bringing PSEH to ARM and x64, KJK says it is doable, but would require a lot of work. 
</p>
<h2>MSVC</h2>
<p>
Anyone who knows KJK will know that something had to have pushed him to do PSEH 2.0, and complaints about 1.1 would not have been sufficient, since half of them were complaints KJK made himself.  The truth is, KJK actually started an effort to finally get ReactOS compilable using Microsoft's C/C++ compiler.  Using MSVC would eliminate the need for PSEH when compiling with it and allow the usage of true SEH, which is one reason for trying to get PSEH syntax closer to SEH.  Otherwise, it becomes that much more difficult to maintain a trunk buildable with both GCC and MSVC.
</p>
<p>
The headers currently in use suffer from a variety of flaws, one of which is the use of #pragma system_header, a GCC feature that hides all warnings from any file that has it.&nbsp; It was originally intended to suppress warnings that came up because of the use of nonstandard features needed by the Windows API, but it ended up hiding all errors.  You can imagine all the sloppiness this has resulted, as incorrect or duplicate definitions and other actual problems are no longer caught.  Stefan has been going through each header with this pragma and removing them, then attempting to deal with the resulting breakages.  Perhaps tellingly, the pragma was not present in the kernel itself.  One of the more prevalent errors Stefan keeps running into is redefinitions, with many constants and macros being defined in multiple places.  This gets so bad that the BE actually overflows, so Stefan needs to check the log to see where the errors are occuring.
</p>
<p>
Along with cleaning up the headers themselves, Stefan has been separating them into a true DDK and PSDK, getting ride of various mixing of user mode and kernel mode component headers, as well as cross inclusion by both.  Once this is done, then perhaps a separate PSDK and DDK could be created.
</p>
