---
title:       "ReactOS 0.4.15 released"
author:      "ReactOS Team"
date:        2025-03-21
tags:        [ "release" ]
banner:      "img/project-news/reactos-0415-released/thumb.png"
---

We are pleased to announce the release of ReactOS 0.4.15!
This release offers Plug and Play fixes, audio fixes, memory management fixes, registry healing, improvements to accessories and system tools including Notepad, Paint, RAPPS, the Input Method Editor, and shell improvements. 

We chose to release this version of ReactOS in honor of Eric Kohl's [first commit](https://git.reactos.org/?p=reactos.git;a=commit;h=108fcceee22216b169b448932bb3f86c81b9448e) to the ReactOS code base, which dates back to 1999.
Eric Kohl is the oldest active contributor of the project, and this is his 26th ReactOS anniversary!
He has participated in the project as a developer since its beginnings.

![Eric Kohl's commit activity on GitHub](/img/project-news/reactos-0415-released/EricKohl.png)

This release is a culmination of the work of numerous contributors since 0.4.14 was branched in 2020.
This has been the largest release to date.
There are nearly 8 times more commits going into this release than in 0.4.14.
We are proud of the progress we have made, and are eager to continue with this growth.
Let's dive in and see what's new.

## Plug and Play 
Victor Perevertkin (Extravert-ir) has accomplished major rewrites to the Plug and Play Manager in the ReactOS kernel.
With these changes, ReactOS now has the ability to run more third party drivers and to boot from USB devices.
This also allows ReactOS to boot on chipsets with EHCI, OHCI, and UHCI controllers.
This work is a stepping stone to ReactOS being truly compatible with vendor drivers for the Windows operating system.

Johannes Anderwald (janderwald) solved an issue where the USB driver would enter an infinite loop when a USB device would not enter the ready state.
Fixing this infinite loop allowed ReactOS to boot on more hardware.

## Audio
Thanks to the work of Oleg Dubinskiy, 0.4.15 features many audio improvements.
Oleg added support for more audio formats, looped playback of wave files, higher sample rates, and multiple output channels.
In addition, Victor Perevertkin imported the open source AC'97 driver from the Windows Driver Kit (WDK).
This enables sound out of the box in VirtualBox when the virtual machine is configured to use the ICH AC'97 Audio Controller and various motherboards from 2004 and earlier.

## Memory Manager and Cache Controller
Section Objects have been refactored by Jérôme Gardou (zefklop) for better compatibility with Windows.
This fixes a long-standing bug preventing executables from starting in remote locations, such as network shares or virtual machine shared folders.

Because of improvements in the memory manager and cache controller, we can now import the open source Microsoft FAT filesystem driver from the Windows Driver Kit (WDK).
This FAT filesystem driver is a huge improvement from the old one, which was slower and less stable.
Additionally, external drives with FAT filesystem can now be properly ejected thanks to this new driver.

## Registry Healing and Caching
Fundamental mechanisms of the system registry have been implemented courtesy of George Bișoc (GeoB99).
These mechanisms include registry healing, flushing, and caching.
Registry healing and flushing are both designed to improve system stability when faced with an unexpected power outage or a crash.
Healing applies appropriate fixes to a corrupted registry and flushing periodically writes registry changes to the disk, ensuring registry changes persist even if the system is not cleanly shut down.
Caching improves performance when accessing it.

## Security Subsystem
George Bișoc also improved the Security Subsystem (Se) of the kernel.
Prior to George's work, kernel access checks always passed, allowing anyone to access any system object.
Now, kernel access checks are fully functional and prevent unauthorized access to system objects.
As a result, the Windows kernel now works with the vast majority of modules from ReactOS.

## Accessories and System Tools
Katayama Hirofumi MZ (katahiromz) has been hard at work making quality of life improvements, performance enhancements, and new features in system accessories such as the text tool in Paint and the "Now Printing" dialog in Notepad.
Katayama Hirofumi MZ has also improved the Input Method Editor (or IME), which is a component that types characters not originally present on the connected input devices by using a sequence of characters.
His work improved CJK support and allows for the installation of custom IMEs for different locales. For example, Japanese ReactOS can now utilize MZ-IME Japanese input.
Whindmar Saksit (whindsaks) made several bugfixes to improve the stability of RAPPS and Hermès Bélusca-Maïto (HBelusca) implemented a minimal view mode for RAPPS for uninstalling programs.

{{< gallery >}}
{{< figure link="/img/project-news/reactos-0415-released/ime.png" src="/img/project-news/reactos-0415-released/ime.png" caption="Japanese input with MZ-IME and CJK font">}}
{{< /gallery >}}

## Shell
In 0.4.15 the graphical shell was improved by several contributors.
Carl Bialorucki (cbialorucki) added support for large taskbar icons.
Mark Jansen (learn-more) added native ZIP archive support.
Doug Lyons (DougLyons) made several fixes to address an issue where incorrect icons were displayed in programs such as Microsoft Office 2000, Microsoft Visual Basic 6, and Hoyle Cards.
Katayama Hirofumi MZ added support for the "Internet Browser" icon on the desktop.
In addition, Whindmar Saksit made several bugfixes to improve the stability of Shell32, a critical component of the ReactOS shell.

{{< gallery >}}
{{< figure link="/img/project-news/reactos-0415-released/large_taskbar2.png" src="/img/project-news/reactos-0415-released/large_taskbar2.png" caption="Large taskbar icons">}}
{{< figure link="/img/project-news/reactos-0415-released/zip_extract_wizard2.png" src="/img/project-news/reactos-0415-released/zip_extract_wizard2.png" caption="ZIP extraction wizard">}}
{{< figure link="/img/project-news/reactos-0415-released/zip_virtual_folder2.png" src="/img/project-news/reactos-0415-released/zip_virtual_folder2.png" caption="ZIP virtual folder">}}
{{< /gallery >}}

In this release, we also decided to set the default visual style and wallpaper to Mizu.
More visual styles and wallpapers are available in RAPPS.

## Where are we going?
ReactOS is a community of people focused around the Windows ecosystem and free open source software.
It includes various projects to research and document Windows internals, use Windows software in a free enviornment, and make life easier for the broader Windows developer community.

0.4.15 was branched 6 months ago.
Since then, many new and exciting features have been worked on in the master branch.
UEFI support, symmetric multiprocessing (SMP), a new graphical installer, a new NTFS filesystem driver, power management, and newer application support are just a few features being worked on.
We are excited to share this journey with you as ReactOS improves and matures.

Sincerely,

The ReactOS Team

[Download ReactOS 0.4.15](https://reactos.org/download/)

## Statistics
Resolved Jira issues: 1,319

Commits: 8,600+

Oldest Jira issue resolved: [CORE-1091](https://jira.reactos.org/browse/CORE-1091) from 19 December 2005

- [Official Changelog](https://reactos.org/wiki/Changelog-0.4.15)
- [Community Changelog](https://reactos.org/wiki/Community_Changelog-0.4.15)
- [Application Tests](https://reactos.org/wiki/Tests_for_0.4.15)

The [releases/0.4.15](https://github.com/reactos/reactos/tree/releases/0.4.15) branch was forked from [master](https://github.com/reactos/reactos) on 10 September 2024 after [945e856](https://github.com/reactos/reactos/commit/945e856031137b566e616248e2f80c92be807c45)
