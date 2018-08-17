---
title:       "April 2018 meeting minutes"
author:      "Harteex"
type:        news
date:        2018-05-01
draft:       false
promote:     false
sticky:      false
url:         /project-news/april-2018-meeting-minutes
aliases:     [ node/66649 ]

---

<p>2018-04-26<br />
	19:00 UTC<br />
	#meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 19:01 by Colin Finck</p>
<ul>
    <li>Point 1: Status Reports</li>
</ul>

<h2>Point 1: Status Reports</h2>

<p><b>Aleksandar Andrejevic</b> had nothing to report, except that he now has some free time. He is currently looking at where he left off.</p>

<p><b>Amine Khaldi</b> is doing what he usually does, addressing anything he can help with, working on the Wine staging syncs etc.</p>

<p><b>Colin Finck</b> helped getting 0.4.8 out of the door and submitted his master's thesis 2 weeks ago. Because of this he currently has some spare time and is working on a new login/single-sign-on system decoupled from our CMS.</p>
<p>He suggests that Drupal could be ditched in favour of a solution where the entire content is in a Git repository, which would allow the Pull Request and Travis workflow also for web content. Such a system actually exists (Jekyll), and Colin will explore this further if his time permits.</p>
<p>This has many advantages such as improving infrastructure performance and reducing the attack surface. It will hopefully also make contributions to the website much easier.</p>

<p><b>Mark Jansen</b> added the zipfldr shell extension. It still needs some more work but the base is there.</p>
<p>He added apisets, which Giannis improved by activating them for NT6+ applications only. He also added an option where apisets can be activated either by the application manifest, or by user-selected compatibility mode.</p>
<p>Apart from that he mostly worked on random Jira-inspired patches.</p>

<p><b>Pierre Schweitzer</b> was still working on CORE-14557 (FastFAT leaks every directory that was used).</p>

<p><b>Stanislav Motylkov</b> has and is working on a number of things.</p>
<p><ul>
    <li>He recently fixed a division by zero bug in the Paint application, but notes that there are still bugs left.</li>
    <li>He played around a bit with SMBIOS and is currently preparing API tests and implementation for CORE-12105.</li>
    <li>He's also implementing desktop icons customization property page for desk.cpl.</li>
</ul></p>
<p>Finally, he said that he didn't forget about running USB patches in buildbot, which was mentioned last meeting, but that he's currently prioritizing the points above.</p>

<p><b>Sylvain Deverre</b> is considering the idea to bring ODBC/OLEDB support to ReactOS, including rewriting an ODBC manager, which he believes would be easier than trying to port unixODBC/iODBC due to UNIXisms.</p>

<p><b>Thomas Faber</b> has been working on updating CMake to a newer version, and getting it up to speed. He has also assisted Pierre where he could help, and most recently he worked on getting Python to work right.</p>
<p>Since Thomas wasn't reachable during the last meeting when USB was discussed, Colin asked him about the status, to which Thomas responded that there's not really an update, things still need to be reviewed. When asked what takes so much time, and if there's anything specific taking time, Thomas responded that he's just doing a standard review. But it still takes time because it's a really big chunk of code with no documentation around it. When it comes to specific things, magic values and certain loop/if constructs need to be looked at.</p>

<p>The other meeting participants (<b>Andreas Bjerkeholt</b>, <b>David Quintana</b>, <b>Hermes Belusca Maito</b>) had nothing to report.</p>

<p>Meeting was closed at 19:25 by Colin Finck</p>
<p>Meeting minutes prepared by Andreas Bjerkeholt</p>
