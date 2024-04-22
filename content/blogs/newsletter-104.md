---
title:       "Newsletter 104 - April/May news"
author:      "GeoB99"
date:        2024-05-11
tags:        [ newsletter ]
---

Greetings from the ReactOS Team!
This year, we will start with a short summary highlighting ongoing work on the project as well as announcing the selection of our brand new developers.
We will also talk about the current situation with symmetric multiprocessing (SMP) support in ReactOS.

## Development team enlargement
Over the last decade, the number of people in the project team base has not changed much.
While development continued and still continues as usual, the development team hadn't seen any increase in new developers.
In fact, some of the existing core developers became inactive some time ago and some of these were maintainers of important core modules of the project.

This left the development workflow in a state of paralysis for some of the components of ReactOS, as nobody else in the team had the right skills to determine the correctness of the patches provided by contributors in order to get them shipped in the [master](https://github.com/reactos/reactos) branch.
The ReactOS Team is currently adopting an approach to circumvent this problem: by enrolling contributors into the development team who have contributed useful patches for at least a year, have good coding skills, have collaborated with project team members and are willing to work in the area in which they are interested.

With that said, the ReactOS Team is pleased to announce the addition of 4 new developers for the project: Carl J. Bialorucki (cbialorucki), Doug Lyons (Doug-Lyons), Oleg Dubinskiy (oleg-dubinskiy) and Whindmar Saksit (whindsaks).

## Symmetric Multiprocessing (SMP) support status & GCC 13 preparations
Symmetric multiprocessing support for the AMD64 architecture is being extensively improved thanks to Timo Kreuzer (tkreuzer).
In particular, he has implemented support for processor freezing and switching ([PR #6581](https://github.com/reactos/reactos/pull/6581)) so that every logical processor is frozen or switched properly.
In addition, he implemented basic support for IPIs (inter-processor interrupts) which are needed for SMP scheduling, debugging, and more ([PR #6130](https://github.com/reactos/reactos/pull/6130)).
These are only limited to APC (Asynchronous Procedure Calls), DPC (Deferred Procedure Calls) and freeze IPIs for the time being.

Another important improvement for SMP is the kernel initialization in the AMD64 build architecture, which was revamped by Timo ([PR #6110](https://github.com/reactos/reactos/pull/6110)).
This allows SMP to work properly.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-104/blender_smp.png" src="/img/blogs/newsletter-104/blender_smp.png" caption="Blender running in ReactOS 64-bit with 2 cores">}}
{{< /gallery >}}

After preliminary investigations by Jackson Bryn (jackson2k2) and Simone Mario Lombardo (simonelombardo) for making ReactOS compileable and bootable on GCC 13, Timo tackled the bugs to be able to complete and compile ReactOS in the GCC 13 build environment ([PR #6824](https://github.com/reactos/reactos/pull/6824)).
This is a necessary step in order to upgrade the GCC environment toolchain of the builder carrier in the future.

In the meantime, Justin Miller (The_DarkFire) is focusing on SMP support for the x86 architecture.
He worked on setting up application processor bootup ([PR #5879](https://github.com/reactos/reactos/pull/5879)) in x86 SMP HAL and is planning to further improve x86 SMP.
On top of all of this, experiments have begun to allow ReactOS to make use of the new SMP aware HAL.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-104/smp_x86.png" src="/img/blogs/newsletter-104/smp_x86.png" caption="Experimenting the 32-bit SMP build of ReactOS">}}
{{< figure link="/img/blogs/newsletter-104/smp_cpuz.png" src="/img/blogs/newsletter-104/smp_cpuz.png" caption="ReactOS SMP 32-bit showing the benchmark results with CPU-Z">}}
{{< /gallery >}}

**It is worth noting that SMP is still heavily under development and there is no exact estimate of when the multi-core support will finally be ready, so stay tuned for more updates!**

## User-mode WINE modules syncing
Timo, Justin and several other contributors are making efforts to bring up-to-date some of the user-mode modules that we borrow from WINE.
As you may know, ReactOS shares many components in user mode with WINE. Although our shell is in many cases an exception to this, the bulk of the usermode DLLs that provide APIs to applications are synced with the WINE project as their base.

ReactOS has fallen short for many years on updating these components as WINE has pushed further into the modern era.
Updating these components means we greatly improve the stability and functionality of the components we sync, but also lets us look into the future as more NT6+ features and functionality get merged into the project.

Some early experiments have shown dramatically improved application compatibility on the very early builds that come enabled with these features by default.

{{< gallery >}}
{{< figure link="/img/blogs/newsletter-104/python.png" src="/img/blogs/newsletter-104/python.png" caption="Running Python 3.7 on ReactOS (this is used to run the Winesync python script)">}}
{{< /gallery >}}

The aim of this effort is to bring the improvements and fixes from WINE that help with the support of NT6+ software that otherwise wouldn't have worked.
This also helps us remove older hacks that are no longer needed.

## Asynchronous network connection support
ReactOS supports basic networking provided by the Sockets Provider API (MSAFD). This API requires applications to perform networking operations in a blocking way.
This means that any network connection activity is performed synchronously, which has many limitations.
Nowadays modern applications perform network operations asynchronously (aka non-blocking way) which ReactOS currently does not support.

This leads to undefined behaviors and bugs with certain network related API function calls such as `WSPConnect` that do not work properly when required to estabilish a network connection of a socket to a peer and such in a non-blocking (asynchronous) way.
Thamatip Chitpong (TAN-Gaming) aims to fix this problem by taking the lead on working on an implementation for asynchronous networking support ([PR #6349](https://github.com/reactos/reactos/pull/6349)).
During his development he also fixed other miscellaneous bugs and issues related to the MSAFD component.

This greatly improves the network reliability of applications such as web browsers, FTP file transfers, multi-player games and whatnot.
Although the performance is not on par with Windows yet, Thamatip has future plans to tackle this and other problems not currently handled by his PR.

## Audio improvements
Several major improvements in audio subsystem have been made by Oleg Dubinskiy recently.
In [PR #6686](https://github.com/reactos/reactos/pull/6686), he implemented handling modern audio formats (e.g. Extensible audio, Float audio, and others). He also implemented support for high sample rates, setting bits per sample sound quality, and more than two (stereo) output channels.

{{< video src="/img/blogs/newsletter-104/ros_extensible_format.mp4" type="video/mp4" caption="Testing the extensible audio format of some apps">}}

This allows many 3rd-party programs and games, including AIMP 5.30, QMMP 0.12.17, all Chromium based browsers, and Game Dev Tycoon, to open an audio device and play sounds correctly.
However, the sound only works when the audio miniport driver (e.g. Intel AC97, Realtek HD Audio, etc.) supports the requested format directly.
Otherwise it won't work, because playing such a format would require resampling support, which is currently not finished; so this feature is disabled in ReactOS for now.

He also added support for looped wave playback ([PR #6761](https://github.com/reactos/reactos/pull/6761)).
Looped playback functionality allows audio data to be played multiple times (in other words, played in a loop).
The audio data to stream is contained in wave headers (each portion of it is in its own `WAVEHDR` structure).

{{< video src="/img/blogs/newsletter-104/BRD_test.mp4" type="video/mp4" caption="Testing the looped wave playback in action">}}

In Windows, this is supported by `WHDR_BEGINLOOP` and `WHDR_ENDLOOP` flags together with specifying the amount of loops to play the audio data in `WAVEHDR.dwLoops` member.
Both single wave headers and multiple wave headers can be looped using these flags and members.
Oleg has implemented only looping a single wave header, while looping two or more wave headers is not supported yet.
However we have no testcase for the second case yet, because Oleg did not find any apps that requested to loop multiple headers.
But, as it was tested with BRD Demo app, looping a single header works properly as it should.

Besides that, his future plan is to further improve the audio stack with more fixes.
He plans to fix the DirectSound `IKsPropertySet` implementation, which allows apps like VirtualDJ 8.2 and Microsoft DirectX Diagnostic Tool to properly detect the sound card and display audio device information.
These fixes and more are coming soon!

## New ATA storage driver bringup
ReactOS uses the [UniATA](https://alter.org.ua/en/soft/win/uni_ata) driver to support ATA/SATA and various IDE controllers.
It is the backbone of the ATA infrastructure in ReactOS as well as the sole open source Windows/ReactOS kernel mode ATA driver.

While UniATA still serves as the main crucial module for ATA implementation support, it is not in perfect shape.
It suffers from bugs and issues that prevents some hardware from working properly.
Fixing these bugs requires a rewrite of large parts of the UniATA source code.

Dmitry Borisov (disean) aims to fix this problem by implementing a new PnP-aware ATA driver for PATA and AHCI devices ([PR #6577](https://github.com/reactos/reactos/pull/6577)).
While his work is still underway, once it is completed the new ATA driver will bring better system stability as well as squash many of the existing bugs that are present in the UniATA driver.

-----

Stay tuned for more updates!

Sincerely,

The ReactOS Team