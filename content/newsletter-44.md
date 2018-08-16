---
title:       "Newsletter 44"
author:      "Z98"
type:        news
date:        2008-08-06
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-44
aliases:     [ node/184 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>General Development</li>
# <li>Linuxworld Convention</li>
# <li>ARM Update</li>
# <li>64bit Port</li>
# <li>More New People</li>
# </ul>

---
<h2>General Development</h2>
<p>
There was an interesting bug involving handle creation a while back.  When creating the 4100th handle, the system would crash.  This bug was exposed through VLC and was eventually fixed by Christoph von Wittich.  The problem was the result of an incorrect calculation, where the code attempted to access an index higher than 4099 on the first table.  Such values are out of bounds and are supposed to be found in the second table and higher.  Now, the system will only crash upon creating the 4,186,000th handle.  That should be sufficient for most things.
</p>
<p>
Aleksey Bragin has been working on adding a file system consistency checker to ReactOS.  Considering the lack of safeguards in FAT, this would be a welcome addition.  The utilities chkdsk, format, and autochk are all wrappers for filesystem specific DLLs such as ufat.dll and untfs.dll that provide the actual functions for formatting and checking.  The DLLs communicate with their wrappers through fmifs.dll, whose interface is well known.
</p>
<p>
Besides those three utilities, Aleksey has also finished the dosfsck port started by Steven Edwards and Mike Nordell.  This port is already in trunk and functioning, while Aleksey has gotten autochk and ufat.dll running in his working copy.  Apparently the work went rather smoothly so we should be seeing them committed soon.
</p>
<p>
Last but not least, Timo Kreuzer has been working on correcting some floating point calculations in the kernel side component of Win32.  On the x86 architecture, data in the floating point unit is not saved during context switches while operating in kernel mode.  However, for some reason the floating point calculations in win32k were written to use the FPU.  Timo basically rewrote the data structures in assembly to not use the FPU and is almost ready to commit them.
</p>
<h2>Linuxworld Convention</h2>
<p>
ReactOS is actually sharing a booth with Haiku at Linuxworld and we're more than happy to share the space with them.  Unfortunately, Art Yerkes was the only developer that could make it as he's the closest and was able to get time off to go.  So be sure to drop by the ReactOS booth and keep him company!
</p>
<h2>ARM Update</h2>
<p>
The ARM team has done quite a bit since I last mentioned them and since I'm the one stuck doing their changelog for releases, I have a fairly good idea what they've accomplished.  They've added a considerable amount of code preparing ReactOS to boot on ARM and have fixed quite a few issues in the process.  Their work on the memory manager is especially appreciated as that's one of the weakest points in ReactOS code.  Combined with all the fixes they've committed they're really making the rest of us look bad.
</p>
<p>
The steps the ARM team have basically taken is first to make sure the code will compile for ARM.  Then there was the issue of actually booting, which required modifying Freeloader to understand and run on the ARM processor and platform.  Once the kernel could be found, they needed to get debug output from the serial port so they could see where things were failing.  At this stage, they really couldn't get further without it.  After applying some hacks, the ARM team worked to properly implement debug output, though not without some complaining along the way.
</p>
<p>
To actually run, the operating system needs to manage its resources, including processor time and memory.  Basically all of the code handling interrupts and timing had to be rewritten for ARM so that the OS could actually tell when things happen or when it's supposed to do something.  As for the memory manager, well, they ended up digging up one embarrassing bug after another and weren't above gloating about it.  But since they fixed them, we forgive them.
</p>
<p>
Currently, the ARM team is working on getting their port to be able to use the boot device, in other words the ramdisk.  Besides writing a new driver for the ramdisk and also fixing things in CDFS and our FAT driver, they're also going back into the memory manager to fix or implement functionality they need for running the disk.  Quite a few new complaints have surfaced since then, probably meaning they're making progress simplifying and correcting the code.
</p>
<p>
The next step, of which they've already done some preliminary work on, is getting the user mode systems up and running.  I wish them the best of luck and will look forward to seeing their future work.  Even if it means spending a few hours going through their commits adding them to the changelog.
</p>
<h2>64bit Port</h2>
<p>
Don't get too excited, as there are a lot of hurdles we need to get across before there is any visible progress. Timo Kreuzer has actually been sitting on a build environment for 64bit for some time and gave both Samuel Serapion, theoretically the other newsletter writer, and myself copies.  Sam has begun work on getting the system to compile and so far the kernel, freeldr, the CRT, a few drivers, a few user mode applications, and all the headers the above depend on compile.  Win32k compilation fails halfway through though, so we have a ways to go.  Currently, freeldr will load the kernel, but we fail in early parts of initialization.  There's quite a bit of code needed that's simply missing and we haven't even gotten to modifying the memory manager to function in long mode.  This will most definitely be a long and arduous trek.
</p>
<h2>More New People</h2>
<p>
Well, new enough.  Stefan Ginsberg has hung around the channel under the name Stefan100.  He's been around for a few months now and has been digging into kernel code by pestering various developers.  In the process, Stefan found various minor bugs and even a few major ones, providing patches along the way.  He's been granted commit access and seems to be doing basic bugfixing wherever his interests lead him.
</p>
<p>
Another person granted commit access is Cameron Gutman, known as aicommmander in the channels.  Cameron's commit access is slightly different, as it is for the branch dedicated to finding and fixing problems in the networking code. He's occasionally put up a web server installed on ReactOS for stress testing purposes, though it generally doesn't survive the hour, if we're lucky.  While quite a few of the fixes have been merged into trunk, they did not make it in time for the 0.3.6 branch.
</p>
<p>
Finally, it seems that Samuel has been keeping busy while not co-writing the newsletter.  As mentioned above, he's been working on the x64 port.  His commit access is also for the branch he's currently using for the x64 porting. Who knows, I may join in the fun and actually do some real work.
</p>

