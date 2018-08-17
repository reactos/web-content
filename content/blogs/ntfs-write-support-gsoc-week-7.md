---
title:       "NTFS Write Support GSoC - Week 7"
author:      "coderTrevor"
date:        2016-07-13
aliases:     [ node/13602 ]

---

<h3>Assigning Clusters Part 2</h3>

<p>I can't believe week seven has already passed! Adding assigned clusters to data runs turned out to be more challenging than I anticipated, but I made steady progress on it throughout the week and have it working now (as far as I can tell). Fixing the problems with LargeMcb.c in week 1 came full-circle, as I relied on a map control block to simplify my task considerably.</p>

<p>I also fixed a couple of issues in the read functionality of the driver, both of which got in my way at one point or another. One was a genuine bug that would cause data to not be read from a file in certain instances. The other only came up if a file was corrupted, but it would often result in a BSOD when that happened. It's always nice to make improvements that contribute to the driver working more reliably. After all, it can't stay experimental forever!</p>

<p>One decision I made early on in the week was to write a function that would dump the data runs in both binary and interpreted form. The output looks like this:</p>

<p><img src="/sites/default/files/imagepicker/49142/DataRunsDump.png" alt="NtfsDumpDataRuns output"  class="imgp_img" width="527" height="107" /></p>

<p>This shows a file with two fragments and 16 clusters assigned to it. This function didn't take long to write at all and I'm really glad I did this early on as it allowed me to quickly identify multiple bugs that came up during development.</p>

<p>The most difficult-to-find bug involved one or two bytes near the end of a data run getting corrupted once the data run was long enough. I found the bug by calling my NtfsDumpDataRuns() function after any line that referenced the memory of either the file record or the attribute.</p>

<p>The culprit turned out to be my fuction that updates a file record on disk. That function was writing the fixup array to the file record before writing it to disk. However, it was modifying the file record that was passed to it and leaving the fixup values in place, corrupting the file record in memory.</p>

<p>I did freak out a little bit near the end of the week when I thought everything was working, but instead saw a familiar message after updating a file with notepad in ReactOS:</p>

<p><a href="/sites/default/files/imagepicker/49142/familiar_error.png" title="A familiar error for me" target="_blank"><img src="/sites/default/files/imagepicker/49142/familiar_error.png" alt="A familiar error for me"  class="imgp_img" width="640" height="479" /></a></p>

<p>I should be used to this by now: after I have a feature working in ROS, it needs to be debugged for Windows. It must be so much easier to make an operating system from the ground-up! This turned out to be a pretty simple error, caused by not updating the data runs when truncating a file. It was easy to fix, and now I'm back in business! :)</p>

<p><h3>Looking forward</h3></p>

<p>There's a few lingering issues that need to be addressed related to updating a file's size, and I hope to fix all of the major ones during week 8. Then I need to shift gears and start focusing on creating new files! Finally! Have I mentioned in this blog how that's not a trivial thing to implement with NTFS? I guess I should talk about why that is in a future blog post...</p>

<p><br></p>
<h3><a href="https://www.reactos.org/forum/viewtopic.php?f=2&t=15599">Discussion</a></h3>
