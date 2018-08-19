---
title:       "GSoC 2018 - boot sector finished"
author:      "extravert34"
date:        2018-07-10
aliases:     [ node/69565 ]

---

<p>Hi all!</p>
<p>
Sorry, haven’t written anything for a while. Let me tell you what have been done since last post.
</p>
<h2>BTRFS boot sector</h2>
<p>TL;DR: It works!</p>
<img src="https://reactos.org/sites/default/files/gsoc2018-5.png" alt="Boot sector works!">
<p>
I’ve been able to load main bootloader code from freeldr.sys into memory, transfer control to it and get on error message (freeldr.sys can’t find its config file - I haven’t written second-stage BTRFS code yet).
</p>
<p>
It was not that easy because we are in x86 real mode when running boot sector thus only about 1mb of memory is available. Another interesting thing is about BTRFS internal structures - most fields in BTRFS filesystem are 64-bit long. In real mode the largest registers you can use are 32-bit so you have to do some tricks every time you need to work with 64-bit numbers (use adc and sbb instructions for example).
</p>
<p>
Nevertheless, my boot sector code works fine now. It requires some more refactoring and testing on larger filesystems (right now I use a small 3gb image for developing) but it reliably loads freeldr.sys in my case and I can move on.
</p>
<h2>BTRFS support in second stage bootloader</h2>
<p>Freeldr.sys must support full read-only access to filesystem unlike boot sector. While the boot sector should only read one specific file from root directory, freeldr.sys have to read random files from different directories.</p>
<p>Before starting development of this functionality, I had to turn on debug output from FreeLoader. That required some diving into the code but finally I was able to switch some #defines and use Bochs emulator “e9 port hack” to get debug output in console:</p>
<img src="https://reactos.org/sites/default/files/gsoc2018-6_0.png" alt="Debug output in Bochs">

<p>After that I started implementing the filesystem support in freeldr.sys<p>
<p>So BTRFS support on second-stage bootloader is in progress right now. See you next week!</p>

