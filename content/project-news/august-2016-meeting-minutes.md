---
title:       "August 2016 meeting minutes"
author:      "EmuandCo"
date:        2016-10-03
aliases:     [ node/20926 ]

---

<p>2016-08-25<br />
	20:04 UTC<br />
	irc.freenode.net, #reactos-meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 20:11 by Amine Khaldi</p>
<ul>
    <li>Point 1: Status Reports</li>
	<li>Point 2: GSoC</li>
    <li>Point 3: 0.4.3 Release Plans</li>
</ul>

<p><b>GENERAL INFORMATION</b></p>
<p>Starting with this month meetings will be open to public. You may watch, but all non-devs are muted by default. If the meeting is set to invite-only when you try to join then we first discuss some private points before we open it to public. So just try a bit later.</p>

<h2>Point 1: Status Reports</h2>

<p><b>[TheFlash]:</b> He's working on NTVDM, more specifically VESA support. He'll also do something about the slowness of its VGA emulation well, it's SVGA emulation now as for the SVGA/VESA support itself. It kinda works now in his working copy but still has a few bugs left. For the long run: He's also planning on writing a dynamic recompiler using GNU lightning.</p>

<p><b>AmineKhaldi:</b> Focus was initially on getting the 0.4.2 release out, then after that immediately starting the 0.4.3 preparations (including the Wine Staging sync) along with the usual tasks like Jira, coverity...etc. He also tried to address what was blocking the ahk bot and now it's up to Sylvain to hook it up to our main buildbot as the build and test phases work now, and he's patiently waiting for us to get the ahkbot back again.</p>

<p><b>Giannis Adamopoulos:</b> He doesn't have much fre time and will have almost none in the following months. He tried to fix some bugs that stayed in jira for ages and he also commited some ancient bugs. Also he got some of the code for the explorer treeview in trunk but didn't do the whole thing because we already have a bug in trunk. He tried to understand the code mess that we have for the taskbar and it turned out we miss a lot of code there. He got some time to reorganize the guts of shell32. We now have a CRegFolder instead of the shared mess wine has.</p>

<p><b>Mark Jansen:</b> He did some work on CString, CRegKey, CPoint, CSize, CRect as to make our ATL somewhat more usable, handled some jira patches, most notably a fix for __getmainars by the new contributor Yaroslav Veremenko, Window class versioning by Sylvain Deverre and an initial implementation of CImage by Katayama Hirofumi MZ. Last he did some offline work on appcompat stuff.</p>

<p><b>Dmitry Chapyshev:</b> He plans to rewrite kbswitch. He did not plan work further, but he has a desire to understand why loading does not work with usb-cdrom.</p>

<p><b>Thomas Faber:</b> He's been looking at fastfat & Cc a bit with Pierre, basically doing his usual dance where he fixes blockers and tests instead of doing the stuff that's actually on my list. He plans to work with Vardan on getting his changes into trunk and try a peek into Mm.</p>

<h2>Point 2: GSoC</h2>

<p>First one biiig congratulations from the whole team to all our GSoC students who did great work over the past weeks. It is good to have you guys with us! GSoC was really great that year and biig successes were seen in the massive amount of code that went into the GSoC branches. We hope that they stay with us and provide their coding skills to the massive project we aim to get up and running! Next time you will be the mentors to others ^^</p>

<p><b>Trevor "coderTrevor" Thompson:</b> "You can now overwrite files on NTFS from ReactOS, and see the changes in Windows. File creation should be working soon. Thank you for the amazing experience, ReactOS! I learned so much; this was an AWESOME experience for a student! I learned more than I could from ten years of school! I definitely want to stick around and keep contributing!! :D"</p>

<p><b>Vardan "mvardan" Mikayelyan:</b> "What was done and long term plans are described here https://reactos.org/blogs/gsoc-final-report-usb-project-0 . I am going to have some small vacation before school starts :) Then I will continue with jira issues for USB and planning to do some heavy testing for USB part of ROS. Heavy I mean all 3 hosts with set of devices. In parallel with school time commitment will be reduced, but I will continue contributing of ROS."</p>

<p><b>Aman "amaneureka" Priyadarshi:</b> "It was really a great experience for me as well. I learned windows driver development and tons of things from you people. And looking forward to contribute more, and see storahci finally working on ReactOS."</p>

<p>Same big thanks goes out to <b>Zuodian Hu (zhu48)</b> who was not able to take part on the meeting, but did great work on his TCP/IP rewrite and hopefully stays in our team too.</p>

<h2>Point 3: 0.4.3 Release Plans</h2>

<p>Amine Khaldi suggested in this point that we do like we did for 0.4.2. i.e. we run the full release testing (wiki page) using a recent trunk revision, to identify regressions, address them, while the ahkbot is getting ready to have tests for everything in rapps. Here youz can find the current code: https://svn.reactos.org/svn/project-tools/trunk/ahk_tests/  Usurp_ kindly offered the ahkbot, and it's only a matter of time before he hooks it up to our main buildbot and with patchbot we can even debug issues that the ahkbot reveals.</p>

<p>Meeting was closed at 21:05 by Amine Khaldi</p>
<p>Meeting minutes prepared by Daniel Reimer</p>
