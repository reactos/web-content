---
title:       "June 2015 meeting minutes"
author:      "EmuandCo"
type:        news
date:        2015-09-17
changed:     2016-02-05
draft:       false
promote:     false
sticky:      false
url:         /project-news/june-2015-meeting-minutes
aliases:     [ node/3457 ]
news:        [ "news" ]

---

<p>2015-06-25<br />
	19:00 UTC<br />
	dev.reactos.org, #meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 19:08 by Aleksey Bragin</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: Hackfest</li>
</ul>

<h2>Point 1</h2>
<p><b>Aleksey Bragin:</b> His work on LDR code starts to have good results and a first patch was attached to a JIRA ticket. One crash was experienced in the tests, but it's not sure that it's caused by the patch at all. All which still has to be done is some reviewing by others and some clean up. The patch disables the new activation context implementation and uses a modified Wine based one which we used in the past already. The main bug is fixed by this patch, but one more hidden one in actctx is still existent, but hard to see.</p>

<p><b>Colin Finck:</b> He worked on printing support in ReactOS and Hackfest planning. (See Agenda part 2) At that time he still implements the basic printing infrastructure, so no printing yet. His aim is a working text-only printer in ROS at the end of his thesis. Problems are that you can't easily replace some components with WIndows ones though. All of them are tied together very tight mostly from top (winspool.drv) to bottom (localspl.dll) only (on paper at least), but the truth is that all modules call functions in all others.</p>

<p><b>Ged Murphy:</b> It was brought to his attention that the device manager was heavily lacking, so he's bring it up to the win8 level of functionality for the 0.4 release. ALso he will put the code where it really belongs (currently it is in a devmgmt.exe). He also started working on the filter manager, although he is not sure how far he'll get as it's a huge piece of work and his free time is pretty limited.</p>

<p><b>Hermes Belusca Maito:</b> He is working on his PhD thesis and Bug CORE-9773 (https://jira.reactos.org/browse/CORE-9773)</p>

<p><b>Matthias Kupfer:</b> He is trying to setup the e.V. supporting member.</p>

<p><b>Pierre Schweitzer:</b> The OpenBSD upgrade of the servers did not go that well and he is working on that.</p>

<p><b>Thomas Faber:</b> He is working on random bugfixes as usual. Worked on hotkeys and some shell stuff and has a bunch of fastfat/Cc and some advapi32 service & registry fixes upcoming. He added that ppl should not expect too much from the CC fixes, because CC's biggest problem is MM and that one needs much courage to dive into.</p>

<p><b>Victor Martinez:</b> He is working on the new ReactOS Website and helps with needs from Aleksey and the russian needs like asking for documents etc.</p>

<h2>Point 2</h2>
<p>Colin announced the Hackfest one more time and asked the attending developers who will join and how he will come to Aachen and where they will stay. He gave information to some people how to come by from many different locations and offered help getting people by car from airport. He added that e.V. will not be able to support everyone financially and that people who really need the support will get money of course, so that the financial situation is not the reason not to join the hackfest! He also suggested some hostels where people can have a room quite cheap. Special needs like gluten-free food are not forgotten either. In the end he gave information about the IT structure in place, like WIFI hotspot and access to internet by WIFI and LAN. LAN cables should be brought to the hackfest and all other IT needs, too.</p>

<p>Meeting was closed at 20:08 by Colin Finck</p>
<p>Meeting minutes prepared by Daniel Reimer</p>
