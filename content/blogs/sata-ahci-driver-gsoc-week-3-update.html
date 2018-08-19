---
title:       "SATA AHCI Driver GSoC - Week 3 Update"
author:      "amaneureka"
date:        2016-06-14
aliases:     [ node/11524 ]

---

I'll put my vision toward the version 1.0 of driver first. If we come to the <a href="alter.org.ua/soft/win/uni_ata/">uni_ata</a> which is actually right now supporting React OS with SATA AHCI driver. uni_ata is actually operating SATA device in legacy mode of operation and with no support of NCQ. Although <a href="https://en.wikipedia.org/wiki/Native_Command_Queuing">NCQ</a> is not really necessary for now, because I think we are right now targeting to have hardware support as much as we can (this is as per my understanding). But besides this, uni_ata also limit us to have 4 channel (2 port) master/slave primary/secondary, also it limit us to low data transfer speed.<br>
If we look at windows msahci.sys driver, a ataport miniport driver. It is also doing the same thing, but on a managed hierarchy (ataport.sys). It also operate AHCI devices in legacy mode of operation although It supports NCQ.<br>
<strong>what I am targeting?</strong><br>
well I started writing driver with the aim of NT 5.2/6 specifications i.e. storport miniport driver. Also fully qualified AHCI driver which could support all standards mentioned in <a href="http://www.intel.com/content/www/us/en/io/serial-ata/ahci.html">SATA AHCI 1.3.1</a>. Although I am trying to run driver on win2k3 but many support (extended) functions of storport are not clearly documentend or fully implemented, so I am working with minimum workaround to get things in working state with win7 ddk (7600.16385.1). This will really help when I start working on storport driver support in React OS.<br>
I will very soon deliver first version of AHCI driver (with minimal functionality, obviously) and maybe start working on React OS support for storport driver. Minimal functionality would include standard mode of operation of SATA devices (32 ports), ATA/ATAPI srb functions with shared port and NCQ support.<br>
<strong>what I have achieved so far?</strong><br>
I am really feeling good to mention that I am successfully able to get AHCI devices (in their standard mode i.e. 32 ports), parsed EVPD information (Srb Inquiry function 0x0) and right now I am writing code to program controller to execute queued task in command list for requested Srb function made by OS.<br>
<strong><a href="https://www.reactos.org/sites/default/files/imagepicker/49146/screen1.png">AHCI Driver Installation (win2k3) - Screenshot</a></strong><br>
<strong><a href="https://www.reactos.org/sites/default/files/imagepicker/49146/screen2.png">WinKdb on Host PC - Screenshot</a></strong><br>
