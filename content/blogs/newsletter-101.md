---
title:       "Newsletter 101 - July 2021 news"
author:      "Extravert34"
date:        2021-07-26
tags:        [ newsletter ]
---

Hello ReactOS followers! This report covers changes in the project during February-July 2021.
And we definitely have some things to highlight!

## amd64 build is getting more stable
Timo Kreuzer (tkreuzer) worked hard on various parts of the kernel and HAL, fixing issues here and there.
Structured Exception Handling (SEH) support for the amd64 architecture was finished, various bugs around the kernel are fixed.
A major issue with interrupt handling in HAL was also fixed in May, which finally allowed a semi-stable boot in a virtual environment.

## i686 APIC HAL now works
ReactOS historically uses a legacy HAL on i686 architecture, which works with good old Intel 8259 PIC's interfaces for interrupt handling.
This works in a single CPU environment, but for multiprocessor support, a more modern APIC interrupt handling is required.
Timo Kreuzer also did a great job here reviving old code for APIC support.
APIC HAL can be installed now by choosing the corresponding menu entry in the installer.

## SMP GSoC project
While preparing for the project, Jérôme Gardou (zefklop) and Thomas Faber (thfabba) were testing the kernel build in SMP mode,
but running on a VM with only one CPU assigned.
Our default single-CPU build of ReactOS lacks some code which is not necessary for an
execution on such machines.
Such SMP build revealed issues in kernel locking primitives and bugs in some drivers, which
were successfully [fixed](https://github.com/reactos/reactos/pull/3672).

// Justin, put some info about your project here

## ISA PnP
Dmitry Borisov (disean) [made](https://github.com/reactos/reactos/pull/3467) a massive improvement to our ISA bus driver (isapnp.sys),
which opens the possibility to use older PnP ISA hardware like disk controllers, sound cards, and networking adapters.
Those are now detected properly and can be used in the system when an appropriate driver is installed.

{{< figure link="/img/blogs/newsletter-101/isapnp.png" src="/img/blogs/newsletter-101/isapnp.png" >}}

## Sanitizers & Clang build
Jérôme Gardou finally fixed building ReactOS with the Clang compiler and such a build was added to our GitHub CI.
The build is not able to boot yet but the project can already benefit from additional static analysis capabilities of LLVM infrastructure.

Victor Perevertkin (extravert34) revived his Google Sanitizers [branch](https://github.com/reactos/reactos/pull/2527) which is going to benefit
from the Clang support even more and greatly improve the developer experience.

## Input Method Manager library
ReactOS supports many languages already but some of them require an extra effort for a proper support.
The Input Method Manager library (imm32.dll) backs the support for all language-specific input methods.
Katayama Hirofumi MZ (katahiromz) has started a rewrite of the imm32.dll to improve the Japanese language support. The work can be seen on [GitHub](https://github.com/reactos/reactos/commits/master/dll/win32/imm32/).

## Multiple monitors support
Hervé Poussineau (hpoussin) started improving the videoprt.sys driver to let it support displaying an image on multiple monitors.
So far only a wallpaper is displayed on the secondary monitors, but expect more in the future.

{{< figure link="/img/blogs/newsletter-101/multiple-monitors.jpg" src="/img/blogs/newsletter-101/multiple-monitors.jpg" >}}

## Other highlights

- Jérôme Gardou continues his paid contract on improving the memory manager (MM) stability. MM bugs for amd64 architecture have been fixed, and many other issues not tied to the platform.
- Various fixes have been done around user and kernel mode PnP subsystem for better driver compatibility. (Victor Perevertkin and Eric Kohl)
- George Bișoc steadily improves our Security (SE) kernel subsystem for better application compatibility.

## Expanding Matrix presence

We are expanding our presence in Matrix universe and created a dedicated space for the project. Join the discussion in our Matrix space #reactos:reactos.org.



 
