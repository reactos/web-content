---
title:       "USB 1.1 UHCI improvements GSoC - Week 2"
author:      "VardanM"
date:        2016-06-06
aliases:     [ node/10934 ]

---

<p>The second week of coding period I spend on testing and debugging.<br /><br />As you may remember from previous post, there were all fails in UHCI test spreadsheet. This week I&#39;ve done same tests with all ROS&#39;s usb stack injected along with &quot;usbuhci.sys&quot; but this also not helped. So we can assume that UHCI is not working under 2k3. Also I&#39;ve found bug (crash) in UHCI driver uninstall flow. In case of EHCI, it is normally denying removal, but in case of UHCI I&#39;m seeing system crash coming from &quot;hub.sys&quot;. Now debugging of this issue is in process.<br /><br />In parallel to debugging, I spent some time reading MSDN topics related points which was unclear for me during debugging. In this period while diving into the code I am very frequently come to the surface to gain information form MSDN, but sure in the future, the things will be clearer for me and I&rsquo;ll be able to do much in one dive :).<br /><br />As we have issues not only in usb*hci files but also in another parts of USB stack, I am forced to spend the biggest part of my time doing investigation of codes and reading. For near future I am planning to add removability to our usb drivers. As I saw during tests, none of USB drivers can be removed in ROS. This can hamper debugging in situations when driver reload is needed.<br /><br />I think that next week will also be the week of mostly investigation and testing. I was planning to have some fixes by this time, but I met some unexpected things which slowed down my progress. I have few final exams next week, after which I&rsquo;ll be able to spend all my time for the ROS.</p>
