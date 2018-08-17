---
title:       "ReactOS 0.4.9 released"
author:      "Colin Finck"
type:        news
date:        2018-07-23
draft:       false
promote:     false
sticky:      false
url:         /project-news/reactos-049-released
aliases:     [ node/69568 ]
tags:        [ "release", "0.4.9", "self-hosting", "zipfldr", "shell", "cc", "mm" ]

---

<p>The ReactOS Project is pleased to announce the release of version 0.4.9, the latest in our accelerated cadence targeting a release every three months.</p>
<p>While a consequence of this faster cycle might mean fewer headliner changes, much of the visible effort nowadays comes in the form of quality-of-life improvements in how ReactOS functions. At the same time work continues on the underlying systems which provide more subtle improvements such as greater system stability and general consistency.</p>

<h2>Self-Hosting</h2>
<p>The ability to build ReactOS on ReactOS, known as self-hosting, has often been touted as a sort of milestone in the OS’ maturity, but the details are far more nuanced. Compiling any large codebase, whether it be an operating system or even a web browser, stresses the system in a myriad of ways, with one of the biggest being memory usage and storage I/O. Code being compiled needs to be loaded from storage into memory, and more memory is required to hold all of the compiled objects as they are linked together. Scheduling is also to a certain extent stressed, as most modern build systems will attempt to spawn multiple compilation processes to speed up the build process.</p>

<p>In the past, ReactOS was actually capable of self-hosting, but this capability came with significant caveats, with the biggest being this was achieved in a much older version of the ReactOS kernel. Since the reworking of the kernel into a more NT-compliant design and implementation, various gaps in functionality that remained to be completed rendered ReactOS unable to build itself again. After many years of hard effort, including the most recent batch of filesystem related changes done by Pierre Schweitzer, ReactOS is once more able to self-host. And in the spirit of open source, it was the FreeBSD project’s implementation of qsort that helped Pierre bridge some of the last pieces needed to achieve this.</p>

<p><a href="/sites/default/files/imagepicker/1249/image2.jpg" target="_blank"><img src="/sites/default/files/imagepicker/1249/thumbs/image2.jpg" alt="Image"  class="imgp_img" width="500" height="375" /></a></p>

<h2>Stability</h2>
<p>A major source of system instability came from the complex interplay between the memory manager, the common cache, the hardware abstraction layer (HAL), and the FastFAT driver. The biggest culprit in the instability came from the significant resource leakages caused by the FastFAT driver, resulting in it eating up the common cache to the point where attempts to copy large files would result in a crash. To rectify this problem, Thomas Faber and Pierre worked together to correct the FastFAT driver’s behavior, adding in write throttling support and restraining its usage of the cache. While a more conservative usage of the cache might see the system behave a bit more slowly during IO operations, it ensures that resources remain available to service for large IO operations instead of crashing like before.</p>

<p>Another notable improvement on FastFAT is the rewrite of the support for dirty volumes greatly reducing the chance of file corruptions. Whenever a dirty volume is been detected during boot  “chkdsk” (Check Disk) will trigger a repair on those volumes. This often can protect the system from becoming unusable after a crash. The two images below are showing chkdsk in action:</p>

<p><a href="/sites/default/files/imagepicker/1249/image4.png" target="_blank"><img src="/sites/default/files/imagepicker/1249/thumbs/image4.png" alt="Image" style="display: block; float: left; margin-right: 10px;" class="imgp_img" width="310" height="231" /></a>
 <a href="/sites/default/files/imagepicker/1249/image1.png" target="_blank"><img src="/sites/default/files/imagepicker/1249/thumbs/image1.png" alt="Image" class="imgp_img" width="310" height="231" /></a></p>

<p>In addition to the work done during regular development, Joachim Henze made a significant effort during the <a href="https://reactos.org/wiki/Tests_for_0.4.9">release candidate testing</a> to track down regressions and other bugs that have crept in since the last release. It cannot be overstated just how much work such manual testing takes, and Joachim should be applauded for his dedication and perseverance in ensuring 0.4.9 would be the best release to date.</p>

<h2>Shell Improvements & Features</h2>
<p>Several quality of life improvements have come to the shell, the first of which is a built in zipfldr (Zip Folder) extension by Mark Jansen. While Windows has long possessed this capability, now ReactOS can also uncompress zipped files without needing to install third-party tools to accomplish it. And as the gif below demonstrates, ReactOS’ implementation is indeed very zippy.</p>

<p>And of course with such new extensions it would probably be useful to be able to manage them, something that Katayama Hirofumi MZ has been working on, along with plenty of other improvements to the shell.</p>

<p><a href="/sites/default/files/imagepicker/1249/image3.gif" target="_blank"><img src="/sites/default/files/imagepicker/1249/image3.gif" alt="Image" class="imgp_img" width="500" height="375" /></a></p>

<p>Another major piece of functionality that might appear simple but is actually quite complex is the ability to choose whether to move, copy, or link a file or folder when you drag it with the right mouse button. This piece was completed by Giannis Adamopoulos, whose prior work has been so integral in making the current ReactOS shell behave and function in ways users are long used to from Windows.</p>

<p><a href="/sites/default/files/imagepicker/1249/image5.gif" target="_blank"><img src="/sites/default/files/imagepicker/1249/image5.gif" alt="Image" class="imgp_img" width="468" height="353" /></a></p>

<h2>Other Improvements</h2>
<p>There are of course plenty of other changes in less trodden parts of ReactOS, with many people providing contributions and improvements. These range from the functional, like zooming no longer crashing in the Paint application thanks to Stanislav Motylkov, to more behind the scenes like Timo Kreuzer’s continued efforts to prepare the codebase to actually function when building a x64 target (the project owes Timo many bottles of beer for taking on that one).</p>

<p>Other quality of life improvements include a new mouse properties dialog in the GUI component of the ReactOS installer by Eric Kohl, while Eric’s work involving starting and stopping of services, the device manager, and the sound mixer are more geared towards long term improvement and functionality. Hermès Bélusca-Maïto has continued his work in what might be termed the utilitarian applications of ReactOS, such as the clipboard viewer, the event viewer, the log-off dialog box, and the command prompt shell. And of course one can never forget RAPPS, the gateway program used for getting various applications installed on ReactOS. Considering ReactOS is intended to support many different languages, it is only appropriate that its unicode support be a priority, something that Alexander Shaposhnikov has lent his hand to.</p>

<p>Compatibility in Windows is reliant on a ShimEngine that allows the loading of slightly different versions of libraries and APIs. ReactOS is much the same, and Mark has added the ability for ReactOS to present itself as Windows 8.1 with the Version APIs. As a sidenote, the engine itself proved useful in a rather unconventional manner when it was demonstrated to help reduce the loading time of the game Globulation 2.</p>

<p>Of course ReactOS is not just about the features in the here and now, but also about preparations for the future. Thomas and Vadim Galyant have started merging in their improvements to the USB stack in preparation for native, official support for the oft requested booting from such devices. We’re not there yet, but we’re getting closer with every release.</p>

<p>Since the transition to GitHub, the project has also received many pull requests from old and new contributors alike. The team offers its sincere thanks to everyone that has taken an interest in helping improve the project, and we look forward to meeting even more of you in the future.</p>

<h2>Syncing third parties</h2>
<p>ReactOS, being an open source project as well as its ecosystem, uses several bits of other open source projects. In 0.4.9 release Amine Khaldi has synced many user mode DLLs to WINE Staging version 3.3.</p>

<h2>Statistics</h2>
<p>JIRA Issues fixed (this includes both bugs and improvements) - 137+<br>
Number of commits - 922<br>
The oldest bug fixed for 0.4.9 - <a href="https://jira.reactos.org/browse/CORE-7744">CORE-7744</a><br>
Pull requests merged - 109</p>

<p><ul>
  <li><a href="https://reactos.org/wiki/ChangeLog-0.4.9">The official Changelog for the 0.4.9 release</a></li>
  <li><a href="https://reactos.org/wiki/Community_Changelog-0.4.9">The less technical Community Changelog for 0.4.9</a></li>
  <li><a href="https://reactos.org/wiki/Tests_for_0.4.9">Application Tests for 0.4.9</a></li>
</ul></p>

<p><a href="https://github.com/reactos/reactos/tree/releases/0.4.9">0.4.9-release</a> branch was forked from <a href="https://github.com/reactos/reactos">master</a> on 2018-05-20 after 0.4.9-dev-885-gddd03a8</p>
