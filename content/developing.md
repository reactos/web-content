---
title:       "Developing!"
author:      "vicmarcal"
type:        page
date:        2015-11-21
changed:     2016-02-11
draft:       false
promote:     false
sticky:      false
url:         /developing
aliases:     [ node/957 ]
menu:        [ "main-menu" ]

---

Interested in ReactOS development?
---
Becoming a ReactOS developer is both simple and rewarding. The codebase allows developers of all different backgrounds and skillsets to find something that interests them, and allows them to get going quickly using our excellent build environment. 


The challenge of working on a mainstream operating system is something many people are interested in, however the opportunities to do so are rather limited. Linux and BSD are the obvious choices, but not everyone wants to work in a unix environment or are put off by the vast scale of unix communities and the large choice on offer. There are other smaller operating systems, but the majority of these are bespoke and don’t offer much in terms of real world usage.


Some people just really like Windows or the NT architecture, and want to get their hands dirty in a way you can't with Windows. ReactOS offers the chance to work on a mature, open source version of the NT operating system, the most popular desktop operating system in the world.


Working on ReactOS enables you to develop a deep insight into the NT operating system, allowing you to hone your Windows internals skills which are directly transferable to real world jobs. In fact many of our developers are well respected members in the NT community, and working on ReactOS has been an important tool in reaching that goal.


So if you’re a budding Windows developer looking to learn as much as possible about operating system development, or a seasoned driver developer looking for a fun project, then ReactOS will definitely have something to offer.

----

1. [ReactOS Applications](#applications)
* [System Processes](#system)
* [Shell and Explorer](#shell)
* [Win32 API](#subsystems)
* [Drivers](#drivers)
* [Nt Kernel](#executive)

---


## ReactOS Applications {#applications}

Windows users expect to have certain applications available to them by default. These include anything from notepad to the command prompt, the device manager and even control panel applets. ReactOS re-implements the majority of these applications and packages them with the operating system so our users can find them as expected. 

All our applications are written in C or C++ and use only the base win32 APIs (and optionally our ATL library which we package into our code base). If you’re a .NET or python developer looking to improve your skills with the Win32 API, then this is a great place for you to start. 

If you’re a proficient Win32 application developer looking for something more challenging, then move onto the next level.

## System Processes {#system}

NT provides various core processes and services which are essential to the NT architecture. These include processes to manage the logged on user (winlogon), the security subsystem (lsass), the session manager (smss), the service control manager and its large number of NT services, and many more.

Working in this area requires a much deeper knowledge of not only the Win32 API but also the NT architecture. These system processes run with higher privileges than regular applications, so an understanding of secure coding practices is essential to avoid introducing vulnerabilities. This is a great place to start for anyone wanting to gain experience in NT system development, or is already comfortable working with NT Services and wants to work on system components that are core to the NT operating system.

## Shell and Explorer {#shell}

The shell is generally split into two areas. The main portion of the shell comprises of a number of dlls which make up the majority of what user's interact with (shell32.dll, browseui.dll, etc). These dlls contain code for things such as the file browser, dialogs, menus, and the start menu and they rely heavily on the Win32 API to provide these services. Most GUI applications make use of the shell in some way, even if it’s just to provide a user with a dialog box for opening files.

Explorer is the portion most people associate with the the shell, and is a process that provides the user with a desktop to manage their applications. It implements things like the taskbar and tray notification area and it too relies heavily on the shell dlls to get its tasks done.

The majority of the shell is written in C++ and uses COM extensively. The ReactOS shell is a fully working implementation of a Windows shell with the same look and feel. ReactOS will happily host the Windows explorer, likewise the ReactOS version of explorer will happily run in Windows. This makes it a great learning tool to further your knowledge into Windows shell development. If you’re an experienced COM developer, or even if you’re just hoping to learn more about COM and the shell, then this is the place for you to embark on your ReactOS development.

## Win32 API {#subsystems}

The Win32 API is lowest layer of user mode and is made up of vast number of dlls. The main dlls can be split into three specific areas; Kernel32.dll contains code to manage areas such as threads, processes, and kernel services such as file interaction. Gdi32.dll contains the drawing code and User32.dll contains code for things such as scroll bar and buttons.

However, the Win32 API is much more than these three libraries. You’ll find advanced services libraries for accessing the registry or device drivers, libraries which contain network interface code, multimedia libraries for video and sound, to name just a few.

Implementing the Win32 API provides a particular challenge to anyone hoping to get involved in this area, in that it has to mimic Windows versions of the Win32 API completely. This means not only implementing the features so they operate exactly as they do on Windows, but also implementing their bugs too. Implementing bugs sounds strange but some applications rely on unintended outcomes of particular APIs, and unless they introduce security issues, then we need to make sure our code has these quirks too.

In order to ensure we work as Windows does at this level, we maintain a vast test suite comprising of millions of tests, which you’ll also need to work with just as often as the API code itself. Working at this level will really give you a feel for what working on an operating system, and working within a skilled team is all about.

## Drivers {#drivers}

NT driver developers will find that developing drivers for ReactOS is no different than developing for Windows, and the majority of interfaces and services provided by the NT kernel and supporting libraries are implemented in ReactOS. The obvious difference is that we don’t work on third party drivers, we work on the drivers that are provided as part of the operating system. This makes working on ReactOS a really interesting prospect for would be driver developers because it's a chance to work on the modules that make up the operating system, enabling you to acquire a much deeper knowledge of whatever area interests you.

The modules and frameworks that you normally rely upon to create your drivers, modules such as the storage stack, file system drivers, bus, class and miniport drivers, filter manager, etc, these are the areas that you’d be working on.

We’re looking for both seasoned driver developers and talented C developers who want to get started in NT driver development. If you fall into these categories, or anywhere in-between, then you’d be a great fit in our kernel development team.

## Nt Kernel {#executive}

The ReactOS kernel is the only complete implementation of an NT kernel outside of the Microsoft campus, and unless you work on the Windows kernel team, it’s the only way to get involved with the development of an NT kernel and further your knowledge on this remarkable piece of engineering.

The ReactOS kernel currently targets NT 5.2 and supports both x86 and x64 platforms. It contains all of the components you’ve come to expect from an NT kernel, including complete implementations of the Object manager, IO manager, Executive, NT thread scheduler, and many more. We also package various HALs for a number of platforms and our own NT bootloader which is able to boot both the ReactOS and Windows kernels.

At this level, things need to operate in largely the same way as they do in the Windows kernel. So we’re looking for very skilled kernel developers who have a deep understanding of the NT kernel, NT mechanisms and excellent coding practices. If you fit this profile then you likely already know about us and already use our code as a source of documentation. We’d love to hear from you!


