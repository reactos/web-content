---
title:       "Google SoC lwIP Report Week 1"
author:      "Z98"
type:        blog
date:        2016-05-27
draft:       false
promote:     false
sticky:      false
url:         /blogs/google-soc-lwip-report-week-1
aliases:     [ node/10198 ]

---

<p>Note: I am publishing these but each student is responsible for actually writing them.</p>
<p>I am Zuodian Hu or, as I like to be called, Dian (pronounced the same as Dan). I just finished my junior year at the University of Wisconsin at Madison, where I am working on an electrical engineering and computer science double major. My personal interest lies in systems programming and digital logic. In addition to my classes, I play violin in the UW-Madison symphony orchestra and do programming for Wisconsin Robotics and the UW-Madison team competing in the NASA Robotics Mining Competition. This summer, I am working on the Google Summer of Code project to integrate lwIP into ReactOS.</p>
<p>This is the first week of me working on this Summer of Code project. I have been in contact with Art Yerkes, who did network stack programming for ReactOS. He has provided invaluable insight into how the current ReactOS network stack, as well as the NT kernel in general, works.</p>
<p>I started by writing a simple Winsock TCP server-client pair. I first compiled the programs in MSVS and verified that they worked on Windows, then loaded the programs into ReactOS. I spent the first half of the week learning how to trace and debug NT kernel mode drivers.</p>
<p>When trying to create, bind, and listen on a socket on the server side, I ran into, and fixed, a bug in the driver code that checks for a valid binding address. Instead of checking the validity of the requested address, the driver was checking the validity of an uninitialized address variable. This invariably caused TCP socket binding to fail. Fixing this bug allowed the server to successfully bind a socket to a loopback port, but most of the TCP functions remain unimplemented.</p>
<p>I spent the latter half of the week digging through lwIP and the ReactOS trunk TCP/IP driver code to learn how they accomplish TCP connection establishment. I am staying in daily contact with Art Yerkes to learn the existing code as quickly as possible.</p>
<p>Over the week, I learned how the ReactOS network driver code is organized and became more proficient at working on and reading it. When I run into unfamiliar functions and macros, I am able to quickly find and skim their implementations to get an idea of what they do. When I see something out of place in the debug output, I can quickly identify where in the code the failure likely occurred. Rebuilding the kernel and adding my own debug messages are both quickly becoming second nature to me. I still have a lot to learn about TCP/IP semantics, what the driver has to do, and what is already taken care of by lwIP.</p>
<p>Next week, I plan to start adding all the code necessary to make the connect(), listen(), and accept() Winsock calls succeed.</p>
<p><a href="https://www.reactos.org/forum/viewtopic.php?f=2&amp;t=15464">Discussion</a></p>

