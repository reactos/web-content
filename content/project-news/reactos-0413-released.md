---
title:       "ReactOS 0.4.13 released"
author:      "ReactOS Team"
date:        2020-04-10
tags:        [ "release" ]
banner:      "img/project-news/reactos-0413-released/thumb.png"
---

The ReactOS Team is pleased to announce the release of version 0.4.13.
As with prior releases, keywords are noted representing the release itself and highlighting key improvements.
In this particular case, the 0.4.13 version shows the results of significant hard work to bring improvements to the USB stack, further development on the Xbox port boot process, an Explorer File Search for the Shell module, as well as many other changes.

{{< figure link="/img/project-news/reactos-0413-released/banner.png" src="/img/project-news/reactos-0413-released/banner.png" >}}

# USB Improvements
USB (Universal Serial Bus) is an important standard adopted throughout the industry and used widely on many devices such as external storage, keyboards, mice, and various other devices.
Notably, there are a great number of computers that do not come with a CD-ROM drive these days, with the only option being USB in order to boot or install an operating system.
The USB stack itself is arguably a very complicated one, the code to support it is complex, and maintaining it is not an easy task.
ReactOS currently lags behind an advanced USB implementation as various bugs and regressions still plague the system.
Despite this, many people have worked hard and contributed code to improve USB functionality in ReactOS.

Vadim Galyant and Victor Perevertkin have brought in a new USB stack which provides many fixes as well as improvements to various areas, improving USB support in general.
Although there is a long journey ahead towards an advanced and perfectly functional USB stack within ReactOS, the new module is a further step towards usable and working USB.

# Explorer File Search Bring-Up
The graphical shell (aka Explorer) is a vital component that allows the user to interact with the system.
The shell itself, though, lacks a lot of stuff which deeply limits the overall ability for the user to interact with the system in an easy and flexible way.
However, with work done during the Google Summer of Code 2019, the shell has seen a new feature implemented - file search.
Thanks to student Brock Mammen, this feature will help the user find the exact location of a file without the hassle of having to search for content manually or to rely on third-party programs.
The screenshot below demonstrates the search feature in action:

{{< figure link="/img/project-news/reactos-0413-released/file-search.png" src="/img/project-news/reactos-0413-released/file-search.png" >}}

# Xbox ReactOS Port Improvements
Once upon a time, ReactOS had an Xbox architecture port specifically to boot ReactOS onto the first generation of Xbox console hardware.
With ReactOS code making significant changes over time, the port was not maintained and had been largely ignored by developers who were focused on other issues.

Due to the significant amount of changes in various areas that ReactOS was receiving, it was discovered that the OS could no longer boot on Xbox hardware.
Now, this is no longer the case as ReactOS contributor Stanislav Motylkov, with the help from Matt Borgerson, have brought changes to the port which show tremendous improvement.
And as is often the case with porting code to a new system, the work has also helped ReactOS more broadly by exposing nasty bugs in some fundamental modules of the system.

The following screenshot shows ReactOS running in an Xbox emulator, XQEMU:

{{< figure link="/img/project-news/reactos-0413-released/xqemu.jpg" src="/img/project-news/reactos-0413-released/xqemu.jpg" >}}

# FreeLoader FAT Boot Speed-Up
In past releases, booting ReactOS on a system that was partitioned using the FAT filesystem could be a burden, as you had to wait some time for ReactOS to boot.
FreeLoader (the ReactOS bootloader) has to do a lot of stuff in order to get ReactOS ready for boot, but unfortunately it was doing this in an unoptimized way.
In this release, Victor Perevertkin did a great job optimizing the FAT driver of FreeLoader, significantly improving the boot speed when using this filesystem.

<a href="https://www.youtube.com/watch?v=XEsNzuXzcHQ" target="_blank"><img src="/img/project-news/reactos-0413-released/freeldr-boot-video.jpg" alt="ReactOS: boot with a speed of light video"></a>

# Accessibility
In the area of accessibility in ReactOS, new software was introduced - the Accessibility Utility Manager.
Developed by ReactOS contributor Bișoc George, the Accessibility Utility Manager, as the name implies, manages the accessibility applications of ReactOS.
The following screenshot shows the program in operation:

{{< figure link="/img/project-news/reactos-0413-released/accessibility.png" src="/img/project-news/reactos-0413-released/accessibility.png" >}}

Similarly, the On-Screen Keyboard has seen some improvements to theming support and there have been some additional features and minor bug fixes in the Magnifier.

# Font Management
Contributor Katayama Hirofumi has continued his work to bring ReactOS’ font support closer to that of Windows.
With the merging of two large pull requests, system font management is now done via the registry rather than in an ad-hoc way.
This brings improved compatibility and stability to ReactOS.

# Other Improvements
Besides the highlighted points of this release, we should not forget that the whole of ReactOS - components such as DLLs, applications, and other modules have been improved.

In addition to the improvements to accessibility features mentioned above, Bișoc George also fixed some common dialog boxes where the “Apply” button enabled itself unconditionally even though the user had not taken any action.
Furthermore, he also fixed an issue regarding disk space where the Recycle Bin could occupy more than the available disk space.

The 64-bit ReactOS build is getting better and better such that now ReactOS is fully booting and working in an x64 environment thanks to Timo Kreuzer’s work continuing to progress further.

# Third Party Syncs
ReactOS is an open source project that collaborates with various other open source projects all around the globe.
The following list shows the 3rd party libraries that other projects share with ReactOS, and with the responsible committers that have synced the libraries with the ReactOS project.

* BtrFS v1.4 by Pierre Schweitzer
* ACPICA v20190816 by Thomas Faber
* UniATA v0.47a by Thomas Faber
* mbedTLS v2.7.11 by Thomas Faber
* libpng v1.6.37 by Thomas Faber

# Statistics
JIRA Issues fixed of this release - 278  
Number of commits as of this release - 1282  
Oldest issue fixed as of this release - CORE-4995

* [The official Changelog for the 0.4.13 release](/wiki/ChangeLog-0.4.13)
* [The less technical Community Changelog for 0.4.13](/wiki/Community_Changelog-0.4.13)
* [Application Tests for 0.4.13](/wiki/Tests_for_0.4.13)

[releases/0.4.13](https://github.com/reactos/reactos/tree/releases/0.4.13) branch was forked from [master](https://github.com/reactos/reactos) on 2019-09-30 after 0.4.13-dev-1225-ge413df4
