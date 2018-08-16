---
title:       "March 2018 meeting minutes"
author:      "Harteex"
type:        article
date:        2018-04-03
changed:     2018-04-05
draft:       false
promote:     false
sticky:      false
url:         /project-news/march-2018-meeting-minutes
aliases:     [ node/65622 ]

---

<p>2018-03-29<br />
	19:00 UTC<br />
	#meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 19:08 by Colin Finck</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: GSoC</li>
    <li>Point 3: 0.4.8 Status and Release Planning</li>
    <li>Point 4: Hackfest</li>
    <li>Point 5: USB Patches</li>
    <li>Point 6: Code of Conduct</li>
</ul>

<h2>Point 1: Status Reports</h2>

<p><b>Aleksey Bragin</b> has been busy with his full time job as CTO. He doesn't have enough time for ReactOS, and suggests to elect a new Project Coordinator. He notes that he really enjoyed his time in the Project Coordinator position, but feels someone else could do the job better right now.</p>
<p>Apart from that, he's still teaching ReactOS as part of an Operating Systems course at Moscow State University. He's also still following ReactOS and might contribute again in the future.</p>

<p><b>Aleksandar Andrejevic</b> is busy with his PhD, but thinks things will be a bit easier now since he finally found a topic. His plan for ReactOS is to work on WOW16 when he finds time for it.</p>

<p><b>Alexander Rechitskiy</b> spent time recently to advertise ReactOS participation in GSoC 2018 with other members of the Russian speaking community. He has also been doing a lot of testing, including the upcoming USB support by Vadim.</p>
<p>Apparently Alexander is now a TV celebrity, having been seen for about 3 seconds in the news.</p>

<p><b>Amine Khaldi</b> mostly worked on Wine syncs lately, and is close to finishing the commits, while locally keeping things up to date with staging as it progresses. He has also spent time on some GSoC related things.</p>

<p><b>Andreas Bjerkeholt</b> is new to the meetings, but a long time follower and minor contributor. Since he went down to 50% at his job, he has more time on his hands and decided to help out by writing the Meeting Minutes, the very ones which you are reading right now.</p>

<p><b>Colin Finck</b> has been mostly busy with his master's thesis, which he's about to finish in the upcoming days. Since January, he also committed a first patch towards NT6+ compatibility, improved printing a bit, and did some infrastructure work.</p>
<p>Colin also brought up the topic that ReactOS urgently needs some web developers. The shutdown of Google Recaptcha v1 will be a problem that needs solving. Colin plans to move to another Single-Sign-On system and update the website backend to the latest versions, but has no idea about the time frame. Help is appreciated in this area.</p>

<p><b>David Quintana</b> didn't have much to report due to real-life obligations.</p>

<p><b>Ged Murphy</b> had nothing ReactOS related to report. He notes that he's now a Git expert.</p>

<p><b>Hermes Belusca Maito</b> had nothing to report.</p>

<p><b>Joachim Henze</b> is done with the tests for 0.4.8 (https://reactos.org/wiki/Tests_for_0.4.8). From now on, known regressions are also listed explicitly in a separate section. All in all he believes the upcoming release is one of the best releases yet, quality wise.</p>
<p>He asked Ged and Victor if they could help with the release notes, and they both were available to help.</p>

<p><b>Mark Jansen</b> has been working on a number of things. In February he worked on appcompat maintenance, adding shims and some tests for newer Windows versions. He also did some Rapps fixes and some fixes from Jira. In March he fixed some winetests and more fixes from Jira.</p>
<p>Mark also started work on making the appcompat apitest work on x64.</p>
<p>Colin asked if the apisets had progressed in any way, but Mark was mostly holding back, as Timo wants to add versioning to spec files. Mark is awaiting this since he is using a python script to parse spec files, and auto-generate apisets from that.</p>

<p><b>Sylvain Petreolle</b> had nothing to report.</p>

<p><b>Oleksandr Shaposhnikov</b> has been busy with his studies and a traineeship. He has mostly helped around and fiddled with Rapps a bit. He is still too busy for code contributions, but he's now helping out with GSoC among other things.</p>

<p><b>Stanislav Motylkov</b> has been working on minor fixes in the usermode libraries, including API behaviour and design fixes. He has around 20 commits that will go into 0.4.8.</p>
<p>He has also recently been updating some outdated pages on the ReactOS wiki that linked to SVN, and fixed them to point to the official GitHub page and the Git tutorial.</p>
<p>Finally, he started testing to build the USB patches and documented some things at https://reactos.org/wiki/LiveUSB#Vgal_USB_state</p>

<p><b>Victor Martinez</b> has been buried in work at his new job, but he thinks he should have more time forward. He has time to help with the site and if any newcomers would like to join the work on the website and infrastructure, he'll be here to help them too.</p>
<p>Hermes asked about the Rapps website, to which Victor responded that it's soon time to share it, and then rework on top of it if anything is needed.</p>
<p>Finally Victor had looked into several grants, to possibly help out ReactOS on the financial side.</p>

<h2>Point 2: GSoC</h2>

<p>The student application phase has now closed and it's time to review all proposals. So far Oleksandr has left comments for each proposal, and more people are encouraged to help out.</p>

<p>The deadline for selecting students and number of slots is April 23. The number of slots depends largely on the number of mentors available.</p>

<p>Discussions will continue on the topic at a later time.</p>

<h2>Point 3: 0.4.8 Status and Release Planning</h2>

<p>The new 0.4.8 release is coming closer and is due to be released soon. Joachim asked developers to check the regression list in the 0.4.8 test document to try to make the list as short as possible.</p>

<p>Ged and Victor will help out writing the release notes.</p>

<h2>Point 4: Hackfest</h2>

<p>After the success of 2015 and 2017, Colin asked about the interest for a 2018 hackfest. He suggested Berlin as good place, since it's easy to get to from most places. He decided to check with Thomas and do some more planning, and then check the interest again.</p>

<h2>Point 5: USB Patches</h2>

<p>Oleksandr brought up the topic about the status of the USB patches, that are waiting to be reviewed on GitHub. For now it's mainly Thomas reviewing, and he wants to look at every detail to make sure the driver doesn't crash under certain circumstances at boot. The idea is to be careful to not introduce any regressions.</p>

<p>PR 283 was brought up, which had approvements from both Thomas and Hermes. Since it didn't depend on any other patches, the decision was to merge it after the meeting.</p>

<p>Stanislav proposed to create a branch with all of Vadim's patches, and run it in the Testbot, to be able to better test the changes. He will take it upon himself to work on that.</p>

<h2>Point 6: Code of Conduct</h2>

<p>A code of conduct was recently suggested on GitHub as a PR. It was changed a few times after input from different team members. After a short discussion during the meeting, David Quintana's proposal was edited slightly and posted to the PR for any possible final comment before merging.</p>

<p>Meeting was closed at 22:07 by Colin Finck</p>
<p>Meeting minutes prepared by Andreas Bjerkeholt</p>
