---
title:       "Newsletter 1"
author:      "TwoTailedFox"
type:        news
date:        2005-10-16
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-1
aliases:     [ node/140 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>The Big Intro</li>
# <li>The ReactOS Content Management System</li>
# <li>Next ReactOS Release Details</li>
# <li>The last release: 0.2.7</li>
# <li>Eye on SVN</li>
# <li>What is to come in ReactOS</li>
# <li>The Big Outro</li>
# </ul>

---
<h2>The Big Intro</h2>
<p>Ah, Hello There! Allow me introduce myself. My name is Stuart Robbins, and my job on Reactos.org, is to write a newsletter, each week, giving you, the End User, and even Casual Developer, the run-down on what is going on behind the scenes, with the ReactOS Open-Source Operating System.</p>

<h2>The ReactOS Content Management System</h2>

<p>First off, is the new ReactOS.org Content Management System, abbreviated RosCMS. It blends in nicely with the <a href="http://www.reactos.org/wiki">ReactOS Wiki</a> (Itself using <a href="http://www.mediawiki.org">MediaWiki</a>), while also providing space for new Website Articles (Much like this one), as well as providing small subsections, to announce news, like 0.2.8. It also connects with the <a href="http://www.reactos.org/wiki">ReactOS Bugzilla</a> service, enabling a quick, easy, and relatively painless way, of searching for a bug, and viewing its status. RosCMS also links with the <a href="http://www.phpbb.org">PhpBB</a>-Based <a href="http://www.reactos.org/forums">ReactOS Forums</a>, which are an invaluable place to stop by, for specific information, if the #reactos channel on <a href="http://www.freenode.net">Freenode</a> isn't your thing. RosCMS was built from scratch, specifically for the ReactOS Project, and also features a new <a href="http://www.reactos.org/roscms/?page=login">Global Login System</a>. Think of how <a href="http://www.wikicities.org">Wikicities</a> operates, and you're close as to how RosCMS handles a single username, across multiple areas.</p>

<p>You can also access the developer blogs <a href="http://blogs.reactos.org">here</a>. Here, you'll find details on the WS2_32 Episode.</p>

<h2>Next ReactOS Release Details</h2>

<p>As I write this, I'm checking my mails, and 0.2.8, the next big release for ReactOS, was branched, and Release Candidate 1 is out on <a href="http://sourceforge.net/project/showfiles.php?group_id=6553&package_id=6629&release_id=363561">SourceForge</a>. From that page select either:</p>

<ul><li>Bootable Install CD ISO</li>
<li>Bootable Live CD ISO</li>
<li>Map Files</li>
<li>QEMU Hard Disk Image</li>
<li>Source Package</li></ul>

<p>There is talk about including the 'RosApps' software, which includes such nifty tools as the up-coming ReactOS Package Manager, and even some games, like WinMine (<a href="http://en.wikipedia.org/wiki/WINE">WINE</a>'s version of Minesweeper), and Solitare, in 0.2.8. RC1 does not include these, however, so stay tuned for more news. Already, Bugs have been reported in 0.2.8 RC1, and other bug fixes are making their way into the 0.2.8 Branch, possibly for a second RC.</p>

<p>You can find RosApps, and some other handy downloads links, such as for MinGW, <a href="http://www.reactos.org/xhtml/en/download.html">here</a>.</p>

<h2>The last release: 0.2.7</h2>

<p>ReactOS 0.2.7 shipped with somewhat of a '<a href="http://www.reactos.org/bugzilla/show_bug.cgi?id=703">Mystery Bug</a>'. Every previous version would install fine on 32MB of RAM. But, somwhere between 0.2.6, and 0.2.7, a bug sprung, which meant installing on 32MB suddenly wasn't possible, thus making the Minimum Requirements temporarily 64MB. That bug appears to have been mostly ironed out, but a small bug, surfaces on <a href="http://www.vmware.com">VMWare</a>, using 32MB. The Install sometimes fails during the file copy, other times, it continues without a problem.</p>

<h2>Eye on SVN</h2>

<p><a href="http://www.reactos.org/wiki/index.php/SVN">SVN</a> Activity has been buzzing as of late, with the first part of the move to a <a href="http://en.wikipedia.org/wiki/Plug_and_Play">Plug-and-Play</a>' mode of Hardware Recognition, and Installation being carried out. Since this is in it's earliest stages of development, 'Plug-and-Pray' may seem more appropriate a name. <a href="http://en.wikipedia.org/wiki/USB">USB</a> is also being worked on, and while I haven't seen any new USB-related commits for a while now, I do have good word an update is in the works. I've also seen a number of German, Swedish, Japanese, and Spanish translations of System Components being added via SVN, and indeed just goes to show Open-Source Software can compete on the international level.</p>

<p>And, as always, ReactOS and <a href="http://en.wikipedia.org/wiki/WINE">WINE</a> continue to contribute to each other, with regular syncs taking place between codebases.</p>

<h2>What is to come in ReactOS</h2>

<p>The Ws2_32 (Which would be the <a href="http://en.wikipedia.org/wiki/Winsock">Winsock</a> 2 code)... accidentally got deleted, but Alex Ionescu managed to rewrite it, as well as improve on what he had initally written. Nice one. It apparently works well within a normal Windows environment, and that can only be good news for ReactOS' Networking Functionality.</p>

<p><b>Breaking News</b>: Alex has just given me a listing of the following apps that are now working with the aforementioned Winsock 2 DLL:</p>

<ul>
<li>Mozilla Firefox 1.5 Beta 2</li>
<li>Mozilla Tunderbird 1.0.6</li>
<li>Internet Explorer 6.0 SP1</li>
<li>Filezilla</li>
<li>TortoiseSVN</li>
<li>Outlook Express 6.0 SP1</li>
<li>MSN Messenger 7.5 Beta</li>
</ul>

<p>CSR has also gotten a rewrite, courtesy of Alex, while NTDLL/NTOSKRNL have also had a large portion of duplicated code removed (RTL also had duplicated code removed), which has been taken care of, and the NDK (<a href="http://www.reactos.org/wiki/index.php/NDK">Native Development Kit</a>) has been given a greater degree of compatibility with the Platform/IFS SDK's, <a href="http://en.wikipedia.org/wiki/Driver_development_kit">DDK</a>'s, and the WDK. The Microsoft Visual Studio compiler backend has also recieved some attention, as of late.</p>

<p>Alex has an <a href="http://www.reactos.org/wiki/index.php/Session_Manager">SMSS</a> (Session Manager Subsystem), and Ldr <a href="http://en.wikipedia.org/wiki/API">API</a> re-coding coming up, and I'm looking forward to seeing some of <a href="http://en.wikipedia.org/wiki/Windows_Server_2003">Windows Server 2003</a>'s functionality included in ReactOS.</p>

<p>(As an additional point, the Ldr API, part of NTDLL, handles Kernel32 calls, and maps EXE's, and their DLL's in Memory, and calls the needed entrypoints. Thanks to Alex for providing the Explanation).</p>

<h2>The Big Outro</h2>
<p>As with the rest of ReactOS, this Newsletter should be community-driven by what you, the ReactOS User and/or Developer wants to see covered. Hey, if enough people request it, a personal interview could be arranged with one of the Developers...</p>

<p>I hope you enjoyed this newsletter, and hopefully, it'll be the first of many for ReactOS, on both the Software, and the team behind it all. I myself can be reached at TwoTailedFox (at) Gmail (dot) com, so if you have any questions you wish to ask, drop me a line. All I ask, is that you use a suitable Subject line, so I can easily distinguish it from the SVN commit messages I recieve.</p>

<p>So, Until next time... Happy Compiling!</p>

<br />
<p>Stuart "TwoTailedFox" Robbins,</p>
<p>ReactOS Newsletter Editor</p>
