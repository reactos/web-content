---
title:       "Porting Syzkaller to ReactOS (Evaluation-1) - GSoC 2020"
author:      "Freakston"
date:        2020-06-30
tags:        [ "gsoc", "gsoc-2020" ]
---

Hey, I am Suraj K Suresh (@Freakston), In this post I'm going to be listing out what I've completed in Coding period-1 of GSoC.

## Status 

The initial part of setting up Syzkaller and being able to fuzz ReactOS is done. The link to grab ReactOS compatible syzkaller is as follows: [Github](https://github.com/reactos/syzkaller).

The detailed instruction on setting it up can be found [here](https://github.com/reactos/syzkaller/blob/reactos/docs/ReactOS.md).

## Work-done

* Boot ReactOS with UBSan enabled.

The branch which has UBSan enabled can be found in [extravert34's fork of ReactOS](https://github.com/Extravert-ir/reactos/tree/ubsan2).

* Syz-stress and Syz-executor working.

Syz-Stress is the program responsible for generating mutated programs and syz-executor does the execution part.
In the upcoming builds I will be working on adding Shared memory support for syz-executor.

* Initial set of kernel32 function definitions.

Currently the main focus is Ntdll and Kernel32.
From the next build onwards I will be adding function descriptions, mostly form Ntdll.

* Fuzz ReactOS (with around 107 definitions).

The results of the fuzzing were ~4 crashes (2 BSOD's and 1 freezup).
I was not able to capture the reproducer as logging was not enabled.

A few changes were made on the ReactOS part as well, such as exporting a few NT6.0+ functions. The PR can be found [here](https://github.com/reactos/reactos/pull/2930).

## Work-left

* Setup SSH access on ReactOS.

The SSH access is needed for Syz-manager to communicate with the spawned VM's.

* Rebase the heed to current master of Google/Syzkaller.

This wil enable us to add more features to the syz-executor such as support for KCOV, Shared memory. 

* Syz-manager : Automated VM spawn and fuzz.

A Screenshot of Syz-stress fuzzing ReactOS.

{{< figure src="/img/blogs/gsoc2020-syzkaller-1.PNG" >}}
