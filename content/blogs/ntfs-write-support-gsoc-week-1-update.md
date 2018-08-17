---
title:       "NTFS Write Support GSoC - Week 1 Update"
author:      "coderTrevor"
date:        2016-05-29
aliases:     [ node/10375 ]

---

Hi there! My name is Trevor Thompson and I'm working on NTFS write support for Google Summer of Code 2016.

<em><b><h3>Status Update:</h3></b></em>

I now know the basics of windbg. I'm surprised at how powerful this tool is!

A few weeks ago, Pierre asked if I could take a look at largemcb.c and help him fix the bugs that were causing kmtest to fail the FsRtlMcb test. I didn't have a chance to look at it until now, but I felt like this would be a perfect opportunity to get some practice with windbg and get started with serious React OS development.

MCB's are very useful to a file system driver. Our NTFS driver doesn't use them presently (probably because they were buggy) but they are ideal for representing NTFS data runs and especially for writing sparse files to disk. MS' FastFAT driver is known to rely on them, and their ntfs driver probably does as well. Buggy MCB support was also one of the problems keeping some of the linuxy file system drivers from being useful.

The logic for updating a sparse file is tedious and I wasn't looking forward to implementing it. It took me about four days to debug and fix largemcb.c (or at least fix it enough to pass kmtest). Using MCB's should save me from having to implement and debug the majority of the difficult sparse-file logic myself, so I probably saved myself more time than I spent on fixing them.


I've also made some efforts to get our ntfs driver working in Windows 2003. I understand that the "proper" way to do driver development for React is to develop the driver for Windows, then fix or implement the parts of React that are lacking. Of course, if React OS were a true Windows replacement, React's driver should work in Windows and Windows' driver should work in React, so I consider finding the points of failure in either direction to be crucial.

If I can get our driver working in Windows, it will go a long way in helping me identify where bugs are as they crop up. Not only can I determine if a bug is in the driver code or elsewhere in React, it will allow me to run driver verifier. However, I've been cautioned by Pierre that there is no telling what could keep our driver working in Windows, and we decided that for now, I should try it but spend no more than a couple of days to see if I can make it work.

To get our driver working in Windows and playing nice with Windows' driver, I'm using a second (virtual) disk with an NTFS partition. NTFS identifies itself with the signature "NTFS    " (NTFS followed by four spaces). I wrote a small program that changes this signature on the second disk to "NTFSTEST" and writes the necessary registry entries to load our driver in Windows. Then I made some changes to our driver to recognize NTFSTEST as a valid signature. I also had to rename our driver from ntfs to rosntfs in the global namespace.

These changes let me get our driver loaded in Windows. From there, I get an access violation in NtfsMountVolume(). I want to look into this BSOD more, but my two days are up.


I've started adding support for changing file sizes and I hope to have good news about this next week, in a much-shorter blog post. :)


<em><b><h3>Some Rambling About Tools:</h3></b></em>
<b>EDIT</b> - This all works fine now, see discussion.

Windbg is excellent, but it requires MSVC to build [IIRC there's a gcc switch but it's experimental], and unfortunately, I'm having a lot of difficulty there. I only have VS 2013 and 2015 installed on my desktop at the moment*, and while I was able to build a bootcd from the IDE, I still can't build anything with ninja and MSVC, nor can I build a livecd from the IDE. Ninja just wants to re-run CMake forever, and the IDE gives me some weird errors for the livecd build. Having to build in the IDE and reinstall react between every change in code is orders of magnitude slower than using ninja with a livecd.

<del>Someone really needs to look into supporting the latest versions of MSVS!</del>** <b>[EDIT: It works now!]</b> I was hoping I could fix this myself [EDIT: In the end, I did], but it's taking too much of my time. I'll try to document the specific problems I'm having in a forum post when I get a chance, but as I had the same experience with my laptop, it seems like support for MSVS 2013 or newer is just not there. I got a lot of help from IRC to ensure I was performing the expected steps correctly, especially from Hermès. If anyone has either version of VS and can make them work, please contact me on IRC: coderTrevor!

Thanks to the efforts of reactosfanboy and his VS2010-express based toolchain, I am able to build with MSVC on my laptop. <b>Thanks reactosfanboy!</b> Not sure why it doesn't work on my desktop. At first it complained of a missing dll. After giving it that dll, configure returns immediately with no output. Oh well, I can now at least go forward with development!

*I previously thought I also had VS 2012, but upon closer inspection, it was only some Android tools from 2012.

**This works now! See discussion link below.

<em><b><h3>Totally Unimportant Bloggy-Rambling:</h3></b></em>

I was fortunate in that my school gets out a little earlier than most, so I already had something of a head start when the official coding period began. However, I had a hard time getting started properly. I wanted to work on React really badly, and I put a lot of effort into my application, to the point that I even got way behind in one of my classes. Luckily I have a good relationship with that professor and he gave me an extra week after the class ended to work on my final project. I assumed the other students didn't have to fall behind in their studies to get accepted. This resulted in getting started about a week later than I planned, and having some serious impostor syndrome starting out.

I started logging my time to make sure I wasn't avoiding or shirking work (easy to do when you're working from home). Looking at this log, I see that it took me about a week to transition into working full-time, and I worked up to it gradually. I was expecting to just be able to jump in and start working 8 hours a day but it didn't happen that way.

Like I said, my school was done well before the official coding period began, so I was at least able to get this transition period out of the way beforehand. Unfortunately, my proposal had promised me working full-time starting May 9, so I'm a bit behind on what I expected to have done by now.

Spending time coding was all I really needed. I quickly found a bug in ext2 that was preventing MSVC from building the bootcd. This boosted my confidence. I started out feeling anxious and forcing myself to work, but the more time I spent, the more I remembered how much I actually enjoy this. When I was in the middle of fixing largemcb.c, it didn't take long to reach the point where I spent nearly every waking moment coding, and I needed to force myself to take breaks, sleep and eat. (Random thought: Taking a walk is a surprisingly effective way to boost productivity!)

Fixing largemcb.c, and the congratulations I got on IRC following, have mostly wiped away the impostor syndrome I first had from being accepted into GSoC.

On an unrelated note, my student ID just expired after two years, and this week I also discovered that my access to Dreamspark and Safari books online through my school seems to have expired with it, so I can't try any older MSVS versions or read most of the references I picked out. Bad timing! I'm still enrolled too; I'll have to go there Monday and get a new student ID made.

Frustrated with not having Safari books, I decided to "invest" some of the money from my first Google payment into reference books. (Thank you very much Mom and Dad for your financial support this month!) You can find a lot of old books that are still relevant to ReactOS and can be purchased used for about $5 with shipping, so I splurged and ordered a small library! :) 


<strong>TL;DR:
<ul><li><b>I Learned how to debug with windbg</b></li>
<li><b>I fixed largemcb.c</b></li>
<li><b>I made some progress torwards native Windows development<b></li>
<li><b>I started adding support for changing file sizes</b></li>
</strong>

<h3><a href="https://www.reactos.org/forum/viewtopic.php?f=2&t=15472">Discussion</a></h3>
