---
title:       "Newsletter 101 - July 2021 news"
author:      "Extravert34"
date:        2021-07-28
tags:        [ newsletter ]
---

Hello ReactOS followers! This report covers changes in the project during February-July 2021.
And we definitely have some things to highlight!

## amd64 build is getting more stable
Timo Kreuzer (tkreuzer) worked hard on various parts of the kernel and HAL, fixing issues here and there.
Structured Exception Handling (SEH) support for the amd64 architecture was finished, various bugs around the kernel are fixed.
A major issue with interrupt handling in HAL was also fixed in May, which finally allowed a semi-stable boot in a virtual environment.

Only MSVC compiler can produce working 64bit builds at the moment, but this is going to change soon with the upcoming RosBE 2.3
release.
For the first time, we are going to have an official GCC for building the amd64 version.
The build environment is currently in beta and we already found a few last issues, but as soon as they are fixed, it will be the new official release.

In particular, we waited for the final [Binutils 2.37 release](https://sourceware.org/pipermail/binutils/2021-July/117384.html) to include that version in the final RosBE 2.3.
It comes with an important [addition](https://sourceware.org/git/?p=binutils-gdb.git;a=commitdiff;h=d039200a7ee8ac170afbdc3b987af553c07fb6a3) by Jérôme Gardou (zefklop). Apart from that, we still need to change the way GMP is built with GCC to fix GCC plugin support.
When both are done, RosBE 2.3 will most likely go live simultaneously for Windows, Linux, and macOS.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-101/amd64-boot.png" src="/img/blogs/newsletter-101/amd64-boot.png" caption="ReactOS for amd64 running in VirtualBox" >}}
{{< /gallery >}}

Nightly 64bit builds can be downloaded from our [nightly builds page](/getbuilds).

## i686 APIC HAL now works
ReactOS historically uses a legacy HAL on i686 architecture, which works with good old Intel 8259 PIC's interfaces for interrupt handling.
This works in a single CPU environment, but for multiprocessor support, a more modern APIC interrupt handling is required.
Timo Kreuzer also did a great job here reviving old code for APIC support.
APIC HAL can be installed now by choosing the corresponding menu entry in the installer.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-101/installer-hals.png" src="/img/blogs/newsletter-101/installer-hals.png" caption="Updated list of available HALs" >}}
{{< /gallery >}}

## SMP GSoC project
While preparing for the project, Jérôme Gardou and Thomas Faber (thfabba) were testing the kernel build in SMP mode,
but running on a VM with only one CPU assigned.
Our default single-CPU build of ReactOS lacks some code which is not necessary for an
execution on such machines.
Such SMP build revealed issues in kernel locking primitives and bugs in some drivers, which
were successfully [fixed](https://github.com/reactos/reactos/pull/3672).

Our GSoC student, Justin Miller (The_DarkFire) has started implementing the SMP version of the ACPI APIC HAL into ReactOS
which will allow for multicore support.
With the SMP code being generic ReactOS will also get support for other SMP enabled HALs and architectures.

## `iernonce` GSoC project
He Yang (kernel.bin), the 2nd year GSoC student started working on `iernonce` under the guidance of his mentor George Bișoc (GeoB99) and Hermès Bélusca (hbelusca).
ReactOS already supports `RunOnce` registry entry which allows command execution upon machine startup/user login.
`iernonce` will add a possibility to use `RunOnceEx` entry to execute multiple commands in order, with a dialog displaying progress upon machine startup/user login.

## ISA PnP
Dmitry Borisov (disean) [made](https://github.com/reactos/reactos/pull/3467) a massive improvement to our ISA bus driver (`isapnp.sys`),
which opens the possibility to use older Plug and Play ISA hardware, like disk controllers, sound cards, or networking adapters.
They are now detected properly and can be used in the system when an appropriate driver is installed.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-101/isapnp.png" src="/img/blogs/newsletter-101/isapnp.png" caption="isapnp.sys driver exposes new devices" >}}
{{< /gallery >}}

## Sanitizers & Clang build
Jérôme Gardou finally fixed building ReactOS with the Clang compiler and such a build was added to our GitHub CI.
The build is not able to boot yet but the project can already benefit from additional static analysis capabilities of LLVM infrastructure.

Victor Perevertkin (extravert34) revived his Google Sanitizers [branch](https://github.com/reactos/reactos/pull/2527) which is going to benefit
from the Clang support even more and greatly improve the developer experience.

## Input Method Manager library
ReactOS supports many languages already but some of them require an extra effort for a proper support.
The Input Method Manager library (`imm32.dll`) backs the support for all language-specific input methods.
Katayama Hirofumi MZ (katahiromz) has started a rewrite of the `imm32.dll` to improve the Japanese language support.
The work can be seen on [GitHub](https://github.com/reactos/reactos/commits/master/dll/win32/imm32/).

## Multiple monitors support
Hervé Poussineau (hpoussin) started improving the `videoprt.sys` driver to let it support displaying an image on multiple monitors.
So far only a wallpaper is displayed on the secondary monitors, but expect more in the future.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-101/multiple-monitors.png" src="/img/blogs/newsletter-101/multiple-monitors.png" caption="Control panel applet shows multiple monitors" >}}
{{< /gallery >}}

## Other highlights

- Jérôme Gardou continues his paid contract on improving the Memory Manager (`Mm`) stability. `Mm` bugs for amd64 architecture have been fixed, and many other issues not tied to the platform.
- Various fixes have been done around user and kernel mode PnP subsystem for better driver compatibility. (Victor Perevertkin and Eric Kohl)
- George Bișoc steadily improves our Security (`Se`) kernel subsystem for better application compatibility.


Follow our Twitter [@reactos](https://twitter.com/reactos) for receiving project news as soon as possible.

## Expanding Matrix presence

We are expanding our presence in the Matrix universe and created a dedicated Space for the project. Join the discussion in our Matrix Space [#reactos:reactos.org](https://matrix.to/#/#reactos:reactos.org?via=reactos.org).
