---
title:       "ReactOS 0.3.5"
author:      "fireball"
type:        news
date:        2008-06-30
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /reactos-035
aliases:     [ node/286 ]
news:        [ "news" ]

---

<h2>ReactOS 0.3.5 Released</h2>
<p>
Four months after the release of 0.3.4, we are pleased to announce ReactOS 0.3.5. 
</p>
<p>
This release, along with the rest of the 0.3.x series is still considered alpha quality software, so do not set your expectations too high. 
</p>
<p>
ReactOS 0.3.5 release contains fixes for many old bugs, some having been present since 0.3 or even earlier and some being regressions introduced in further releases due to rewrites of certain components, not to mention new features. 
</p>
<h3>Changes summary</h3>A consolidation of all changes in great details can be found in the <a href="../wiki/index.php/ChangeLog-0.3.5">changelog</a>. Summing up the most important changes:: 
<ul>
	<li>Updated bootloader (FreeLdr), with some parts rewritten for better compatibility and better code maintenance</li>
	<li>Memory (heap and pools) corruptions fixes throughout the whole system</li>
	<li>Kernel: a number of critical bugs fixed over the whole kernel, and rewrite of an early initialization part of the Memory Manager</li>
	<li>Win32 subsystem: overall improvements in the subsystem, involving both user and kernel mode components</li>
	<li>Base CRT library had key parts reworked in favor of better compatibility</li>
	<li>Command shell (cmd.exe) improvements, especially in interpreting batch scripts</li>
	<li>Font changes for better metrics compatibility</li>
	<li>Internationalization support improvements with a keyboard layout switcher, working Regional Settings Control Panel Applet, 1st stage setup localization into quite a few languages, and more keyboard layouts added</li>
	<li>Almost all kernel mode drivers and user mode applications, control panel applets, DLLs were worked on, resulting in improvements, bugfixes and more functionality</li>
</ul>
<p>
Thanks to the development team for their persistence in chasing bugs and tolerance in listening to complaints; testing team for their accurate and really time consuming regression-testing sessions; and our community for whom we are actually doing all this!
</p>

