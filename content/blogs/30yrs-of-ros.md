---
title:       "30 years of ReactOS"
author:      "Carl Bialorucki"
date:        2026-01-01
tags:        [ "newsletter", "anniversary" ]
# Note: blog post release planned for 2026-01-22
---
Happy Birthday ReactOS! Today marks 30 years since [the first commit to the ReactOS source tree](https://github.com/reactos/reactos/commit/0f94427db073a20c24f9d85c8531fbe16490af43).
It’s been such a long journey that many of our contributors today, including myself, were not alive during this event.
Yet our mission to deliver “your favorite Windows apps and drivers in an open-source environment you can trust” continues to bring people together.
Let's take a brief look at some of the high and low points throughout our history.

## 1996-2003: The Painful Road to ReactOS 0.1.0
ReactOS started from the ashes of the FreeWin95 project, which aimed to provide a free and open-source clone of Windows 95.
FreeWin95 suffered from analysis paralysis, attempting to plan the whole system before writing any code.
Tired of the lack of progress on the project, Jason Filby took the reins as project coordinator and led a new effort targeting Windows NT.
The project was renamed to “ReactOS” as it was a reaction to Microsoft’s monopolistic position in home computer operating systems.

Progress on ReactOS was very slow at first.
Contributors had to first build a very basic NT-like kernel before they could develop drivers for it, then continue developing the kernel; not too dissimilar to the process of bootstrapping a new programming language.
Once a few basic drivers were written, other contributors were able to learn from these examples and develop other drivers.

While writing this article, I reached out to Eric Kohl. He developed the original storage driver stack for ReactOS (atapi, scsiport, class2, disk, cdrom, cdfs) and has been with the project since 1998. I asked him about his experiences with ReactOS during this time, how he found the project, and what contributing to ReactOS was like during those early days. He wrote:

{{< blockquote >}}
I think I found ReactOS while searching for example code for my contributions to the WINE project.
I subscribed to the mailing list and followed the discussions for a few days.
The developers were discussing the future of shell.exe, a little command line interpreter that could only change drives and directories and execute programs.
A few day \[later\] I had started to convert the FreeDOS command.com into a Win32 console application, because I wanted to extend it to make it 4DOS compatible.
4DOS was a very powerful command line interpreter.
On December 4th 1998 I introduced myself and suggested to use my converted FreeDOS command.com as the future ReactOS cmd.exe.
I had a little conversation with Jason Filby and Rex Joliff, the CVS repository maintainer.
I sent my cmd.exe code to Rex and he applied it to the repository.
After applying a few more cmd-related patches over the next weeks, Rex asked me whether I would like to have write-access to the repository.
I accepted the offer...

...

The first version I downloaded and used was 0.0.8.
It was not much more than a DOS-based bootloader, some drivers, and a basic kernel that ran a few test routines after initialization.

...

Version 0.0.8 didn't use PE files, but flat (position independent) binaries.
There was no PE loader,  no smss, no csrss, no winlogon, no process heaps, no process environments, no threads, etc.
Each and every little feature was a milestone.

...

Initially there was not a review process at all.
You write some code, test it and fix it until it works.
Then you commit it.
If something failed on another machine, you got a reply on the mailing list and discussed a solution.
You fixed the issue and committed a fix.
That's how it worked.

...

There was always an open and friendly atmosphere.
It was and still is always nice to talk to other developers.
No fights, no wars, like in some other projects.
{{< /blockquote >}}

*Editors note: minor errors were corrected*

ReactOS 0.1.0 was released on February 1st, 2003 and received minor updates up until November 2003.
ReactOS 0.1.0 was the first version of ReactOS that could boot from a CD.
It had a command line interface and no desktop.
Watch a demo of it below, provided courtesy of archeYR.

{{< img-link href="https://youtu.be/rgRMemZcVoM" src="/img/blogs/30yrs-of-ros/ros-0.1.0-thumbnail.png" alt="See ReactOS 0.1.0 by archeYR">}}

## 2004-2006: ReactOS 0.2.x
During this period ReactOS saw rapid development.
New drivers were being built all the time, a basic desktop was built, and ReactOS became increasingly stable and usable.
Public interest grew as ReactOS matured.
In October 2005, Jason Filby stepped down as project coordinator, and Steven Edwards was voted to be the next project coordinator.

{{< gallery >}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.2.x-boot.png" src="/img/blogs/30yrs-of-ros/ros-0.2.x-boot.png" caption="ReactOS 0.2.x boot screen">}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.2.x-desktop.png" src="/img/blogs/30yrs-of-ros/ros-0.2.x-desktop.png" caption="ReactOS 0.2.x desktop and file explorer">}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.2.0-desktop.png" src="/img/blogs/30yrs-of-ros/ros-0.2.0-desktop.png" caption="ReactOS 0.2.0 with VMware video driver for NT 4">}}
{{< /gallery >}}

It wasn’t all sunshine and rainbows though.
In January 2006, concerns grew about contributors having access to leaked Windows source code and possibly using this leaked source code in their contributions.
In response, Steven Edwards strengthened the project’s intellectual property policy and the project made the difficult decision to audit the existing source code and temporarily freeze contributions.

## 2006-2016: ReactOS 0.3.x
The ongoing audit and contribution freeze from the end of the ReactOS 0.2.x era slowed development and momentum considerably for ReactOS 0.3.x.
Following challenges with the audit, Steven Edwards stepped down as project coordinator and Aleksey Bragin assumed the role by August 2006.


Despite the challenges during this time, ReactOS 0.3.x continued to build upon ReactOS’s legacy.
ReactOS 0.3.0 was released on August 28th, 2006.
It introduced networking support and a package manager called “Download!”.
This package manager would become the basis for RAPPS, the package manager built into modern versions of ReactOS.
In July 2008, the x86_64 port of ReactOS was started.
One year later, ReactOS 0.3.10 imported the [UniATA driver](http://alter.org.ua/soft/win/uni_ata/), written by Alexandr Telyatnikov (Alter).
While we run into limitations with the UniATA driver today, UniATA enabled ReactOS to support SATA storage devices and to support partitions greater than 8GB in size.
On February 8th, 2012, ReactOS 0.3.14 supported being built using the MSVC compiler and added visual style support.

{{< gallery >}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.3.x-desktop.png" src="/img/blogs/30yrs-of-ros/ros-0.3.x-desktop.png" caption="ReactOS 0.3.x desktop">}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.3.x-download.png" src="/img/blogs/30yrs-of-ros/ros-0.3.x-download.png" caption="Download!, the package manager for ReactOS 0.3.x">}}
{{< /gallery >}}

## 2016-Today: ReactOS 0.4.x
ReactOS 0.4.0 was released on February 16th, 2016.
It introduced a new graphical shell that utilized more Windows features and was more similar architecturally to Windows Explorer.
ReactOS 0.4.0 also introduced support for kernel debugging using WinDbg when compiled with MSVC.
Being able to use standard Windows tools for kernel debugging has helped us progress considerably.
ReactOS 0.4.0 continued to receive incremental updates every few months up until versions 0.4.14 and 0.4.15 which had years of development updates each.
Today, the x86_64 port of ReactOS is similarly functional to its x86 counterpart, but with no WoW64 subsystem to run x86 apps its usability is limited.

{{< gallery >}}
{{< figure link="/img/blogs/30yrs-of-ros/explorer-diagram.png" src="/img/blogs/30yrs-of-ros/explorer-diagram.png" caption="A humorous diagram made in 2015 to explain the complexity of Windows Explorer">}}
{{< figure link="/img/blogs/30yrs-of-ros/ros-0.4.15-desktop.png" src="/img/blogs/30yrs-of-ros/ros-0.4.15-desktop.png" caption="ReactOS 0.4.15 desktop, shown with Luna visual style and large taskbar icons applied">}}
{{< /gallery >}}

## The Future of ReactOS
We're continuing to move ReactOS forward. Behind the scenes there are several out-of-tree projects in development. Some of these exciting projects include a new build environment for developers (RosBE), a new NTFS driver, a new ATA driver, multi-processor (SMP) support, support for class 3 UEFI systems, kernel and usermode address space layout randomization (ASLR), and support for modern GPU drivers built on WDDM.

The future of ReactOS will be written by the people who believe in the mission and are willing to help carry it forward.

If you believe in running “your favorite Windows apps and drivers in an open-source environment you can trust”, you can help make that a reality by [making a financial contribution](https://reactos.org/donate), [opening a pull request on GitHub](https://github.com/reactos/reactos), or [testing and filing bug reports](https://jira.reactos.org).
Even small contributions can help a lot!

## Statistics
*Note: Statistics were calculated at commit f60b1c9*
- Total commits: 88,198
- Total unique contributors: 301
- Total files: 31,025
- Total lines of code: 14,929,578
