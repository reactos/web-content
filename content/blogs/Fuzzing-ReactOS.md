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

[PORTING SYZKALLER TO REACTOS](https://reactos.org/blogs/porting-syzkaller-to-reactos-gsoc-2020/)

[PORTING SYZKALLER TO REACTOS (EVALUATION-1)](https://reactos.org/blogs/porting-syzkaller-to-reactos-1-gsoc2020/)

# Environment setup

1. **Virtual box or QEMU**:
Most of the Virtualization software supported by ReactOS works properly. If using QEMU, it 's recommended to use with KVM enabled for better performance. (**Tested on Virtual box and QEMU.**)

2. **ReactOS**:
Running Syzkaller needs certain NT6 API's, which aren't exported in the current master. 
To get a copy of reactOS for Syzkaller head to [PR-2930](https://github.com/reactos/reactos/pull/2930) and get the MSVC-i386 build from checks. 
This is automatically built by Github Actions.
In case you want to build it on your own then you can clone my [fork](https://github.com/Freakston/reactos/tree/syzkaller) of reactOS and build it using MSVC.

3. **Syzkaller**: Syzkaller can be cloned from [ReactOS/Syzkaller](https://github.com/reactos/syzkaller).

4. **Golang**: We will be using [Golang 1.10](https://golang.org/dl/) which was the last release to support Windows XP and Windows Server 2003.

5. The detailed steps for building Syzkaller can be found in the repo.

# Progress 

We have the fuzzer up and running locally. 
The grammar needs to be added over time and currently, we have around ~110 Winapi [calls](https://github.com/reactos/syzkaller/blob/6090e0749cb489b181fc821cf2af651fbe2fb9f5/executor/syscalls_windows.h#L8).
There are works for getting the master from Google/Syzkaller to support and run on ReactOS.

# Todo

I am currently working on getting KCOV running on ReactOS which would help Syzkaller with Code coverage.