---
title:       "Newsletter 60"
author:      "Z98"
date:        2009-06-12
aliases:     [ "newsletter-60", "node/200" ]
---

<h2>RBuild and MSVC</h2>
<p>
Getting ReactOS built using Microsoft&#39;s compilers has been on the wishlist of several ReactOS developers, but no one really wanted to deal with the monstrosity that RBuild had transformed into.  KJK::Hyperion decided his sanity was sufficient enough to survive the experience and has been working for quite some time to get it to be able to use a compiler that is not GCC.  So far, his additions allow RBuild to detect the presence of the VC++ compiler, whether you got it through Visual Studio, one of the SDKs, or the WDK.  It then begins to compile, but fails almost immediately. There are subtle and major differences between coding for GCC and MSVC, differences that need to be smoothed out in the code base before we can successfully compile. Not only that, but because ROS is an operating system, many of the things application writers take for granted must be duplicated. This duplication has been done for GCC, but not for MSVC.  The next step would be to get all the compiled objects to link together using Microsoft&#39;s linker, which KJK has not gotten around to sorting out.  The options he needs to feed in are obviously different than those handed to GCC, so it will take a bit for him to translate them over. The other issues are in his words, &quot;too complex and too technical,&quot; so will be covered, if at all, later. For now, the rest of the developers will need to start trying to build ReactOS using MSVC and fix up any syntax problems that crop up.
</p>
<h2>Driver Regression Testing</h2>
<p>
ReactOS currently uses Wine tests to make sure things do not break on the user mode side of things, but did not have anything for the kernel and driver interfaces.  While investigating an issue with reloading drivers, Michael Martin decided to put together some tests for functions that drivers used.  The problem ended up being an inverted validity check, which unfortunately are very easy to make and very frustrating to find.  To try and prevent these from slipping in unnoticed in the future, Michael has written two drivers<br />
so far that test creating devices, loading and unloading of drivers, and a few other kernel mode functions.  He has already made several commits fixing up missing/incorrectly set flags in the DRIVER_OBJECT structures that his tests exposed.
</p>
<p>
Besides those two drivers, Michael also intends to write an application to make it easier to access the results of the tests.  These tests are essentially running in kernel mode, which makes debugging and reviewing somewhat trickier than with the Wine tests.
</p>
<h2>Sound Regression</h2>
<p>
Ever so briefly, ReactOS had some minimal sound support, only to have it disappear due to a bug in the object manager.  Johannes Anderwald had been working on mixer support, which would allow actually allow controlling the volume of what is played.  All sound cards have at least 2 subdevices associated with them in Windows, one of which handled capturing and rendering output with the other handling mixing.  Originally ReactOS could only talk to the first one and Johannes was trying to get it to communicate with the second as well.  The problem however was that a bug in the object manager screwed up the initial registration of the subdevices so that their identifiers were set to NULL.  This obviously made it impossible for the system to distinguish between them and direct messages and commands accordingly.  Johannes has managed to hack around it, though he openly admits the hack is likely to bite him in the future.  Hopefully the bug in the object manager will get fixed quickly and he can go back to properly implementing sound support.
</p>
<h2>Thank You Andrew Greenwood</h2>
<p>
Andrew recently announced his resignation from the project, feeling he did not have much more to contribute.  However, his previous work is being put to good use by Johannes as it provides the user mode side of the sound system.  Andrew also did a lot of work for FOSDEM this year, including business cards and putting together the hybrid boot/liveCD we distributed. Then there was the video that serves as proof of the insanity of the various developers. We of the project wish Andrew the best with his future endeavors and thank him for his contributions.
</p>

