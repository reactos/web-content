---
title:       "GSoC’17 : Project Taskbar Shell Extensions for ReactOS | Final Report"
author:      "SR13"
type:        blog
date:        2017-08-27
changed:     2017-08-28
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc’17-project-taskbar-shell-extensions-reactos-final-report
aliases:     [ node/49860 ]

---

<p>Hello, everyone! It&rsquo;s me, Shriraj (a.k.a sr13).</p>

<p>The time has come to summarize all the work I have done in this Summer of Code with ReactOS and complete this journey of <em>my first ever GSoC</em>, though my story with ReactOS is just beginning!</p>
<img src="/sites/default/files/imagepicker/51617/0d841a5b2fc14feaaa334f8b18b91758.png" alt="GSOC17 and ReactOS"  class="imgp_img" width="852" height="306" />

<h2><em><b>TL;DR of Project Taskbar Shell Extensions:</em></b></h2>

<p><b># Designed &amp; Implemented the Quick Launch Toolbar for ReactOS.</b></br>
<b># Designed &amp; Added support for Battery Status in notification area (System Tray).</b></br>
<b># Designed &amp; Added support for Safely Remove Device in notification area (System Tray).</b></br>

<h2><em><b>First thing first, The Important links:</em></b></h2>

<p>1. <b>The Unified Diff:</b></br>
<a href="https://drive.google.com/file/d/0B1TQOdFoUycsSU5JLUZsTk1yQ2M/view?usp=sharing"> https://drive.google.com/file/d/0B1TQOdFoUycsSU5JLUZsTk1yQ2M/view?usp=sharing</a></p>

<p>2. <b>ReactOS branch for Project Taskbar Shell Extensions:</b></br>
<a href="https://svn.reactos.org/svn/reactos/branches/GSoC_2017/shellext/">https://svn.reactos.org/svn/reactos/branches/GSoC_2017/shellext/</a></p>

<p>3. <b>Link for checking out using svn:</b>  </br>
<a href="https://svn.reactos.org/reactos/branches/GSoC_2017/shellext/reactos">https://svn.reactos.org/reactos/branches/GSoC_2017/shellext/reactos</a></p>

<p>4. <b>Milestones & Plan:</b>  </br>
<a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing</a></p>

<p>5. <b>History of Commits:</b> </br>
<a href="https://svn.reactos.org/svn/reactos/branches/GSoC_2017/shellext/?view=log">https://svn.reactos.org/svn/reactos/branches/GSoC_2017/shellext/?view=log</a></br>
<a href="https://code.reactos.org/committer/reactos/ssawant">https://code.reactos.org/committer/reactos/ssawant (Personal)</a></p>


<h2><em><b>Detailed Summary of Work Done:</em></b></h2></br>
<h3><b>Phase I: The Quick Launch Toolbar</b></h3>
<img src="/sites/default/files/imagepicker/51617/qckDemo.gif" alt="qckGIF"  class="imgp_img" width="922" height="661" />
GIF 1.0 : A working demo of Quick Launch under test in WinXP showing some of the features implemented during this phase. 

<p>This phase began with my mentor Giannis introducing me the fundamental technologies i.e. the COM (Component Object Model) and ATL (Active Template Library) along with the basics of Win32 API. Having no prior experience of win32 API was a minus for me, but being experienced with Object Oriented Programming and C/C++ helped me to grasp the underlying concepts fairly fast enough. Thanks to Giannis. The rest was about to learn how to use the win32 libraries and more or less MSDN was enough for it besides the support from ReactOS team.</p>

<p>I began developing Quick Launch Toolbar by first adding a DLL module named &lsquo;qcklnch&rsquo;. After understanding the basics of DLL servers using COM/ATL, the next thing was about implementing and exposing the CQuickLaunchBand via the <b>qcklnch</b> module. Initially, this class was implemented by instantiating and using internally the CISFBand class provided with windows. Later on, it was changed to use my own implementation of CISFBand.</p>

<p>CISFBand class is a major part of the code which actually does the work of handling the quick launch toolbar. This class is not restricted just for the quick launch, but by design can actually handle any band object and toolbars. As I told earlier, the windows also have its own implementation of this class which I had used initially for testing purposes. To code my own version of this class, I had to implement several interfaces which are required for a CISFBand object by design. They are:</p>
<ol>
<li>IUnknown</li>
<li>IObjectWithSite</li>
<li>IDeskBand<ul><li>IDockingWindow</li><li>IOleWindow</li></ul></li>
<li>IPersistStream<ul><li>IPersist</li></ul></li>
<li>IWinEventHandler</li>
<li>IOleCommandTarget</li>
<li>IShellFolderBand</li>
<li>IContextMenu</li>
</ol>

<p>All of these interfaces are well documented in MSDN, and rest of the required documentation is in my code itself. For more details on how I spent my time in this phase, you can check out my personal weekly blogs:</p>
<ul>
<li><a href="https://reactos.org/blogs/my-first-ever-gsoc">Intro</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-1">Week 1</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-2">Week 2</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-3">Week 3</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-4">Week 4</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-5">Week 5</a></li>
</ul>
</br>

<h3><b>Phase II: The Battery Notification Icon</b></h3>
<img src="/sites/default/files/imagepicker/51617/batteryDemo.gif" alt="batteryGIF"  class="imgp_img" width="343" height="222" />
GIF 2.0 : A working demo of Batttery notification showing the percentage remaining, battery mode and charging state.

<p>This phase (and the next) was mostly about IOCTLs and understanding the OS from the hardware perspective. Just like the first phase, it began with an introduction of the concepts required for these phase of the project. Again without the support of Giannis, it would have been a hard time for me to code this thing as I had neither much experience of win32 API nor its hardware aspects.</p>

<p>So first thing was to learn how to extract the information regarding the current state of the battery. For that, I made a standalone console app first, before directly adding code to &lsquo;stobject&rsquo; (which represents the system tray or notification area of ReactOS). The standalone app made the task of testing and debugging easy thus making the code robust. I understood the basics of enumeration of devices and IOCTLs, extracted the current state of the batteries attached and tested in standalone console app on windows. It may sound simple, but extracting this simple information was not an easy task.</p>

<p>After thoroughly testing the code in the standalone app, I added it to the &lsquo;power&rsquo; module of the &lsquo;stobject&rsquo;. For that, I first learned the design of &lsquo;stobject&rsquo;, for which my mentor and the ReactOS team helped me. The &lsquo;stobject&rsquo; exposes a single object of the class named CSysTray. Basically, it uses function pointer mechanism to handle different notification tray modules. It maintains a list of structures where each represents a notification object. Each of the structures has function pointers as its members which technically points to a set of functions which any generic notification object must have to work as per the design. These functions are:</p>
<ol>
<li>ModuleName_Init : Initializes the notification icon.</li>
<li>ModuleName_Shutdown : Shuts down and closes the notification icon.</li>
<li>ModuleName_Update : Updates the notification icon.</li>
<li>ModuleName_Message : Handles messages regarding the particular notification object.</li>
</ol>

<p>The next thing was to interface the battery state with notification area. The current state of the battery was represented by a real number or a float, which was ok to be displayed as a tooltip of the battery icon. But what about the battery icon itself? Since a limited number of icons are available/feasible to represent various states of the battery, I quantized the float percentage of the battery to integer levels. This was later mapped to a set of battery icons which was updated real-time (ReactOS refreshes system tray icons every 2 sec) to represent the current battery state.</p>

<p>Thats how I spent my time during this phase and for more details, here are my weekly blogs:</p>
<ul>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-6-phase-2">Week 6</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-7">Week 7</a></li>
</ul>
</br>

<h3><b>Phase III: The Safely Remove Device Notification Icon</b></h3>
<img src="/sites/default/files/imagepicker/51617/hotplugDemo.gif" alt="hotplugGIF"  class="imgp_img" width="546" height="360" />
GIF 3.0 : A working demo of Safely Remove Device notification, displaying the ejection of a device and other features implemented in this phase.

<p>Now being familiar with &lsquo;stobject&rsquo; and IOCTLs which I used in the earlier phase, you might think this phase would be a piece of cake. But it wasn&rsquo;t, as I was neither familiar with the PnP manager nor the APIs like 'SetupDiXxxxxxxx' and 'CM_Xxxxxxxx' which belong to win32 API. But hopefully, I was able to grasp these concepts in time.</p>

<p>Just like the last phase, I made a standalone app for detecting and enumerating the safely removable devices. The major hurdle I faced during this phase was the enumeration filters used for properly detecting the required devices. Finding out how exactly windows decides what devices to show proved to be more complex than initially thought. But this problem was solved by the ReactOS expert in this area, sir Thomas. Both my mentor Giannis and Thomas helped me by providing the proper enumeration filters as per their expertise.</p>

<p>In the meantime, I added a module named &lsquo;hotplug&rsquo; within &lsquo;stobject&rsquo; to represent this safely remove device icon. Following the similar design principles of the &lsquo;power&rsquo; module, I implemented this &lsquo;hotplug&rsquo; module and I tested the icon and its context menu. While at this task, I also reminded myself how windows used to do this. I went through how windows popped the notification whenever the appropriate device was plugged in (like a USB pen drive) and how it used to eject the same device.</p>

<p>Following the same design philosophy, I implemented the required functionality like handling and keeping track of the list of devices attached and other error handling procedures. Of course, it was possible to code this thing out only after thoroughly understanding the APIs used (which sadly I had no experience with). It was a very nice experience to understand this day to day used service. Not only it was fun to code this module but it also helped me to satisfy my curiosity.</p>

<p>For more details, you can go through my weekly blogs:</p>
<ul>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-8-phase-3">Week 8</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-9">Week 9</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-10">Week 10</a></li>
<li><a href="https://reactos.org/blogs/gsoc-project-tse-week-11-last-not-least">Week 11</a></li>
</ul>
</br>

<h2><em><b>About Merging:</em></b></h2>

<p>As of now, none of the code is merged to the main trunk of the ReactOS. Thing is the ReactOS project is still alpha and many of the things underneath which are required for my project (but not limited to) are either unimplemented or buggy.</p>

<p>Currently, the battery driver (used by my &lsquo;power&rsquo; module) doesn&#39;t work in ReactOS, and about PnP manager, ejecting is probably unimplemented too. That&rsquo;s why, during my entire coding period, I used Windows XP virtual machine for testing purpose. Actually that&rsquo;s the best thing about ReactOS development. This strategy of ReactOS, which I really love is to test against windows first, then correct and improve ReactOS. Thus it helps to do two things in one go, i.e. even if you are coding a particular feature, it helps to debug the entire OS and not just that particular code. As for the quick launch toolbar, it is shown within the ReactOS but the rest of the shell changes its size every few seconds and needs proper integration and support.</p>

<p><b>So, my code will be merged as soon as the features required for my project are implemented and supported by ReactOS.</b> Also, the <a href="https://drive.google.com/file/d/0B1TQOdFoUycsSU5JLUZsTk1yQ2M/view?usp=sharing">unified diff</a> of my work can be applied to the trunk and is compatible with it. Another thing is, my code will also act as a pilot project that uncovers bugs in the rest of the OS. Since my code gets reviewed and works in windows it will be considered correct by the ReactOS project and will be merged gradually. And as a policy in ReactOS, it&#39;s preferred not to hack correct code just to make it work in ReactOS.</p>
</br>

<h2><em><b>Plans for Post-GSoC regarding this project:</em></b></h2>

<p>As per our initial plans and milestones, this project has been completed. But some of the things which we wanted to include would be done post-GSoC. Besides, the real thing would be to support this code after it&#39;s merged as it will reveal many unencountered and hidden bugs.</p>

<p>Some of the features which might be implemented post-GSoC are:</p>
<ul>
<li>Drag &amp; drop capability for quick launch toolbar.</li>
<li>Support for more than one battery device.</li>
<li>Support for handling unrecognized safely removable devices and malfunctioned devices.</li>
<li>Improvement of UI for the above projects.</li>
</ul>
</br>

<h2><em><b>Conclusion:</em></b></h2>

<p>Besides using my strong programming fundamentals, I can definitely say that I was able to complete this project (despite my inexperience with Win32 API) through my sheer obsession to understand the code behind and curiosity to learn about how our day to day software work. Thanks to my mentor, he was always there to teach the required concepts and the cooperation among the ReactOS team finally made me complete this project.</p>

<p><b>I would like to thank GSoC for providing this amazing platform for open source development and thank ReactOS for not only helping me to understand their ecosystem and code-base but also making my childhood dream of 'knowing how windows works' come true</b> (at least partly). Of course knowing how entire OS works is not a child&rsquo;s play, but I am sure that I am in right direction of realizing this dream and as I had said my GSoC journey might have ended but my story of ReactOS is just beginning and I am excited to know what lies ahead. : )</p>                           
