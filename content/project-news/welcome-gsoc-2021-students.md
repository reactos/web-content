---
title:       "Welcome GSoC 2021 Students!"
author:      "Colin Finck"
date:        2021-05-18
---

Another year, another round of Google Summer of Code!
The ReactOS Project is participating in Google Summer of Code 2021 and welcomes the selected students.

**He Yang** is a successful student from GSoC 2020, who is going to continue his dive into user-mode ReactOS this year by working on _iernonce.dll_.
That library is responsible for _RunOnceEx_, a prominent Windows feature to run multiple commands once after a system reboot.
Implementing that feature will benefit software depending on it.
Examples include installers that need to perform certain cleanup and completion tasks after the first reboot.  
He Yang will be mentored by George Bișoc and Hermès Bélusca.

**The_DarkFire_** has already impressed us with his [ReactOS live coding sessions](https://www.twitch.tv/the_darkfire_) prior to GSoC and proposed to complete his work on Symmetric Multiprocessing (SMP).
An SMP-aware Hardware Abstraction Layer (HAL) enables ReactOS to use more than a single processor core, greatly enhancing its usability on modern hardware.
Once completed, we also expect this work to trigger a lot of concurrency bugs still hidden in ReactOS.
Hence, finding and fixing these bugs will also improve the overall experience even for single-core machines.  
The_DarkFire_ will be mentored by Victor Perevertkin and Jérôme Gardou.

These two proposals, their detailed milestones, and the accompanying prior work really stood out from the crowd, which is why we have chosen them this year.
While the ReactOS Project used to accept many more students in the past, it was emphasized on one of the GSoC Mentor Summits to "not accept OK proposals".
Since doing that, we have witnessed more successful GSoC projects and a higher retention rate with the project, with some former students now serving as mentors.

Finally, adequate mentoring is also what we have to guarantee for all students, and this was not possible for more than two GSoC projects this year.
This is already a call to ReactOS developers for next year: We want YOU for mentoring! :)
