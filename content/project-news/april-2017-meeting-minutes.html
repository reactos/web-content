---
title:       "April 2017 meeting minutes"
author:      "EmuandCo"
date:        2017-05-24
aliases:     [ "node/42026" ]
---

<p>2017-04-27<br />
	20:00 UTC<br />
	#reactos-meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 20:09 by Colin Finck</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: Release 0.4.5</li>
    <li>Point 3: Vadim's USB work integration</li>
    <li>Point 3: Server infra discussion</li>
</ul>

<h2>Point 1: Status Reports</h2>

<p><b>Aleksey_Bragin:</b> He was mostly busy with server infrastructure and minor org things. Of course, he has ~30 students this year who are doing their work using ReactOS. So at least quite a few testers are testing it on a weekly basis. And so far, students just love ReactOS compared to other operating systems they are trying. He gives assignments which must be completed both on ReactOS and on NetBSD. And, no surprise, students love ReactOS. This time he didn't want to take any students for practical work. This year there are many smart students and there is a couple of those who want to continue their work. However we haven't found a good suitable topic yet. He told them to think, what area they want to work on, and they really want it to have useful outcome, not just some research work which noone needs. He doesn't want to spend his time on that either. So we shall see, He will keep you informed. Giannis Adamopoulos suggested scanning and image input as topics and Colin Finck added that he has put up his preliminary research at https://jira.reactos.org/browse/CORE-12926</p>

<p><b>Amine_Khaldi:</b> Aside from the GSoC admin duties with Colin, He doesn't think he had any contributions this month.. and the last month he covered the maximum he could of the syncs to have 0.4.5 ready.</p>

<p><b>Colin_Finck:</b> He's still fighting with issues after our Atlassian tools upgrade. JIRA is fine, but FishEye is still giving him a hard time. Been going back and forth with their support staff regarding ONLINE-700 for the entire month... Also started working again on his printing stack. he's picky when it comes to getting the details right, so we don't have that many APIs yet, but they should be good. Also admin duties regarding GSoC and server stuff, and a small project tomorrow, which Daniel_Reimer will talk about.</p>

<p><b>Daniel_Reimer:</b> Nothing dev wise. Colin found a nice mass DVD burning/printing device @ a toll auction and we/he decided to bid/buy it. So as soon as he tested it and maybe fixed a few things we have a mass burner/labeling device for upcoming events or for sending to ppl asking for it. https://zoll-auktion.de/auktion/auktion.php?id=515713 So CD orders to him with a label and ISO and BOOM. They say its working and he has a messy room which can be tidied up ^^ https://goo.gl/photos/BN2rhGgSFevKXNaK8 .... PC part HOARD</p>

<p><b>Ged_Murphy:</b> He recently restarted work on the fltmgr code he lost last year. He's working on getting the messaging framework back in place first. This gives him a path up to usermode so he can write umtests as well as kmtests. As per his usual excuse, he has a wife who wants his attention, kids and a busy job, so progress is slow.</p>

<p><b>Giannis_Adamopoulos:</b> As for him what he does is well documented in his work log. He tried to fix as many remaining issues in uxtheme as possible . He's pleased to say that exactly in uxtheme right now almost all issues are fixed. moreover we can just use windows uxtheme by copying uxtheme.dll and shsvcs.dll in ros. so far the only theme issues he has are mostly in comctl32. https://docs.google.com/spreadsheets/d/1CV5esQLHIiy3d6-18WboRzbEWgkhlcmcNZZwVU02i54/</p>

<p><b>Alexander_Rechitskiy:</b> He did a LOT of bug and regression testing and Thomas fixed boot of one netbook with his help. Also he helped Vadim to test USB as much as possible.</p>

<p><b>Mark_Jansen:</b> We got some very nice font improvements from Katayama Hirofumi MZ that improve font enumeration / selection (this took quite alot of time to review + commit). After this work, he fixed font loading for memory fonts, which resulted in f.e. firefox being able to display embedded fonts: http://i.imgur.com/2IfM76a.png And he also booked some big results on appcompat (finally, he only started in 2015 ^^), tuesday the first shim was activated on reactos (without hooks still): http://i.imgur.com/pp2jUrz.gifv And today, i got the part working where functions are redirected with hooks: http://i.imgur.com/kegjXVI.png There is still alot to do, like not allowing reactos components to be shimmed etc, but we have a start :) Colin Finck asked for a way to run those apps compiled for NT 6.x, whether by compatibility settings or automagically in ntdll. This is possible, but then we would need to move to the win10 style of appcompat shims and introduce those apiset dlls, but then, he does not see a big problem. Win10 activates appcompat way earlier, directly after mapping ntdll / kernel32 instead of after mapping all static imports. Colin added that Wine has all API sets we would need. But for now this just tells the application a different result for GetVersion()(http://i.imgur.com/HurmKNg.png)</p>

<p><b>Pierre_Schweitzer:</b> He's working on his secret project: RDBSS using NFS as test case. Even though he's stuck in his progresses due to unimplemented stuff in our MM.</p>

<p><b>Sylvain_Petreolle:</b> He only has few time to look at the AHK Bot. he upgraded it to Fedora 25, with some problems. he started investigation for the Assert that blocks it in 2nd stage.</p>

<p><b>Thomas_Faber:</b> He's mostly been working on memory corruption and debug spam issues, and most recently on reducing the number of release hacks we'll need. He plans to get back to FILE_DELETE_ON_CLOSE, which is apparently taking him into Mm section code.</p>

<p><b>Victor_Martinez:</b> ReactOS was selected in the OpenAwards in two different categories. So now the votings are open and people can cast votes to make ReactOS one of the top five for the final decision of the jury. He worked to have ReactOS in those two (creating decks, presentations, etc). He will move Twitter and FB too... but there are just 3 days in front of us. On the other hand he is really busy creating his own income with his new SASS project, so it is eating all his *dev* time. He has already the Rapps Database working, ugly but working, so he will commit and if anyone wants to improve it, he is free to rework it. He waited to last minute so they dont have opportunity to counterattack. Similar strategy that PortableApps did in the Sourceforge Choice Awards several years ago.</p>

<h2>Point 2: Release 0.4.5</h2>

<p>After recent work of Thomas Faber to make many release hacks obsolete and the experiment to keep trunk as stable as possible, there's nothing keeping us from branching the release for testing. Only thing we will not add following the general consensus is Vadim's USB patches, because these were not trested enough in trunk.</p>

<h2>Point 3: Vadim's USB work integration</h2>

<p>The new USB stack made by Vadim is in a good shape already, but mostly tested on Windows 2003. Tests were made by the whole russian community and several other ppl from the project. Colin suggested that we merge the work into trunk after release and all participants agreed to that.</p>

<h2>Point 3: Server infra discussion</h2>

<p>Colin Finck informed the participants about news regarding the ReactOS server infrastructure:
<p>1) Christoph von Wittich has 1-3 decommissioned 2U rackservers (from around 2007) to give away from his company. He doesn't see an instant need for yet another server at our data center, so asking here if anyone has a private need or an idea what to do with them. Mark Jansen suggested BNCs for developers, but that alone is not enough for a new server to make sense. Aleksey Bragin mentioned since that "datacenter" generates already ~40dB noise, adding yet another server won't make it significantly louder. (Aleksey's basement is our datacenter right now). Problem is that only one IP is available for the servers and thus adding stuff should be done carefully. Because of that Colin suggested that the parts will be used to upgrade the current servers if needed.</p>
<p>2) Using the donated server from J H Kromdijk, he's currently building a rig for ReactOS GPU testing. The idea is to put an AMD and a NVIDIA GPU into the server, putting ReactOS in two VMs on that server, using PCIe passthrough to attach the real GPUs instead of emulated ones to the server, then using KVM-over-IP to get remote access to the real GPU signals again and finally make that entire setup remotely available to everybody interested. He hopes that he could host it "on demand" at his place. Meaning, you get remote access to his switchable power sockets and turn it on and off whenever needed. Unfortunately, electricity is expensive in Germany, so he can't have it online 24/7. But the "power socket solution" has already been working for Aleksandar and Hermes when they needed a real 486 PC to work on their fast486. The other reason for hosting it at his place would be that it's a fragile setup, without any IPMI management, so someone needs to be close to it anyway.</p>

<p>Meeting was closed at 21:48 by Colin Finck</p>
<p>Meeting minutes prepared by Daniel Reimer</p>
