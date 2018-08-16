---
title:       "Google SoC lwIP Report Week 4"
author:      "zhu48"
type:        blog
date:        2016-06-18
draft:       false
promote:     false
sticky:      false
url:         /blogs/google-soc-lwip-report-week-1-0
aliases:     [ node/11696 ]

---

<p>This week, I started off chasing down how to handle TDI sending a new IRQ to create a connection context immediately after a connection has been accepted on the server end. At first, I thought it was for socket multiplexing. As I talked more with Art and looked more into the lwIP source code, I realized that this is an attempt by TDI to support backlogging. As such, this was not something I had to actively handle since lwIP has full backlogging support.&nbsp;</p>
<p>Another thing I discovered along the way was how to handle the separation between connection contexts and transport addresses. The original socket storage data structure I started off working with, an ADDRESS_FILE, was only sufficient for a connectionless sockets. For TCP, which has a connection context, I created a TCP_CONTEXT data structure. I would allocate a TCP_CONTEXT on a CREATE IRQ for a connection context, and add a pointer to the TCP_CONTEXT to an ADDRESS_FILE on an ASSOCIATE_ADDRESS IRQ. When an ASSOCIATE_ADDRESS IRQ arrives for an ADDRESS_FILE that already has an associated address, I would assume that this was an attempt to start building a backlog, and immediately deallocate the TCP_CONTEXT that is not already associated with the ADDRESS_FILE. With this scheme, I was able to establish a connection between the server and client without causing crashes.&nbsp;</p>
<p>This fix still left the programs frozen and uninterruptible because I did not have a framework in place for cancelling IRQs. The fix for this was rather simple compared to everything else I've done so far, since I did not have to work with any new data structures. I only had to figure out how to free the ones I'm already allocating. In a short half-day, I was able to successfully cancel pending IRQs.&nbsp;</p>
<p>In the middle of the week, I got access to a branch forked directly from trunk. This was great, since the branch I had been working on had been forked before a large directory tree reorganization in ReactOS. For about a day, I dug through the old and new branches to figure out what I needed to change to merge my code into the fresh-off-of-trunk branch. The most puzzling problem I ran into in this process turned out to be because TCP, UDP, and RAW had all been disabled in lwIP's options header. I suspect that however lwIP was being used in trunk, everything was linked through the rosip.h file.&nbsp;</p>
<p>The latter part of the week was spent working on implementing the TDI_SEND and TDI_RECEIVE IRQs. I am code-complete, but I still have a lot of testing ahead to see if my implementation works. I already discovered a problem where I don't handle NDIS_BUFFERs correctly.&nbsp;</p>
<p><a href="https://www.reactos.org/forum/viewtopic.php?f=2&amp;t=15554">Discussion</a></p>

