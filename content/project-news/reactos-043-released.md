---
title:       "ReactOS 0.4.3 Released"
author:      "Z98"
type:        news
date:        2016-11-16
draft:       false
promote:     false
sticky:      false
url:         /project-news/reactos-043-released
aliases:     [ node/25550 ]
news:        [ "news" ]

---

<p>The ReactOS Project is pleased to announce the release of another incremental update, version <a href="https://reactos.org/wiki/0.4.3">0.4.3</a>. This would be fourth such release the project has made this year, an indication we hope of the steady progress that we have made. Approximately 342 issues were resolved since the release of 0.4.2, with the oldest dating all the way back to 2006 involving text alignment.</p>
<p>Notable in this release is the switching to a new winsock library that had been started several years ago by Alex Ionescu and imported into trunk by Ged Murphy. Even after it was brought in however significant work remained to be done before it could replace the old winsock library, work which Peter Hater and <span class="_5yl5"><span>Andreas Maier</span></span> undertook. Their effort has now reached a point wherein the team feels it is ready to supplant the original library and 0.4.3 serves as the first release to incorporate it. As the winsock library underpins effectively all network operations in user mode applications, and its improvement should be a significant boon for ReactOS' compatibility with such programs as the Good old Games (GoG) client and newer versions of the Python runtime.</p>

<a href="/sites/default/files/imagepicker/14095/gog_0.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/gog_0.png" alt="Image"  class="imgp_img" width="200" height="150" style="margin:0 auto; margin-bottom:20px"/></a>

<p>Of perhaps more interest to vintage game fans, improvements to ReactOS' implementation of NTVDM has seen several more DOS-era games now running successfully. Strategy fans in particular should enjoy a trip down memory lane with the likes of Age of Empires and Command &amp; Conquer.</p>
<div class="row" style="margin-bottom:20px">
<div class="col-md-6">
<a href="/sites/default/files/imagepicker/14095/aoe.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/aoe.png" alt="Image"  class="imgp_img" width="200" height="150" style="margin:0 auto"/></a></div>
<div class="col-md-6">
<a href="/sites/default/files/imagepicker/14095/ros-r72819-c_cDosRuns.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/ros-r72819-c_cDosRuns.png" alt="Image"  class="imgp_img" width="200" height="150" style="margin:0 auto"/></a>
</div>
</div>
<p>Behind the scenes the team has made a major effort to flesh out the test suite, ranging from memory related functionality to the windows shell API. Work also continues on the aptly named Another Rewrite of the Memory Manager Module (ARM3) with the initial implementation of sections support, the last major piece of functionality before it can completely replace the old memory manager.</p>
<p>A more detailed list of changes can be found on the <a href="https://reactos.org/wiki/ChangeLog-0.4.3">changelog</a>. Those seeking to download the <a href="https://sourceforge.net/projects/reactos/files/ReactOS/0.4.3/ReactOS-0.4.3-iso.zip/download">install CD</a> and <a href="https://sourceforge.net/projects/reactos/files/ReactOS/0.4.3/ReactOS-0.4.3-live.zip/download">liveCD</a> respectively can follow the links.</p>
<p>As always the project is thankful to all of the developers and volunteers that have put so much time and effort into ReactOS and the donors that have generously supported the project, even enabling us to hire several developers. We would not be here without all of you, and we hope that the steady stream of releases will continue in coming year and beyond. Today however we leave you with a few more shots of other programs which ReactOS now plays well with.</p>
<div>
<div class="row" style="margin-bottom:20px">
<div class="col-md-4">
<a href="/sites/default/files/imagepicker/14095/audacity.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/audacity.png" alt="Image"  class="imgp_img" width="200" height="164" style="margin:0 auto" /></a>
</div>
<div class="col-md-4">
<a href="/sites/default/files/imagepicker/14095/Palemon.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/Palemon.png" alt="Image"  class="imgp_img" width="200" height="113" style="margin:0 auto"/></a>
</div>
<div class="col-md-4">
<a href="/sites/default/files/imagepicker/14095/blender.png" target="_blank"><img src="/sites/default/files/imagepicker/14095/thumbs/blender.png" alt="Image"  class="imgp_img" width="200" height="150" style="margin:0 auto"/></a>
</div>
</div>
<div class="row" style="margin-bottom:20px">
<div class="col-md-6">
<iframe allowfullscreen="" src="https://www.youtube.com/embed/nh_6riVfW_E"  frameborder="0" style="height: 250px; margin: 0 auto;display: block;"></iframe>
</div>
<div class="col-md-6">
<iframe allowfullscreen="" src="https://www.youtube.com/embed/JzzKfAmx-v8"  frameborder="0" style="height: 250px; margin: 0 auto;display: block;"></iframe>
</div>
</div>
