---
title:       "Newsletter 54"
author:      "Z98"
type:        news
date:        2009-03-04
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-54
aliases:     [ node/194 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Memory Usage</li>
# <li>CSR</li>
# <li>Networking</li>
# <li>Sound</li>
# <li>Target Platform</li>
# </ul>

---
<h2>Memory Usage</h2>
<p>
The minimum required memory for ReactOS has been creeping up for some time now, mainly due to the installer.  In general, the developers knew that the memory required by ROS after the install was nowhere as high as during the install.  Most assumed there was some kind of memory leakage happening, whether it be in the installer or even in the memory manager. It was an issue many people wanted addressed but it wasn&#39;t until Alex Ionescu took a look that the problem was resolved. Alex first changed the display in the installer to show the kernel cache and kernel pool instead of paged and nonpaged pool to make it possible to see where the memory leaks were originating.  He also removed a hack that stalled the installer whenever memory usage rose above 40%.  He then proceeded to fix up part of the memory manager and common cache, which reduced the memory requirement to 24MB. The problem involved files being cached into kernel memory but never freed, which obviously ate up available resources. Installation of applications in general should also see lower memory usage.  In addition to the installer memory fixes, usage by the OS after it first boots up is now down by about 20MB.  I&#39;m sure I&#39;m not the only one that greatly appreciates these fixes.
</p>
<h2>CSR</h2>
<p>
The CSRSS component manages the console and is a remnant of earlier times when ReactOS code was pretty much a jumble.  Timo Kreuzer spent a few days going through it, trying to fix the CSR_API_MESSAGE data structure.  This data structure is needed for CsrClientConnectToServer and proper initialization of user32, which handles message passing, windows, and other things necessary for Windows to function. The original version written in ROS is incorrect and thus also used incorrectly by CsrClientConnectToServer. However, somewhere in the ROS codebase some component is using a hardcoded size for that data structure, so any attempts to add or remove members to it results in a crash.  Timo attempted to trace this but to no avail.  He&#39;s currently given up on the component for the time being and looking through the code, I honestly can&#39;t blame him.  There are lines where someone did multiple casts, first to a generic pointer type, then incrementing that pointer address by the size of a data structure, and then casting to another pointer type for whatever was the intended use.  Any person with a modicrum of C knowledge would immediately cringe at such code, as it&#39;s both ugly and error prone.
</p>
<h2>Networking</h2>
<p>
It&#39;s been a while since Art Yerkes first got the network stack functioning.  Since then, Cameron Gutman has continued pounding away at it, trying to improve the code and implement new functionality.  Much of this work was in a branch, but most of it has been synced back into trunk.  However, Art recently took the time to take care of some very long standing bugs now that he has a better understanding of the network stack and protocols.
</p>
<p>
Art has also done some additional work on the code, recently fixing a problem with loopback.  In order connect to a listening socket, the bound address must either be 0 or match the address of an adapter that an application has bound to.  For applications that want to listen to the loopback, they can either bind address 0 or 127.0.0.1.  Doing the latter will mean the application can only listen to local traffice, while the former means listen to all adapters.  However in ReactOS, applications that attempted to bind address 0 were instead handed the address of the first adapter ReactOS found.  This usually meant they would no longer be listening to local traffice and applications that depended on address 0 for that purpose broke.  Art found the problem and fixed it, so that binding address 0 now works.
</p>
<p>
Another issue Art fixed was the improper handling of IRP_MJ_CLEANUP and IRP_MJ_CLOSE.  Originally Art did not interpret what the two were for correctly.  IRP_MJ_CLEANUP is supposed to cancel all pending IRPs that were for the object it was being called on.  The object itself was still valid even after that IRP and it was IRP_MJ_CLOSE that was supposed to deallocate the object.  However, ReactOS instead treated the two IRPs as the same and deallocated the object whenever either was called.  Since the OS was still expecting the object to be live after CLEANUP was called, this caused problems of missing resources.
</p>
<h2>Sound</h2>
<p>
Progress on sound has reached the point where Andrew Greenwood can use Winamp to play music.  Granted this in theory already worked in the past, but this was using NT4&#39;s sndblst.dll.  Now, it becomes possible to do so using the sndblst.dll that Andrew wrote. At this point playing only one file is supported, though Andrew has not actually tried to see what would happen with multiple streams.  In theory it should raise a warning about the device already being in use.  Kernel streaming still does not work, at least for Andrew.  Getting wdmaud.drv to talk to Johannes Anderwald&#39;s code will take more time, as well as actually writing sndblst.sys, the kernel side counterpart to sndblst.dll.
</p>
<h2>Target Platform</h2>
<p>
The Windows version that ReactOS officially targets has been a point of confusion for some time now.&nbsp; There are actually two specified targets, one involving the NT kernel and the other for the Win32 subsystem.&nbsp; Officially the ReactOS kernel still targets the Server 2003 kernel, also known as NT 5.2.&nbsp; This target changes fairly slowly.&nbsp; On the other hand the Win32 subsystem target is always at the latest Windows version released, which would be Windows Vista as of the writing.&nbsp; This is why there are often commits stating updates or implementations that are Vista based.&nbsp; When Windows 7 is released the Win32 target will shift again, but this does not mean a decision will be made to shift the kernel target as well. 
</p>

