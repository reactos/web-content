---
title:       "ReactOS 0.4.15 released"
author:      "ReactOS Team"
date:        2025-03-21
tags:        [ "release" ]
banner:      "img/project-news/reactos-0415-released/thumb.png"
---

We are pleased to announce the release of ReactOS 0.4.15! There are some great new features including improvements to accessories such as notepad and paint, explorer shell, input method editor, registry healing, USB boot, Audio, memory management, ISA bus driver, and kernel debugger.

This release is a culmination of the work of countless contributors since 0.4.14 was branched in 2020. This has been the largest release to date. There are nearly 8 times more commits this release than in 0.4.14. We are extremely proud of the progress we have made, and cannot wait to continue in this growth. Development on ReactOS has been growing exponentially! Let's dive in and see what's new.

## Accessories and System Tools
Katayama Hirofumi implemented quality of life improvements, performance enhancements, and new features such as the "text tool" in Paint and the "Now Printing" dialog in Notepad.

Katayama has built out the Input Method Editor (or IME), which is a component that facilitates the typing of characters not originally present on the input devices by using a sequence of characters. This improves CJK support and allows installation of custom IMEs for different locales. Additionally, Japanese ReactOS recognizes and can use MZ-IME Japanese input.
**Image here would be nice.**

## Explorer Shell
In 0.4.15 the Explorer shell was improved by Doug Lyons, Katayama Hirofumi MZ (katahiromz) and Carl Bialorucki (cbialorucki). They added the toolbar icon display, ZIP archive support, taskbar icons, and the addition of an "Internet Browser" icon on the desktop.
**Images here would be nice.**

## Registry Healing
Registry self-healing mechanisms and CmCheckRegistry have been implemented courtesy of George Bișoc. These are fundamental functions that validate the registry. For any corrupted parts of the registry appropriate actions in recovering a registry hive from corrupt parts is activated.
Registry flusher of ReactOS has been fixed, and registry cache implementation is new.

## USB Boot
Victor Perevertkin has accomplished major code cleanup and refactoring for better compatibility with Windows drivers and USB booting. (PnP and I/O Kernel stack)

## ISA PnP
Dmitry Borisov (disean) improved ISA bus driver so older Plug and Play ISA hardware such as disk controllers, sound cards, or networking adapters are detected properly and can be used when the proper driver is installed.
**Image here would be nice.**

## Audio
Thanks to the work of Oleg Dubinsky, 0.4.15 features many audio improvements.
- Handling modern audio formats, looped wave playback, and support for high sample rates and multiple output channels.
- **Is this disabled?**

## Memory Manager and Cache Controller
The Section Objects feature has been refactored by Jérôme Gardou for better compatibility with Windows. This fixes a long-standing bug preventing executables from starting from remote locations.
Another long-standing bug has been fixed which prevented starting of executables from remote locations (CORE-10038).
The open source Microsoft FAT filesystem driver is enabled by default now. This is a huge improvement from the old filesystem driver which was slower and less stable.
Additionally, external drives with FAT filesystem can now be properly ejected.

## Kernel Debugger
The local kernal debugger, KDBG, has been implemented. New features and bug fixes for more reliable debugging include:
-Isolating terminal and input-related functionalities from the rest of KDBG (#5188)
-Fixing an input buffer reading bug in KdbpReadCommand() and KdReceivePacket() routines (#4914)
-Reworking the boot-phase initialization of KD and KDBG (#4892)
-Moving the code handling of Dmesg buffer from screen provider to KDBG provider (#5143)
Based on work from previous developers (Hervé Poussineau and Timo Kreuzer), Hermès is updating KDBG.
**Much of this section is copied verbatim, I am not sure how to reword it**

## Where are we going?
ReactOS is a community of people focused around the Windows ecosystem and free open source software. It includes various projects to research and document Windows internals, improve Windows support in applications, and make life easier for the broader Windows developer community.

0.4.15 was branched 6 months ago. Since then, many new and exciting features have been worked on in the master branch. UEFI support, symmetric multiprocessing (SMP), a new graphical installer, a new NTFS filesystem driver, and newer application support are just a few features being worked on. We are excited to share this journey with you as ReactOS improves and matures.

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