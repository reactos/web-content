---
title:       "Debugging Overview"
author:      "Z98"
type:        book
date:        2011-11-13
changed:     2013-02-09
draft:       false
promote:     false
sticky:      false
url:         /development/debugging
aliases:     [ node/22 ]

---

Debugging is an important skill to have when developing large, complex pieces of software. The ReactOS project has a variety of resources and tools to help its developers identify problems. Several different debuggers are supported by the project and the operating system also generates debug messages that can be captured and viewed using a variety of methods. The below guides will show you how to set up ReactOS and the platform it is installed on to receive debug output as well as how to use a debugger to examine the executing code.

<h2>Debug Verbosity</h2>
One of the most basic ways of acquiring debug information about the operating system is from the debug messages sent over serial. These debug messages have varying levels of verbosity, with DPRINT1 messages always being printed and DPRINT messages only showing when NDEBUG is not defined. This define tends to be at the top of source files and commenting it out will increase the verbosity for that file. Changing this define of course requires recompilation of the operating system.

Verbosity can also be increased at runtime by setting the environment variable DEBUGCHANNEL to include the desired application or component. The following example shows how this is done on the command line for a few components.

<blockquote>set DEBUGCHANNEL=+msi,+rpc,+ole</blockquote>

This can also be done using the registry, though would require a reboot. Simply add the following line to the boot/bootdata/hivesys.inf file.

<blockquote>HKLM,"SYSTEM\CurrentControlSet\Control\Session Manager\Environment","DEBUGCHANNEL",0x00020000,"+ole,+rpc"</blockquote>

Finally, developers and testers can add in their own debug messages by inserting DPRINT or DPRINT1 calls in the operating system. These in principle work like printf, but have different formatting codes.

<h2>Capturing Debug Output</h2>
Debug messages can be captured and viewed in a variety of methods. The most common is over a serial connection, but messages can also be written to a file or even an application in ReactOS. The latter two can be somewhat more problematic if there is a major problem that causes the system to crash so serial output is the preferred method for capturing debug output.

<h3>Debug to File</h3>
It is possible to have debug output written to a file in ReactOS. By default they will be saved in the file debug.log in the root directory. This can be overridden by changing the following line in freeldr.ini:
<blockquote>Options=/DEBUG /DEBUGPORT=FILE:\Device\Harddisk0\Partition1\debug.log /SOS</blockquote>
or
<blockquote>Options=/DEBUG /DEBUGPORT=FILE:\ArchName\multi(0)disk(0)fdisk(0)\debug.log /SOS</blockquote>
Note that this method is fairly limited and fatal system errors will not be recorded.

<h3>Debug to Screen</h3>
Sending debug messages to the screen is also possible, but comes with a major limitation. The messages are not actually displayed to the output display until a user breaks into the kernel debugger. A separate application would need to be written to receive and display these messages. Turning on this feature requires adding or modifying the DEBUGPORT option in freeldr.ini as follows:
<blockquote>Options=/DEBUG /DEBUGPORT=SCREEN</blockquote>

<h3>Debug to Serial</h3>
By far the most useful of the debug output options, this option works out of the box on ReactOS' side but requires additional setup in order to receive messages. This will be covered in the next section.

<h2>Debugger Break-In</h2>
Bugchecks occur when the operating system can no longer continue running without risking data corruption. This normally results in a blue screen of death, but when a kernel debugger is attached the system will instead drop into a command prompt. ReactOS debug builds have the integrated kernel debugger enabled and will do this, whereas release builds will simply blue screen. To enter the kernel debugger, simply hit TAB-K on the keyboard attached to the system running ReactOS. To exit the debugger, type in cont and hit enter.

<h2>Generating a Backtrace</h2>
Backtraces help determine what the operating system was doing before a bugcheck occurred. This is done from inside the kernel debugger.

Enter 'bt' and hit enter to produce output. The following is the example that will be used for this guide.

<blockquote>
(drivers\filesystems\vfat\rw.c:809) &lt;\ReactOS\system32\kernel32.dll&gt;  Entered debugger on embedded INT3 at 0x0008:0x800935f2.
kdb:&gt; bt
Eip:
&lt;ntoskrnl.exe:935f3 (lib\rtl\i386\debug_asm.S:31 (DbgBreakPoint@0))\&gt;
Frames:
&lt;vfatfs.sys:97de (drivers/filesystems/vfat/misc.c:111 (VfatDispatchRequest))&gt;
&lt;vfatfs.sys:9b25 (drivers/filesystems/vfat/misc.c:167 (VfatBuildRequest))&gt;
&lt;ntoskrnl.exe:3ab23 (ntoskrnl/io/iomgr/irp.c:1088 (IofCallDriver))&gt;
&lt;ntoskrnl.exe:36206 (ntoskrnl/io/iomgr/iofunc.c:686 (IoSynchronousPageWrite))&gt;
&lt;ntoskrnl.exe:59daa (ntoskrnl/mm/section.c:6330 (MmspWriteDataSectionPages))&gt;
&lt;ntoskrnl.exe:244c6 (ntoskrnl/ex/work.c:162 (ExpWorkerThreadEntryPoint))&gt;
&lt;ntoskrnl.exe:70e90 (ntoskrnl/ps/thread.c:134 (PspSystemThreadStartup))&gt;
&lt;ntoskrnl.exe:7b142 (ntoskrnl\ke\i386\ctxswitch.S:258 (KiThreadStartup@156))&gt;
kdb:&gt;</blockquote> 

The debugger already displays that the bugcheck occurred during an INT3 operation and it specifies the address at which it happened. The following lines indicate the chain of operations that ultimately led up to the bugcheck.
