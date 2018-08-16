---
title:       "SATA AHCI Driver GSoC - Week 5 Update"
author:      "amaneureka"
type:        blog
date:        2016-06-29
draft:       false
promote:     false
sticky:      false
url:         /blogs/sata-ahci-driver-gsoc-week-5-update
aliases:     [ node/12335 ]

---

From beginning of week I started reading more stuffs (core) about AHCI and trying to plan a road map which I will follow after making first version of AHCI driver.  Throughout the week I made some progress with Interrupt Handler and AHCI port programming. Though I have finished port programming routine and next I will complete Interrupt Handler followed by Srb functions.<br>
Port programming is still untested (fingers crossed), because I can't test it without Interrupt Handler routine (I can, but It will not give 100% surety) looking forward to get these two routines tested in this week. I am really excited to test/debug this code :D<br>
If you look through code (or just look at Notes.txt) I have disabled NCQ for now and focusing on normally queued IOs only. One reason behind this is that I want to test/debug these two routines first and will add NCQ feature in coming revisions. Data IN/OUT support is also added i.e. now we can perform ATA/ATAPI DMA transfer, And guess what? writing Srb functions will be a piece of cake now, Just make appropriate request (specific to Srb function, look at DeviceInquiryRequest routine) populate data in SrbExtension and done!<br>
It was actually an amazing week, I tried reverse engineer, to look at some sources. Thanks to my mentor (Alex) for HexRay output of a binary which helped me in getting sample code logic. Though at the first I thought there is some logical error in sample code but HexRay output cleared my doubt. I am hoping for more fun (+ learning) in coming weeks. I am also thankful to the organization (and specially my mentor) for passing me in mid term evaluation.<br>
<br><br>
And sorry for so late blog post :p

