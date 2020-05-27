---
title:       "Porting Syzkaller to ReactOS - GSoC 2020"
author:      "Freakston"
date:        2020-05-27
tags:        [ gsoc ]
---

Hey, I am Suraj K Suresh (@Freakston), one of the GSoC students of ReactOS.

This is the first time I've applied for GSoC and my mentors for the project are Victor Perevertkin and Timo Kreuzer.

My project is "Porting Syzkaller to ReactOS". The project is getting one of the most famous Linux fuzzers to fuzz ReactOS. The project will lead to improvement of  the kernel codebase by detecting code crashes.

## My Introduction to ReactOS

I first stumbled upon ReactOS while browsing Hackernews. I found a post containing information about ReactOS which piqued my curiosity on the topic. After I delved deeper into the subject I became further interested and then I joined the community. After spending some time going through the codebase and having further discussions, I decided on applying for GSoC.

## Details about the project

Syzkaller is an **unsupervised coverage-guided kernel fuzzer** by Google. The main goal of the fuzzer is to find and eliminate incorrect or malicious code from the kernel and help in improving the code quality. Syzkaller uses the kernel syscall API to interact and execute kernel code from the userspace.

The first few weeks of the community bonding period were spent going through the implementation and codebase of Syzkaller. 

Next step was getting Syzkaller running on Windows x64bit. The current master of Syzkaller isn't maintained anymore for Windows.  The codebase has been refactored several times without testing on Windows. So moving back a few commits to the Initial support for Windows, we have a working build of Syzkaller for Windows x64bit :)

Now the next step is adding the i386 arch for Windows. Making the necessary changes, we now have the components working on x86 bit of Windows. 

Finally we get to the ReactOS part. ReactOS reports NT 5.2 which is internally reported by Windows XP Professional x64 Edition and server 2003. Syzkaller uses Slim Reader/Writer locks  which was first implemented in the Windows Vista kernel. After making our kernel export the needed functions (mainly sync functions) we have the components running.

As of this moment I'm working on the issue where the executor ends up as a zombie process on ReactOS. I plan on adding more features over the summer which will be accompanied by montly reports.

I would like to thank the developers of ReactOS and Google Summer of Code organization for giving me such a wonderful opportunity.