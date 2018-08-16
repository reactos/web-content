---
title:       "GSOC Project TSE Week 5"
author:      "SR13"
type:        blog
date:        2017-07-06
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc-project-tse-week-5
aliases:     [ node/46545 ]

---

<p>Hey there! 0/</p>

<p>Last time you must have seen some snapshots of where the QuickLaunch has reached. Seeing the UI and some functionalities in the snaps must have given you a feeling that it's complete and finished. But, Nah... a lot of work is left, besides debugging so that Dr. Watson would finally be free of his postmortems!! XP</p>

<p>Coming straight to the point, this week the best thing was about <a href="https://code.reactos.org/cru/CR-122">'Code Reviews'</a>. Since this is my first project with ReactOS, I experienced the code reviews for the first time. As you must have guessed, the Crucible platform was used for the same. One of the things which I liked about such code reviews is, everyone has the complete chance to transparently go through the code and comment on whatever part of the code they feel needs correction, according to their own expertise and experience. Thus all doubts get cleared there itself and besides the author gets such a user-friendly UI to handle all the issues and doubts raised in the review. Thanks to Crucible for that and of course ReactOS too. :)</p>

<p>Most of the time of this week was focused on the code reviews but I also continued my work on menus which I had started last time. I implemented the IContextMenu:: QueryContextMenu method to support the working of various options like 'views' and 'show text'. As you can see (see pics below), now the familiar options of the toolbar context menu are working:- </p>

1. Default:
<img src="/sites/default/files/imagepicker/51617/week5_1_0.jpg" alt="week5.1"  class="imgp_img" width="1360" height="768" />
2. Show Text (disabled):
<img src="/sites/default/files/imagepicker/51617/week5_2_0.jpg" alt="week5.2"  class="imgp_img" width="1360" height="768" />
3. View - Large Icons:
<img src="/sites/default/files/imagepicker/51617/week5_3_0.jpg" alt="week5.3"  class="imgp_img" width="1360" height="768" />
4. Both:
<img src="/sites/default/files/imagepicker/51617/week5_4_0.jpg" alt="week5.4"  class="imgp_img" width="1360" height="768" />
<br>
<p>As they say, everyone has a unique pair of eyes and seeing the number of reviews and corrections made really proves this point. And it really helped a lot to improve the quality of code and be in sync with the recommended coding style. You can check the <a href="https://code.reactos.org/cru/CR-122">'CR-122'</a> to get a complete picture of the reviews made. Some of the minor issues which I cleared first was regarding the whitespaces and coding styles. Then I worked on refactoring as suggested. Later I worked on some major code fixes like removing unnecessary Interfaces and be in sync with the 'com_apitests'. One important thing which I learned was about localizing the menus and strings as resources so that it will help in supporting various languages in the future as required.</p>

<p>I thank everyone from ReactOS who helped me by giving a thorough review of my code. See you next time. ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/qcklnch">Code Repository</a></li>
<li><a href="https://code.reactos.org/cru/CR-122">Code Reviews</a></li>
</ol>
