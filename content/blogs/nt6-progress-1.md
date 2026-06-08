---
title:       "NT6 Progress 1 - June-Oct"
author:      "The_DarkFire_"
date:        2024-10-25
tags:        [ newsletter ]
---

Since the inception of the project, ReactOS has lacked the manpower to take on the daunting task of re-implementing every single Windows component. In the past the project has tried to simplify the scope of the issue by limiting compatibility to a specified scope globally across the internal communications of the project's various components. The usage of WINE has also been an example of this effort to simplify what requirements needed to be understood and implemented. These limitations in scope in the past have allowed the project to continue to improve the foundation. In recent years it’s become increasingly clear that to continue to use 3rd party components, and gather more interest we have to begin making more steps to move forward. On top of this ReactOS has always tried to simultaneously be a project which beyond being an OS, is also a source of education for the people that look into how individual functions in Windows can be used which means we will be taking this one step at a time.
In the previous blog we discussed several large undertakings going on to try to modernize ReactOS. Most if all of the logic in question isn’t exposed to applications, this of course will eventually change but at the time of writing is still the case. This blog is going to go through a few more efforts being made to progress the project over the hump that is Vista. Modules have continued to be synced with the latest version of WINE and preparation has begun to have the capacity to build a KernelBase module, which many applications today depend on.

## [UCRT]
## [PO? -George]
## [UEFI Framebuffer -Should probably mention distrohopper too]
https://www.youtube.com/watch?v=r9XgFoedFkU 
## [WDDM - KMT/D3D Winesync]
WIP