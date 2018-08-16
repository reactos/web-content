---
title:       "Newsletter 61"
author:      "Z98"
type:        news
date:        2009-06-30
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-61
aliases:     [ node/201 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>0.3.10 Preparations</hli>
# <li>UniATA Teething</li>
# <li>C++</li>
# <li>Website Design Solicitation</li>
# </ul>

---
<h2>0.3.10 Preparations</h2>
<p>
Effort is underway to get the 0.3.10 release out the door.  Testers have been going through the usual list of applications to find any regressions and several have popped up.  An especially nasty one was a seemingly random data corruption in the Download application, eventually traced back to an update in wininet from Wine.  As the developers were unable to pinpoint the exact cause, Cameron Gutman simply reverted the entire code synchronization.  Another regression was that the 0.3.10 test CD was unable to run on Pentium I systems.  This was due to a change in settings in RosBE 1.4.3, which set the target architecture to Pentium III.&nbsp; This includes not only the compiled build tools, but also the included libraries such as libgcc and libstdc++, which are the real problems here.&nbsp; This forces ROS to also be compiled targeting Pentium III, which has a few instructions and optimizations not present on the Pentium I, which caused the failures people have been experiencing.&nbsp; Colin Finck believes that this problem will eventually be resolved once a new C++ library is imported, which is discussed further down. 
</p>
<h2>UniATA Teething</h2>
<p>
Now that SATA drives are nominally supported, people have been running it through its paces.  Unfortunately, UniATA does not support the Advanced Host Controller Interface, something that seems to be very common on motherboards these days.  This is causing problems for those testers but unfortunately cannot be solved until Aleksey Bragin implements it.  There are also a few bugs in its handling of certain SATA controllers without AHCI.  In the case of the ATI IXP700 chipset, it was missing a flag and thus trying to use the controller in the wrong mode.  Christoph von Wittich has been trying to deal with that, along with another issue.  Ironically, UniATA is stumbling on several SATA controllers when they are emulating IDE for legacy purposes.  This is also a case of incorrect or missing information and settings in UniATA, wherein it incorrectly identifies controllers and then tries to communicate with them using the wrong mode.  Christoph&#39;s progress on both issues is however being slowed by insufficient testers who have the affected hardware.
</p>
<h2>C++</h2>
<p>
A part of writing an operating system is including all the necessary bits and pieces that software will eventually need.  One of these pieces is a C++ runtime library.  Currently ReactOS uses the libstdc++ that comes with GCC, but this will not be sustainable if the project hopes to add support for MSVC and possibly other compilers.  To that end, KJK::Hyperion has been advocating the inclusion of STLport, an open source C++ library that is compatible with a wide range of compilers.  This is still in the discussion and planning stage, but there does not appear to be any major issues with the inclusion.  Besides the portability advantage, using STLport would allow the developers to move the Standard Template Library to a DLL instead of the current static library, which would help decrease the size of any C++ heavy applications that might be added to ReactOS.  Once support for MSVC is done it might be possible to relax the current rules regarding C++ usage, though risking a break with GCC compatibility will make any such move tricky.
</p>
<h2>Website Design Solicitation</h2>
<p>
The project is seeking a new design and theme for the website.&nbsp; The current design is several years old and starting to show its age and could use some streamlining.&nbsp; More details can be found on this forum <a href="../forum/viewtopic.php?f=25&amp;t=7076">post</a>.&nbsp; We look forward to seeing your entries.  
</p>

