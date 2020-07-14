---
title:       "Victor Perevertkin hired full-time to work on the storage stack"
author:      "Colin Finck"
date:        2020-07-14
---

I am proud to announce that ReactOS Deutschland e.V. has hired Victor Perevertkin to work full-time on the ReactOS storage stack for the next 3 months.

Victor has been a proven contributor to various ReactOS components since 2018.
He already got deep into the kernel side of things when writing Btrfs boot sector code in his GSoC debut, later managed the integration of a new USB stack, and recently touched nearly all parts of ReactOS when preparing it for the major upgrade to a new compiler toolchain.

During his contract with ReactOS Deutschland e.V., Victor will primarily work on the storage stack, a long neglected piece of ReactOS.
He plans to finally [turn scsiport into a Plug & Play aware driver](https://jira.reactos.org/browse/CORE-17132) and [fix kernel Plug & Play bugs](https://jira.reactos.org/browse/CORE-10456) in the process, thereby improving USB storage support and compatibility to Windows storage drivers.  
If time permits, stretch goals include continuing his previous work on integrating Google's Kernel Address Sanitizers into ReactOS and [fixing booting with our APIC-enabled HAL](https://jira.reactos.org/browse/CORE-14147).

This contract clearly marks a **major** milestone for the project, as your [continued donations](/donate) are finally enabling us to hire a developer full-time at near-market rates.  
And we don't want to stop at this point:
If you have a proven track record of working on ReactOS and want to work on it full-time for a limited amount of time, don't hesitate to submit your proposal to ReactOS Deutschland e.V.

Big thanks go out to all our **donors** who made this possible!
