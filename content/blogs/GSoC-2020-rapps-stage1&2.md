---
title:       "Rapps Enhancement stage 1 & 2 - GSoC 2020"
author:      "kernel.bin"
date:        2020-08-05
tags:        [ "gsoc", "gsoc-2020", "rapps" ]
banner:      "/img/blogs/gsoc2020-rapps-stage1&2.png"
---

Hi, I'm He Yang (@kernel.bin), one of the GSoC-2020 students of ReactOS.
Two months have passed since GSoC started, and during these two months, I've made some progress on ReactOS Application Manager (RAPPS), the project I'm working on.

In this blog, I will list out what I've accomplished in these two months, and what I'm planning to do in the next month.

## The work I've done in Stage 1&2

### Stage 1

During stage 1, I mainly focused on screenshot and icon support and various small improvements.

#### work done:
- Add support for screenshots. One can specify URLs to screenshot images in rapps-db .txt file. It will be displayed at the left side of the rich-edit, automatically sized. when downloading / download failed, a placeholder will be displayed. (Currently, only the first image will be displayed).

- Improve icon support. Now icon can be specified in rapps-db .txt file too. (the original design had problems if some special char exists in the software name)

- Some other invisible improvements (Introducing AsyncInet, path-handling improvement, and so on) and some refactoring.

### Stage 2

During stage 2, I mainly focus on improving listview and related code. This turned out the be a pretty big refactor, and it improved the UI a bit.

#### work done:
- Move ToolBar and SearchBar to AppView, and remove "settings" and "exit" button.

- Add a ComboBox in ToolBar, enabling users to choose how to view apps. (Supports details mode and list mode. Tile mode is only supported on Windows)

- Some small bugfix and improvements. (Correctly handle Select All / Deselect All and Column-Click. Handle double-click and RightClick->Install in listview more reasonably and so on)

- Some other invisible improvements and some refactoring. (Make code around listview, class CAvailableApps, CInstalledApps more clear，handle WOW64 registry correctly)

**screenshots**
![RAPPS screenshot](/img/blogs/gsoc2020-rapps-stage1&2.png)

## Short-term Plan

Listed below is the work I'm planning to do next.

- refactor download dialog box and code about downloading. Support concurrent download, reuse the code from (```AsyncInet.cpp```) if possible.

- fix bugs about downloading. (e.g. if download dialog is closed, rapps crashed.)

- command-line support improvements.


Please look forward to my work on RAPPS!
If you have any interesting/exciting ideas, feel free to tell me!
