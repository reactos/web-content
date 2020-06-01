---
title:       "Rapps Enhancement - GSoC 2020"
author:      "kernel.bin"
date:        2020-05-30
tags:        [ gsoc ]
---

Hello, I am He Yang (@kernel.bin) from China.
This year, I signed up for GSoC, and I'm very glad to be given the chance to work with the ReactOS team.

My mentors for the project are Mark Jansen and Ioannis Adamopoulos.
It's a great honor to have two mentors to guide me.

My project is "Application manager RAPPS".
RAPPS is used by almost everyone using ReactOS, thus making it essential to get RAPPS easy-to-use, powerful and bug-free.

## How I discovered ReactOS and GSoC

*This part is not related to the work I'm going to do, just some story between me and ReactOS*

Less than a year ago, I first heard about ReactOS from a friend of mine when I was traveling with him.

We tried to install ReactOS on a VM to see what it is exactly.
Unfortunately, it crashed when installing and a blue screen was shown.
But anyway that's my first encounter with ReactOS.
I didn't realize that I would work on this project in the future so soon.

Several months ago, I first heard about GSoC (Interestingly, again from the same friend).
When I try to find a project corresponding with my skill, ReactOS came into my view.

It's great for me because having a chance to write a part of an OS is exciting and there aren't many projects that require Win32 skills.
And then I'm here!

## Details about the project

RAPPS is a lightweight GUI utility that downloads and installs various popular apps and redistributable packages in Windows and ReactOS.
The goal is to make managing software easier, especially on ReactOS.

Currently, RAPPS has dozens of bugs to be fixed, and some function are broken or not implemented.
Besides, I consider the UI of RAPPS is a little bit old-fashioned (this may differ from man to man).
My aim is to fix bugs as much as I can and improve RAPPS's functionality and UI.

During the community bonding period, I spent some time to get familiar with the code.
I've already done some simple work (for example, move database source URL to settings dialog, see PR 2792)

### Current progress

What I'm going to do soon is support software snapshot view and better support for icon display.
After this is done, I will refactor that list view and support display software as icon/list/detail. 

### Coming future plan

I will also improve command-line support, and improve concurrent download (allow download more at the same time, etc.)

If I still have time left (which I guess I won't), I could add more features, and If you got any good idea, feel free to discuss with me!

## Thanks

I should express my gratitude to GSoC organization and ReactOS team for giving me such a wonderful opportunity.

And thanks to my mentor and whoever give me help or suggestions!!!

*also include the friend who told me about ReactOS XD*
