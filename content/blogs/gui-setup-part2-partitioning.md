---
title:      "1st-stage GUI setup, Part 2 - October-November 2023: Making partitioning UI work"
author:     "hbelusca"
date:       2024-01-31
tags:       [ newsletter, gui-setup ]
---

Greetings!

Welcome to the second blog of the series "1st-stage GUI setup":
1. [September 2023: partly Wine-syncing setupapi](/blogs/gui-setup-part1-setupapi)
2. October-November 2023: Making partitioning UI work
3. [December 2023: First tests](/blogs/gui-setup-part3-first-testing-problems)

As you may have noticed, I have been quite silent about my work and not regularly writing blog posts about what I have done so far.
Well, I am more concerned about getting _actual_ code written and working before discussing about it,
instead of doing that about half-done not-yet-tested code; much like what the GUI setup was during these previous months.

This is why I am now presenting, in this second blog, the work I did during the months of [October](https://docs.google.com/spreadsheets/d/1Kx80SmSkj1IdomVC9gcbA_MJ7XFiz_YlYYVxoxv-Jgs/view#gid=711109022) and [November](https://docs.google.com/spreadsheets/d/1Kx80SmSkj1IdomVC9gcbA_MJ7XFiz_YlYYVxoxv-Jgs/view#gid=1783614271) 2023, in preparation for the new 1st-stage ReactOS GUI setup.
A third blog post describing the work done during the month of December will follow soon.

During the first week of October, I finished addressing some issues that arose with the partial setupapi winesync [that I started back in September](/blogs/gui-setup-part1-setupapi).

I then started the main part of this project: working on the GUI setup proper.
The crucial work for it resides in three functions:
- Disk partitioning and bootloader installation;
- File copying;
- Saving settings in the registry.

While the last two features were already partly implemented (most of the code being shared with the existing text-mode installer "USETUP") and will be discussed in future blog posts, the first feature, disk partitioning, necessitated more work than I originally anticipated.
This functionality is shared with USETUP but is used in a slightly different manner in the GUI setup.


## Partitioning workflow - Text-mode versus GUI-mode setup

### In the usual text-mode setup

Long-time ReactOS users (and Windows XP/2k3 alike) certainly remember that, during the 1st-stage _text-mode_ setup ("USETUP"), disk partitions can be created, selected, and deleted from the partition list screen.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/usetup_partition_list.png" src="/img/blogs/hbelusca_gui-setup/usetup_partition_list.png" caption="USETUP - Partition list">}}
{{< /gallery >}}

While the creation and deletion operations made from this screen are not immediately applied to the disk, they get applied _as soon_ as the user selects a suitable partition, or an eligible[^1] empty space, for installing ReactOS.
There, the new partition layout is written to the disk and the installation continues, with the choice of a filesystem for formatting the selected or newly-created partitions.
[^1]: Eligible empty space, _i.e._ large enough so that a partition can be created in it.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/usetup_partition_filesystem.png" src="/img/blogs/hbelusca_gui-setup/usetup_partition_filesystem.png" caption="USETUP - Partition filesystem selection">}}
{{< /gallery >}}

The actual partition formatting takes place after the filesystem selection.
Once all the new and (optionally) selected partitions are formatted, they are checked for filesystem defects.
This is particularly true for the selected [_boot partition_](http://jdebp.info/FGA/boot-and-system-volumes.html) for ReactOS installation
(as well as the [_system partition_](https://en.wikipedia.org/wiki/System_partition_and_boot_partition) where the bootloader is installed; these can be the same or different).

After all these steps have been performed, the installer asks the user for the ReactOS installation directory, as well as where to install the bootloader.
The ReactOS installation then begins, copying files and saving settings, then continues after a system restart with the 2nd-stage installer.


### Workflow change in the GUI-mode setup

Although the installation workflow used by the text-mode USETUP _might_ make sense, from a UI perspective (each action is done from a different screen; only forward progress is allowed, and once an action has been chosen, it cannot be undone), the GUI-mode setup changes some of these assumptions.
The wizard-style of the GUI setup allows going back and forth between different pages.

Its partitioning page shows a minimal interface, similar to the text-mode one, but more reminiscent of other GUI partitioning software.

Changing the disk partition layout and formatting new or existing partitions can be considered a sensitive operation -- existing partitions or filesystems could be destroyed!
The user then may feel more comfortable performing such operations virtually, viewing the resulting changes, knowing they haven't yet been actually applied, until his or her final choice has been made.
This is why, for example, 3rd-party partitioning software allows users to stash (queue) all these operations, allowing them to carefully review the changes before applying them.

Because of these considerations, I chose to make the ReactOS GUI setup follow a similar philosophy.
The partition page allows the user to choose the partition where to install ReactOS, as well as to modify the partition layout, keeping the changes in memory until the actual ReactOS installation starts.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_partition_list.png" src="/img/blogs/hbelusca_gui-setup/guisetup_partition_list.png" caption="GUI setup - Partition list">}}
{{< /gallery >}}

This new installation workflow necessitated adapting the existing partitioning code, shared with the text-mode USETUP, to determine where and how to store additional per-partition arbitrary data state (for example, filesystem choice and formatting parameters).

Most importantly, three main changes were required in the code, summarized below.
- Rewriting the formatter/chkdsk machine-state code, that is originally used in USETUP, to make it more generic and act as a queue whose stashed actions can then be committed all at once, so as to employ it in the GUI setup as well.
- Splitting the bootloader installation choice, from its actual installation code: see GitHub [PR #5786](https://github.com/reactos/reactos/pull/5786).
This was needed, because the old behaviour was to present the user with the bootloader installation choice only at the very end of ReactOS installation, and not before starting it, and the old code was not reusable elsewhere.
- Better unify the helper functions used to create partitions: see GitHub [PR #5837](https://github.com/reactos/reactos/pull/5837).
The existing code distinguished between "primary", "logical" and "extended" partitions.
This makes sense for MBR-based disks but does not anywhere else (such as GPT disks).
These partition creation helpers now automatically deduce their actual type -- the only exception being for "extended" partitions for MBR disks only.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_createpart_dlg.png" src="/img/blogs/hbelusca_gui-setup/guisetup_createpart_dlg.png" caption="GUI setup - The new \"Create and Format Partition\" dialog">}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_old_createpart_dlg.png" src="/img/blogs/hbelusca_gui-setup/guisetup_old_createpart_dlg.png" caption="The old \"Create Partition\" dialog, for comparison">}}
{{< /gallery >}}


## What's next -- partition-wise

Partition handling code is now present in the GUI setup.
However, it requires a few improvements:
- Being able to select empty disk space between existing partitions and install ReactOS onto it.
- Reformat an _existing_ partition from the UI.
This is not yet possible because the formatting options currently exist only in the Create-And-Format-Partition dialog;
- Display the selected filesystem for a newly-created partition in the partition list, instead of showing `"New (Unformatted)"`.

----

In the next [blog post](/blogs/gui-setup-part3-first-testing-problems), I will talk about the other functions of the GUI setup not pertaining to partitioning, as well as the problems I encountered when testing the ReactOS GUI installer for the first time.

Stay tuned!

----

#### Some credits

I thank [@learn-more](https://github.com/learn-more), [@tkreuzer](https://github.com/tkreuzer), [@GeoB99](https://github.com/GeoB99), [@binarymaster](https://github.com/binarymaster) and [@cbialorucki](https://github.com/cbialorucki) for the thorough review of this blog post!

