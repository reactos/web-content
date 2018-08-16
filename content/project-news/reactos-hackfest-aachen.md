---
title:       "ReactOS Hackfest in Aachen"
author:      "fireball"
type:        news
date:        2015-09-01
changed:     2016-02-05
draft:       false
promote:     false
sticky:      false
url:         /project-news/reactos-hackfest-aachen
aliases:     [ node/3455 ]
news:        [ "news" ]

---

<h3>Day -1 (5th of August)</h3>
<p>As Aleksey arrived well before the hackfest started, Colin was kind enough to show the city in its full glory on a very hot day: the cathedral, springs, restaurants and cafes, and definitely the RWTH university buildings spread across the city. The most relevant was the temporary seminar building where a large room was dedicated for the Hackfest. It turned out to be a clean and modern equipped building which is indeed temporary and will be demolished once the real building is finished, so ReactOS is not the only one to utilize temporary hacks until full implementation is done :).</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3396s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" />
<p>Colin took all org questions upon himself so that everything was prepared for ReactOS developers arriving to the Hackfest.</p>

<h3>Day 0 (6th of August)</h3>
<p>Amine, Stefan and Victor successfully landed in a Colonia airport and were picked up by Aleksey and Colin. Later in the evening Thomas and Timo joined us.</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3402s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

<h3>Day 1 (7th of August)</h3>
<p>The Hackfest started. Everyone came with different hardware: laptops, keyboards, mice, displays, motherboards, etc.
The tables inside the room were arranged into islands and we started hacking.</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3406s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

<p>Christoph built a barebones computer out of relatively old parts for real hardware testing but of course majority of hacking still happened on virtual machines.</p>
<img src="/sites/default/files/imagepicker/10559/IMG_0135s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="450" /><br/>

<p>Interesting commits made by Hackfest devs during 2015-08-07 include:</p>
<ul>
<li>Thomas Faber's MM fixes and an interim fix for code injection into the winlogin process (<a href="//jira.reactos.org/browse/CORE-9598" target="_blank">CORE-9598</a>)</li>
<li>Christoph von Wittich's fix for gdi32 apitest which was looking for test data in a wrong directory</li>
</ul>

<h3>Day 2 (8th of August)</h3>
<p>Thomas Faber continued fixing various issues throughout ReactOS
Christoph von Wittich uncovered a problem in setupapi DLL and fixed it
Daniel Reimer joined us and started a real streak of commits: he reviewed and committed 8 patches from JIRA</p>
<p>The day was rewarded by eating out in a nice Italian restaurant</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3416s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

<h3>Day 3 (9th of August)</h3>
<p>The work continued very well. Even though some devs did not commit anything, they were actively working and we shall see fruits of their work quite soon.</p>
<p>As for commits, we have</p>
<ul>
<li>Daniel Reimer continues his commit spree - 9 commits during this day</li>
<li>Aleksey Bragin factored out good and safe fixes from his "famous" LDR patch and committed them. The remaining stuff needs to be fixed further as it introduced a deadlock condition</li>
<li>Christoph von Wittich and Amine Khaldi worked on fixing <a href="//jira.reactos.org/browse/CORE-9992" target="_blank">CORE-9992</a> and more good work on fusion DLL</li>
<li>Eric Kohl added a warning in the setup partitioning code to warn a user when they attempt to delete an active partition (<a href="//jira.reactos.org/browse/CORE-9996" target="_blank">CORE-9996</a>)</li>
</ul>

<p>Someone sneaked in Alcopony in trunk and she started watching us till the Hackfest end!</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3419s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="337" /><br/>

<h3>Day 4 (10th of August)</h3>
<p>Daniel Reimer continues: this time closing about a dozen of issues.</p>
<p>Christoph von Wittich continued his work aimed at making ATI Radeon graphics card driver installation work in ReactOS. For that, the glorious <a href="//jira.reactos.org/browse/CORE-10000" target="_blank">CORE-10000</a> issue was created. Setupapi lacked support for processing LZ-compressed files (as Wine never needed it) and he implemented that missing part which allowed ATI Radeon drivers to install.</p>
<p>Freeing of an unitialized pointer in the setupapi code was also fixed by Thomas Faber as a bonus (<a href="//jira.reactos.org/browse/CORE-10004" target="_blank">CORE-10004</a>).</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3407s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

<h3>Day 5 (11th of August)</h3>
<p>Aleksey Bragin and Thomas Faber had to leave the Hackfest that day though Thomas was able to continue actively committing from his place with fixes to the Memory Manager, API tests, and other things.
Daniel Reimer closed 4 issues and Benedict Freisen joined the commit spree. Benedict was granted trunk commit access so that he could directly commit all of the hhpcomp work, "our new HTML Help Project (*.hhp) compiler."
Timo Kreuzer committed an implementation of EngQueryLocalTime function which is for sure needed by various video cards drivers</p>
<img src="/sites/default/files/imagepicker/10559/IMG_3404s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

<h3>Day 6-7 (12th and 13th of August)</h3>
<p>Timo Kreuzer resolved an issue in win32k wherein the subsystem would access the wrong usermode address because it did not check which process it was operating on (<a href="//jira.reactos.org/browse/CORE-10017" target="_blank">CORE-10017</a>), but that was roughly it.</p>
<p>The Hackfest had already moved onto the teambuilding stage aka Beerfest and Vodkafest </p>
<p><img src="/sites/default/files/imagepicker/10559/bottles.jpg" alt="Image"  class="imgp_img" style="float: left;" width="100" height="133" /><img src="/sites/default/files/imagepicker/10559/vodka.jpg" alt="Image"  class="imgp_img" style="margin-top: 0; margin-left: 15px;" width="100" height="133" /></p>
<p>And it was time for our devs to pick their flights, trains and cars to go home.</p>

<p>Throughout the week Victor Martinez was doing YouTube live streaming of our daily progress, which can be seen recorded in our <a href="//www.youtube.com/channel/UCMo8NP-2oP35rauon-Duc9Q" target="_blank">ReactOS Community Youtube channel</a>. They provide even more insight into what happened and give the real feeling of the Hackfest atmosphere!</p>

<img src="/sites/default/files/imagepicker/10559/IMG_3434s.jpg" alt="Image"  class="imgp_img" style="display: block; margin-left: auto; margin-right: auto" width="600" height="400" /><br/>

