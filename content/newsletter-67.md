---
title:       "Newsletter 67"
author:      "Z98"
type:        news
date:        2009-11-12
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-67
aliases:     [ node/207 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Debugging</li>
# <li>Shell</li>
# <li>New Developers</li>
# </ul>

---
<h2>Debugging</h2>
<p>The last time WinDBG support was discussed up was nearly a year ago.  The first step needed was a kernel compatible with WinDBG, which was achieved by the kernel rewrite that mostly concluded two years ago.  The required features mostly revolved around dealing with an executing thread's context and reading virtual memory.  While the kernel rewrite made these possible, a few bugs prevented their usage.  Debugging requires interrupting the executing thread's flow but also restoring it to allow the program to continue.  One such bug actually corrupted the execution context and ultimately crashed whatever was being debugged as a result.  Another such problem was the HAL attempting to map the first physical page using the memory manager.  This failed as the function in the memory manager did some additional synchronization, none of which would work if the HAL was running in a debugging context after a reboot.  When running in such a debugging context, none of the synchronization being performed was needed, and there was a risk that the locks in question were already held by something else.  This could result in a deadlock and freeze the system.  With these and other fixes, Stefan managed to connect to the ReactOS kernel with WinDBG and perform actions such as setting and clearing breakpoints and reading I/O and memory.  However, connecting to ReactOS required using the Windows 2003 KDCOM driver.</p>
<p>The reason Stefan used the Windows 2003 KDCOM driver was because the ReactOS KDCOM simply did not work correctly at the time Stefan began his work.  Despite Timo Kreuzer's efforts to make it compatible, it had not reached a point where he could rely on it and not have to figure out where the point of failure was between KDCOM and the kernel.  At about the same time Stefan took an interest in WinDBG support, Timo resumed his work on the ReactOS KDCOM on the x64 branch.  A variety of timing issues caused missing characters and dropped packets, especially for larger ones, and made the driver rather unreliable.  Timo added additional error checking and handling to compensate for this.  One odd timing issue was attempts to write out to the serial port would fail with the device claiming it was not ready to send, even though checking its status returned ready.  Timo's current fix simply builds in a delay which seems to give the serial port enough time to actually accept data, but this solution is less than ideal.  Timo's current test platform is Virtual Box, which has a history of problematic serial output.  Just getting regular debug output from ReactOS using Virtual Box took testers some time to figure out and even after that the formatting of the messages ended up completely jumbled at times.  The Virtual Box project seems to be planning a rewrite of their serial implementation, which will hopefully resolve the problems our project has experienced and allow for more reliable testing of KDCOM and WinDBG.</p>
<h2>Shell</h2>
<p>The shell that users interact with is actually several components all tied together, which is why a rewrite is highly nontrivial.  Besides the explorer shell itself there are the shell32, browseui, comctl32, and shlwapi libraries, to name just a few.  In ReactOS, much of the functionality in the libraries are all crammed into the explorer shell because the libraries themselves did not really exist.  This is due to the current explorer's Wine heritage and the fact that Wine really does not need a shell32 implementation.  One such example would be the start menu itself.  This is not actually implemented in explorer, but merely exposed by it.  Another is the menu system.  Traditionally menus are managed by user32 in Windows applications, but the shell actually has a few custom menus that are handled separately.  Few applications besides a shell would ever use these custom menus so their lack went largely unnoticed, though if anyone ever tried to use an alternative shell they would immediately notice all the missing functionality.</p>
<p>Andrew Hill has spent the last few months researching the shell system on Windows and what ReactOS is missing.  He has managed to get several shell related libraries as well was explorer_new, the intended replacement for ReactOS' current shell, to compile and run on Windows XP using Visual Studio.  This allowed him to find specific missing functionality as well as places where existing functionality is lacking.  One such example would be the lack of the start menu, one of those custom menus not managed by<br />user32.  His current objective is to get explorer_new to behave identical to how XP's own shell behaves and then reintegrate his work into ReactOS.</p>
<h2>New Developers</h2>
<p>Andrew Hill was already mentioned above and has actually been with the project for several months, but preferred to remain out of the limelight as he did his initial research.  He initially worked with Ged Murphy to get set up and recently began committing some of the fruits of his labor.  His nick on IRC is ash77, though more likely than not |away will be appended to it, regardless of his actual absence or presence.</p>
<p>Another new developer joining the team is Giannis Adamopoulos, known as smiley_ on IRC.  Giannis has been a regular on IRC for some time now.&nbsp; His primary interest lays with the kernel side of the Win32 subsystem and will be helping implement missing functionality.</p>
<p>The recent influx of new talent will certainly help ReactOS advance, but there is still a great deal of work that the project could use help with.  We are at a point where the rewrite of old, broken components is sufficiently complete to allow the addition of new functionality.  These additions will help make ReactOS more compatible but with the limited numbers available there is only so much that can be done.  Hopefully the number of new developers will continue to grow as the project itself matures.</p>
<p>&nbsp;</p>
