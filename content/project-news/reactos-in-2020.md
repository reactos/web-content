---
title:       "ReactOS in 2020"
author:      "Extravert34"
date:        2021-01-02
banner:      "/img/project-news/reactos-in-2020/thumb.png"
---

Despite all the turbulence, it has been quite a productive year for ReactOS.
Many bugs and instabilities were resolved, many more have been introduced.
This year we hired two kernel developers full-time, this happened for the first time in the project's history.

The post highlights some of the changes which may be interesting to the community.

## Shell changes

Shell hasn't seen much attention recently, due to most of the work being concentrated in the kernel, but there are still some useful fixes and feature implementations:

* Katayama Hirofumi MZ made a great job implementing the file system change notification feature (aka `SHChangeNotify`) in the shell. This is required for all applications monitoring the filesystem changes.
* Visual and usability improvements: "Size on disk" label in File Properties dialog, key accelerators in Open/Save dialog and many more.

## RAPPS (a GSoC project)

This is one of our three GSoC projects of the year. He Yang (kernel.bin) continues on the work made by GSoC students in previous years, by improving our RAPPS application manager. This includes UI & usability enhancements, showing app screenshots and command line scripting support.

{{< gallery >}}
{{< figure link="/img/blogs/gsoc2020-rapps-final-report.png" src="/img/blogs/gsoc2020-rapps-final-report.png" caption="Updated ReactOS Application Manager" >}}
{{< /gallery >}}

## Compiler and tooling upgrade

The aging RosBE 2.1 toolset has served us well since 2013, but it's time to move on and incorporate all the useful features implemented in modern compilers and build tools.
We now have GCC 8.4 and CMake 3.17 as our defaults in the new [RosBE 2.2](https://reactos.org/wiki/Build_Environment), while maintaining compatibility with the latest CMake.
The transition didn't happen without a few road bumps though, a lot of effort was put by Colin Finck to make modern CMake work on Windows Server 2003 (and thus on ReactOS, because we maintain compatibility with it).
All the patches are freely available in our [GitHub](https://github.com/reactos/CMake/tree/cmake-3.17.2-reactos).

The Clang build is now resurrected on the CI, with plans to support this compiler along with GCC and MSVC. ReactOS builds with Clang now, but still cannot boot though.

A controversial decision was made to drop support of older MSVC compilers, and raise the C language standard to C99 for better cross-compiler compatibility. The deprecation brought up a big discussion over mailing lists and GitHub.
Still, this opens a window for future C++ standard library upgrades (maybe in 2021, who knows) and the support of modern C++ in our codebase.

## Kernel and drivers

As there are two developers working full-time in this field, there are quite some long-awaited changes:

**Merge of the PnP storage stack.** The new storage stack, derived from [open-source Microsoft drivers](https://github.com/microsoft/Windows-driver-samples/tree/master/storage/class) came to replace the old NT4-compatible ReactOS storage stack.
For a long time many workarounds were applied to make the NT4 storage stack work in the NT5.2 environment.
This era ends now, with a major step forward in compatibility with modern Windows, along with new features:

* GPT partitioning support.
* Support of the user-mode APIs related to storage stack.
* USB drive mount and dismount on-the-go.
* Special SSD commands, Blu-ray disks, > 2TiB drives and many more.

**Kernel-mode Driver Framework support.** As a part of the storage stack switch, the [KMDF](https://docs.microsoft.com/en-us/windows-hardware/drivers/wdf/) was ported to ReactOS allowing more drivers to potentially be used in the OS. The port is not complete yet, but already allows to use some drivers.

**Memory manager/Common cache subsystems improvements.** This is done by Jérôme Gardou, in parallel with the PnP and storage work by Victor Perevertkin.
These two subsystems (CC and MM) break records by both the amount of time spent and by the amount of people who worked on them.
The current effort is aimed at better compatibility with Windows at running filesystem drivers.
And there are quite some achievements here: ReactOS is finally able to work with the `ntfs.sys` driver from Windows and can handle an open-source Microsoft [fastfat.sys](https://github.com/microsoft/Windows-driver-samples/tree/master/filesys/fastfat) driver for FAT filesystem.
The work is not finished yet, but is going to be merged in 2021 for sure.

{{< gallery >}}
{{< figure link="/img/project-news/reactos-in-2020/ms-ntfs-in-reactos.jpg" src="/img/project-news/reactos-in-2020/ms-ntfs-in-reactos.jpg" caption="NTFS driver from Windows in ReactOS. Screenshot by Oleg Dubinsky" >}}
{{< /gallery >}}

**Plug and Play subsystem improvements.** A major refactoring is going on here, to make the driver compatibility more complete and improve the overall system stability.
This already made it possible for the long-awaited ability to boot from USB media in an off-the-tree branch.

All those changes wouldn't be possible without the donations from the community.
A very big thanks to all of the donors!

## CMD parser improvements and polishing

The ReactOS Command Interpreter (CMD) was recently revisited, with a series of fixes aiming at improving its command and batch files parsing rules with those from Windows' CMD.
This effort was triggered by the recent bug report [CORE-17030](https://jira.reactos.org/browse/CORE-17030) concering the incompatibility of our CMD to parse REM commands (comments that are ignored for the purposes of batch file execution),
and by the fact that the overall command parsing of our CMD was not completely compatible with Windows' one,
as per evidence with the many failures encountered during testing, with the `cmd:batch` Wine unit test.

{{< figure link="/img/project-news/reactos-in-2020/cmd-tests-changes.png" src="/img/project-news/reactos-in-2020/cmd-tests-changes.png" caption="Old test results can be seen on the left" >}}

Hermès Bélusca-Maïto decided to make ReactOS' CMD parsing rules more compatible with Windows' one, including some obscure corner cases,
and to take also the opportunity to bring additional fixes to some of its commands with the aim to fix more tests.

Now, more `cmd:batch` tests are passing with overall less failures. He also added new tests for the CMD parser in our own `cmd:reactos` unit test. Most of these pass OK, except for some for which some extra work is still needed.

Hermès has also found that some aspects of the implementation of ReactOS' existing CMD `copy` command, as well as the execution of piped external commands, do fail in certain cases. More work will be required in these areas in the future.

## Ports

Good old i386 still remains as our main platform, but the work on porting ReactOS to other architectures slowly goes on:

* AMD64: most of the code was merged to master, so now nightly builds can finally boot to the 1st stage setup screen on some hardware. The graphical interface still needs fixes. The porting is being done by Timo Kreuzer.
* XBOX: the Original XBOX port of ReactOS is revived, and able to boot to desktop. The work is mostly done by Stanislav Motylkov.
* PC98: Dmitry Borisov (disean) started a [NEC PC-98](https://en.wikipedia.org/wiki/PC-9800_series) port of ReactOS, which is a i386 flavor but with some incompatibilities.

{{< gallery >}}
{{< figure link="/img/project-news/reactos-in-2020/reactos-xbox.jpg" caption="ReactOS running on a real Original Xbox" >}}
{{< figure link="/img/project-news/reactos-in-2020/reactos-pc98.png" caption="ReactOS running inside a PC-98 emulator" >}}
{{< /gallery >}}

## Polishing old Releases
 
Due to the mentioned turbulences and the current 0.4.14-RC being delayed longer than actually planned, Joachim Henze used the time to further improve the quality of older ReactOS releases, focusing mainly on further reducing the regression count.

The changelog of his work can be seen here for each release branch:

- 0.4.14-RC-58-g3461c59 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.14) (unreleased yet, still in Release-Candidate-phase)
- 0.4.13-release-1-g2ac9d98 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.13) (still almost unaltered, improvement-phase starts after 0.4.14 will have been released)
- 0.4.12-release-24-g4572c75 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.12)
- 0.4.11-release-40-gf32c82e [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.11)
- 0.4.10-release-49-gde68701 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.10)
- 0.4.9-release-56-g9be0765 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.9)
- 0.4.8-release-63-g1e9d797 [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.8)
- 0.4.7-release-75-g5f0c98f [Changelog](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.7)

In sum 318 commits to date! So there is still a lot improvement for you to explore!
You can download the ISOs at https://sourceforge.net/projects/reactos/files/ReactOS/

## Future work

Several areas are being worked on currently, and will be continued in 2021. This includes:

* Forward compatibility subsystem for Windows Vista+ applications support.
* Printing.
* CRT and standard library improvements.
* The work on amd64 support and APIC HAL (Hardware Abstraction Layer) for the SMP support.
