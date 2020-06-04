---
title:       "Detect kernel information disclosure by Bochspwn-reloaded - GSoC 2020 - First week"
author:      "khanhnt"
date:        2020-06-03
tags:        [ gsoc ]
---

## Introduction

Hello, I am Nguyen Trung Khanh (@khanhnt) from Vietnam and I am one of the GSoC students of ReactOS.

My project is running ReactOS on [bochspwn-reloaded](https://github.com/googleprojectzero/bochspwn-reloaded) to list and fix all the bugs which were found by the tool. Additionally, I have a week to implement detection of uninitialized memory use.

## The first week

Before GSoC, I did compile bochspwn-reloaded and run ReactOS on it so my work in the first week is pretty easy. I added some lines of code into bochspwn-reloaded to change its stack trace format, now it looks like WinDBG stack trace. This feature was added from commit [e7a912897](https://github.com/reactos/bochspwn-reloaded/commit/e7a912897aeffaa70e0bf1fd2bf590a4f65594dc).

There are 2 kinds of functions when they are compiled: inline and non-inline. Inline function is the function that has `inline` declaration keyword or template function and its assembly code will be inlined at the call of caller function. For non-inline function, the caller will use the `call` assembly instruction to jump to address of non-inline function.

Therefore, I use 2 functions [SymGetLineFromInlineContext](https://docs.microsoft.com/en-us/windows/win32/api/dbghelp/nf-dbghelp-symgetlinefrominlinecontext) and [SymGetLineFromAddr](https://docs.microsoft.com/en-us/windows/win32/api/dbghelp/nf-dbghelp-symgetlinefromaddr) to get source code information from given address.

This is the result:

```
Stack trace:
 #0  0x805817bd ((001817bd) ntoskrnl.exe!memcpy+3d)
 #1  0x8054e231 ((0014e231) ntoskrnl.exe!KeUserModeCallback+f1 [h:\project\reactos\ntoskrnl\ke\i386\usercall.c @ 162])
 #2  0xf7603dda ((00036dda) win32k.sys!co_IntGetCharsetInfo+da [h:\project\reactos\win32ss\user\ntuser\callback.c @ 1075])
 #3  0xf7639bd6 ((0006cbd6) win32k.sys!UserLoadKbdLayout+236 [h:\project\reactos\win32ss\user\ntuser\kbdlayout.c @ 247])
 #4  0xf7638f16 ((0006bf16) win32k.sys!NtUserLoadKeyboardLayoutEx+1a6 [h:\project\reactos\win32ss\user\ntuser\kbdlayout.c @ 650])
 #5  0x8054d99b ((0014d99b) ntoskrnl.exe!KiSystemCallTrampoline+1b [h:\project\reactos\ntoskrnl\include\internal\i386\ke.h @ 766])
 #6  0x8054b638 ((0014b638) ntoskrnl.exe!KiSystemServiceHandler+278 [h:\project\reactos\ntoskrnl\ke\i386\traphdlr.c @ 1836])
 #7  0x80403da3 ((00003da3) ntoskrnl.exe!KiFastCallEntry+8c)
 ```

 #0 and #7 don't have source code information because they were written in assembly.

## Before GSoC

I think this is the most important work of my GSoC: compile bochspwn-reloaded and run ReactOS on it. I use Visual Studio 2019 instead of mingw64 to compile bochspwn-reloaded so there are some differences from its build guide.

There were many errors when I was compiling bochspwn-reloaded. Fortunately, I learned a lot of stuff from ReactOS community to resolve errors that related to linking, macro definition,... when I have started working on ReactOS by doing contributions. So I can handle those errors. Thanks for ReactOS community :D

1. Install cygwin64 (don't install `gcc` and `x86_64-w64-mingw32` compiler). We only need cygwin64 to run the configuration file of Bochs which is written in bash.

2. Use [vcpkg](https://github.com/microsoft/vcpkg) to install protobuf. vcpkg also integrates with Visual Studio.

3. Download the latest version of Bochs (currently 2.6.11), unpack it, and copy `windows-x86` instrumentation directory and third-party subdirectory into `bochs-2.6.11/instrument`.

4. Apply the [patch.diff](https://gist.github.com/khanhnt2/823d0884066e1f4edcbaa37f1a4440bf) patch manually :D

5. Open CMD, run `vcvarsall.bat x64` of Visual Studio 2019 then run `Cygwin.bat` of cygwin64. Finally, run `.conf.win32-vcpp` to configure Bochs.

6. Open `vs2013\bochs.sln` in bochs source code directory.

    - Add file `cpu\avx\avx\avx512_broadcast.cc` into avx project.

    - Add files `cpu\cpudb\intel\corei3_cnl.h`, `cpu\cpudb\intel\corei3_cnl.cc`, `cpu\cpudb\intel\corei7_icelake-u.h` and `cpu\cpudb\intel\corei7_icelake-u.cc` into cpudb project.

    - Add `.\..\obj-$(ConfigurationName)` into `Linker -> General -> Additional Library Directories` of bochs project.

    - Add `avx.lib` and `dbghelp.lib` into `Linker -> Input -> Additional Dependencies` of bochs project.

    - Change value of `BX_SUPPORT_REPEAT_SPEEDUPS` to `0` in `config.h`
7. Select build solution in Visual Studio.

This is how I compiled bochspwn-reloaded. Always remember change value of `BX_SUPPORT_REPEAT_SPEEDUPS` after run any `.conf.*` files to make bochspwn-reloaded work correctly.

I also checked source code of `memcpy` and `memmove` of ReactOS and luckily, ReactOS only uses `movsb` and `movsd` instructions to copy memory so I don't need to do any patches to make sure that taint tracking propagation works accurate. I added [a small code](https://github.com/reactos/bochspwn-reloaded/blob/master/instrumentation/windows-x86/instrument.cc#L416) to fix buffers overlap issue.
