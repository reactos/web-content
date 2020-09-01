---
title:       "Porting Syzkaller to ReactOS Final Evaluation - GSoC 2020"
author:      "Freakston"
date:        2020-09-01
tags:        [ "gsoc", "gsoc-2020" ]
---
Hello everyone, I am Suraj K Suresh, the one working on the GSoC project of "Porting Syzkaller to ReactOS". 
It's been 3 whole months since GSoC has begun and this is the last evaluation period. 
During the last 3 months, I worked on various parts of Syzkaller and getting them up and running on ReactOS and Windows with the help of my Mentors. 
This blog post will be a wrap-up post of the GSoC project.

## The work:

Here I will briefly explain the work done:-

1. Fuzz the VM locally using various virtualization clients. 
2. Add a basic set of Descriptions from win32api and Ntdll.
3. Get the latest master working on Windows with the Ntdll descriptions and x86 support.
4. Extend the amount of Ntdll descriptions.

I've written 3 blog posts previously on what all I've achieved and how they were done in detail. They can be found here:

[PORTING SYZKALLER TO REACTOS](/blogs/porting-syzkaller-to-reactos-gsoc-2020/)

[PORTING SYZKALLER TO REACTOS (EVALUATION-1)](/blogs/porting-syzkaller-to-reactos-1-gsoc2020/)

[SYZKALLER - FUZZING REACTOS IN 2020](/blogs/fuzzing-reactos/)

![demo](/img/blogs/gsoc2020-syzkaller-demo.gif)

## Milestones accomplished

1. Create a working port of Syzkaller for ReactOS.
2. Use the existing kernel sanitizers.
3. Fix the current executor in Syzkaller main.
4. Add a POC to fuzz ntdll calls.

## Work to be done:

There are still some things left out that need to be polished up and finished.
They are :-
1. **Add support for Kernel Code Coverage in the ReactOS kernel**: 
I had some initial success of getting the pc values.

2. **Integrate Syzkaller with Syzbot**: This wasn't achievable due to running into some issues setting up SSH access on ReactOS.

I will also be working on other aspects such as getting it upstreamed with the latest master and having the network functionalities after the GSoC period.

## Conclusion

I’d like to thank my mentors Timo Kreuzer and Victor Perevertkin for their continued assistance during the past 3 months. 
This project certainly wouldn’t have been possible without the valuable suggestions and knowledge.
Further, I am grateful to every member of the community for assisting me whenever I got stuck, reviewing PR's and much more.