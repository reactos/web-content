---
title:       "Newsletter 66"
author:      "Z98"
type:        news
date:        2009-10-31
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-66
aliases:     [ node/206 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>FAT<br /></li>
# <li>Kernel Memory Pool</li>
# <li>New Developer</li>
# </ul>

---
<h2>FAT<br /></h2>
<p>A short while ago the FullFAT library was mentioned on the ReactOS forum and then brought to the attention of the developers by IRC regulars.  Written by James Walmsley, it is a platform independent library for accessing FAT12/16/32 partitions and it was suggested that a new IFS driver could be written using it. The current FAT driver was written against an older, less NT compliant kernel and was never extensively tested on Windows to begin with. It suffers from multiple stability issues and thus an alternative was sought.  James was approached and supported the idea but had little experience with NT IFS drivers so Aleksey Bragin decided to attempt it instead.  It took approximately two days to get a prototype capable of mounting a volume and reading files off.</p>
<p>While the FULLFAT library provides the necessary file access functions, all bookkeeping must be done by the driver.  One such case involves information requests made about files, such as their length.  Another function would be the locking of files.  Aleksey is currently implementing them and is actually testing this on Windows 2003 instead of ReactOS.  Hopefully when the driver is completed it can serve as an open source reference for future efforts in writing NT IFS drivers alongside with providing ReactOS with a stable FAT filesystem.</p>
<h2>Kernel Memory Pool</h2>
<p>Several months back mention was made of a new pool system Aleksey Bragin was working on.  He had originally started this before the ARM team begain their rewrite of the memory manager and thus was developing against the old code base.  After the improvements the ARM team made, Aleksey felt it no longer made sense to have the new pool rely on the old broken functionality.  Instead, he handed his work over to the ARM team and they used it as a foundation for a new improved pool.</p>
<p>As a reminder, the pool is the place where the kernel draws memory for dynamic allocations.  Because there does not exist a heap in the same sense as user mode applications see, the kernel must maintain a pool of memory to fulfill such needs.  There also exists two pools, one for paged memory (can be swapped out to disk) and one for nonpaged memory (always in memory).  Paged memory is used much more often and is much more abundant than nonpaged, so any improvement to its management will result in a noticeable speed increase.</p>
<h2>New Developer</h2>
<p>Please welcome Lucas Suggs, known as anakha on IRC.&nbsp; He's demonstrated an interest in filling out the upper levels of the network stack and is currently integrating some third party code in, wrestling with GCC in the process.&nbsp; Here's hoping he remains a part of the ReactOS team for a long time and continue to help improve the operating system far into the future.</p>
