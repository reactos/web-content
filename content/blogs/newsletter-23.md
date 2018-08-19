---
title:       "Newsletter 23"
author:      "samwise52"
date:        2007-05-01
aliases:     [ "newsletter-23" ]
---

Just to make it clear, while we aim for a biweekly newsletter, we only aim for it to be up around Sunday. It can easily be delayed if there isn't enough to talk about.

<h2>The Road to 0.3.2</h2>
<p>For those of you who don't follow the ReactOS scene closely it may be hard to know what exactly is happening in terms of development progress. The technical nature of some improvements also proves confusing to most people. The actual code base is huge, depending on several tools to be built correctly, stressing them nearly to the breaking point. It is helpful to have some knowledge about coding and Windows internals while reading this newsletter, but everyone can benefit from it. </p>
<p>The 0.3.2 branch will be created in a few days. Soon we will have another release and it will be a major improvement over the now infamous 0.3.1 release. You may or may have not noticed that commits to the kernel have slowed down to a trickle. Even though there is still much work to be done we are at a point where the kernel is &ldquo;stable enough&rdquo; at least in the concept of an Alpha OS.<br/>
</p>
<p>A short list of blocking bugs includes, Named Piped FileSystem(which breaks usermode pnp, which breaks networking and several other things) and several Icon drawing issues. Command prompt also seems to be broken. I am happy to report that several reports about not booting in real hardware have been fixed. Several issues with VIA motherboards were also resolved. In order to make fixing these blockers easier, Aleksey Bragin has frozen trunk except for bugfixes.<br/>
</p>

<h2>Recent Events</h2>
<h3>WIDL </h3>
<p>Recently developers got the WINE IDL compilers working in the ReactOS build system, allowing a lot of previously dormant code to be compiled. IDL describes an interface in a language-neutral way enabling communication between software components that do not share a common language (e.g. C/C++/Java/Python), used in remote procedure calls. This has allowed synchronization with WINE libraries for rich edit controls, OLE and others. The rich text syncs are another step to getting the Firefox 2 installer to work properly. IDL is also used extensively by Microsoft. </p>

<h3>Win32k/GDI</h3>
<p>James Tabor is leading an effort to rewrite critical parts of the graphical subsystem. The primary goals are of course compatibility, speed improvements and general correctness. A lot of work is going into this very critical task and almost every developer is involved. </p>

<h3>ROS CMSv3</h3>
<p>The ReactOS website is about to get an update for its content management system. The new system made mostly by Klemens Friedl will make it easier and faster to provide and translate content on the fly. It is expect that the system will improve the response time necessary to keep you updated with the latest bleeding edge news. This new CMS will also lay the foundations of a new translation system for the OS itself. Many people have struggled with actually modifying the source code to do translations, and this will get around that issue. Several developers have been stress testing the system and hopefully everything will be ready soon.<br/>
</p>

<h2>SVN Summary</h2>
<ul>
    <li>arty - worked heavily on ppc branch, elf ntoskrnl and booting in qemu-ppc are just a few of his highlights </li>
    <li>cwittich - worked on win32k, synched several wine dlls, fixed several bugs and various other work. </li>
    <li>dgorbachev - several bug fixes and hack all over the place, commited some translation patches. </li>
    <li>ekohl - worked heavily on the control panel applets and related items. </li>
    <li>gedmurphy - imported several wine dlls, worked on timedate cpl app, hhctr.ocx, code correctness and other. </li>
    <li>greatlord - fixed several directx headers and other bugs. </li>
    <li>hpoussin - updated many wine libs, and worked on rbuild. </li>
    <li>jimtabor - worked heavily on win32k gdi and user parts. </li>
    <li>tkreuzer - also worked on win32k. </li>
    <li>weiden - worked on some minor bugs and code issues. </li>
</ul>

<h2>BugZilla Summary</h2>
<p>40 bugs were active in the period from 2007-4-15 to 2007-05-01.</p>
<ul>
    <li>37 new bugs</li>
    <li>A total of 36 bugs fixed</li>
    <li>Oldest bug fixed was 1756 &quot;Norwegian translation of shell32 (update)&quot;</li>
</ul>
