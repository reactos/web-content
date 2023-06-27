---
title:       "Newsletter 102 - 2022/2023 news"
author:      "GeoB99"
date:        2023-06-27
tags:        [ newsletter ]
---

Hello ReactOS followers and enthusiasts! It has been quite a long time since we published the [101th newsletter](/blogs/newsletter-101/) and so far no further updates have been posted since then.
While the [ReactOS Twitter account](https://twitter.com/reactos) does provide announcements, posts about working applications and such from time to time, much of what is happening with the project as a whole isn't mentioned. Most of what we are going to talk about is the current situation with releases and overall ReactOS development.

## Why does it take so long to release a new version of ReactOS? Are you guys dead?
The latest release of ReactOS is 0.4.14, published on 16th December, 2021. That release alone took a year to be engineered. Back then, ReactOS followed a 3-month cadence, releasing a new version every 3 months. But since 2021, ReactOS is still at 0.4.14. Are you guys dead?

The answer is certainly no, the way we handle releases has changed. Back in the day, ReactOS releases were made for the sake of quantity rather than quality. Every new release after 3 months was similar to the previous one, with the exception of a small number of added features and bug fixes. But overall, the net gap between the releases wasn't that big.
For a while now we have instated a rule that for a new version to reach "Release" status, it needs to have a reasonably low amount of regressions (no more than 20) and the stability mustn't be badly impacted by the introduction of new features or code changes done during development.

In other words, the ReactOS project is now focusing on providing quality releases, which rules out the 3-month release cadence. That previous approach wasn't feasible for a development team with a size like ours anyway.

It is expected that it will take longer for a new release to be published, although these releases will now be much more substantial, with a much bigger number of improvements.
If you're impatient to test the latest changes and features you can always try the [nightly builds](https://reactos.org/getbuilds) (also called experimental builds).

## Development status
In the last year and during the beginning of 2023, the ReactOS developers and contributors alike are working on many parts of the project, the top focused area being the kernel.
Other areas that aren't kernel-related are the applications, specifically our Paint and Notepad programs, the Input Method Editor (IME) as well as other stuff such as the ReactOS testing infrastructure.

## ReactOS x64 port status
The x64 port of ReactOS, while still in its infancy, has steadily gotten better in terms of stability. Back then ReactOS could barely boot and if it ever did, it usually resulted in an immediate crash or a BSoD by just doing simple tasks. With the help of Timo Kreuzer (tkreuzer), the x64 port has gotten to a somewhat tolerable state where ReactOS can now operate without big problems.

Although issues still do remain, and compatibility is inferior to the x86 version, more applications and even hardware drivers have started to work.
Note that the x64 port currently will not run **ANY** x86 applications due to lack of WoW64.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-102/vlc.png" src="/img/blogs/newsletter-102/vlc.png" >}}
{{< figure link="/img/blogs/newsletter-102/emule.png" src="/img/blogs/newsletter-102/emule.png" >}}
{{< figure link="/img/blogs/newsletter-102/sumatra.png" src="/img/blogs/newsletter-102/sumatra.png" >}}
{{< figure link="/img/blogs/newsletter-102/mixxxdj.png" src="/img/blogs/newsletter-102/mixxxdj.png" >}}
{{< /gallery >}}

## WHS test fixes
The WHS test bot (acronym that stands for Windows Home Server) is a bot that runs Windows Server 2003 where it executes the whole ReactOS testsuite infrastructure, ensuring that each testcase passes the test results on a Windows environment. This helps understanding how Windows behaves when certain test inputs are being given to it.
WHS testcase infrastructure was known to fail a lot due to tests not passing, or even crashing. On January of 2023 during the hackfest, Timo Kreuzer (tkreuzer), Mark Jansen (learn_more) and Thomas Faber (ThFabba) worked together to fix some of the testcases. Thanks to their efforts, WHS can now pass all the tests.

## Paint & Notepad improvements
Thanks to Katayama Hirofumi MZ both Paint and Notepad have received quality of life improvements, miscellaneous fixes and whatnot. Notably, he fixed some flickering issues on Paint when resizing the application's window and implemented the "text tool" feature. In addition, he improved the performance of Notepad, implemented the "Now Printing" dialog and provided some miscellaneous fixes.

## Security Subsystem improvements
George Bișoc (GeoB99) has progressively improved the Security Subsystem (`Se`) of the kernel with new stuff as well as bug fixes, mostly notably improving the security access checks and access tokens.

An access check is an action done by the kernel to verify that if an object can be accessed by a requestor. If the requestor does not have the right privileges to access an object or the object itself prevents others from doing certain actions imposed by an access control list (ACL), access is denied. There was a hack in `SepAccessCheck` where access was granted to anybody, regardless of the security restrictions imposed by security descriptors. This could lead to bad actors tamper and toy around with objects.

Thanks to his work, the hack in `SepAccessCheck` has been removed and security access checks are now operational and the kernel can prevent any unauthorized access from whoever tries to access an object with improper access rights. His future plan for the Security Subsystem is to implement security auditing of all objects and miscellaneous improvements where needed.

## Registry improvements
For ReactOS to reach Beta phase it has to solve two major milestones -- stability and corruptions. Usually corruptions in ReactOS can manifest in form of filesystem and registry corruptions.
While filesystem corruptions can be prevented by choosing a more modern filesystem such as BtrFS which is what we currently support, registry corruptions are by themselves a death sentence as ReactOS currently doesn't implement any self-healing mechanisms to recover the system from corrupted registry hives. As a result, the user is forced to do a clean reinstallation of the system.
Worst case, the system would still boot up but be stuck on the login prompt dialog (aka the "Ctrl+Alt+Del" dialog) as the user profile has been corrupted or missing. The latter generally happens after ReactOS is forcefully shutdown after a clean install.

George Bișoc is currently working on improving the registry by implementing the necessary registry self-healing mechanisms and `CmCheckRegistry`, a fundamental function that validates the registry for any corrupted parts of the registry and takes appropriate actions at recovering a registry hive from such corrupt parts. While his work is currently in progress ([#4571](https://github.com/reactos/reactos/pull/4571)), so far he has received some positive results from testers. A small piece of his work has been merged, which fixes the registry flusher of ReactOS not working for almost a decade! This fix also solves the problem of the missing user profile due to forcefully shutting down the system, and as such you should no longer expect to see the infamous "Ctrl+Alt+Del" dialog prompt as often as before.

In addition he is working on the registry cache implementation ([#5088](https://github.com/reactos/reactos/pull/5088)), as ReactOS doesn't properly sync the cached information which leads to inconsistent results.

Currently most of this work is still being upheld because it makes our bootloader size larger than it should be, preventing the AMD64 build of ReactOS booting up.

## IME project
The Input Method Editor (or IME) is a component that facilitates the typing of characters not originally present on the input devices by using a sequence of characters.
IME in ReactOS has been for the most part a stub, but thankfully Katayama Hirofumi MZ has extensively worked on it.
This greatly helps with CJK support, as well as allowing installation of custom IMEs for different locales.
Katayama wrote [an article](https://katahiromz.fc2.page/reactos-jpn-20230410/) about his work, the Japanese part of it was written using MZ-IME in ReactOS, here is the English part of it:

Seven months have passed since my last report, and I would like to explain the current status of Japanese input in ReactOS.
We have confirmed that Japanese ReactOS recognizes and can actually use MZ-IME Japanese input, a home-made test IME.

After the IMM32 implementation was almost complete, the remaining issue was the implementation on the USER32 side, where the default procedure and the processing of the default IME window and EDIT control had not yet been written.
The default procedure required the handling of several IME messages. The default IME window is an invisible window that is essential in IME messaging; the EDIT control is a so-called text box that required proper handling of some IME messages.
When IME message handling was implemented, the IME composition string window and candidate window were displayed correctly.

Video: https://www.youtube.com/watch?v=Dv58IV_vUxY

Note that Japanese input for Command Prompt and Rich Edit Control is not yet available. Several glitches and instabilities remain. Please note that the ReactOS IMM is currently developed for older systems and does not support the newer TSF-compatible IMEs.
Defects and problems can be reported at https://github.com/katahiromz/ImeStudy/issues.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-102/ime.png" src="/img/blogs/newsletter-102/ime.png" caption="Using IME on Notepad in ReactOS" >}}
{{< /gallery >}}

## Other highlights
- Dmitry Borisov (disean) fixed a BSoD that was caused due to a shutdown with the IDE driver stack from Windows Server 2003.
- The Win32 backend kernel-mode subsystem component (`win32k.sys`) is steadily being improved with improvements and bug fixes by many people, notably Timo Kreuzer, James Tabor (jimtabor), Jerome Gardou (zefklop), Thamatip Chitpong (TAN-Gaming) and Katayama Hirofumi MZ.
- Some parts of the Session Manager SubSystem (SMSS) have been cleaned up and revamped by Hermès Bélusca-Maïto ([#4821](https://github.com/reactos/reactos/pull/4821)). This includes cleaning up old and deprecated code in the SM client library (`SMLIB`). Furthermore, one API has been implemented in order to allow ReactOS to use other subsystems other than the Win32 one. In addition, the Client/Server Runtime Subsystem (CSRSS) has been slightly adapted for this purpose ([#4802](https://github.com/reactos/reactos/pull/4802)).

For more updates and latest news, check our Twitter [@reactos](https://twitter.com/reactos).

## Beyond the main tree
ReactOS has always been more than just an operating system.
We are a community of people focused around the Windows ecosystem — with various projects to research and document Windows internals, improve Windows support in applications, or otherwise make life easier for the broader Windows developer community.
In fact, most developers likely had their first encounter with ReactOS not by downloading the operating system, but when looking up an undocumented API on the web and ending up in our [Doxygen-generated documentation](https://doxygen.reactos.org).

Consequently, much work within the past two years also happened outside our main source tree, and it's worthwhile to take a look at that:

Joachim Henze continued to improve all the older releases from 0.4.7 to 0.4.14 by porting back safe fixes for regressions and some optimizations, you can find updated isos for all of them on [sourceforge](https://sourceforge.net/projects/reactos/files/ReactOS/). For a complete list of the applied fixes you may have a look at [0.4.7](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.7), [0.4.8](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.8), [0.4.9](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.9), [0.4.10](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.10), [0.4.11](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.11), [0.4.12](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.12), [0.4.13](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.13), [0.4.14](https://git.reactos.org/?p=reactos.git;a=shortlog;h=refs/heads/releases/0.4.14).

Colin Finck has been trying out the Rust programming language for Windows development, and he has released multiple related libraries.
The first one, [nt-hive](https://github.com/ColinFinck/nt-hive), initially released in February 2021, implements a parser for the internal structures of Windows registry _hive_ files.
It was followed by [ntfs](https://github.com/ColinFinck/ntfs) in January 2022, a more ambitious project to provide an NTFS filesystem reader as a reusable building block for various scenarios.
That library has been released at the virtual FOSDEM 2022 along with a [presentation on NTFS internals](https://archive.fosdem.org/2022/schedule/event/misc_ntfs_rust/).
A [presentation on NTFS internals in slides](https://colinfinck.de/2022_Implementing_the_NTFS_filesystem_in_Rust_Slides.pdf) is also here.
The latest addition is [nt-list](https://github.com/ColinFinck/nt-list) later that year, which is a type-safe and idiomatic Rust wrapper around Windows Linked Lists (otherwise known as `LIST_ENTRY` and `SINGLE_LIST_ENTRY`).
It has been [presented at EuroRust 2022](https://www.youtube.com/watch?v=IxhZIyXOIw8).
A library for parsing apiset DLLs is currently in the pipeline.

Ultimately, these libraries shall all be used in a Rust-powered bootloader.
But each of them can already be used now in various contexts, from low-level system development to user-mode applications.
And this is already happening.