---
title:       "Newsletter 26"
author:      "fireball"
date:        2007-06-11
aliases:     [ "newsletter-26", "node/166" ]
---

<h2>Forget 0.3.2 </h2>
<p>We promised a release period of two months, but all the kinks are not out yet. More than 2 months have passed and project leaders have decided that there are already enough changes in trunk to call it 0.3.3, the next release. This is a sign that development, although a bit hard to manage, is moving at faster rates. As development approaches 0.4.0 goals we would see increasing functionality and stability, as well as keeping in line with the best practices in software development, testing and compatibility. </p>
<p>Builds has been transitioned away from older compiler versions that&nbsp;are known to be broken or produce unreliable code. There is ongoing work to bring a one step standard build environment for <a href="http://www.reactos.org/wiki/index.php/HOWTO/setup_a_build_environment_for_Windows">windows</a> and <a href="http://www.reactos.org/forum/viewtopic.php?t=3922">*nix</a> platforms.</p>
<p>The compiler change added complications to our already taxed testing systems. In the flurry of rewrites, corrections, and architectural changes a lot of functionality was broken, in sort of a cascade effect. Kernel changes affected drivers that &quot;worked&quot; in the past. The kernel is much more robust now, but failing drivers crippled device discovery, named pipes, and networking. Also some 3rd party known working drivers where affected, a lot of work is going to go into fixing the issue. </p>
<p>Extensive new/improved Control Panel applets, improved stability, graphical glitches fixed, more working 3rd party applications, direct3D 7 compatible APIs, and many other changes are part of the exiting changes pending for 0.3.3. </p>
<h2>User Management </h2>
<p>Control User Management control panel application is being written by Eric Kohl. Even though the actual user management functions are not there, it will be a very important part of the progress ReactOS is making towards a viable desktop Operating System. The applet would function as a testing vehicle that will hopefully lead to more work on security, the Local Security Authority Server(LSAS). </p>
<p>There is also increasing awareness that as ReactOS matures its security systems are quite lacking. Part of this is caused by stubbed LSAS functionality, part is that the kernel's security functions are stubbed or crippled, since a lot of code in ReactOS wasn't written with the required checks and privileges. </p>
<h2>Explorer Rewrite</h2>
<p>Thomas Weidenmueller has been working on a rewrite of Explorer Shell in C, using the proper shell APIs instead of the heavy C++ encapsulation used in the current Explorer. It currently does not work in ReactOS as shell32 has a lot of catching up to do. An early version has been committed to trunk but it is not built in by default. Most of the testing has been done on XP and while still buggy, the project shows a lot of promise.<br/>
</p>
<h2>More applications work</h2>
<p>More bug fixes and updates are in, dozens of applications are tested every day, and depending on their nature some have had a high success rate of working correctly in ReactOS. Drop by #reactos IRC channel in chat.freenode.net or subscribe to our ros-dev and ros-bugs <a href="http://www.reactos.org/en/community_mailinglists.html">mailing lists</a>&nbsp;and help us test even more applications. If you detect an issue please file bugs and help us fix them!</p>
<p>&nbsp;</p>
