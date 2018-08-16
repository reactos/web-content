---
title:       "GSoC NTFS 2017 Update 10"
author:      "coderTrevor"
type:        blog
date:        2017-08-19
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc-ntfs-2017-update-10
aliases:     [ node/49340 ]

---

<p>Home stretch! Just a matter of days before Google opens up the GSoC final submission! I'll be using every minute I have available to me in the interim.</p>

<h2>Splitting A B-Tree Node</h2>

<p>Have I finally finished my magnum opus, allowing for file creation without limits on the number of files? Well, the bad news is, no, I still have more work to do on this. The good news, however, is I have this working in ReactOS! (most of the time)</p>

<p>Check it out, here's a gif of me creating 700 brand-new files with my tester in ReactOS:</p>

<p><img src="/sites/default/files/imagepicker/49142/Creating_700_files_2.gif" alt="Creating 700 files on NTFS in ReactOS"  class="imgp_img" width="796" height="597" /></p>

<p>Don't worry about the crappy performance. There's lots of opportunity for performance improvements but it's not a priority until the driver is functional and stable. Most of the poor performance is just because of aggressive debug logging anyway.</p>

<p>Sadly, I still have more debugging to do before I can say I'm done. As has so often been the case, I have this feature working in ReactOS before Windows fully recognizes my changes. I can create about a hundred files in ReactOS and Windows will gladly read them all and chkdsk will find no problems, but Windows becomes unhappy somewhere around the 120th file created in ReactOS.
</p>

<p>Those of you who follow my blog closely will recognize that this has happened for just about every feature I add. Windows is much pickier than ReactOS, so each new feature requires extra debugging until every byte of every record is perfectly correct.</p>

<p>I wanted to write about how splitting a B-Tree is implemented and show some nice pictures, but I don't think I have the time, sorry. There's bugs to be squashed!</p>

<h2>Looking Forward</h2>

<p>My immediate goal is to get file creation pretty much working as you'd expect it to. I've accepted that file deletion is no longer a realistic possibility within the limits of GSoC. I'm bummed that I fell short of my proposed timeline, especially after having one GSoC under my belt to hopefully give me more skill with estimating how long things take, but I'll talk about that more in my final blog post. Hopefully, I'll also talk about how file-creation is working! :P</p>
