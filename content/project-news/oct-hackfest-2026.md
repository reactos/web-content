---
title:       "ReactOS Hackfests in 2026"
author:      "ReactOS Team"
date:        2026-10-21
tags:        [ "hackfest" ]
---

The ReactOS project has held hackfests where we met up to develop the operating system.
When core team members and contributors hold these multiday hackfests, we are able to progress not just the foundational code of the operating system, but also our project guidelines and rules.
This year there were two hackfests.

The first was during and after Chemnitzer Linux-Tage (CLT), from March 28th to April 4th.
The second was in Orlando, Florida, from October 9th to October 19th.
This hackfest was the source of much discussion that needed to occur to continue the smooth operation of the project.

In the over 110 commits merged during the time of the Florida hackfest, there were numerous improvements to the OS, available in the nightlies today.
- **New Syscalls:** New NT6+ syscalls were added, including `NtGetNextProcess` and `NtGetNextThread`.
  These syscalls are used for some programs and to protect some games.
- **New Kernel Shim Engine:** The new kernel shim engine allows ReactOS to workaround some buggy drivers and implement quirks that go beyond what Windows offers.
For example, the VMware SVGA driver has a pool tag mismatch that can now be worked around.
3D accelerated programs in VMware can now be exited without a bugcheck.
- **Reference Count Fixes:** Better support for VMware SVGA and other video drivers.
- **NTFS:** Support for formatting and writing to NTFS partitions from ReactOS itself, including using NTFS for installing ReactOS.
- **Kernel Tests:** Kernel tests for Vista+ targets and improvements to our test infrastructure stability when running these tests.
- **Floppy Disks:** Reading, writing, and formatting floppy disks is now supported.
- **Storport:** Fixes to the storport driver means supporting more storage chipset drivers and upcoming NVMe support.
- **Wine:** Additional wine syncs have allowed us to introduce certificate pinning to RAPPS, move to a NT6+ user folder structure, and reduce divergences.
- Thanks to the continued winesyncs we’ve begun to remove some divergences from WINE.
  One of the side effects of this is ReactOS now uses the Vista+ style Users/ folder instead of Documents and Settings;
  This being another step of the newer Vista+ features enablement in the nightlies across the board.

{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-vmware.png" src="/img/project-news/oct-hackfest-2026/octhackfest-vmware.png" caption="VMware SVGA II driver running glxgears with 3D acceleration" >}}
	
# Discussions
Since the transition to GitHub, the ReactOS project has been working to continually improve its pull request reviewing process.
With the project being run by volunteers, this has always been a point of contention.
PRs have often sat dormant for an extended amount of time, causing frustration to their authors and even among our developers.
Of course, with the advent of AI this problem has been amplified.
Multiple entirely AI generated pull requests have hit our repo, with even PR descriptions, commit messages, and replies being written without human intervention.
We human reviewers take a careful look at every PR we merge into our main source tree.
These PRs make it impossible for us to continue doing this.
To improve the situation a new policy has been adopted to tighten the rules and filter out these hard to review PRs.
Of course this isn’t the only discussion we’ve had.
We’re looking forward to a more reasonable and standard pull request review process.
Other than adding tests, asking authors to dramatically rewrite PRs or add new features is something we as a team need to be better about. 

# The Future
During this hackfest we also managed to further large tasks we’ve been working towards.
Previously we’ve discussed work on symmetric multiprocessing (SMP), which allows the OS to use multiple CPUs and/or CPU cores.
During the hackfest, we started a laptop with a combined version of the upcoming hardware resource assignment and SMP work.
We ran the laptop for days at a time, reaching a runtime of over 2 days while actively doing tasks in the background using 2 cores.
{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-smp.png" src="/img/project-news/oct-hackfest-2026/octhackfest-smp.png" caption="ReactOS x64 with the SMP kernel on a Dell Latitude Z600, over 2 days of uptime" >}}
This shows great promise for our 64-bit builds and our SMP kernel, which are rapidly becoming more stable on real hardware.
In the coming months we’ll be trying to do the remaining tasks needed to enable SMP in the nightlies. 
With the new kernel shim engine, we’re able to handle backwards compatibility cases Windows itself never achieved.
{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-nvidia-gpu.png" src="/img/project-news/oct-hackfest-2026/octhackfest-nvidia-gpu.png" caption="NVIDIA XP driver running on a GeForce GTX TITAN X while ReactOS reports NT 6.0" >}}
One of the first examples of this is a shim that will allow NVIDIA XP GPU drivers to work on ReactOS even when the OS is reporting NT6+.
With this shim we achieve a greater level of backwards compatibility with older hardware and drivers that Windows doesn’t even have today.
As we look to the future and begin our transition to NT6+, we haven't forgotten about the retro computing community that has been adopting ReactOS in their adventures.
We want to make ReactOS a viable operating system for old and new hardware alike.
At the end of the hackfest, we took all the in-progress winesyncs and added some extra patches on top of them to test the current state of NT6+ ReactOS and see what interesting things we can accomplish.
While enabling the NT6+ features is a slow rollout for us into the nightlies, we're building a wonderful foundation to run all sorts of new software.
Below are some highlights from this up and coming work that we believe is time to share.

{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-steam.png" src="/img/project-news/oct-hackfest-2026/octhackfest-steam.png" caption="The Steam client running on NT6+ ReactOS" >}}
{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-among.PNG" src="/img/project-news/oct-hackfest-2026/octhackfest-among.PNG" caption="Among Us loading on NT6+ ReactOS on real hardware" >}}
There's also been progress in getting a new USB3/USB4 stack merged, which allows ReactOS to be installed on machines with modern USB chipsets.
As of finishing this blog post, this is now merged in it's basic form with more to come.
{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-xhci.jpg" src="/img/project-news/oct-hackfest-2026/octhackfest-xhci.jpg" caption="USB xHCI host controller detected in Device Manager" >}}

All in all, this hackfest was a blast for everyone involved. 
Quite a bit of work was done to make ReactOS more functional.
With your continued support, we hope to assemble once again to make another burst of progress.
Thank you for sticking with ReactOS!

*If you would like to make a donation to ReactOS, visit [reactos.org/donate](https://reactos.org/donate/)*

{{< figure link="/img/project-news/oct-hackfest-2026/octhackfest-alltogether.jpg" src="/img/project-news/oct-hackfest-2026/octhackfest-alltogether.jpg" caption="The October 2026 hackfest participants, all together" >}}
