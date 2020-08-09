---
title:       "Syzkaller - Fuzzing ReactOS in 2020"
author:      "Freakston"
date:        2020-08-04
tags:        [ "gsoc", "gsoc-2020" ]
---

Hello everyone. In this blog post, I will be talking about the steps to set up Syzkaller for ReactOS locally and start fuzzing. 
If you have been following the blog posts on the ReactOS website then you would have noticed that this is my Google Summer of Code 2020 Project. 
Now that Coding period 2 has officially come to an end and the work is nearing completion, this post will help others in setting up the fuzzer get started with fuzzing. 

If you haven't checked out the posts regarding the progress, here they are -

[PORTING SYZKALLER TO REACTOS](/blogs/porting-syzkaller-to-reactos-gsoc-2020/)

[PORTING SYZKALLER TO REACTOS (EVALUATION-1)](/blogs/porting-syzkaller-to-reactos-1-gsoc2020/)

# Environment setup

1. **VirtualBox or QEMU**:
Most of the virtualization software supported by ReactOS work properly. If using QEMU, it's recommended to use with KVM enabled for better performance. (**Tested on VirtualBox and QEMU.**)

2. **ReactOS**:
Running Syzkaller needs certain NT6 API's, which aren't exported in the current master. 
To get a copy of ReactOS for Syzkaller head to [PR #2930](https://github.com/reactos/reactos/pull/2930) and get the MSVC-i386 build from checks. 
This is automatically built by GitHub Actions.
In case you want to build it on your own then you can clone my [fork](https://github.com/Freakston/reactos/tree/syzkaller) of ReactOS and build it using MSVC.

3. **Syzkaller**: Syzkaller can be cloned from [ReactOS/Syzkaller](https://github.com/reactos/syzkaller).

    - **Note:** Checkout branch **[reactos](https://github.com/reactos/syzkaller/tree/reactos)**. 
    - **[windows](https://github.com/reactos/syzkaller/tree/windows)** branch is a WIP branch that runs on Windows 7 and higher.

4. **Golang**: We will be using [Golang 1.10](https://golang.org/dl/) which was the last release to support Windows XP and Windows Server 2003.

5. The detailed steps for building and running Syzkaller can be found in the repo. 
Once you have checked out the reactos branch it's in [README.md](https://github.com/reactos/syzkaller/blob/reactos/README.md)

Syz-fuzzer and Syz-manager are currently broken due to issues in establishing the SSH connection.
The corpus can be saved using the DB feature of Syz-stress.
# Progress 

We have the fuzzer up and running locally. 
The grammar needs to be added over time and currently, we have around ~110 WinAPI [calls](https://github.com/reactos/syzkaller/blob/6090e0749cb489b181fc821cf2af651fbe2fb9f5/executor/syscalls_windows.h#L8).

We are currently working on:

1. Upstreaming the build of Syzkaller built for ReactOS that is based on an old commit.

2. Fixing current master to fuzz Windows. (**Completed**, branch windows)

3. Windows x86 support.

Windows branch can fuzz x64 Windows (tested on Windows 10).

# Todo

I am currently working on getting KCOV running on ReactOS which would help Syzkaller with code coverage.
