+++
title = "Quickstart"
aliases = [ "node/131" ]
+++


{{% unfinished-page "This needs to be included, linked or deleted" %}}

The following is a quickstart guide to help newcomers with getting a ReactOS development environment set up. As contributors become more comfortable, each is likely to find his or her own preferred workflow and tool set, but this guide will at least provide a gentle introduction to retrieving, building, and running ReactOS code. This guide assumes a sufficiently modern computer able to compile ReactOS and then run it inside a virtual machine. As this guide is in essence a very parred down version of the full development guide, it only covers the very basics of working with ReactOS and even then only with specific software. For more detailed explanations and alternative instructions, please refer to the <a href="https://www.reactos.org/wiki/Development_Introduction">full development guide</a>.

<h2>Software</h2>
This guide will use the following software to demonstrate how to work with the ReactOS source code.
<ul>
<li><a href="http://tortoisesvn.net/">TortoiseSVN</a> for the SVN client.</li>
<li><a href="http://sourceforge.net/projects/reactos/files/RosBE-Windows/i386/2.1.4/RosBE-2.1.4.exe/download">RosBE for Windows</a> for the build environment using the MinGW toolchain (latest version: RosBE v2.1.4).</li>
<li><a href="https://www.virtualbox.org/">VirtualBox</a> for the virtual machine.</li>
</ul>

<h2>Source Code</h2>
The first thing one needs to do is to check out the ReactOS source code. First, create a folder where you want to check out the source code. With TortoiseSVN, simply right click and click on SVN Checkout. In the repository URL field, paste in the following address:
<blockquote>svn://svn.reactos.org/reactos/trunk/reactos/</blockquote>
This will tell SVN to check out everything you need to build the core operating system. This can take some time as the ReactOS code base is quite large.

Once checked out, feel free to browse around a bit. The source code is organized based on the respective OS components. For example, the kernel is in the ntoskrnl folder whereas various libraries are in the dll folder.

Building the source code is relatively straightforward but involves a few separate steps. First, open a command prompt and navigate to the directory where the source code is checked out. Then, run the following command:
<blockquote><code>configure.cmd ninja</code></blockquote>
This will generate the necessary build files to compile ReactOS. Before building ReactOS however, one needs to build a set of tools. The configure script will create a folder called host-tools. Move into that directory with the command prompt and run the following command:
<blockquote><code>cd host-tools
ninja</code></blockquote>
Next, enter the following command to compile ReactOS and create an installation image:
<blockquote><code>cd ..\reactos
ninja bootcd</code></blockquote>
The installation image will be in the current reactos folder. The compilation process can take quite some time depending on the host machine so it is best to do this on a relatively modern multi-core system with a decent amount of RAM. We recommend at least 4GB to avoid memory being paged in and out.

As a sidenote, for those that are unable to build a working image, the project provides nightly builds <a href="http://www.reactos.org/getbuilds/">here</a>. For the purposes of this guide, please be sure to grab the bootcd labeled simply dbg and not dbgwin.

<h2>Virtual Machine</h2>
Please be sure to have VirtualBox already installed before proceeding.

Once you have started VirtualBox, create a new virtual machine using the New button. For now we will name our virtual machine ReactOSVM. For Type and Version, select Microsoft Windows and Windows 2003 respectively. The amount of memory can be left at the default amount. Next, select to create a new virtual hard disk. It is recommended to choose the VMDK (Virtual Machine Disk) option instead of the default. Since we only need to create a disk of 2GB, it is safe to select the Fixed size option for storage in the next panel. Next, set the amount of space to 2GB, which should be sufficient for the purposes of this guide. Once the virtual machine has been created, click Settings and go to Storage. Select the CD drive and click on the CD button on the right. Click Choose a virtual CD/DVD disk file. This will open up a dialog box from where you can navigate to your build directory and choose the bootcd.iso file you previously created. Once that is done, you can Start the VM and it will boot off of the CD. The installer is mostly self explanatory, though as the virtual disk was newly created, you will need to format it once you reach that point. Once the installation is completed and the virtual machine has powered down, make sure to remove the bootcd.iso image from the CD/DVD option. Starting the virtual machine will then boot from the hard drive and assuming nothing is broken, will boot to the desktop.
