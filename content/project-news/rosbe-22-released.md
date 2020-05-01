---
title:       "ReactOS Build Environment 2.2 released"
author:      "Colin Finck"
date:        2020-05-01
tags:        [ "rosbe" ]
banner:      "img/project-news/rosbe.png"
---

{{< figure src="/img/project-news/rosbe-22-released/windows.png" class="pull-right" width="40%" >}}

The ReactOS Build Environment (RosBE), our curated set of compilers and build tools, has just received a major upgrade.

After more than 7 years of using the same and now ancient GCC 4.7.2, ReactOS is finally going to be built with the help of a modern compiler (GCC 8.4.0).
Among other things, the new version better detects programming mistakes like improperly sized buffers, and comes with improved error messages to pinpoint such mistakes to the corresponding position in code.
It also adds support for the latest C and C++ standards, marking a first step towards the introduction of modern C++ concepts into ReactOS.

For the first time, all editions of the ReactOS Build Environment also come with selected versions of _Bison_ and _Flex_.
Both tools are widely used for implementing parsers and lexers.  
ReactOS has been making use of Bison- and Flex-based code for a long time.
However, due to the lack of these tools in the official build environment, the code had to be committed in a preprocessed intermediate form instead of the source files.
This is no longer necessary after the upgrade, and a related [pull request is already in the pipeline](https://github.com/reactos/reactos/pull/2148).

The remaining toolchain has also been updated, with the full list of tools being as follows:

* Binutils 2.34
* Bison 3.5.4
* CMake 3.17.1-ReactOS
* Flex 2.6.4
* GCC 8.4.0
* Mingw-w64 6.0.0
* Ninja 1.10.0

While upstream versions of some tools have already dropped support for older operating systems, the latest RosBE-Windows has managed to stay compatible down to Windows XP.

Enough said, don't hesitate to get the new versions for your Windows, Linux, or macOS machine from the [Build Environment](/wiki/Build_Environment) wiki page, because they are soon going to be required to build ReactOS.  
And if you have never built ReactOS before, it's now the right time to get into it!
[Building ReactOS](https://reactos.org/wiki/Building_ReactOS) from zero to a bootable ISO image doesn't need more than 3 commands, making it one of the easiest operating systems to build.

If you have been using Visual Studio to build ReactOS so far, don't be afraid:
It continues to be supported as a first-class citizen next to GCC, and in fact many ReactOS developers are preferring it over GCC.
However, the minimum required Visual Studio version to build ReactOS is also [going to be raised soon](https://github.com/reactos/reactos/pull/2658) to allow for modern C++.
