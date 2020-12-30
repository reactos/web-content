---
title:       "ReactOS in 2020"
author:      "Extravert34"
date:        2020-12-28
---

Despite all the turbulence, it has been quite a productive year for ReactOS.
Many bugs and instabilities were resolved, many more have been introduced.
This year we hired two kernel developers full-time, this happened for the first time in the project's history.

The post highlights some of the changes which may be interesting to the community.

## Shell changes

Shell hasn't seen much attention recently, due to most of the work being concentrated in the kernel, but there are still some useful fixes and feature implementations.

* Katayama Hirofumi MZ made a great job implementing the file system change notification feature (aka `SHChangeNotify`) in the shell. This is required for all applications monitoring the filesystem changes
* Visual and usability improvements: "Size on disk" label in File Properties dialog, key accelerators in Open/Save dialog and many more

## RAPPS (a GSoC project)

This is one of our three GSoC projects of the year. He Yang continues on the work made by GSoC students in previous years, by improving our RAPPS application manager. This includes UI & usability enhancements, showing app screenshots and command line scripting support.

![RAPPS screenshot](/img/blogs/gsoc2020-rapps-final-report.png)

## Compiler and tooling upgrade

The aging RosBE 2.1 toolset has served us well since 2013, but it's time to move on and incorporate all the useful features implemented in modern compilers and build tools.
We now have GCC 8.4 and CMake 3.17 as our defaults in the new RosBE 2.2, while maintaining compatibility with the latest CMake.
The transition didn't happen without a few road bumps though, a lot of effort was put by Colin Finck to make modern CMake work on Windows Server 2003 (and thus on ReactOS, because we maintain compatibility with it).
All the patches are freely available in our [GitHub](https://github.com/reactos/CMake/tree/cmake-3.17.2-reactos).

The Clang build is now resurrected on the CI, with plans to support this compiler along with GCC and MSVC. ReactOS buils with Clang now, but still cannot boot though.

A controversial decision was made to drop support of older MSVC compilers, and raise the C language standard to C99 for better cross-compiler compatibility. The deprecation brought up a big discussion over mailing lists and GitHub.
Still, this opens a window for future C++ standard library upgrades (maybe in 2021, who knows) and the support of modern C++ in our codebase.

## Kernel and drivers

As there are two developers working full-time in this field, there are quite some long-awaited changes:

**Merge of the PnP storage stack** The new storage stack, derived from open-source Microsoft drivers came to replace the old NT4-compatible ReactOS storage stack.
For a long time many workarounds were applied to make the NT4 storage stack work in the NT5.2 environment.
This era ends now, with a major step forward in compatibility with modern Windows, along with new features:
* GPT partitioning support.
* Support of the user-mode APIs related to storage stack.
* USB drive mount and dismount on-the-go.
* Special SSD commands, Blu-ray disks, > 2TiB drives and many more.

**Kernel-mode Driver Framework support** As a part of the storage stack switch, the KMDF was ported to ReactOS allowing more drivers to potentially be used in the OS. The port is not complete yet, but already allows to use some drivers.

**Memory manager/Common cache subsystems improvements** This is done by Jérôme Gardou, in parallel with the PnP and storage work by Victor Perevertkin.
These two subsystems (CC and MM) break records by both the amount of time spent and by the amount of people who worked on them.
The current effort is aimed at better compatibility with Windows at running filesystem drivers.
And there are quite some achievements here: ReactOS is finally able to work with the `ntfs.sys` driver from Windows and can handle an open-source Microsoft `fastfat.sys` driver for FAT filesystem.
The work is not finished yet, but is going to be merged in 2021 for sure.

**Plug and Play subsystem improvements** A major refactoring is going on here, to make the driver compatibility more complete and improve the overall system stability.
This already made it possible for the long-awaited ability to boot from USB media in an off-the-tree branch

All those changes wouldn't be possible without the donations from the community.
A very big thanks to all of the donors!

## CMD parser improvements and polishing

The ReactOS Command Interpreter (CMD) was recently revisited, with a series of fixes aiming at improving its command and batch files parsing rules with those from Windows' CMD.
This effort was triggered by the recent bug report [CORE-17030](https://jira.reactos.org/browse/CORE-17030) concering the incompatibility of our CMD to parse REM commands (comments that are ignored for the purposes of batch file execution),
and by the fact that the overall command parsing of our CMD was not completely compatible with Windows' one,
as per evidence with the many failures encountered during testing, with the `cmd:batch` Wine unit test (see left side of the picture below).

HBM decided to make ReactOS' CMD parsing rules more compatible with Windows' one, including some obscure corner cases,
and to take also the opportunity to bring additional fixes to some of its commands with the aim to fix more tests.

Now, more `cmd:batch` tests are passing with overall less failures. He also added new tests for the CMD parser in our own `cmd:reactos` unit test. Most of these pass OK, except for some for which some extra work is still needed.

HBM has also found that some aspecss of the implementation of ReactOS' existing CMD `copy` command, as well as the execution of piped external commands, do fail in certain cases. More work will be required in these areas in the future.

## Ports

Good old i386 still remains as our main platform, but the work on porting ReactOS to other architectures slowly goes on.

* AMD64: most of the code was merged to master, so now nightly builds can finally boot to the 1st stage setup screen on some hardware. The graphical interface still needs fixes.
* XBOX: the Original XBOX port of ReactOS is revived, and able to boot to desktop.
* PC98: @disean started a NEC PC-98 port of ReactOS, which is a i386 flavor but with some incompatibilities.

## Future work

Several areas are being worked on currently, and will be continued in 2021. This includes:

* Forward compatibility subsystem for Windows Vista+ applications support.
* Printing.
* CRT and standard library improvements.
* The work on amd64 support and APIC HAL (Hardware Abstraction Layer) for the SMP support.
