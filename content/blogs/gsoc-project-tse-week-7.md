---
title:       "GSOC Project TSE Week 7"
author:      "SR13"
type:        blog
date:        2017-07-20
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc-project-tse-week-7
aliases:     [ node/47334 ]

---

<p>Hello World!! ;D</p>

<p>If you had read my <a href="https://www.reactos.org/blogs/gsoc-project-tse-week-6-phase-2">last blog</a> then you already know that we are in "Phase 2". And whats exciting is this phase zoomed past at such a speed that in the upcoming week I am starting "Phase 3". (Spoiler Alert! XP) But, let us hold our horses and let me describe what happened in Phase 2. For a TL;DR you can just check the Task 2.X in the <a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">Milestones</a> page. (Just scroll at the end of the milestone page. ;P)</p>

<p>As you know, the main task is to add support for battery status et al for the notification tray. For which I had to learn about IOCTLs. So what are IOCTLs? As Wikipedia describes it,  IOCTL (an abbreviation of input/output control) is a system call for device-specific input/output operations and other operations which cannot be expressed by regular system calls. It takes a parameter specifying a request code; the effect of a call depends completely on the request code. Request codes are often device-specific. For instance, a CD-ROM device driver which can instruct a physical device to eject a disc would provide an IOCTL request code to do that. The IOCTL system call first appeared in Version 7 of Unix under that name. It is supported by most Unix and Unix-like systems, including Linux and Mac OS X, though the available request codes differ from system to system. Microsoft Windows provides a similar function, named "DeviceIoControl", in its Win32 API. 
In simple words, IOCTLs allow applications to interact directly with the drivers. For my part, an in depth understanding at H/W level is not required. However, one of my philosophies is to at-least get a big picture of how all the pieces fall together. ;P</p>

<img src="https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/images/devtree.png"/>

<p>So coming to battery devices, a battery is an ACPI device. The above image shows how a PnP manager maintains a device tree that keeps track of the devices in the system. (Just for the understanding ;) ) Now, the most important function in this context is DeviceIoControl(). Among other parameters what it requires is a Control Code (for e.g IOCTL_BATTERY_QUERY_STATUS) which tells the specified device what should be done. </p>

<img src="https://docs.microsoft.com/en-us/windows-hardware/drivers/install/images/devinfosets.png"/>

<p>To enumerate the battery devices on a local computer, I first used the SetupDiGetClassDevs() to obtain a handle to the Device Info Set. A device information set consists of device information elements for all the devices that belong to some device setup class or device interface class (See the picture for visualization). Then to obtain the names of the battery devices, I used the SetupDiEnumDeviceInterfaces() and SetupDiGetDeviceInterfaceDetail() functions on the data returned. To open a file handle for each of the battery devices, I called the CreateFile() with these names. So this is the basic requirement. After getting the file handle, it can be used to easily communicate with the required device. And as you might have guessed this handle is another important parameter of DeviceIoControl(). Then I used the BATTERY_INFORMATION and BATTERY_STATUS structs to get the required data (of-course using DeviceIoControl) from the battery device. Namely, the 'Current Capacity' and the 'Full Capacity' allows us to provide a relative remaining percentage of battery capacity. All of these was tested first on a standalone console application to make our life.. err.. debugging easy. ;P</p>

<p>Now, the interesting part \^ ^/ was to integrate this code with 'stobject'. Thanx to sir David (famous as gigaherz... and yes it's not herTz ;P ) and sir Eric Kohl who had already designed and coded a huge part of System Tray (in my case power devices) which really made my part a lot easier. I understood their design principles and working of the code and then augmented it as required. After plugging in the above code via a suitable method for retrieving total average remaining capacity and other stuff (like charging or not) the next thing was to animate the battery levels! Using a picture for every percent of battery capacity is unnecessary as you neither be using an 8K or 16K screen nor such super resolution images for a tiny corner of your screen (of-course it won't make a difference to our eyes XD). So first I 'quantized' the battery levels into integer representation. (For excited fellas, sorry, no quantum mechanics here XP) I made a function which takes a percentage quantity and returns a suitable integer level based on the maximum level provided. For starters, I was only able to get up to 5 images for the battery levels which can be easily upgraded if required in the future. The next thing was a core method for loading the images namely the 'DynamicLoadIcon' which I designed to provide the correct image based on the current battery capacity and status. </p>

<p>Following are the snaps showing some of the battery states:</p>
<ol>
<li>See the new battery icon in the notification tray:-
<img src="/sites/default/files/imagepicker/51617/week7_2.jpg" alt="7.2"  class="imgp_img" width="1360" height="768" />
</li>
<li>Remaining battery capacity in battery mode:-
<img src="/sites/default/files/imagepicker/51617/week7_3.jpg" alt="7.3"  class="imgp_img" width="188" height="96" />
</li>
<li>Changed icon in charging mode:- (Notice the tiny lightning symbol on the battery ;P)
<img src="/sites/default/files/imagepicker/51617/week7_4.jpg" alt="7.4"  class="imgp_img" width="185" height="113" />
</li>
<li>Low or Critical battery mode:-
<img src="/sites/default/files/imagepicker/51617/week7_1.jpg" alt="7.1"  class="imgp_img" width="1360" height="768" />
</li>
</ol>

<p>So looks like that's the end of "Phase 2" and we shall move to "Phase 3" which is about some Hotplugs!! To know more about that stuff, Stay Tuned!! ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/stobject">Code Repository : Phase 2</a></li>
</ol>
