---
title:       "Newsletter 100 - January 2021 news"
author:      "Extravert34"
date:        2021-02-06
tags:        [ newsletter ]
---

Hello ReactOS followers!
This is an attempt to re-instate the Newsletter, which informed you about recent developments.
The previous [Newsletter 99](/blogs/newsletter-99) was in 2013!

This month we were mostly focused on the kernel work, merging pull requests and fixing regressions.

## Memory manager and Common cache work

Being in development for almost six month, this work by Jérôme Gardou finally landed in the master branch.
This change refactors many aspects of the Section Objects feature in NT-compatible kernel, making it more compatible with Windows.

Here are notable changes from the user perspective:

* A long-standing bug preventing starting of executables from remote locations is fixed ([CORE-10038](https://jira.reactos.org/browse/CORE-10038)).
* Open source Microsoft FAT filesystem driver is enabled by default now.
* Better compatibility with FS drivers in general, `ntfs.sys` and `exfat.sys` drivers from Windows are now close to a working state in ReactOS.
* External drives with FAT filesystem can now be properly ejected.

## Changes for GCC amd64 build

At the moment, we support building for an amd64 target only with the MSVC compiler.
Hervé Poussineau fixed most of the places preventing the compilation with GCC, but there are still some linker issues not fixed.

## NTFS boot sector

Tests show that our homegrown NTFS driver is capable to boot ReactOS (with experimental features enabled),
and `ntfs.sys` driver from Windows is also close to a working state. So it's a good time for working on a bootloader for this filesystem.
The FreeLoader already supports working with NTFS, only the VBR boot sector part is missing.

Sylvain Deverre started to work on the support in a [pull request](https://github.com/reactos/reactos/pull/3416).
We need more people to test different configurations with this VBR, testers and contributors are welcome!

After this VBR work, the only missing bit for supporting NTFS installation (with both our and proprietary driver)
would be formatting support in the ReactOS installer and in the shell.

## PnP and I/O kernel subsystems

A major code cleanup and refactoring was done here by Victor Perevertkin,
allowing better compatibility with Windows drivers and **booting from USB media**.

It's still not perfect though (some hardware we tested has issues with USB controllers),
but now you can just dump a nightly build of ReactOS onto a flash drive and try to boot/install it.
If it doesn't work for you check out other installing options available on our [wiki](https://reactos.org/wiki/Installing_ReactOS#Installing_ReactOS).

This change also improves debugging capabilities, which will speed up driver bugs fixing in future.

## Kernel-mode Driver Framework

Max Korostil continued [the work](https://github.com/reactos/reactos/pull/3276) on a `wdfldr.sys` driver for loading a KMDF library. This will eventually allow ReactOS to have KMDF drivers
in its codebase, without the hack we currently use for static linking.

## FOSDEM 2021 and Matrix room

ReactOS is participating in FOSDEM conference this year, join our stand at [https://stands.fosdem.org/stands/reactos](https://stands.fosdem.org/stands/reactos/)!

Also, an official room on [Matrix](https://matrix.org) network is available now,
feel free to join our community: [#talk:reactos.org](https://matrix.to/#/#talk:reactos.org)
