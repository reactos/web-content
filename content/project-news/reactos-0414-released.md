---
title:       "ReactOS 0.4.14 released"
author:      "ReactOS Team"
date:        XXXX-XX-XX
tags:        [ "release" ]
banner:      "img/project-news/reactos-0414-released/thumb.png"
---

The ReactOS Team is pleased to announce the release of version 0.4.14.
As with every other release, we're regularly noting improvements and updates to keep you in touch with what is being done to ReactOS.
In this release, improvements range from FreeLoader fixes, Shell features, kernel fixes, NetKVM VirtIO bringup, further work to the Xbox port and support for NEC PC-9800.

{{< figure link="/img/project-news/reactos-0414-released/banner.png" src="/img/project-news/reactos-0414-released/banner.png" >}}

## "Send-To" feature and Shell improvements
The main highlight of this release is the incremental amount of improvements done to the Shell component of ReactOS, a highly vital model responsible for the interaction with the system and the user.
Katayama Hirofumi MZ is the pioneer of the "Send-To" implementation, a feature of the Shell which the user can send files or directories to a certain location. 

In addition, "Open File Location" and "Open Command prompt here" were also implemented thanks to him.
Apart from the aforementioned features, let's not forget the bug fixes that affected the operability of the Shell.
Katayama Hirofumi MZ fixed the scroll selection and Mark Jansen improved some COM (Component Object Model) interfaces, so that certain drag and drop regressions could be fixed.
The following implementations of "Send-To" and "Open File Location" features are shown in the following screenshots below.

{{< figure link="/img/project-news/reactos-0414-released/shell.png" src="/img/project-news/reactos-0414-released/shell.png" >}}

## NEC PC-9800 boot support
NEC PC-9800 (or PC-98 in short) is a series of 16-bit and 32-bit Japanese computers developed and manufactured by NEC.
As those type of hardware use x86 architecture as its main core, this could bring up an advantage for ReactOS as in porting the system on various architectures and at the same time finding and catching bugs in the kernel mode modules of ReactOS.

Dmitry Borisov, a new ReactOS contributor, partook in the scene of helping getting the PC-98 port complete.
While there are stuff left to be done in the development of PC-98 boot support, Dmitry Borisov made great strides to make ReactOS booting on PC-98.
The following screenshot below demonstrates ReactOS booting on Neko Project 21/W emulator.

{{< figure link="/img/project-news/reactos-0414-released/nec98.png" src="/img/project-news/reactos-0414-released/nec98.png" >}}

## ICMP improvements
Internet Control Message Protocol (or ICMP by short) is a protocol used by network device drivers to send network information such as errors or log status.
The implementation was rather scarce and incomplete with pieces of code unimplemented or unfinished.
The IP Helper module majorly uses this protocol and as a matter of that, it brought a lot of issues and bugs. 

Thanks to Victor Perevertkin and with the help of Tim Crawford, the ICMP protocol implementation has seen lots of improvements, that is, ranging from the implementation of
IOCTL_ICMP_ECHO_REQUEST I/O control code as well as rewriting Icmp** function routines. Thanks to that the network device drivers can handle ICMP requests in a correct manner. In the screenshot below here is tracert command utility that outputs complete information thanks to the work done to ICMP.

{{< figure link="/img/project-news/reactos-0414-released/icmp.png" src="/img/project-news/reactos-0414-released/icmp.png" >}}

## Kernel improvements
The NT kernel of ReactOS is the heart that is primarly responsible for the well functioning of the system and communication with the bare metal. The stability of the system drastically relies on the robustness of the kernel, that is, a kernel with less bugs.
The developers squash the bugs in the kernel to offer overall stability and better experience with each release and here we noted several improvements brought to the kernel. Various bugs to the Memory Manager module have been fixed thanks to Thomas Faber and
speaking of the aforementioned module, Vadim Galyant began the work for support of PAE (Physical Address Extension) and did some work for the Memory Manager sections rewrite.

Timo Kreuzer added CRT (C Run-Time) exception handling by importing related code from WINE. This allows for 64-bit development to go further as various bugs and random hangs in 64-bit system have been resolved. The I/O manager module of the kernel has seen
major improvements with the implementation of letter assigning to disks rewritten by Pierre Schweitzer and Ft volumes are properly checked where Unix drives were not assigned a drive letter. Victor Perevertkin fixed a bug in storage class PnP driver (classpnp.sys) 
and both Timo Kreuzer and Thomas Faber fixes some buffer overflows vulnerabilities. To finish with, Eric Kohl improved the device action worker code in I/O.

Let's not forget the PnP (Plug n' Play) manager of the kernel which is also and important part not only in regard of stability the usability of the system to a plethora of hardware. Vadim Galyant added the initial headers implementation of the Resources Arbiter library which can be used by the bus
drivers like ACPI, PCI or legacy PIC HAL. In addition to that Vadim implemented debug code both in PnP and I/O managers whereas Eric Kohl improved the PnP manager to map device capabilities to capability flags. Thomas Faber fixed a critical bug that could
cause memory corruption in the kernel space and fixed a bad IRP (I/O request packet) handling that caused a BSoD (Blue Screen of Death) on first generation Xbox console machine with USB enabled. 

The Kernel Debugger (KD) and related modules have also received updates from developers and contributors alike. Dmitry Borisov added ComPort library for NEC PC-98 which is fundemantal in the further development and support of NEC series. Hermès Bélusca-Maïto has finished the support for debug filters, improved `cregs` and `tss` (present only in GCC debug builds) command,
rewrote the TSS handling code and squashed various bugs with it. Namely the issue with KDBG backtrace when a TSS switch happened during execution. Furthermore, Jérôme Gardou alongside with Hervé Poussineau brought some fixes and improvements to the KDBG module.

## NetKVM VirtIO bringup
NetKVM VirtIO is a NDIS 5 compatible driver developed by Red Hat Inc. which allows fast VirtIO networking in virtual machine software such as QEMU and other KVM hardware accelerated virtual machines.
Nguyen Trung Khanh, a ReactOS contributor, took over the Benjamin Aerni's work at importing the driver into the source tree of ReactOS and for this matter this heavily benefits the networking stack.

## Miscellaneous changes & improvements
Other areas of ReactOS infrastructure have received lots improvements, ranging from device drivers to software applications of ReactOS by various developers and contributors. Notably FreeLoader, the ReactOS' bootloader, received incremental fixes and further support improvements. As such Hermès Bélusca-Maïto added support for booting Linux 64-bit systems in 64-bit FreeLoader and fixed an issue where
FreeLoader couldn't read from an EXT volume hence preventing booting. Dmitry Borisov fixed a serious triple fault bug when ReactOS was booted up in Screen mode. In addition to that, Dmitry Borisov also provided other fixes as well as adding ARC-emulation support necessary for NEC PC-98 series.
Mark Harmstone also brought some fixes for the bootloader so that Windows Vista can be properly booted. On-Screen Keyboard and Accessbility Utility Manager are being regularly updated by Bisoc George and at the same time he provided some fixes or minor improvements to other parts of ReactOS.

Hervé Poussineau worked hard on ISA PnP (a driver component of PnP) which detects ISA devices although such driver is currently deactivated.
Mark Jansen fixed a bug in comctl32 (Common Controls) module where Visual Basic 6 installer was rendered incorrectly. Eric Kohl worked on "Safely Remove Hardware" dialog manager where the peripherals are now enumerated for safely removal.

What is particularly different between 0.4.13 and this release is the sleek performance due to obsolete fonts removed in ReactOS by Katayama Hirofumi MZ. This both reduced the binary size of this release and the RAM consumption.
Here is a comparison between 0.4.13 (with the obsolete fonts used and loaded in memory) and 0.4.14.

{{< figure link="/img/project-news/reactos-0414-released/misc.png" src="/img/project-news/reactos-0414-released/misc.png" >}}

The 64-bit ReactOS port is extensively being worked on by Timo Kreuzer with continuous work on interrupt handling and other hardware issues like USB and networking issues in x64 build.
Stanislav Motylkov still continues on working on Xbox boot support ranging from fixes patches and other updates brought by him. In addition to that Hermès Bélusca-Maïto fixed some old bugs notably a corruption in the CONSRV memory when converting
input events back to ANSI and a bug in HAL where the system lead into an assertion failure sporadically.

## Third Party Syncs
ReactOS is a FOSS (Free or Open Source) operating system that abides by the general rule of being a free operating system, as in free beer, and open source where people can study the OS and contribute with code.
As such, ReactOS shares modules and code from other third-party open source projects are being regularly updated by the ReactOS developers. The following recent syncs as of this release are follows.

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
JIRA Issues fixed of this release - 224     
Number of commits as of this release - 1566     
Oldest issue fixed as of this release - CORE-3071

* [The official Changelog for the 0.4.14 release](/wiki/ChangeLog-0.4.14)
* [The less technical Community Changelog for 0.4.14](/wiki/Community_Changelog-0.4.14)
* [Application Tests for 0.4.14](/wiki/Tests_for_0.4.14)

[releases/0.4.14](???) branch was forked from [master](https://github.com/reactos/reactos) on 2020-04-24 after 0.4.14-dev-1562-g4d2d2db
