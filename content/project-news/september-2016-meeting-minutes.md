---
title:       "September 2016 meeting minutes"
author:      "EmuandCo"
type:        news
date:        2016-10-03
draft:       false
promote:     false
sticky:      false
url:         /project-news/september-2016-meeting-minutes
aliases:     [ node/20945 ]

---

<p>2016-09-29<br />
	20:00 UTC<br />
	irc.freenode.net, #reactos-meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 20:22 by Aleksey Bragin</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: 0.4.3 Release Plans</li>
</ul>

<h2>Point 1: Status Reports</h2>

<p><b>[TheFlash]:</b> He's still working on both the Sound Blaster driver and NTVDM VESA support, but right now he has to finish his M.Sc. thesis, so there will be a delay.</p>

<p><b>Amine Khaldi:</b> He's been looking after some long standing tasks we wanted to get into the 0.4.3 release, and plan to continue preparing for the release in the form of patches handling, more tasks in and finally a sync right before massive testing begins. He hope we can achieve another perfect 3 months cycle release, with awesome results.</p>

<p><b>Daniel Reimer:</b> Finally having time for meeting minutes was a plan (as you see here) and reducing the amount of absolutely useful rapps-to-include Jira reports.</p>

<p><b>Mark Jansen:</b> Sadly he had no progress on apphelp this month, however the dimmed screen at logoff is now in and he handled a bunch of patches in jira + some nice progress on atl.</p>

<p><b>Sylvain Petreolle:</b> He's looking at a way to build AHK tests as a part of the testing process.</p>

<p><b>Alex (jedi-to-be):</b> He has done a lot of testing and bug reporting and uploaded some good videos like https://www.youtube.com/watch?v=R1D7brh3ggw He also wrote some arcticles about reactos and gave some reactos presentations for russian ppl.</p>

<p><b>Hermès Bélusca-Maïto:</b> He's committing stuff he was working on 3 months ago. He's searching for postdocs and writing articles.</p>

<p><b>Johannes Anderwald:</b> He worked on usbaudio - it now initializes and now comes the hard part (capturing&rendering audio streams) He also mentioned that it's still a long way to have proper audio on ROS. ks stream needs to be adopted as well as all usbe|o|u|hci drivers.</p>

<p><b>Vardan Mikayelyan:</b> This mount he has started a new educational year, this is challenging year for him so this mount he has not done any activity for our community.</p>

<p><b>Benedikt Freisen:</b> He has written written atlpath.h and atltime.h. The C++ GDI+ headers compile now and Paint uses them.</p>

<h2>Point 2: 0.4.3 Release Plans</h2>

<p>Aimed release date is Nov 16th. GSOC code won't be added in that release yet, but integration work will be done after that release. Most code still needs some after work to be done to reduce regressions as much as possible and some parts still need to be finished. Testbot revealed many fixes that will show up when all code is merged in, but it's not the time to do that yet. USB is now being worked on by a big team (mvardan, thomas, janderwald and vadim) and the results will be a big step forward for the whole project.</p>
<p>There are discussions to add a few temporary hacks by vgal to release branch to make USB boot working, but the risks are still being discussed. These hacks will not be added to trunk though. Here real fixes are needed and no hack which make devs forget the real problem. Proper USB boot is aimed to be done end of year to be done and tested for the upcoming boothes at different locations, like FOSDEM and CLT. Thus 0.4.4 will most likely have it. The need for USB boot is well known in the dev team as it opens a big variety of new hardware to be easily used for real HW installed ReactOS on them.</p>
<p>If someone is interested in these hacks: https://github.com/vgalnt/reactos/commit/2cf2c8654aaaa989e601e26db970a53b0dcc61ed and https://github.com/vgalnt/reactos/commit/dfe08c261876c4f5ac50644b9f4be81cc4448543</p>

<p>As last unplanned point it was asked if we should not give some long time memebrs and patch writers dev access. Stay tuned in that matter.</p>

<p>Meeting was closed at 21:39 by Amine Khaldi</p>
<p>Meeting minutes prepared by Daniel Reimer</p>
