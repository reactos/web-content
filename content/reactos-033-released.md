---
title:       "ReactOS 0.3.3 Released!"
author:      "fireball"
type:        news
date:        2007-09-13
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /reactos-033-released
aliases:     [ node/279 ]
news:        [ "news" ]

---

<h2>ReactOS 0.3.3 Released!</h2>
<p>
As we have previously made you aware, we skipped the 0.3.2 release due to massive problems with old incompatible drivers resulting in blocker bugs we couldn't resolve within the scheduled release time. With these issues now resolved, and along with a extensive amount of additional improvements, we are presenting the next minor release - 0.3.3 
</p>
<p>
This is still labeled as alpha-stage release, so do not set your expectations too high: translating into a non-programmer’s language alpha-stage means: “You are lucky if it actually installs and runs for you outside of a virtual machine”. 
</p>
<p>
Kernel development came to a point where most of the base modules are largely compatible with NT5, and with these now working well, the kernel as a whole is now starting to expose compatibility bugs in other parts of the OS which is where the focus of development has moved to. 
</p>
<p>
The Win32 subsystem is in the beginning of a total overhaul to make it completely compatible with NT5 which may introduce various drops in application compatibility from time to time, however in the 0.3.3 release it has had a positive impact on stability and compatibility with Win32 applications. As a generic result of these internal changes, the system feels a lot more stable in comparison to previous releases, and could be run on a real hardware (though usual limitations still apply – no USB, no SATA, no NTFS support). 
</p>
<p>
Summing up most important changes for this release: 
</p>
<ul>
	<li>Kernel improvements bringing many areas closer to NT 5.2</li>
	<li>Improved hardware support</li>
	<li>Stability increase in many core modules, especially win32k</li>
	<li>Many changes to base system drivers, aimed at increasing compatibility and stability</li>
	<li>Rewrite of a number of kernel modules is finished, others are bug-fixed to improve stability</li>
	<li>Win32 application support : fresh <a href="[#link_screenshots]">screenshots</a> say more than written words</li>
	<li>A download utility (unofficially called “ReactOS Package Manager”) now contains a set of applications (opensource and shareware apps) which you can install right away in ReactOS with one click of a mouse. And those apps will actually work!</li>
	<li>Improvements to many of the core user mode applications and control panel applets</li>
</ul>
<p>
For a more detailed listing of the changes this release bring, check out the <a href="../wiki/index.php/ChangeLog-0.3.3">changelog</a>, but be warned - it is a rather long list! 
</p>
<p>
Thanks to release engineers Colin Finck and Ziliang Guo for preparing all release packages, testing team for their extensive testing and bug reporting, and of course the ReactOS Development Team, which made this release possible. 
</p>
<p>
<em>Aleksey Bragin,<br />
ReactOS Project Coordinator</em> 
</p>

