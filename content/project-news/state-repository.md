---
title:       "State of the Repository"
author:      "WaxDragon"
date:        2005-10-08
aliases:     [ "state-repository", "node/246" ]
---

<h2>WaxDragon took a look at what happened in ReactOS during September</h2>
<p>The stats:<br />
<br />
In Sepember, there were:<br />
578 commits<br />
98 bugs opened<br />
94 bugs closed<br />
<br />
I wasn't able to determine the bugs that weere touched during the last month, since something made *all* bugs appear touched.<br />
<br />
A little change of format, I will review the closed bugs first, then go over the SVN commits in less detail than last month.<br />
<br />
*First of all, the new website has been released!  This resolved about 10 bugs, many of which were the oldest in Bugzilla.  Thanks to everyone involved with the new site, it looks great!<br />
<br />
* The taskmgr repainting bug was fixed. (583)
* ReactOS currently installs with only 32MB. (debug builds too!) (703)<br />
** Reopened, see test results below..<br />
* Freeldr now checks for invalid dates from the BIOS. (716)<br />
* The last page of the installer is drawn correctly now. <br />(735)
* Many notepad fixes and enhancements.<br />
* Floppy support fixed. (753)<br />
* Control combos fixed, you can now Ctrl+D in Putty to logout. (763)<br />
* Last of the vmwinst.exe bugs fixed, can change resolution now. (764)<br />
* ncftp now works. (779)<br />
* Various regedit fixes and enhancements.<br />
* WinRAR installer works. (785)<br />
* vim.exe input works again. (796)<br />
<br />
Some of the SVN highlights:<br />
<br />
*Various notepad improvements and fixes.<br />
*Various regedit improvements and fixes.<br />
*LPC work<br />
*NDK work<br />
*Sync to Wine-20050830<br />
*More win32k work<br />
*New CSR code<br />
*More rtl cleanup<br />
*0.2.7 was tagged<br />
*USB drivers added to bootcd<br />
*Ion's 17838 WIP code !!!!<br />
*Ntoskrnl header cleanups<br />
*"Text" test added to rosperf<br />
*Some new winefile icons<br />
*The TAB+ debug combos work again<br />
*GDB stub fixes<br />
*Vaious application leak fixes<br />
*Setupapi got alot of work this month<br />
*Simple TCP/IP Services added (tcpsvcs)<br />
*Simple Device Manager added (devmgr)<br />
<br />
and the usual pile of build and bug fixes.<br />
<br />
We also gained two developers this month! Lets welcome Bletch
(npwoods) and GedMurphy!<br />
<br />
Lets start October off with r18248:<br />
(Here is the rough draft of the testing list I am using, feedback apriciated)
(http://waxdragon.homeip.net/~ford/reactos/ros_regression_items.html)<br />
<br />
Installation:<br />
* Installs under both vmware and qemu<br />
     hangs under vmware 5 with only 32MB<br />
     completes first stage installer under qemu with 32MB, crashes on first reboot (see bug 703 for more details)<br />
<br />
Drivers:<br />
* PCNet driver works VMWare<br />
* vmx_svga (and vmwinst.exe) work under VMWare<br />
* Ne2000 driver works under QEmu<br />
* CL54XX video driver works under QEmu<br />
* floppy driver appears to work under both VMWare and QEmu<br />
* USB drivers (UHCI and usbhub) both load under VMWare5<br />
<br />
Applications: (Tested under VMWare5 only)<br />
* Abiword 2.2.9 installs; opens, edits and saves files.<br />
* Info-ZIP UNZIP 5.42 unzips the OOo 1.1.4 install<br />
* OOo 1.1.4 unpacks, and starts to install, but NONE of the text is rendered on the installer pages.  I fumbled my way though the installer by memory, and it even completed the file copy, but it appears to hang setting up the registry.  I can't tell, no text. ;0) This is progress though.<br />
* Firefox has multiple issues still, both install and runtime.<br />
* OffByOne installer has issues, but the binaries run and load pages, slow and some issues (win32k?).<br />
* The Mozilla ActiveX Control 1.7.12 works with ibrowser, but needs msvcp60.dll to register the dlls. This is different that the 1.6 control. Eventhough, it seems to work a runtime, making ibrowser the best browser canidate. (Still can't type in it though.. bug 876)<br />
* dillo gets a UM exception trying to start<br />
* lynx 2.8.3 runs, gets hung loading pages occationally, can break out of load. works ok.<br />
* mIRC 6.16 installs (shortcut error), and can even connect to freenode by IP.  Hopefully, Alex's ws2_32 will fix that.<br />
* jbmail installs and connects to my ISP pop3 server *by IP only*<br />
* Miranda IM 0.4.0.1 and 0.3.3.1 have multiple issues, both install though.<br />
* PuTTY works, still drops chars if you type too fast (really noticeable under debug/qemu). OTOH, I can use the Control+ combos now.
I can log out and detach fom screen.<br />
* RealVNC viewer suffers from the same crash tcpsvcs does. Gunnar has a patch for this in bugzilla, will followup.<br />
* 7za (the commandline stand alone 7-Zip) works well.<br />
<br />
Shipped Apps (in-tree)<br />
* regedit still has the treeview bug, but due to recent work, I can actually create new keys and string values, and I can still import from the command line. You can export subtrees now also. PROGRESSION!<br />
* taskmanager has had some bugs fixes recently, but the System Cache setting now reads 0 after fixing it in windows.<br />
* Notepad has had alot of improvements, it's looking good.<br />
* winemine still doesn't work (black box)<br />
* Solitare works, but is still missing the menubar. REGRESSION.<br />
* ps works<br />
* mc starts<br />
* format still does nothing, just hangs<br />
* calc *seems* to work.<br />
* cat works<br />

* ftp works, but still can't tell the difference between ascii and binary transfers.<br />
* ncftp has progressed and you can use it for uploads and downloads, the only issue I am aware of is you cannot backspace.<br />
* ping works<br />
* ipconfig is getting bad data from the OS, but works fine under windows.<br />
* finger works<br />
* route works, and had some cosmetic improvements<br />
* netstat fails loading snmpapi.dll<br />
* hostname returns the name you filled in second stage setup now. ;0)<br />
* arp does not work, missing some of the plumbing.<br />
* telnet works, and seems to buffer input properly.<br />
* tcpsvcs crashes upon start up, seems that AfdSelect is setting DPCs will NULL procs. There is a patch from Gunnar (Bug 857) that addresses this, still needs more testing.  Hoping to regression test it after this stupid email that has taken me three days. ;0)<br />
<br />
<br />
To end this note, I will point out a few bugs.  We are still seeing fatal hangs on shutdown on some configurations. Also, during this testing, I corrupted the registry three times, will need to look into that.<br />
<br />
All and all, we have made progress.<br />
Keep up the good work!<br />
<br />
WD<br />
<br />
(If I forgot anything, or you have something to add, please reply to this note)</p>
