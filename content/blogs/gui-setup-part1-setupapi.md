---
title:      "1st-stage GUI setup - September 2023: partly Wine-syncing setupapi"
author:     "hbelusca"
date:       2023-12-04
tags:       [ newsletter, gui-setup ]
---

Greetings to all ReactOS followers!
As many of you certainly are aware by now, [I have been officially hired](/project-news/hermes-belusca-hired-full-time) by ReactOS Deutschland e.V. to develop the graphical version of the 1st-stage ReactOS installer ("1st-stage GUI setup").

During this first month (September 2023), my goal was to partly sync the code of the `setupapi.dll` module with Wine's.
Indeed, this module was [forked](https://git.reactos.org/?p=reactos.git;a=blob;f=media/doc/WINESYNC.txt;h=f6614ac83a968cd5d7ddde6483dc85b94d264fc4;hb=HEAD#l182) way back in 2005, with later partial synchronizations of its code for some of its functions.

For those of you who do not know what [setupapi](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/setupapi) is, it is a module that:
- exposes [generic setup functions](https://learn.microsoft.com/en-us/windows/win32/setupapi/setup-api-portal) for reading and processing INF files, moving/copying files from an installation source media to a target, supporting also extraction from compressed .CAB cabinet files;
- and exposes device installation functions as well.

Because of its very nature, it is "one of those Wine components we don't share completely because of architectural differences" [(CORE-7662)](https://jira.reactos.org/browse/CORE-7662) (due mainly to the device installation functions), and as such, as time goes by, Wine code improvements for code that is not tied to OS- and architecture-specific aspects might go unnoticed and our shared code slowly drifts apart for no good reason.

As part of the 1st-stage GUI setup, I need to use the [File Queues](https://learn.microsoft.com/en-us/windows/win32/setupapi/file-queues) and [Cabinet Files](https://learn.microsoft.com/en-us/windows/win32/setupapi/cabinet-files--setup-api-) functions.
These are those that have received recent improvements/bug-fixes from Wine, and that can be synchronized without too much trouble.
(NOTE: It should be observed that our current text-mode 1st-stage installer, USETUP, re-implements a very small subset of these functions, used for extracting files from the `reactos.cab` source file and copying them to the ReactOS installation directory.
In the GUI setup, my aim is to use directly those exposed by `setupapi.dll`.)

The different sub-tasks I need to address are listed in this JIRA report [CORE-19209](https://jira.reactos.org/browse/CORE-19209).


## Winesync.py script

This endeavour started by trying to use our in-house `winesync.py` python script to help syncing Wine code.
It requires one to write a configuration file (e.g. `setupapi.cfg`) that lists which files/directories can be synced for the given module, and maps these from their names in the [Wine repository](https://github.com/wine-mirror/wine/tree/master/), for example: [`dlls/setupapi`](https://github.com/wine-mirror/wine/tree/master/dlls/setupapi) (or one or more of its files), to their corresponding path names in the [ReactOS repository](https://github.com/reactos/reactos/tree/master/dll/win32/setupapi).

With any ReactOS developing task, one always encounters problems or bugs: my attempt at using the `winesync.py` script was no exception to this rule.
The script supposes that one always syncs code with both the Wine and the [Wine-staging](https://github.com/wine-staging/wine-staging) repositories; the script does not support doing the sync with just the Wine repository alone. This had to be fixed.

Next, I develop ReactOS on my old laptop computer running Windows 7, using [Git-for-Windows](https://gitforwindows.org/) and python there.
The `winesync.py` script expected its user to run it under a Unix-like environment, and supposed at many places that the path-manipulation operations were always done in such context.
When run under Python on Windows, these operations generated Windows-formatted paths, that were not always understood (by the pygit module, mainly).
(Note that due to my setup I cannot use WSL there, as suggested by some!)

Other similar problems had to be addressed as well, and I will not list them all there. You can consult the list of required fixes and improvements in the following [PR #5898](https://github.com/reactos/reactos/pull/5898) (NOTE: it has not been merged into the master branch at the time of writing).


## (Partly) wine-syncing setupapi proper

After these fixes in the winesync script, I started the partial syncing of the setupapi module.
As mentioned in the introduction, its code has been forked early on from quite an old (2005) version of the Wine code, on which ReactOS-specific changes have been added.
This was justified at the time, because the ReactOS project had to implement device/driver install management, while Wine did not really care about this back then.
Thus, the code diverged pretty quickly.

The functions I require to be up-to-date are present in several files, and for a careful (re-)synchronization of the code I found it useful to perform the sync file-by-file, instead of doing the sync all at once for all the files of interest, as it is otherwise customary to do.
This allowed me to analyse what changes have been added from Wine side, whether ReactOS-specific changes were present, and notice potential introduced bugs.

Our setupapi version also has 2 or 3 files that are not really necessary for my GUI-setup work proper, that I have not synced, which contain completely different (ReactOS-specific) API implementations than Wine's.

This sync can be found in the [setupapi_partial_winesync](https://github.com/reactos/reactos/commits/hbelusca/setupapi_partial_winesync) branch.

In addition, the corresponding test-suite for setupapi has been synced separately, in the [setupapi_winetest_winesync](https://github.com/reactos/reactos/commits/hbelusca/setupapi_winetest_winesync) branch. Once everything will be thoroughly tested and validated, both branches will be merged together into the main ReactOS master branch.


## Testing the sync

My first test of the sync did not go as expected:
it ended up in a hang during the installation of the PnP drivers for detected devices, at the 2nd-stage ReactOS installation step.
The installation of the necessary drivers is indeed done by setupapi, that interprets their corresponding `.inf` files.

Debugging this issue, it turned out that this was due to Wine's newly-implemented ["source media path resolution"](https://github.com/wine-mirror/wine/commit/3e5c9798a80641e0e39e95e4467c60405b22b062) feature.
The code basically infinitely "looped", unsuccessfully trying to find the installation-media for our drivers we "install" during that installation stage.
In principle, a dialog prompting the user where to find the installation source should be presented -- as it occurs on Windows -- except that Wine has not yet implemented anything for this purpose.
As a result, the code just infinitely loops.

A quick test in ReactOS by swapping its `setupapi.dll` with Windows 2003's one, reveals that this is basically what is happening, with its prompt dialog showing up (the "infinite loop" would be caused by pressing OK, failing, pressing OK again, etc etc.)

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/win2k3_setupapi_in_ROS_2nd_stage.png" src="/img/blogs/hbelusca_gui-setup/win2k3_setupapi_in_ROS_2nd_stage.png" caption="What should happen (as in this test using Windows 2003' setupapi.dll), but does not when using Wine's setupapi.dll code!">}}
{{< /gallery >}}

A temporary hack-fix for this issue has been [added](https://github.com/reactos/reactos/commit/7ceac0dda8da4b60847bb1183ab4f852e84a4864) in the setupapi sync.
It causes the find-installation-media loop to run only once, instead of infinitively many times.
This gives a resulting behaviour that is the same as what existed in the code prior to the sync.

The reason why this happens in ReactOS, is because we use `.inf` files that specify the destination directory where to install the driver,
but the installation source for such drivers, is specified in a `layout.inf` file... that we do not support (ours is empty)!
To further complicate matters, Wine's setupapi does not support `layout.inf` support as well.


## What should be done next?

The setupapi partial sync is theoretically done, but it has not been turned into a PR yet because I want to test it further prior with: the updated winetest, and the files-copy installation step of the 1st-stage GUI setup (which is a work in progress).
This is to see whether there are no subtle bugs that have been introduced, either by Wine or by myself when I had to adapt some of our extra ROS-specific code there.

In addition, something needs to be addressed further.
In the course of years, Wine changed the memory-allocation functions they used globally in `setupapi.dll`, and this showed up in the middle of the sync.
As a consequence, I also need to adapt those non-synced files to make them compatible with this change.
Without that, there exists a risk of e.g. heap corruption. For example, a function in one file allocating some buffer with the CRT malloc(), then this buffer passed to some other function in one of these non-synced files, that will free the buffer with the Win32 HeapFree().

Such a bug has already been encountered, in a Wine-staging patched file, and has been fixed [locally](https://github.com/reactos/reactos/commit/82ee64728360e9cc91025f78b1483d485b349972) (together with another unrelated bug).

---

In the next [blog post](/blogs/gui-setup-part2-partitioning), I will discuss about my work to make partitioning UI code work in the 1st-stage GUI setup, as well as the necessary preparations for partitioning that took place prior.

Stay tuned!

