---
title:       "Newsletter 103 - Late 2023 news"
author:      "GeoB99"
date:        2023-11-05
tags:        [ newsletter ]
---

Salutations from the ReactOS project team!
In previous posts, we talked about the ReactOS releasing process and the development status of the project, as well as the hiring of our long-term developer Hermès Bélusca-Maïto (HBelusca).
We are making an effort to publish at least 3 newsletters per year, depending on how the development workflow goes.
In this newsletter we will highlight some of the contributions made by project developers and contributors, as well as future plans and headlines.

## 0.4.15 release status
In the [102nd newsletter](/blogs/newsletter-102/) we talked about the ReactOS release situation and how we are tackling it.
Despite our on-going efforts and continuation for the project's development, many people have asked about what happened to version 0.4.15 and if there will be such a release.
The answer to these questions is yes -- there will be a 0.4.15 release.
The 0.4.15 release has been long delayed due to outstanding regressions and bugs.

Most notably it was a regression which made it impossible [to copy files larger than the amount of RAM using Total Commander 9.12](https://jira.reactos.org/browse/CORE-17624), that was long unfixed for some time after the rewrite of some parts of the Memory Manager.
While it has been hackfixed by [PR #5630](https://github.com/reactos/reactos/pull/5630), a proper solution is yet to be worked on.
However, this brings us one step closer to releasing 0.4.15.

Due to development resources and manpower constraints we cannot give an exact estimation when 0.4.15 will be released to the general public but we will eventually get there.
We are sorry for the inconvenience!
In the meantime you can try [nightly builds](/getbuilds) that are packed with the latest bugfixes, new features and whatnot, but also expect new bugs!

## Kernel Debugger overhaul
Historically, ReactOS was built with the GCC compiler.
To help with kernel development, a local kernel debugger (KDBG) was developed.
Unfortunately, KDBG could only understand an in-house debug symbol format that was incompatible with Microsoft's PDB format.
Because KDBG was a local debugger, it was able to interact with the user via a serial port connection or locally via screen display.
Input could be entered via serial or a PS/2 keyboard.

Later on, the possibility to compile ReactOS with MSVC was added, and with it, support for the WinDbg debugger.
Kernel debugging with WinDbg works by having a debugger stub on the target which is capable of manipulating the state of the OS, while the actual debugger is offloaded to a host computer.

Based on work from previous developers (Hervé Poussineau and Timo Kreuzer), Hermès is updating KDBG with new features and bug fixes to make it easier for developers and testers alike to reliably debug ReactOS.
Improvements for KDBG include:

- Isolating terminal and input-related functionalities from the rest of KDBG ([#5188](https://github.com/reactos/reactos/pull/5188));
- Fixing an input buffer reading bug in `KdbpReadCommand()` and `KdReceivePacket()` routines ([#4914](https://github.com/reactos/reactos/pull/4914));
- Reworking the boot-phase initialization of KD and KDBG ([#4892](https://github.com/reactos/reactos/pull/4892));
- Moving the code handling of Dmesg buffer from screen provider to KDBG provider ([#5143](https://github.com/reactos/reactos/pull/5143));

The goal of this work is to have a terminal version of KDCOM and separate KDBG into a dedicated KDCOM-like extension DLL, such as `kdrosdbg.dll` (see [#4600](https://github.com/reactos/reactos/pull/4600)).
All of this effort is further coordinated with the help of Timo Kreuzer.

## UEFI Boot
Thanks to the work of Timo Kreuzer (tkreuzer) our AMD64 builds are now capable of booting on an increasing number of hardware.
Thanks to Timo's and Justin's work, we are working towards supporting modern devices with UEFI class 3 firmware.
Work has been underway since the beginning of the year to transition FreeLoader, our default bootloader for ReactOS, to support UEFI on x86 and AMD64, as well as ARM32 and ARM64.
Hermès has been developing a system for passing the UEFI framebuffer information in a fashion that allows Windows XP to run on UEFI systems, while Justin Miller (The_DarkFire_) has been developing the UEFI freeloader build.

On top of supporting booting ReactOS, other features are being built such as EFI chainloading and a bootmgfw-compatible build of FreeLoader.
These features would add boot management capabilities and allow modern Windows systems to bootstrap our favorite bootloader.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/uefi.png" src="/img/blogs/newsletter-103/uefi.png" caption="Running ReactOS on a Steam Deck" >}}
{{< figure link="/img/blogs/newsletter-103/htc_hd2.png" src="/img/blogs/newsletter-103/htc_hd2.png" caption="Running FreeLoader on a HTC HD2" >}}
{{< figure link="/img/blogs/newsletter-103/lumia950xl.png" src="/img/blogs/newsletter-103/lumia950xl.png" caption="Running FreeLoader on a Lumia 950XL" >}}
{{< figure link="/img/blogs/newsletter-103/bootmgfw_freeldr.png" src="/img/blogs/newsletter-103/bootmgfw_freeldr.png" caption="ReactOS FreeLoader boot entry shown in Windows Boot Manager in a Framework laptop" >}}
{{< figure link="/img/blogs/newsletter-103/apple.png" src="/img/blogs/newsletter-103/apple.png" caption="Running FreeLoader on a Apple iPhone 5c" >}}
{{< /gallery >}}

It's worth noting that FreeLoader runs natively on the aforementioned devices, without emulators of any kind.

**WARNING:** UEFI support in ReactOS is experimental and under heavy development. It is not yet ready for general use and is not currently present in our main repository.
We currently cannot give an estimate as to when it will be done, so please stay tuned!

## Shell improvements
Doug Lyons, Katayama Hirofumi MZ (katahiromz) and Carl Bialorucki (cbialorucki) are extensively improving the Shell component of ReactOS to provide a better user experience with the operating system.
Notably Doug Lyons improved the toolbar icon display in MS Office 2000 and other programs, by fixing some bugs in the internal functions (`SetDIBitsToDevice` and `NtGdiSetDIBitsToDeviceInternal`).

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/before.png" src="/img/blogs/newsletter-103/before.png" caption="BEFORE" >}}
{{< figure link="/img/blogs/newsletter-103/after.png" src="/img/blogs/newsletter-103/after.png" caption="AFTER" >}}
{{< /gallery >}}

Katayama improved ZIP archive file support to allow zipping or unzipping files and folders that have UTF-8 characters in them.
This will greatly help with the interoperability between systems with different language settings.
In addition to that, we can choose the code-page of ZIP compression/extraction by using the following registry key (`HKCU\Software\ReactOS:ZipCodePage / UnZipCodePage`).

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/utf8.png" src="/img/blogs/newsletter-103/utf8.png" caption="Extracting from a ZIP file that has Japanese characters on a Chinese locale system">}}
{{< /gallery >}}

Katayama added an "Internet Browser" icon in the desktop workspace, which will open the default web browser that is installed onto the computer.
In the future this icon can be hidden through Shell settings.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/internet.png" src="/img/blogs/newsletter-103/internet.png" >}}
{{< /gallery >}}

Carl added support for large taskbar icons in the Explorer component of the shell.
This can help with people with visual impairments.
This feature can be toggled from Taskbar Properties, or through a registry key (`HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\TaskbarSmallIcons`) by setting a value of 0 (big icons) or 1 (small icons).

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/large.png" src="/img/blogs/newsletter-103/large.png" caption="ReactOS taskbar with large icons">}}
{{< /gallery >}}

In addition, Carl improved the balloon tooltip to better match the style and consistency with Windows.
The previous balloon presented artifact issues and could not display the full notification text if it extended over the balloon boundary area.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/before-balloon.png" src="/img/blogs/newsletter-103/before-balloon.png" caption="BEFORE" >}}
{{< figure link="/img/blogs/newsletter-103/after-balloon.png" src="/img/blogs/newsletter-103/after-balloon.png" caption="AFTER" >}}
{{< /gallery >}}

You can track most of his Shell related work [here](https://github.com/reactos/reactos/pulls?q=is%3Apr+author%3Acbialorucki+is%3Aclosed).

## Initial DirectX work-ground
Oleg Dubinskiy is working on squashing bugs that prevented games from using the DirectX kernel subsystem (`dxg.sys`).
More specifically he fixed some issues in the Win32 subsystem kernel backend (`win32k.sys`) where DirectX was not loaded, hence why programs were not able to access DirectX APIs properly ([#4551](https://github.com/reactos/reactos/pull/4551)).

This also fixes an issue where it was not possible to change the display mode in VMware as it attempts to invoke the DirectDraw API to handle display management.
Along with it, he worked on implementing DirectDraw management code in display mode switch ([#4519](https://github.com/reactos/reactos/pull/4519)).
This improves the experience with games that are based upon DirectX stack.

In the meantime Justin Miller is syncing up all of the DirectX DLLs with Wine up to the latest version ([#5688](https://github.com/reactos/reactos/pull/5688)).

## NT6+ application compatibility preparations
A lot of applications that we take for granted, be it games, browsers, E-mail clients, utilities and more, rely on newer APIs provided by Windows.
At the API compatibility level, ReactOS currently aims for Windows Server 2003, which had an NT release version of 5.2; the last iteration in the NT5 family of Windows operating systems.
NT6+ is a terminology that encompasses Windows operating systems such as Vista, 7, 8, 8.1, 10 and 11 that are based on a newer NT architecture design.

As many software developers no longer support older versions of Windows, most of the applications that we use day to day will not work on ReactOS.
However, this is going to change.
A group made up of Timo Kreuzer, Justin Miller, and other developers and contributors alike are developing the necessary APIs for compatibility with modern programs.
While Timo is still working on implementing a dynamic versioning system for DLLs ([#3239](https://github.com/reactos/reactos/pull/3239)) that allows exporting of routines to applications depending on their compatibility settings, he has added the option for ReactOS bot builders to compile builds with NT6 exports which makes it possible to experiment with NT6+ application compatibility.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-103/obs-nt6.png" src="/img/blogs/newsletter-103/obs-nt6.png" caption="OBS 20.1 running on ReactOS (with some glitches)" >}}
{{< figure link="/img/blogs/newsletter-103/obs-stream.png" src="/img/blogs/newsletter-103/obs-stream.png" caption="Streaming ReactOS running OBS 20.1" >}}
{{< /gallery >}}

Keep in mind that while NT6+ compatibility support is still experimental, this only focuses on user mode support.
NT6+ support for kernel mode, such as kernel drivers, the kernel itself, as well as other low-level system core functionalities are an entirely different subject.
While we do aim to reach this goal as well in the future, it would require a lot of time and development effort, therefore we currently cannot give an estimation as of when it will be done.

Thank you for your interest in the ReactOS project. We look forward to sharing more announcements and progress updates with you.

Sincerely,

The ReactOS Team