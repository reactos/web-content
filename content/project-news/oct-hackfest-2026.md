---
title:       "ReactOS October 2026 Hackfest"
author:      "ReactOS Team"
date:        2026-10-21
tags:        [ "hackfest" ]
---

For years the ReactOS project has held events where we met up to develop the operating system.
When multiple of the core team members, and contributors alike hold these multiday events or hackfests, we are able to progress not just the foundational code of the operating system but the guidelines and rules we use apply to the GitHub process.
This year there were two events, both of which held one of these hackfests.
The first at Chemnitzer Linux-Tage (CLT, 2026).
Oct 9th-19th of this year we had another hackfest in Florida, Orlando.
This hackfest was the source of much discussion that needed to occur to continue the smooth operation of the project.

In the over 110 commits merged during the time of the Florida hackfest there are numerous improvements to the OS, available in the nightlies today.
- Multiple new NT6+ syscalls have been added behind the scenes such as `NtGetNextProcess`, `NtGetNextThread` which will play a key role in multiple pieces of software, including those designed to protect some games. 
- The Kernel Shim Engine has been introduced, allowing ReactOS to workaround some buggy drivers and implement quirks that go beyond what Windows offers.
  The VMware SVGA having a pool tag mismatch as a consequence is now handled;
  Dramatically improving the experience of using 3D acceleration in VMware without having a bugcheck.
- Fixes to reference counting to better support VMware SVGA and other video drivers.
- Support for formatting drives as NTFS from ReactOS itself, allowing to use NTFS as a filesystem for the OS installation.
- Basic support for reading and writing NTFS while albeit a bit slow and likely has issues, though it’s the first time in ReactOS’s history we’ve been able to fully install on it.
- Kernel API level testing for Vista+ targets and improvements in our test infrastructure stability when running these tests.
- Floppy disk support.
- More fixes to the storport driver which will allow more drivers to run for the chipsets of devices, and NVMe support being introduced.
- Many more winesyncs done which has allowed us to introduce certificate pinning, increasing our RAPPS security.
- Thanks to the continued winesyncs we’ve begun to remove some divergences from WINE.
  One of the side effects of this is ReactOS now uses the Vista+ style Users/ folder instead of Documents and Settings;
  This being another step of the newer Vista+ features enablement in the nightlies across the board.

[TODO: VMware SVGA image?]
	
# Discussions
Since the transition to GitHub the ReactOS project has been working to continually improve its Pull Request reviewing process.
With the project being run by volunteers this has always been a point of contention.
PRs have often sat dormant for an extended amount of time, causing frustration to their authors and even among our developers.
Of course, in the advent of AI this problem has been amplified.
Multiple Pull Requests have hit our repo which were entirely AI generated, going as far as the PR description and commit messages, even including the responses to review critiques.
With ReactOS as a project being what it is, we take a careful look at every PR we merge into our main source tree;
These PRs make it impossible for us as a project to continue doing this.
To improve the situation a new policy has been drafted and currently is being evaluated across the team to directly tighten the rules and filter out these hard to review PRs.
Of course this isn’t the only discussion we’ve had.
We’re looking forward to a more reasonable and standard Pull Request review process approach.
Other than adding tests, asking authors to dramatically rewrite PRs or add new features is something we as a team need to do better about. 

# The Future
During this hackfest we also managed to further large tasks we’ve been working towards.
Previously we’ve discussed SMP work;
The ability to use multiple CPUs during the hackfest we started a laptop with a combined version of the upcoming hardware resource assignment work and SMP work and ran a laptop for days at a time, reaching a runtime of over 2 days while actively doing tasks in the background and using 2 cores. 
[TODO: Attach a screenshot]
This shows great promise not just for our 64-bit version which is rapidly getting more stable on hardware, but our ability to run the operating system with the SMP kernel while showing signs of slowly approaching the stability needed to be daily used.
In the coming months we’ll be trying to do the remaining tasks needed to enable SMP in the nightlies. 
With the merge of the Kernel Shim Engine, we’re able to build out handling for backwards compatibility cases that Windows itself never achieved.
[TODO: Illen’s image]
One of the first examples of this is a shim that will allow NVIDIA XP GPU drivers to work on ReactOS even when the OS is reporting NT6+.
This produces the path needed for us to have a greater level of backwards compatibility with older hardware and drivers that Windows doesn’t even have today.
As we look to the future and begin our transition to NT 6.0 and above we’re hoping to keep alive the very colorful retro computing community that has been adopting ReactOS in their adventures, this is our first step to doing this.
At the end of the hackfest we took all the in-progress winesyncs and added some extra patches on top of them to try and test the current state of NT6+ ReactOS and see what interesting things we can do.
While enabling the NT6+ features is a slow rollout for us into the nightlies, we're getting a wonderful foundation to run all sorts of new software. Below are some highlights we’ve gotten with this up and coming work that we believe it’s time to share.
[TODO: Attach ZZZ screenshot]
[TODO: Attach Steam screenshot? Or maybe chrome]
There's also been to get the up and coming USB3/USB4 stack merged which allow ReactOS to be installed on more modern chipsets.
[TODO: Uhh I'll upload xhci img or something]

All in all, the hackfest was a blast for everyone involved, quite a bit of work was done to make ReactOS closer to being functional.
With your continued support, we hope to assemble once again to make another burst of progress.
Thank you for sticking with ReactOS!
