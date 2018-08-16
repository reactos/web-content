---
title:       "July 2012 Meeting B Minutes"
author:      "Z98"
type:        news
date:        2012-08-07
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /july-2012-meeting-b-minutes
aliases:     [ node/317 ]
news:        [ "news" ]

---

<p>2012-07-26<br />19:00 UTC<br />dev.reactos.org, #meeting</p>
<p>Proceedings</p>
<hr />
<p>Meeting started at 19:09 by Aleksey Bragin</p>
<ul>
<li>Point 1: Website Update</li>
<li>Point 2: Technical Questions by Newer Team Members</li>
</ul>
<p>&nbsp;</p>
<hr />
<h2>Point 1</h2>
<p>Danny Gotte noted that he was still having trouble with the Java code to plug into the Atlassian web applications. Ziliang Guo had stated that he could help, as he had Java development experience, but both he and Danny had exams this week and so did not have time to do any actual work.</p>
<p>Ziliang reported that approximately 80% of the content for the new CMS is ready, with a big chunk of the remaining 20% being updated screenshots for various guides. Danny suggested asking people in the community for help. Ziliang and the others agreed and Ziliang said he would draft a list of needed screenshots once he had helped with the Java problems. Aleksey and Olaf Siejka wanted to push for a transition by the next meeting.</p>
<p>Update regarding point 1: Ziliang worked around the initial problems Danny faced with the Atlassian plugin and handed a partially implemented prototype to Danny, which also provided log output, which Danny was having trouble getting before.</p>
<h2>Point 2</h2>
<p>Alexander Rechitskiy and Hermes Belusca Maito reported on their efforts to test a variety of installers on ReactOS and asked for some help and opinions on why things failed. Two issues were raised, one regarding failures to create TCP connections and the other regarding the Windows version ReactOS returned. Ziliang pointed out that one of the installers where the version check seemingly failed might have been looking for XP, whereas ReactOS reports itself as Server 2003. Additional discussion followed on how to diagnose such issues with no real conclusions and suggestions the matter be continued in the development channel.</p>
<p>Meeting was closed at 20:54 by Ziliang, as Aleksey had to leave early.</p>
<p>Minutes prepared by Ziliang Guo.</p>
<p>&nbsp;</p>
