---
title:       "Detect kernel information disclosure by Bochspwn-reloaded - GSoC 2020 - Final report"
author:      "khanhnt"
date:        2020-08-31
tags:        [ "gsoc", "gsoc-2020" ]
---

After 3 months since [the last blog](https://reactos.org/blogs/gsoc-memory-disclosure-week-1/), I found and pull the patches of 12 memory disclosure bugs:

 - [[NTOS:PS] Fix stack memory disclosure in PsGetContextThread](https://github.com/reactos/reactos/pull/3024): *merged*
 - [[Win32SS][USER] Fix stack memory disclosure in NtUserBuildPropList](https://github.com/reactos/reactos/pull/3023): *merged*
 - [[MOUNTMGR] Fix pool memory disclosure in QueryPointsFromMemory](https://github.com/reactos/reactos/pull/3022): *merged*
 - [[Win32SS][GDI] Fix pool memory disclosure in NtGdiGetGlyphOutline](https://github.com/reactos/reactos/pull/3021): *merged*
 - [[DRIVERS] Fix pool memory disclsoure in CreateDiskDeviceObject of disk driver](https://github.com/reactos/reactos/pull/3020): *closed*
 - [[NTGDI] Fix stack memory disclosure in NtGdiGetTextMetricsW](https://github.com/reactos/reactos/pull/2991): *merged*
 - [[NTOS:KE] Fix stack memory disclosure in KiInitializeUserApc](https://github.com/reactos/reactos/pull/2988): *merged*
 - [[NTOS:IO] Fix pool memory disclosure in IopQueueTargetDeviceEvent](https://github.com/reactos/reactos/pull/2966): *merged*
 - [[Win32SS][GDI] Fix pool memory disclosure in NtGdiGetOutlineTextMetricsInternalW](https://github.com/reactos/reactos/pull/2964): *merged*
 - [[WIN32SS][NTUSER] Fix uninitialized memory cause memory disclosure used for KeUserModeCallback](https://github.com/reactos/reactos/pull/2937): *merged*
 - [[FILESYSTEMS] Fix pool memory disclosure in filesystem drivers supporting FS_INFORMATION_CLASS.FileFsVolumeInformation](https://github.com/reactos/reactos/pull/2975): *merged*
 - [[SDK] Fix pool memory disclosure in IopParseDevice](https://github.com/reactos/reactos/pull/2926): *merged*

Additionally, I did a small change to make bochspwn-reloaded able to detect unitialized memory use for the kernel. When reading a memory which is marked as uninitialized, it reports unitialized memory use. By using memory taint tracking of bochspwn-reloaded, I can figure out which memory is uninitialized so I only need to determine where that memory is being read. Usually, `mov` assembly family instruction is used to read and write memory. I added this code [instrument.cc#L628](https://github.com/reactos/bochspwn-reloaded/blob/master/instrumentation/windows-x86-uiu/instrument.cc#L628) to know current executing instruction is `mov` then if it's read operation [instrument.cc#L464](https://github.com/reactos/bochspwn-reloaded/blob/master/instrumentation/windows-x86-uiu/instrument.cc#L464), I consider it's an uninitialized memory use. The folder [windows-x86-uiu](https://github.com/reactos/bochspwn-reloaded/tree/master/instrumentation/windows-x86-uiu) contains the code which is used to detect uninitialized memory in use. As a result I've found 1 bug:

 - [[NTOS:EX] Fix uninitialized memory in ExUuidCreate](https://github.com/reactos/reactos/pull/3086): *WIP*

While doing the fixes, the most hard part is tracking memory, finding where the original memory is allocated. I use rosautotest to trigger those bugs so I guess there are few bugs left which aren't hit by the tests. Especially in uninitialized memory use, there were many reports reported by the tool but I don't have enough time to investigate, maybe some of them are false positive. I'm going to spend time to investigate and fix those uninitialized memory after the GSoC.
