---
title:       "Jérôme Gardou hired full-time to work on the memory manager"
author:      "Colin Finck"
date:        2020-10-26
---

I proudly announce that ReactOS Deutschland e.V. has hired Jérôme Gardou to work full-time on the ReactOS kernel's memory manager for the next 3 months.

Jérôme is a ReactOS veteran who has been contributing to the project since 2009.
He has deep expertise into nearly all parts of ReactOS, ranging from various user-mode components (mostly related to low-level graphics) over their kernel-mode counterparts and down to bare-metal components like the kernel memory manager.

During the upcoming months, Jérôme is going to overhaul the `Mm` (Memory Manager) and `Cc` (Cache Controller) components of the kernel.
Both of them are core parts of the operating system, which are involved in every memory request and file operation.
Improving them is expected to have a substantial effect on the overall stability and performance of ReactOS.

Going into the nitty-gritty technical details, Jérôme first wants to make `Cc` a client of `Mm`.
Instead of creating a cache entry for each file section (as ReactOS does right now), let's do it the other way round:
Create an `Mm` section for each cached file and page it in when the filesystem driver requests it.
This has several benefits:

* We use less address space in `Cc`, as each file section will not create a cache entry anymore.
* The ReactOS kernel's architecture gets closer to the Windows original, thereby improving compatibility and maintainability.
* Simplified development in both `Mm` and `Cc`, as that step makes the kernel more modular.

The work will be followed by integrating file section creation into the code path of the "modern" ReactOS memory manager (internally known as `ARM3`), registering pages into process working sets, and finally implementing a thread for proper memory paging.  
For parts that are still unclear as of today, Jérôme plans to write additional kernel-mode tests.

This announcement comes just a few months after we [hired Victor Perevertkin](/project-news/victor-perevertkin-hired-full-time) to work full-time on the storage stack.
He is still working for us and just about to finish [porting the Kernel-Mode Driver Framework (KMDF) to ReactOS](https://github.com/reactos/reactos/pull/3234), which will enable us to leverage many open-source storage drivers written for Windows.

With two full-time hirings, 2020 is definitely a landmark year for the ReactOS Project.  
Many thanks go out to our generous **donors** for making this possible!
Your [continued donations](/donate) already enable us to finance two developers, and hopefully many more in the future.
