---
title:       "xHC Operational Model Overview"
author:      "ramateja.g"
date:        2017-06-29
aliases:     [ node/45878 ]

---

In this post I’m going to give some details on the working of xHC along with my progress. In my opinion Driver development is for the most part thoroughly studying the documentation. I’m working towards my next major target i.e., Implementing Control transfer. In this process I’ve faced some unforeseen issues. From the previous USB models and the available driver code my estimates of xHC turned out to be inadequate. xHC uses various kinds or data structures, more than what the other HC’s use.

      There is a primary hierarchy of data structures on which the whole driver depends on. On the top there are Rings which comprise of Transfer Descriptors (TDs) which in turn are a bunch of Transfer Request Blocks (TRB). Ring –> TD -> TRB. There are three kinds of rings. Event ring, Command ring and transfer ring. Event ring is related to the interrupt mechanism which I’ve detailed in the previous post. Each TRB is a work item that needs to be performed by the xHC. Software uses the command ring to send commands to the xHC by placing respective command TRBs on it. There are different kinds of TRBs for different purposes like No-Op TRB, Enable Slot Command TRB etc. In total there are 15 kind different Command TRBs. As I’ve mentioned before my next major target is to implement Control transfer. Before that I have to initialize a USB device attached to the xHC. For this to happen we need Command ring up and running. Presently I’m implementing Command related structures and functions. 

      With my mentors guidance I’ve started looking into driver codes for Linux, Haiku and Mac so as to find out how to optimally implement the ring structures. The ring structures have many rules such as the command ring should be 64-byte aligned or to expand the ring we can use segmented rings. There are many ways to implement all these. But making sure that the implementation is future proof i.e., no issues should occur further into the development careful deliberation is necessary.

      Another important facet of xHCI is that it supports both USB2 and USB3 devices. It is backward compatible. To initialize a device connected to xHC I need the root hub code. I’m looking into root hub documentation which describes how to handle USB2 and USB3 devices. For now I’m planning on only implementing for USB3 but this is yet to be finalized. Once these are done I can again start working on Control transfer. 


