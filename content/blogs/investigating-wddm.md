---
title:      "An initial investigation into WDDM on ReactOS"
author:     "The_DarkFire_"
date:       2025-10-07
tags:       [ "wddm" ]
---

The history of ReactOS spans a wider range than the lives of many of the people who work on it today.
Incredible individuals have come and gone from the project with vastly different goals for what they want to see developed.
In recent years, better hardware support has emerged as one of those goals.
As ReactOS gazes towards the world of Vista and beyond, a few questions about how hardware works emerge.
Vista introduced massive overhauls to how hardware drivers are written and maintained.
Gradually we’re trying to handle many of these overhauls with great success.
Today we talk about WDDM, or the Windows Display Driver Model.

### The “Overhaul”
I’ve always found the video driver documentation lacking for both architectures, enough to get started but not really enough to get deep into the world of 3D.
Thankfully in recent years this has changed enough to where some open-source drivers have popped up.
WDDM is a major overhaul that shifts responsibility of managing the GPU away from Win32k and gives better control over the GPU to the driver vendor.
Dxgkrnl.sys, the DirectX graphics driver, talks to a miniport driver to provide varying levels of WDDM interfaces.
The WDDM revision (WDDM 1.0, 1.1, 1.2….) primarily describes how many of these interfaces are supported and implemented.
This is different than the feature level that is described in DxDiag. 
{{< gallery >}}
{{< figure link="/img/blogs/investigating-wddm/win10_dxdiag_feature_level.png" src="/img/blogs/investigating-wddm/win10_dxdiag_feature_level.png" caption="DxDiag on Windows 10">}}
{{< /gallery >}}
### Wait… What happened to XDDM?
Officially starting with Windows 8, every GPU driver for the system had to be a WDDM driver.
But all that was really dropped was the miniport driver.
Vista and 7 could still load older GPU drivers using the XDDM architecture without complaint. 
Outside of the miniport driver, modern Windows still has XDDM remnants all over the place, including mechanisms for WDDM.
The first example of this came when trying to load OpenGL installable client drivers (ICDs) from Vista, or loading our ICDs on Vista, 7, 8, and so on.
For WDDM, the communication back to the miniport driver is more direct.
Win32k only holds the syscall jump back into an interface that’s filled in by Dxgkrnl.
It’s important to note the module that loads OpenGL ICDs hasn’t changed very much. 
{{< gallery >}}
{{< figure link="/img/blogs/investigating-wddm/vista_opengl32_on_reactos.png" src="/img/blogs/investigating-wddm/vista_opengl32_on_reactos.png" caption="Vista opengl32.dll on ReactOS">}}
{{< /gallery >}}
Interestingly Vulkan behaves similarly:
{{< gallery >}}
{{< figure link="/img/blogs/investigating-wddm/vulkan_on_reactos.png" src="/img/blogs/investigating-wddm/vulkan_on_reactos.png" caption="The MESA Vulkan ICD loading on ReactOS">}}
{{< /gallery >}}
OpenGL ICDs are one thing, but what about the display driver?
Watching what Vista and later Win32k does while starting up shows some interesting behaviors.
There’s two important display drivers we should talk about: TSDDD.dll and CDD.dll.
TSDDD is manually loaded when session 0 starts.
This is just a normal XDDM display driver that does nothing except write to blank memory.
In NT5.x, or ReactOS at the time of writing, if your install can’t get a valid display it’ll bug check (BSoD) with a code meaning video initialization failure.
It’s possible to still make this happen with Vista and later but this failure no longer happens in practice due to CDD acting as the primary driver. In fact, if the video driver fails it'll fall back to the basic display driver.
 CDD.dll is far more interesting:
On one hand, it is an XDDM display driver.
It also fires two I/O control codes (IOCTLs) which facilitates communication with WDDM.
This driver is the only route which Dxgkrnl and Win32k use to talk to each other in any meaningful capacity.
Technically, there’s also some communication between watchdog, Win32k, and Dxgkrnl on initialization to fill in the interface to dispatch D3DKMT APIs for Dxgkrnl; but that’s only during the initialization of Dxgkrnl itself.
It’s also worth noting, when this happens the query in Win32k to find a supported display adapter is always manually overwritten with cdd.dll.
Once you start a WDDM driver you cannot run an XDDM driver at the same time! 
Alright that was a lot of information, but there’s some important things to understand here.
CDD.dll first and foremost IS an XDDM display driver, even if it’s translating from the old world Win32k to the new world WDDM stack it’s still stressing Win32k out.
This means for ReactOS to be truly compatible with WDDM, our XDDM stack must be in great shape.
This isn’t the only Vista+ feature that has this requirement.
DWM (which is worth its own blog post) does a lot of things that even the current ReactOS Win32k just isn’t capable of handling quite yet.
But we're constantly improving.

### Compiling WDDM drivers with ReactOS
One of the first components that needed to be understood was displib.lib, a component shipped with the WDK that allows for compiling WDDM drivers. https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/dispmprt/nf-dispmprt-dxgkinitializedisplayonlydriver
In order to compile a WDDM driver, you need to link with a library that implements a function like the above to allow your driver to “start” Dxgkrnl.
WDDM drivers don’t link against Dxgkrnl at all!
Instead, when you call an API like the one above, you pass data to Dxgkrnl, which then calls back into your miniport’s initialization routine.
That callback is what provides the interfaces you need to continue communicating with Dxgkrnl.
Win32k has nothing to do with the miniport driver starting up!
This was relatively straightforward to make an alternative to, opening the door for ReactOS to import and compile WDDM drivers that work even on Windows!

### WDDM! Technically..?
Now that we know how WDDM drivers start up, we can start thinking about how to support this architecture on ReactOS.
The D3DKMT APIs are only used for DirectX and OpenGL acceleration so we can ignore that for now.
What about just getting the display to work?
ReactOS currently supports some 2D acceleration and is rapidly developing support for XDDM AMD GPUs so surely, we can get some kind of basis working?
Dxgkrnl is a massive beast with a scheduler and many subsystems for managing these miniport drivers; but only two are really required for display management: VidPn (Video Presentation Network) and its hardware support.
Starting with Windows 8 there’s a built-in driver and style of WDDM miniports that drop 3D acceleration called KMDOD’s.
They’re a slightly different initialization type, but in general are easy to understand.
Thankfully they don’t use a lot of the interfaces DxgKrnl provides to miniport drivers to communicate with the hardware, so we can create a very simple Dxgkrnl for our experiment.
All we need is to query the display modes from the VidPn network, pass it to CDD, load CDD when Dxgkrnl is active and ... Ah hah!
{{< gallery >}}
{{< figure link="/img/blogs/investigating-wddm/reactos_running_kmdod.jpg" src="/img/blogs/investigating-wddm/reactos_running_kmdod.jpg" caption="ReactOS running the BasicDisplay adapter sample from WDK.">}}
{{< /gallery >}}
ReactOS can communicate with its first WDDM driver!

### A more forgiving architecture
When I first got BasicDisplay.sys loading in ReactOS I noticed how forgiving WDDM truly was.
I realized I could escalate this further than I’d anticipated.
It turned out these vendor drivers are very willing to accept being started just for their display for example.
{{< gallery >}}
{{< figure link="/img/blogs/investigating-wddm/1070_on_reactos.jpeg" src="/img/blogs/investigating-wddm/1070_on_reactos.jpeg" caption="ReactOS running NVIDIA Windows 7 GPU Driver (Display / 2D only)">}}
{{< /gallery >}}

I was quickly getting more drivers to show some kind of display out, allowing ReactOS to power modern monitors at their full resolutions and refresh rates.
But I quickly was getting limited not by our implementation of Win32k but instead our support for hardware itself.

### Why I wrote this and what's to come
There’s two things I hoped to accomplish with this blog post.
The first was to put out that ReactOS is indeed looking at trying to support later hardware, but that we can’t just jump and ignore XDDM.
XDDM is REQUIRED for WDDM, we need to continue to improve in this area.
The other reason was because this is the first of a few blog posts I intend to write for the ReactOS project on this subject.
We’ve been actively working to improve hardware support to unblock these future ideas and need more support to do so!
To help support the ReactOS project, you can make a [donation](https://reactos.org/donate/), contribute to the project on [GitHub](https://github.com/reactos/reactos), or talk to your friends and family about us!
We look forward to sharing more hardware support and WDDM blog posts.