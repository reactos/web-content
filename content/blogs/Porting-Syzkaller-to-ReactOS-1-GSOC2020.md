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

1. Boot ReactOS with UBSan enabled(@extravert34).
2. Syz-stress and Syz-executor working.
3. Initial set of kernel32 function definitions.
4. Fuzz ReactOS (with around 107 definitions).

## Work-left

1. Setup SSH access on ReactOS/
2. Rebase the heed to current master of Google/Syzkaller.
3. Syz-manager : Automated VM spawn and fuzz.

{{< figure src="/img/blogs/gsoc2020-syzkaller-1.PNG" >}}