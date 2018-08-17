---
title:       "GSoC 2018 - Project BTRFS Boot"
author:      "extravert34"
date:        2018-05-29
aliases:     [ node/68045 ]

---

<h2>Introduction</h2>
<p>Hi all!<br>
	My name is Victor Perevertkin and I am the only GSoC student in ReactOS project this year :)</p>
<p>This is my first GSoC and I was very excited when I realized that I was selected and there will be four mentors for me. I will definitely learn a lot from this internship!</p>
<p>My project is both simple and complicated. I want to add to ReactOS an option to install on and boot from BTRFS partitions. There are a few little things left to implement this:</p>
<ul>
	<li>BTRFS support in bootloader</li>
	<li>Fixes in cache controller and memory manager in order to boot with WinBtrfs driver. It is getting better every week, but right now used only with fastfat driver for FAT32</li>
</ul>
<p>My primary goal for this internship is implement BTRFS support in FreeLdr - our bootloader.</p>
<h2>First weeks</h2>
<p>During first two weeks I was diving into usetup (our setup utility) internals. I wanted to turn on the support for BTRFS formatting and installation in it. Along with that I had to learn how to use windbg and a lot of other kernel debugging stuff.<br>
	Finally I was able to format a BTRFS partition and install ReactOS on it with minor bugs: <img alt="ReactOS installer with BTRFS" src="/sites/default/files/gsoc2018-1.PNG"></p>
<p>Now we should go on - try to load win2k3/XP with our ReactOS bootloader. FreeLdr is made to be compatible with Windows’ NTLDR, but usually nobody tests this functionality. This is not a useful feature in real life, to be honest :)<br>
But will use win2k3 to test my bootloader code so I have to be sure that it boots successfully.<br>
So, right now FreeLdr is able to boot Windows XP without issues but there are some bugs with Windows 2003. Some versions of it just BSODs after logging in, some loads but with some drivers failed to start <img alt="Broken drivers in Windows 2003" src="/sites/default/files/gsoc2018-2.PNG"></p>
<p>I’ve not figured out what’s wrong here yet.</p>
<p>That’s all for now! Next period I will write some assembler code for partition boot sector (VBR). Hope this will not mess everything up :)</p>

