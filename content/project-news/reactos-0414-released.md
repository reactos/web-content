---
title:       "ReactOS 0.4.14 released"
author:      "ReactOS Team"
date:        2021-12-16
tags:        [ "release" ]
banner:      "img/project-news/reactos-0414-released/thumb.png"
---

The ReactOS Team is pleased to announce the release of version 0.4.14.
As with every other release, we're regularly noting improvements and updates to keep you in touch with what is being done in ReactOS.
In this release, improvements range from FreeLoader fixes, Shell features, kernel fixes, NetKVM VirtIO bringup, further work on the Xbox port and support for NEC PC-9800.

Note that it took us over a year to get this release in shape and fix regressions.
As such, ReactOS 0.4.14 does not contain the very latest developments we advertised in 2021 on our blog and on social media. They can be found instead in our nightly builds.
Consider this a maintenance release, and stay tuned for what's coming next!

{{< figure link="/img/project-news/reactos-0414-released/banner.png" src="/img/project-news/reactos-0414-released/banner.png" >}}

## "Send To" feature and Shell improvements
One of the main highlights of this release is the amount of improvements done to the Shell component, which makes up a vital part of the ReactOS user experience.
Katayama Hirofumi MZ is the pioneer of the "Send To" implementation, a feature of the Shell that can be used to send files or directories to a certain predefined location.

In addition, "Open File Location" and "Open Command prompt here" were also implemented thanks to him.
Apart from the aforementioned features, let's not forget the bug fixes that affected the operability of the Shell.
Katayama Hirofumi MZ fixed the scroll selection and Mark Jansen improved some COM (Component Object Model) interfaces, so that certain drag-and-drop regressions could be fixed.
The implementations of "Send To" and "Open File Location" are shown in the screenshots below:

{{< figure link="/img/project-news/reactos-0414-released/shell.png" src="/img/project-news/reactos-0414-released/shell.png" >}}

## NEC PC-9800 boot support
[NEC PC-9800](https://en.wikipedia.org/wiki/PC-9800_series) (or PC-98 in short) is a series of 16-bit and 32-bit Japanese computers developed and manufactured by NEC.
As that type of hardware is based on x86 processors, it is a relatively easy porting target.
Nevertheless, every port to another architecture opens up possibilities for finding and fixing bugs in the core modules of ReactOS.

Dmitry Borisov, a new ReactOS contributor, helped to get the PC-98 port in shape.
While there is work left to be done in the development of PC-98 boot support, Dmitry Borisov made great strides to get ReactOS booting on that platform.
The following screenshot below demonstrates ReactOS booting on the Neko Project 21/W emulator.

{{< figure link="/img/project-news/reactos-0414-released/nec98.png" src="/img/project-news/reactos-0414-released/nec98.png" >}}

## ICMP improvements
[Internet Control Message Protocol](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) (or ICMP by short) is a protocol used by network devices to send and receive information such as errors or log status.
The implementation, primarily residing in our IP Helper API module (iphlpapi.dll), was rather scarce and incomplete with pieces of code unimplemented or unfinished.

Thanks to Victor Perevertkin, and with the help of Tim Crawford, the ICMP protocol implementation has seen lots of improvements.
These range from the implementation of the IOCTL_ICMP_ECHO_REQUEST I/O control code to a full  rewrite of the Icmp** routines.
As a result, the network device drivers can now pass ICMP request and response packets to the applications in a correct manner.
This is proven in the screenshot below, which shows the tracert command-line utility now outputting complete information.

{{< figure link="/img/project-news/reactos-0414-released/icmp.png" src="/img/project-news/reactos-0414-released/icmp.png" >}}

## Kernel improvements
The ReactOS kernel is responsible for the correct functioning of the operating system and interfacing with the bare metal.
The stability of the system drastically relies on the robustness of the kernel.
Every bug counts here.

With every release, the developers squash bugs in the kernel to offer a better overall stability and experience.
ReactOS 0.4.14 comes with several improvements to the Memory Manager thanks to Thomas Faber.
Speaking of the aforementioned module, Vadim Galyant did some initial work on PAE (Physical Address Extension) and contributed towards the Memory Manager sections rewrite.

Timo Kreuzer added CRT (C Run-Time) exception handling by importing related code from WINE. This allows 64-bit development to proceed as various bugs and random hangs on 64-bit systems have been resolved.
Victor Perevertkin fixed a bug in storage class PnP driver (classpnp.sys) 
and both Timo Kreuzer and Thomas Faber fixed some buffer overflows vulnerabilities. To finish with, Eric Kohl improved the device action worker code in I/O subsystem.

Let's not forget the PnP (Plug n' Play) manager of the kernel which is also an important part not only in regard to stability, but also the usability of the system with a plethora of hardware.
Vadim Galyant added the initial headers implementation of the Resources Arbiter library which can be used by the bus
drivers like ACPI, PCI or legacy PIC HAL. In addition to that Vadim implemented debug code both in PnP and I/O managers whereas Eric Kohl improved the PnP manager to map device capabilities to capability flags. Thomas Faber fixed a critical bug that could
cause memory corruption in the kernel space and fixed a bad IRP (I/O request packet) handling that caused a [Blue Screen](https://en.wikipedia.org/wiki/Blue_screen_of_death) on an Original Xbox console with USB enabled. 

The Kernel Debugger (KD) and related modules have also received updates from developers and contributors alike. Dmitry Borisov added ComPort library for NEC PC-98 which is fundamental in the further development and support of NEC series. Hermès Bélusca-Maïto has finished the support for debug filters, improved the `cregs` and `tss` commands included in the interactive kernel debugger (KDBG, present only in GCC debug builds),
rewrote the TSS handling code and squashed various bugs with it. Namely the issue with the KDBG backtrace when a TSS switch happened during execution. Furthermore, Jérôme Gardou alongside with Hervé Poussineau brought some fixes and improvements to the KDBG module.

## NetKVM VirtIO bringup
NetKVM VirtIO is an NDIS 5 compatible driver developed by Red Hat Inc., which allows fast VirtIO networking in virtual machine software such as QEMU and other KVM hardware accelerated virtual machines.
Nguyen Trung Khanh, a ReactOS contributor, took over Benjamin Aerni's work of importing the driver into the source tree of ReactOS.
This provides ReactOS with support for another network interface out of the box.

## Miscellaneous changes & improvements
Other areas of ReactOS infrastructure have received lots improvements by various contributors, ranging from device drivers to software applications. Notably FreeLoader, the ReactOS' bootloader, received incremental fixes and improvements. As such Hermès Bélusca-Maïto added support for booting Linux 64-bit systems in 64-bit FreeLoader and fixed an issue where
FreeLoader couldn't read from an EXT2 volume hence preventing booting. Dmitry Borisov fixed a serious triple fault bug when ReactOS was booted up in Screen debugging mode. In addition to that, Dmitry Borisov also provided other fixes as well as added ARC-emulation support necessary for NEC PC-98 series.
Stanislav Motylkov still continues his work on Xbox boot support ranging from fixes patches and other updates brought by him. This is mainly the platform bring up, refactoring and abstraction of existing low-level code.
Hermès Bélusca-Maïto also fixed several old bugs, notably a corruption in the console emulation (CONSRV) layer's memory when converting input events back to ANSI and a bug in HAL where the system lead into an assertion failure sporadically.

George Bișoc updated the On-Screen Keyboard and Accessbility Utility Manager and at the same time provided minor fixes and improvements to different parts of ReactOS.

Hervé Poussineau worked hard on ISA PnP driver which detects ISA devices although such driver is currently deactivated.
Mark Jansen fixed a bug in comctl32 (Common Controls) module where Visual Basic 6 installer was rendered incorrectly. Eric Kohl worked on "Safely Remove Hardware" dialog manager where the peripherals are now enumerated for safely removal.

What is particularly different between 0.4.13 and this release is the sleek performance increase due to obsolete fonts being removed by Katayama Hirofumi MZ. This both reduced the binary size of this release and the RAM consumption.
Here is a comparison between 0.4.13 (with the obsolete fonts used and loaded in memory) and 0.4.14.

{{< figure link="/img/project-news/reactos-0414-released/misc.png" src="/img/project-news/reactos-0414-released/misc.png" >}}


## Third Party Syncs
ReactOS is a FOSS (Free or Open Source) operating system that abides by the general rule of being a free operating system, as in "free beer", and open source where people can study the OS and contribute with code.
As such, ReactOS shares modules and code from other third-party open source projects which are regularly updated by the ReactOS developers. The following syncs are part of this release:

* Wine Staging 4.18 user mode DLLs by Amine Khaldi
* mpg123 1.25.13 by Thomas Faber
* libjpeg 9d by Thomas Faber
* mbedtls 2.7.14 by Thomas Faber
* libtiff 4.1.0 by Thomas Faber
* ACPICA 20200326 by Thomas Faber
* BtrFS 1.7.2 by Pierre Schweitzer and Victor Perevertkin
* glu32 9.0.1 by Masanori Ogino
* Updated root certificates by Thomas Faber

## Statistics
JIRA Issues fixed: 371  
Number of commits: >1690  
Oldest issue fixed: [CORE-3071](https://jira.reactos.org/browse/CORE-3071)

* [The official Changelog for the 0.4.14 release](/wiki/ChangeLog-0.4.14)
* [The less technical Community Changelog for 0.4.14](/wiki/Community_Changelog-0.4.14)
* [Application Tests for 0.4.14](/wiki/Tests_for_0.4.14)

[releases/0.4.14](https://github.com/reactos/reactos/tree/releases/0.4.14) branch was forked from [master](https://github.com/reactos/reactos) on 2020-04-24 after 0.4.14-dev-1562-g4d2d2db
