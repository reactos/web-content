---
title:       "Newsletter 53"
author:      "Z98"
date:        2009-02-16
aliases:     [ "newsletter-53", "node/193" ]
---

<h2>ReactOS 0.3.8</h2>
<p>
Version 0.3.8 was released on Feburary 4th.  The developers actually did a rush job, trying to get it ready in time for Andrew Greenwood to burn all the CDs they would be taking to FOSDEM.  0.3.8 continues the emphasis on stability and usability, but ultimately the OS still has a long way to go before these goals are achieved.
</p>
<h2>FOSDEM</h2>
<p>
Several developers were present at the FOSDEM convention representing the project.  A more detailed writeup will be put up later, but all the developers enjoyed the time there.  They were able to meet many people, both just general FOSS enthusiasts and representatives from companies and other projects.
</p>
<h2>RosBE</h2>
<p>
Daniel Reimer has released an updated ReactOS Build Environment, which was used for the 0.3.8 release.  The two biggest updates were the completion of a PowerShell port and an update to binutils.  For those that do not know, the BE is actually just a collection of scripts that preset some of the options and flags for the compiler so the user does not need to remember them or set them up themselves.  Considering how clumbersome the original batch scripts were, the new PS scripts should make things considerably easier in the future.  However, since PS is only available on Windows XP and later, the batch shells will continue to be maintained for those that may be using Windows 2000, at least for the time being.  We already do not support building on the 9x family.
</p>
<p>
The other major update was to binutils, which resolved several issues with broken Winetests.  The ReactOS developers kept running into a bug in binutils that improperly exported functions inside DLLs.  The specific problem involved the @# appended after function names in the files that define the exports.  Binutils has an option that strips out the @#s when it reads that file.  The problem was certain DLLs such as MSVCRT exported functions twice, once with @# appended and without. One way the developers worked around this was using two @#s, so they had something like @#@#.  Unfortunately binutils ended up stripping both when it should have only taken out the last one.  Thus the developers filed a bug report with binutils and it was resolved shortly after.  The updated binutils in the BE includes this fix, which allows for the Winetests for those components to be run. 
</p>
<h2>More Win32 News</h2>
<p>
The Win32 subsystem continues to progress, this time courtesy of Gregor Schneider.  He recently worked on the stretchblt implementation, which handles resizing of things being drawn.  Resizing itself is usually straightforward, but things get far more complex when you are only attempting to resize part of an image.  This functionally was actually completely missing in ReactOS, causing all sorts of drawing bugs such as images overlaying controls and even crashing Firefox when Google Maps was loaded.  Gregor implemented the necessary functionality in win32k and while it still isn&#39;t perfect, it at least is usable.
</p>
<h2>Sound Development</h2>
<p>
It has been a while since the last news on sound, but as people watching SVN are aware of Johannes Anderwald has made a series of commits involving sound support.  Andrew Greenwood continues to also contribute, but he is focusing primarily on the user mode side.  Johannes has been working on three components; kernel streaming, sysaudio, portcls, and wdmaud.  Wdmaud is the user mode interface where all the audio data and controls come from and get sent to sysaudio.  Andrew is working on the user mode side while Johannes is working on the kernel mode side.  From there, sysaudio decides whether the audio data will go do the kernel streaming or whether it will be mixed with kmixer.  Portcls itself acts as a wrapper for audio drivers and has a few functions designed to help driver writers.  Currently ROS does not do any mixing, as that requires quite a bit of math.  The current objective is to just get audio to stream directly to the audio device.  To do this, the drivers that handle audio support need to be run as services.  Johannes fixed a problem with initializing them but something else is preventing them from being registered properly.  If the drivers are not registered, the entire chain of operations that streams audio breaks down.  Johannes is continuing to look into the problem and hopefully will find a solution soon.
</p>

