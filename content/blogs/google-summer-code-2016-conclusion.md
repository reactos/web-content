---
title:       "Google Summer of Code 2016 Conclusion"
author:      "Z98"
type:        blog
date:        2016-09-07
draft:       false
promote:     false
sticky:      false
url:         /blogs/google-summer-code-2016-conclusion
aliases:     [ node/18389 ]

---

<p>It's been a long but ultimately rewarding journey to the completion of Google Summer of Code 2016 for the ReactOS Project. As a project that seeks to implement an open source operating system based off of the NT architecture and compatible with both NT device drivers and Win32 applications, ReactOS faces some rather distinct challenges compared to other open source OS projects. With an emphasis on compatibility and familiarity, interest in the project has increased substantially after the major revamps the other family of NT operating systems has underwent over the past few years.</p>
<p>This was the first year we were accepted for participation since 2011 and the team selected four projects to pursue, all focusing on trying to iron out rough spots in ReactOS' basic functionality. These were to improve hardware support for newer storage devices by implementing a proper <a href="https://github.com/amaneureka/reactos/wiki/Storahci">AHCI driver</a>, fixing up the <a href="https://www.reactos.org/blogs/gsoc-final-report-usb-project-0">USB stack</a> and the underlying infrastructure such as Plug n Play, improved support for the <a href="https://www.reactos.org/blogs/ntfs-write-support-gsoc-work-summary-draft">NTFS filesystem</a> that is the de facto standard for the NT family, and a new <a href="https://www.reactos.org/blogs/google-soc-lwip-conclusion">TCP driver</a> to allow for a better experience using network applications like web browsers. None of these projects were trivial by any means, and several of the students were new to the world of NT kernel development on top of that.</p>
<p>The trials and tribulations the students encountered were documented in a <a href="https://www.reactos.org/blogs/codertrevor">series</a> <a href="https://www.reactos.org/blogs/amaneureka">of</a> <a href="https://www.reactos.org/blogs/zhu48">blog</a> posts they made, allowing the community to keep abreast of both their progress and any hiccups that cropped up. It was often entertaining watching the students stumble upon many of the same difficulties ReactOS' own senior developers encountered during their early days, including that ever painful but necessary step to using a proper debugger instead of relying on printf statements in the code. And considering all four students were neck deep in kernel mode for their respective projects, it was not unheard of for them to end up deadlocking or blue-screening the entire OS while testing changes. Lots of coffee was also consumed in the process.</p>
<p>Overall the team is pleased to consider all four of the projects to have completed their principle objectives and is in the process of merging in their fruits. This last step will not be a quick process by any means, some of the changes are dependent on other infrastructure work that is still ongoing, but come the next release of ReactOS we should start seeing the fruits of this summer's labors.</p>
<p>Thank you again to Google for sponsoring ReactOS this summer, for the mentors who put in their time to answer questions and (mostly) attend the daily IRC meetings, and of course the students whom demonstrated excellent workmanship in their projects.</p>

