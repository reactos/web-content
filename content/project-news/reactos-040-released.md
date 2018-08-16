---
title:       "ReactOS 0.4.0 Released"
author:      "Z98"
type:        news
date:        2016-02-16
changed:     2016-02-17
draft:       false
promote:     false
sticky:      false
url:         /project-news/reactos-040-released
aliases:     [ node/3945 ]
news:        [ "news" ]

---

<p>Nearly ten years ago the ReactOS Project released version 0.3.0. Today we are proud to announce the formal release of version 0.4.0. A great deal of work has gone into making this release happen and as we look back it is remarkable to consider how far the project has come since that release a decade ago. This release is both a celebration of and a testament to everything that the ReactOS team and community has achieved together. Thank you to all of you for having stood by the project for this long and we hope rewarding journey. For those of you chomping at the bit to check out the release, go to the <a href="https://www.reactos.org/download">download</a> page to get it now.</p>
<p><img alt="Image" class="imgp_img" src="/sites/default/files/imagepicker/4801/0_4_0.png" width="719" height="541"></p>
<h2>In Memoriam</h2>
<p>It cannot be emphasized enough that ReactOS is where it is today due to the tireless efforts of the people that make up the project. Over the course of the project developers have come and gone but they have all left a mark whether it be in their code or the memories of their interactions with those still with the project. Sadly in two cases these memories are all that we shall ever receive from them. Gé van Geldorp was one of the project’s earlier developers and was heavily involved in the development of the win32 subsystem. He also helped mentor many other developers that joined afterward and is fondly remembered for his willingness to help those just getting started in the project. Brandon Mark Turner was another developer in the earlier days of the project. He worked out a variety of components and was responsible for some of the initial work to make ReactOS buildable with Microsoft’s compiler toolchain. The 0.4.0 release is dedicated to their memory and we hope that its fruition will serve to show at least some degree of our immense gratitude for the effort they put into this project.</p>
<h2>Features</h2>
<p>Here we document some of the highlights that separate 0.4.0 from not just the 0.3.17 release but also the cumulative achievements that the 0.3.x series achieved.</p>
<p>First of course the bulletpoint shortlist for those of you who don't want to wade through my giant mountain of text.</p>
<h3>User-Centric Improvements</h3>
<ul>
	<li>ext2 read/write and NTFS read support</li>
	<li>New explorer shell and theme support</li>
	<li>SerialATA support</li>
	<li>Sound support</li>
	<li>USB support</li>
	<li>VirtualBox and VirtualPC support</li>
	<li>Wireless networking</li>
</ul>
<h3>Developer-Centric Improvements</h3>
<ul>
	<li>CMake support for GCC and MSVC compilation</li>
	<li>Compilation times significantly improved</li>
	<li>GDB remote debugging interface for kernel debugging</li>
	<li>WinDBG support</li>
</ul>
<p>And now onto the meat. In alphabetical order because it’s as good as any other order.</p>
<h2>Build Modernization</h2>
<p>Those who have been with the project since its early days will likely shudder at recollecting the means by which ReactOS was compiled back then. The first attempt to normalize the situation was in the RBuild system, a custom build specification format based on XML that was supposed to make it easy for developers to add new files and modules to the project. While impressive for its time, it suffered from structural issues that not only introduced very subtle bugs but also prevented the project from using anything but GCC to compile ReactOS.</p>
<p>The solution to this was a migration to the CMake platform, an effort that took many months and saw countless issues fixed. The first formal release using the CMake-based build system was 0.3.15 and since then the modernized build system has allowed developers to use not only GCC but also Microsoft’s compiler and debugging suite to build and test ReactOS, an ability that was crucial to many of the features and improvements listed here today.</p>
<h2>Filesystems</h2>
<p>Since its earliest days ReactOS has relied on one form or another the FAT filesystem. There was also significant interest from the community for something better, or at least something different, but a variety of technical difficulties prevented the operating system from supporting anything else. While support for ext family of filesystems progressed slowly but steadily probably the more exciting development has been preliminary support for reading NTFS volumes. While bits and pieces of the code were folded into 0.3.17, it was incomplete and 0.4.0 will be the first version to actually provide out of the box support for reading NTFS volumes.</p>
<h2>Graphics</h2>
<p>From 2D to 3D there were countless improvements to ReactOS’ graphics stack. Optimization work resulted in considerably faster rendering of 2D graphics, in some cases even beating performance on Windows, while support for 3D graphics has steadily advanced since work began in the 0.3.7 time period. Furthermore, architectural fixes released as part of 0.3.8 saw the ability to properly load graphics drivers, another milestone in the project’s goal of compatibility.</p>
<h2>Memory</h2>
<p>The memory manager, a central piece of any operating system and whose stability and correctness underpins that of the rest of the system. The memory manager that has been with the project for so many years finally saw significant parts of it retired in the 0.3.15 release. More work remains of course but a major milestone was achieved that day.</p>
<h2>Networking</h2>
<p>Support for networking was first formally introduced in the 0.3.0 release and since then the team has steadily improved upon the functionality and features. These range from the mundane such as simply fixing bugs to adding of wireless support in 0.3.14, affectionately known as the the PI release internally. Since the 0.3.17 release the project has also added in support for SSL, with the inclusion of the mbed TLS library.</p>
<h2>NTVDM</h2>
<p>A much requested feature for ReactOS was support for 16bit DOS applications. On Windows this support is provided by the NT Virtual DOS Machine (NTVDM) and the ReactOS implementation of it was first formally released in version 0.3.17. Needless to say since then the ReactOS NTVDM has seen considerable improvement to the point where many of the testers are sharing examples of old DOS games resurrected. And one of the biggest advantages to the way in which NTVDM is implemented in ReactOS is that support for it will continue on non IA-32 platforms, including AMD64 and even ARM.</p>
<h2>Registry</h2>
<p>Hate it or love it, the registry underpins much of the operating system’s configuration in the Windows family and like its NT-based relatives ReactOS also possesses one. The project has gone to great lengths to ensure that its implementation of the configuration manager works not only in ReactOS but is also able to correctly read and modify a registry from Windows, providing the ability for ReactOS’ own bootloader to be able to boot Windows 2003 successfully.</p>
<h2>Shell</h2>
<p>The explorer shell used in 0.3.0 was originally introduced all the way back in 0.2.0. When it was created ReactOS lacked the proper infrastructure to actually support a proper graphical shell, forcing the old explorer’s creator to reproduce much of the functionality, that was supposed to be provided by the operating system, in the shell itself. This worked for a time but as the OS became more complete the shell was unable to benefit from these improvements. The new explorer shell and all of its supporting infrastructure, and there was a great deal of infrastructure at that, was a cumulative effort by several people and is one of the truly new features being introduced in 0.4.0 with no previous releases possessing it.</p>
<h2>Storage</h2>
<p>Much as PS/2 connectors slowly fell out of use for keyboards and mice, storage devices in modern computers now use SATA instead of IDE. ReactOS added support for such devices in 0.3.10 by importing the UniATA driver and have steadily improved upon that support ever since.</p>
<h2>Sound</h2>
<p>What one might presume to be a rather basic piece of functionality was actually an extremely complex undertaking. Support for sound arrived in 0.3.9 and has progressively been improved upon ever since as we move towards a new normal of expecting things to work instead of being amazed that they do.</p>
<h2>USB</h2>
<p>In this day and age almost every peripheral comes with a USB connector. Initially the project sought to simply provide support for USB mice and keyboards, support first added in 0.3.10, but a full and proper USB stack is ultimately a necessity in this day and age. This stack was first provided in the 0.3.15 release and has seen continued work since.</p>
<h2>Visuals</h2>
<p>Making the shell look nicer was another oft-requested improvement and one that was a long time coming. In the course of adding that support the project encountered a few bumps of course but in the 0.3.16 release ReactOS was shipped with the Lautus theme for those that wanted to try it out.</p>
<h2>Final Notes</h2>
<p>More detailed technical information about the release can of course be found on the <a href="https://reactos.org/wiki/0.4.0">0.4.0 wiki page</a> with links to the changelog and other notes. Please also note that the VirtualBox image is not yet live at the time of this release.</p>

