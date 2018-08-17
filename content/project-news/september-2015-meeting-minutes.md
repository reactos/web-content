---
title:       "September 2015 meeting minutes"
author:      "EmuandCo"
date:        2015-10-18
aliases:     [ node/3458 ]
news:        [ "news" ]

---

<p>2015-09-24<br />
	19:00 UTC<br />
	dev.reactos.org, #meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 19:01 by Aleksey Bragin</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: Website upgrade proposal (Aleksey and Victor)</li>
    <li>Point 3: MSPL licensed code in our repo</li>
    <li>Point 4: Switching to new build process (Amine and Daniel)</li>
    <li>Point 5: Oldest CPU arch supported by ReactOS</li>
</ul>

<h2>Point 1</h2>

<p><b>Aleksandar Andrejevic:</b> He is currently working on NTVDM. Soon, he'll finish translating a FreeBasic-based GPL Sound Blaster emulator (written by Mysoft, aka Gregory Macario Harbs) to C and include it.</p>

<p><b>Aleksey Bragin:</b> Right now it's pretty hard for him to find time for coding, however he is all in ReactOS things. ReactOS is now covered by major Russian news media because of the consideration to replace Windows. He was in Duma last friday, because the committee for science and research was having an extended meeting. He made a short speech that to reach that goal one should support free software, generally support free software movement, and specifically it'd be good to have financial donations to ReactOS. However, he has some serious issue with the project website, which is really hurting now. This will be Point 2 of the meeting.</p>

<p><b>Daniel Reimer:</b> He is checking Jira for stuff, doing some tests of different apps. Maybe a lil update for RosBE is planned, too. Theres a bug in update.ps1 causing probems on normal user rights.</p>

<p><b>Ged Murphy:</b> He has not much news other than what ppl already know about. He's mostly working on GUI apps for fun because he spends all day working in the kernel at work. He made some more progress on the fltmgr, devmgr is mostly done, he just needs to finish fixing up ATL so it builds in gcc. He might start mmc after that. He had fixed charmap so it doesn't show non-supported glyphs, too.</p>

<p><b>Hermes Belusca Maito:</b> He is finishing his phd; fixing stuff here & there. Still he is mainly focused on ntvdm.</p>

<p><b>Giannis Adamopoulos:</b> He does not spend much time working on ros lately. The last days got some time to commit some stuff he wrote during the summer only to realise that he never tested it and caused a few regressions. The basic idea is to detangle the code in shell32 and make it more modular; add CRegFolder and make all folders that use files to call CFSFolder for everything they need to. In the end the goal is to split the shell in lots of smaller libs. Like a lib for the namespace, a lib with built in shell extensions (implementation of links or open with menu). The idea is to split this thing to smaller parts to make it easier to understand and make it possible to develop it in windows. After making the code for the namespace more modular it will be compiled in rshell, so we will be able to run this code in windows to make sure it is correct.</p>

<p><b>Pierre Schweitzer:</b> He is moving to another place, so his activity on ReactOS will drop in the coming days (max week). While he's still around, he's working on symlinks & so on.</p>

<p><b>Victor Martinez:</b> He advanced a lot with the new site. Home page: Done / Testing page: Done / Developing page: Done / Joining page: In the forge almost done / Download page: Done /  Blog: Done / Contact us: Done. Thus there are 4 pages he still wants to finish... so 4 weeks more are needed due to his new master studies and resulting narrowed free time.</p>

<h2>Point 2</h2>
<p>In the opinion of Aleksey Bragin our website, as our operating system, always targeted geeks, because no one else would want to try out an OS which is experimental. However, the situation changed and if we ever want to attract any kind of serious attention, get serious development done, or get serious financial backing to our foundations our geeky website strikes back. He made a test and asked a stranger to look to www.reactos.org and tell him what it's about. Result was: "reactos.org homepage contains information which is too hard to understand, so I just googled some forums to find what it is". So whenever an editor from some big media comes to our website he/she abandons it and goes googling. Now imagine what she/he finds? Those "less optimal" (original word was "stupid") forum posts like: "ReactOS targets XP, so already dead-on-arrival even if it's ever finished" and that goes into printed press and is on screens of all government officials, rich people and whoever else could donate us money. He knows that a stable ReactOS would solve all these problems, but since it's much easier to fix the website, he wants to propose that we start updating the website, starting with the frontpage. He is ready to devote his time for this issue. Considering he's pretty fluent with HTML and CSS.</p>
<p>Aleksandar Andrejevic suggests making the new website focus more on explaining what ReactOS is, and maybe add a few screenshots. The current website has only one sentence that describes ReactOS, and it's rather indirect and full of complex terms.</p>
<p>After this a flood of comments and suggestions dropped in, which are not the point of this proposal at all and are skipped in this summary.</p>
<p>Later everyone agreed that the page NEEDS an overhaul.</p>
<p>As second proposal Aleksey Bragin wanted to propose soft migration to the new design. E.g. leaving certain sections of the website in old design and moving other sections into new design to get things online ASAP.</p>
<p>Here another flood of comments and suggestions dropped in, which are not the point of this proposal at all once more and are skipped in this summary, too.</p>
<p>Victor Martinez mentioned that there is a plan going on already. The Idea talked about at Hackfest is:</p>
<p>1) A playground with current ReactOS is created.</p>
<p>2) He places all his theming, stuff, views, own modules developed, custom css over there.</p>
<p>3) We move it to production.</p>
<p>A partial design switch can be an issue because the Drupal ways of theming. Eg: His current theme is using Bootstrap, grids and so on, while our current Drupal is not. The biggest work is the sync of data, because we have to work on top of current data. Otherwise external links, for example, might become broken. He claims that SVN access and a playground to play with is all he needs to have this running in one month. (Current outdated plaground can be found here http://playground.reactos.org/) Aleksey Bragin still stands on his point that he wants to start kicking useless stuff out of the current website right away and change page-by-page in place. Victor Martinez tried to explain that this is not possible in Drupal at all due to the restrictions this CMS has to the website design. There is one design which affects all websites and not without some mayor modifications anything else can be realized. His layout is almost done and is ready for a migration test soon, so he suggests to wait for him.</p>

<h2>Point 3</h2>
<p>This point came from Daniel Reimer who started explaining his intentions at first.He wanted this point because he wants to force a decision if MSPL is fine as source for information<<integration in the ROS tree. Some say yes, some say no, but the reasoning behind it was nothing to be happy with yet. If you look at VirtualBox code from Oracle, they even relicensed the code they "lend" from the DDK examples etc. He thinks if this is legal and fine, we should take as much as we can. This code is 100% fine and we could use it instead of reinventing the wheel again and again which is less good with our recent manpower. And of course we can use it for debugging if the stuff does not work yet, because then we know for sure that it's ROS' fault and thus reach beta earlier maybe. He doesn't wanna hear now that it's evil because it's not *GPL Stallmanism or something like that, he wants opinions and maybe some legal stuff to investigate.</p>
<p>There was support for this idea, but legal issues were mentioned too. MSPL is considered free software, but it can't be linked to GPL code without licensing problems due to the fact that the license is GPL incompatible. Parts of ReactOS which are licensed as BSD licenses are no problem though. So the main problem is to verify that the code in form of several drivers (IFS / PNP and more) can be included without any MSPL/GPL problems. The easiest way would of course be to import the GPLed code from VBox/VMWare only, but not all code which is interesting for us was relicensed by them sadly.</p>
<p>In the end the decision had to be set for later, because we still need to conduct more investigation on MSPL before we start importing it. Aleksandar Andrejevic said he could contact the FSF legal team about the DDK license which was agreed to. This was already tried in the past though and the contact we established was not really sure about the licensing/linking legality, too. The contact will be adressed once more to get a answer from them.</p>

<h2>Point 4</h2>
<p>Amine Khaldi modified the build process to become easier by adding the host tools building to the main process, so you can build in one step by using configure script as before, then just cd to the output folder and use make/ninja bootcd in there. This works with latest RosBE Windows/*nix ONLY though. Testing was already done thoroughly and it works fine. Only a decision for switching is still needed. This decision was set in meeting and it will be switched to it soon.</p>

<h2>Point 5</h2>
<p>Stefan Ginsberg wants a official decision on which CPU architecture we keep supporting at minimum in ReactOS. i386 was removed a while ago already and i486 is a problem now. In theory ROS code does not even boot at all anymore in it's current state on anything older than i586, but there are still many code parts in there for artificially keeping up the i486 support where it's not even existent in others. Official decision was never made for it, so he wants to know if he can ditch the i486 hacks spread around all over the ReactOS code or should add even more to make the existing ones of any use at all. The decision was made that all CPUs older than i586 without a own FPU will not be supported anymore in ReactOS due to the following reasons. No i486 would have the power to make any use of ReactOS anyways and due to the fact that we don't provide a Software FPU implementation, we have to rely on the way more advanced hardware solution. The same will result in no priority at all for ISA/EISA/MCA, because it's way too long outdated and of no use anymore these days.</p>

<p>Meeting was closed at 21:23 by Aleksey Bragin</p>
<p>Meeting minutes prepared by Daniel Reimer</p>
