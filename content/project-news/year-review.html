---
title:       "Year in Review"
author:      "Z98"
date:        2009-01-17
aliases:     [ "year-review", "node/290" ]
---

<h2>Year in Review</h2>
<p>
2008 saw a total of four point releases by the ReactOS project, all of which were made after the kernel rewrite was completed.  Thus the instabilities people saw in the 0.3.1 release were greatly reduced and there were better rates of success in running ROS on real hardware and not just virtual machines.  That is not to say the system runs reliably, but we have gotten closer.  The number of releases is certainly higher than in previous years, as the project stalled for a time due to the instabilities in the kernel.
</p>
<p>
As everyone can see, 2008 has been very busy for us, with continuing advancement in development and the laying of foundations for new initiatives that we hope will bear fruit in the future.  In addition, efforts begun years ago are also starting to show results, making ReactOS more functional and more stable.  Here we will highlight some of the advancements and efforts that may be of interest to the community.
</p>
<h2>Old and New Blood</h2>
<p>
Quite a few people joined the project as developers this year, many of them long time community members, and at least one person rejoined the project from his hiatus.  A total of 10 newcomers and one returnee are now with us and have contributed much to the development work.  The first pair came to us at the beginning of the year, Andrey Korotaev and Dmitry Chapyshev.  Steven Edwards, our Wine liason for a time then returned to us.  He was followed by Matthias Kupfer, an oldtimer in the community, and Jeffrey Morlan, who discovered the project fairly recently before becoming a developer.  After that, Stefan Ginsberg joined and for a time held the distinction of being the youngest ReactOS developer. This distinction was then passed on to Cameron Gutman, another forum member that eventually got onto IRC to interact directly with the developers, was granted SVN access.  At this point, Samuel Serapion, who was nominally the other writer for the newsletter, also gained commit access.  Since then, he has yet to write another newsletter.  The last three were Michael Martin, Gregor Schneider, and Kamil Hornicek, who all joined within a month of each other.  With the added manpower, ROS&#39; future certainly looks promising.
</p>
<h2>Graphics</h2>
<p>
Since the kernel itself has stabilized somewhat, attention has shifted to the graphics subsystem.  The code is fairly old and has lots of hacks in place, but fixing is the key to getting more applications to run.  To that end, several of the developers have begun what is essentially a Win32 Subsystem rewrite.  The primary objective is to clean up the implementation and internal architecture and data structures, some of which don&#39;t exist in the Windows implementation.  This isn&#39;t acceptable if we truly wish to be compatible, so Timo Kreuzer began pulling them apart.  Several of the data structures are actually combinations or amalgamations of existing ones.  Timo has managed to pull out one ROS specific structure already and replace code that used it with a proper implementation, but many more still exist and are scattered in many different places.  To truly replace all of them will take some time, especially if the code has evolved to depend on these incorrect data structures.
</p>
<p>
Another internal issue that was given heavy attention this year would be the interdependencies within the Win32 subsystem.  Because development on it started before much information was publically available about it, some assumptions were made about how they all connected together.  This ended up resulting in circular dependencies, where modules depended on each other instead of a set top to bottom layering.  Eric Kohl spent considerable time trying to sort this out and one of his successes was fixing CSRSS to not use shell32 during its initialization, a component that hasn&#39;t even been loaded when CSRSS starts up.  This unfortunately does not solve all of the interdependency problems but Jim is continuing his search.
</p>
<p>
A third architectural matter involving the Win32 Subsystem is implementation of ReactX, our DirectX replacement.  Magnus Olsen realized during the year that such an endeavor would take much longer than originally thought, especially the support for hardware accelerated 3D rendering.  Thus two short term solutions were pursued.  The first involved using Wine code, which translates Direct3D calls to their approximate OpenGL counterparts, to do the same on ReactOS.  We do support hardware acceleration for OpenGL, so this cheat can help improve performance.  However, Magnus still intends to do a proper implementation that doesn&#39;t need to be routed through OpenGL.  The second solution was to improve the Win32 subsystem to a point where Microsoft&#39;s official DirectX runtime would also work on ReactOS.  This would require fixing up the internal structures that DirectX depends upon and making them identical to those in Windows.  Work on getting Microsoft&#39;s DirectX runtime running on ReactOS actually started in 2004 and is starting to show visible signs of progress.  The DirectX driver loads and simple 2D rendering with hardware acceleration works, but 3D is still some ways off.  The work was a joint effort by Magnus Olsen, Timo Kreuzer, Jim Tabor, Maarten Bosma, and Alex Ionescu, and they were recently joined by Kamil Hornicek.  Much of course still remains to be done, but we are now at the point where progress is visible, not just internal.
</p>
<p>
Finally, it should be noted that heavy bugfixing has been going on alongside the heavy infrastructure work.  Rendering of basic graphics have improved considerably over the year, with more applications actually being usable now that they are being drawn properly.  Some of this is due to updating code we borrow from Wine, but others are due to the efforts of our own developers.  This was no small feat, since fixing architectural problems in the Win32 subsystem would unravel hacks used to make things draw properly, so the Win32 developers needed to both fix long standing problems and fix the hacks that fell apart due to a more correct implementation.
</p>
<h2>Filesystems and Memory</h2>
<p>
Work on these two components have been going on concurrently, as filesystem drivers rely heavily on services the memory manager provides.  It was in 2008 that work really started in filling in the holes that prevent us from using a filesystem besides FAT32.  The two biggest blockers are the extremely incomplete Filesystem Runtime Library and the extremely incorrect Common Cache implementation.
</p>
<p>
The problem with the Common Cache has been known for quite some time, with multiple efforts to rewrite it having been undertaken in the past.  In reality, the CC is not a separate component itself, but merely exposes functionality from the Memory Manager.  This means for us to have a proper CC, we need a good MM.  Unfortunately, this was not the case.  The CC and MM are supposed to have a degree of abstraction but our implementation essentially mixed them together.  Thus the first step was to decouple them, which was the objective of the NoCc effort started by Aleksey Bragin and picked up by Art Yerkes.  Aleksey intended for NoCc to strip out the functionality the CC is supposed to provide so that we can worry about fixing the underlying memory operations first before trying to sort through what the CC should be doing.  Once we were certain the memory manager was functioning correctly, then we could attempt to implement caching algorithms for the CC.  Art actually managed to separate the two, eliminating shared data structures that shouldn&#39;t have existed to begin with.  He then implemented a simple least recently used caching algorithm and managed to get ReactOS to boot all the way to the GUI before it crashes.  Considering the CC was basically non-existent when the effort was started, much has been accomplished but much more will need to be done this year to follow up.
</p>
<p>
The other component filesystem drivers depend heavily on is the filesystem runtime library.  Much of the FsRtl didn&#39;t really exist, since FAT32 was simple enough that it could be hacked to work without much of it.  Pierre Schweitzer originally joined to help with the ReactOS Build Environment, but switched over to working on FsRtl in 2008.  He&#39;s done quite a bit of work in a separate branch, implementing both missing functionality within the FsRtl and services in other components that FsRtl relies on.  This is another initiative that will take a while to pan out, but when it does, we can begin a more serious effort to support newer filesystems.
</p>
<h2>Ports</h2>
<p>
Two efforts were started in 2008 to port ReactOS to different architectures, x64 and ARM.  Both have seen considerable progress, with the ARM port now at the point where they have begun working on initialization of user mode components in the boot process.  The x64 port is going slower but also has gotten a partial boot.  Both efforts ended up exposing many bugs in the memory manager, which benefits work on the x86 platform as well.  Much of the x64 work hasn&#39;t been fully merged into trunk, whereas the ARM work is taking place in trunk.  Still, the work that has been done offers a solid foundation for future developments and a successful port would open new opportunites for ReactOS.
</p>
<h2>Infrastructure</h2>
<p>
Quite a bit has been done to try and help developers be more productive during the past year.  Besides the server move and upgrade, the project has begun work on an automated testing system for each revision.  The first step in this process was the completion of the Sysreg program by Johannes Anderwald and Christoph von Wittich.  Now running on the build machines, Sysreg currently only runs Winetests and stops at the first failure or crash.  Eventually, it is intended to run all the tests in the Rostests module and finish all of them regardless of failures.  The report that Sysreg currently generates is very verbose and Colin Finck and other members of the community have been working on providing a better web interface for it.  We will hopefully see this come to fruition this year.
</p>
<p>
Another major addition was the updated doxygen pages for the ReactOS source code.  A bug in earlier versions of doxygen caused an infinite loop within our code so no one bothered to generate documentation for the newer revisions.  This meant the documentation that was present was hopelessly out of date for anyone who wanted to use it.  Now that the system is up and running, we can also use other features in doxygen to track development progress and provide a better reference for people who wish to study the source code.
</p>
<p>
Bugzilla has also seen several improvements. Thanks to a new debugging article in the wiki, bug reporters are now able to provide useful information and debug logs, thereby increasing the quality of the reports. Bugzilla has also seen a major cleanup and improved maintenance, from tracking and marking the resolved issues, to eliminating duplicate reports and taking care of submitted patches for faster review by the developers.
</p>
<h2>Coverity Scanning</h2>
<p>
We were put in touch with Coverity by Urias McCullough, a member of the Haiku community, and submitted our source code for analysis.  Being added as one of the open source projects Coverity analyzes will be of major benefit in the long term, helping us avoid certain types of bugs and also providing a check for overall quality.
</p>
<h2>Compilers</h2>
<p>
One of the biggest problems the project has had to deal with in using GCC as the primary compiler is lack of support for Structured Exception Handling.  KJK::Hyperion produced the PSEH library to compensate for this and late last year updated it to version 2.0.  It still has some teething problems which KJK has been working on, but should bring us one step closer to using an exception handling scheme that is source identical for both GCC and MSVC.  This will be very handy since KJK also started an effort to get ReactOS to compile on MSVC, Microsoft&#39;s compiler.  These two together should help us to raise the code quality considerably as they progress.
</p>
<h2>Community Funded Ideas</h2>
<p>
This has been proposed many times in the past but it was not until mid-2008 that serious effort was made to organize it.  The CFI is intended to allow community members to donate for a specific feature from a list that they want to see completed.  The intent is to provide developers with the necessary funds so that they can commit the time necessary to complete that feature without having to worry about real life financial responsibilities.  A few projects have already received a decent amount of donations and we hope that the CFI as a whole will prove successful in the future.  The effort is still undergoing some planning and organizing, but developers are already beginning preliminary work on some of the proposed projects.
</p>

