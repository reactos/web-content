---
title:       "Newsletter 57"
author:      "Z98"
date:        2009-04-30
aliases:     [ "newsletter-57", "node/197" ]
---

<h2>VBox Video Driver</h2>
<p>
A while back the VBox video driver started working in ReactOS, which meant people using VirtualBox could now get hardware acceleration for graphics.  To make the driver usable, Timo Kreuzer fixed two things in the Win32 subsystem.  While the driver ran before the fixes, its functionality was somewhat crippled and drawing often resulted in problems.  The first fix was for the mouse pointer, or more specifically drawing the mouse pointer moving across the screen.  When a mouse pointer leaves a position, the content that was originally there would be redrawn and the mouse cursor is hidden.  Then, the position for the cursor is updated to the new location and the cursor is unhidden and drawn.  The problem was that the code for drawing the cursor at the new position also attempted to hide it at its old location again.  However, since the cursor's location has already been updated, what happened was that code drew the contents of the old position at the mouse's current position.  The result was basically massive corruption of the display.  Timo removed the responsible code and now moving the mouse cursor works properly.
</p>
<p>
The second problem that was fixed involved updating the screen resolution.  This one was simpler, in that ROS wasn't writing the refresh rate into the registry.  When the video driver asked for it and couldn't find it, it reverted to the default of 640x480x256.  As a side note, the VMware video driver does not depend on this value.
</p>
<h2>RosBE and RBuild</h2>
<p>
KJK::Hyperion recently committed a fairly hefty and much needed update to RBuild.  However, it ended up revealing a major issue in RosBE, both the Windows and Unix versions.  The RBuild update KJK is working on requires or will require the use of several variables, TARGET_CFLAGS and TARGET_CPPFLAGS, and HOST_CFLAGS and HOST_CPPFLAGS. Unfortunately, a bug in the Windows GCC build prevents their usage.  Specifically, GCC has the paths to the directories in which include files are stored built in so that it can find them when it compiles anything that needs them.  This is apparently very difficult to get right and the current RosBE does not do this correctly.  To get around it, it defines the variables HOST_CFLAGS and HOST_CPPFLAGS in order to point to the right directories.  Of course, this then prevents their usage for adding additional compiler flags, which KJK wants to do.  He proposed renaming the variables currently in use to ROSBE_HOST_CFLAGS and such.
</p>
<p>
The second problem that was exposed was that the Unix RosBE does not expose the location of the include directories used for building in TARGET_CFLAGS or TARGET_CPPFLAGS.  The RBuild changes also requires that information so that it can provide other compilers with the locations if GCC was not used.  This is more relevant on the Windows side of things, but RBuild is expecting those variables regardless of which platform it is on and their absence in the Unix RosBE caused more problems for it.  This was actually relatively easy to fix compared to the Windows GCC directory issue, as Colin simply defined the variables for the Unix RosBE.
</p>
<p>
So far, a Windows GCC with what appears to be the correct directory location has been compiled but Daniel Reimer has not been able to successfully build ReactOS with it.  Since a RosBE that can't build ROS would be rather pointless, the team is working on figuring out what is going on.  Once they do, expect another release for the build environment.
</p>
<h2>NIC Drivers</h2>
<p>
As part of the runup to 0.3.9, Olaf Siejka and the other testers began testing various network cards on real hardware and seeing what would happen if they tried to install the drivers.  They then provided debug reports to Art Yerkes and Cameron Gutman, who examined them to see what functionality the drivers used were broken or missing.  From there, the two began implementing and fixing the necessary functionality and provided patches to the testers to try.  This went back and forth a bit until the group got about half a dozen drivers and cards working.  There are still a few consistency issues in that whether the XP or 2000 driver is needed is still subject to some guesswork, but ReactOS is now at least filling out functionality third party code requires instead of functionality the OS itself needs to keep running.  The group intends to continue this strategy for the runup to 0.3.10 and hopefully we will have even more successes to report then.
</p>
<h2>0.3.9 and the Future</h2>
<p>
While the 0.3.9 release saw the beginnings of some rather nice functionality, some of it is very rough.  Sound support especially is spotty and only works on VirtualBox or the newest version of Qemu, with other platforms being untested due to Johannes Anderwald not having time.  Even on those two platforms, problems in the common cache and FAT driver can cause crashes when playing sound.  With 0.3.10, the developers intend to work on polishing what has already been accomplished so that the features available are much easier to use and the system itself runs more stable.  At the same time, there are plans to provide more support for drivers besides network cards and there has been some discussion regarding what it would take to start running third party video drivers.  The work done recently to get the VBox video driver working is a step, but the Win32 subsystem has some substantial holes that need patching lest the video drivers trip over some idiosyncrasy in ROS code.
</p>

