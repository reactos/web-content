---
title:       "Virtual Machines"
author:      "Z98"
type:        book
date:        2013-02-10
draft:       false
promote:     false
sticky:      false
url:         /virtual-machines
aliases:     [ node/128 ]

---

Virtual machines provide a stable and known configuration for ReactOS to run on, reducing the chances that misbehaving hardware could destabilize the operating system. They are especially helpful when developing and testing higher level components of ReactOS. Several virtual machine platforms are supported and a basic guide to getting ReactOS running on them and configuring for debug support. Suggested resource allocation for all of the following virtual machine platforms is a minimum of 128MB of RAM and 2GB of storage space. As ReactOS currently does not support utilizing multiple processors, it is best to assign only a single processor to the virtual machine.

<h2>QEMU</h2>
The QEMU project does not provide Windows builds directly, but several individuals have compiled Windows versions themselves and the project has linked to them <a href="http://wiki.qemu.org/Links#Unofficial_QEMU_binaries">here</a>. Please bear in mind that QEMU by default does not include a graphical frontend for setting options. People not comfortable working from the command line may wish to consider VirtualBox or VMWare Player instead.
<h3>Installation</h3>
<ol>
<li>Move the ReactOS installation image to the same directory as QEMU for convenience purposes.</li>
<li>Create a virtual disk image using the qemu-img utility like so:
<blockquote>qemu-img create -f vmdk reactos.vmdk 1GB</blockquote>
Size the image as needed.
</li>
<li>Run QEMU with the virtual image and installation image attached like so:
<blockquote>qemu -L . -m 128 -hda reactos.vmdk -cdrom ReactOS.iso -boot d</blockquote>
</li>
<li>Follow the directions of the ReactOS installer. Make sure you choose <strong>Install bootloader on the harddisk (MBR)</strong>.</li>
<li>Once the system is done installing and reboots, close QEMU to shut down the VM.</li>
<li>Run QEMU with the following arguments to mount just the virtual disk image and not the installation image:
<blockquote>qemu -L . -m 128 -hda reactos.vmdk</blockquote>
</li>
<li>At the boot menu select your desired boot option. The first option selected is suitable for poking around but the DEBUG option is required if you wish to debug crashes.</li>
</ol>

<h3>Serial Configuration</h3>
By default, ReactOS will send debug output to the COM1 serial port. You can however use the -serial option to direct debug messages to other locations. The following are several examples of where serial output can be redirected.

To redirect serial output to a file:
<blockquote>-serial file:"pathtofile"</blockquote>
To redirect serial output to a named pipe:
<blockquote>-serial pipe:"\\.\pipename\"</blockquote>
To redirect serial output to the console on Windows:
<blockquote>-serial file:CON</blockquote>
To redirect serial output to the console on Unix:
<blockquote>-serial stdio</blockquote>
To redirect serial output to another serial port on Windows:
<blockquote>-serial COM#</blockquote>

<h2>VirtualBox</h2>
VirtualBox can be acquired at <a href="http://www.virtualbox.org">this location</a>.
<ol>
<li>Create a new virtual machine with the recommended amount of memory and storage. The new VM wizard will prompt you to either create or select a virtual harddrive. It is recommended you select the dynamically expanding image to help conserve space on the host machine.</li>
<li>Go into the VM settings and enable the CD-ROM. Select to mount an ISO image and choose the ReactOS installation image.</li>
<li>Set the boot order to be CD-ROM first, then harddrive.</li>
<li>Run the VM and follow the directions of the ReactOS installer. Make sure you choose <strong>Install bootloader on the harddisk (MBR)</strong></li>
<li>Once installation is done and the virtual machine is shut off, remove the ReactOS installation image from the CD-ROM and swap the boot order back to harddisk first.</li>
<li>Boot the VM again and select your desired boot option. The first option selected is suitable for poking around but the DEBUG option is required if you wish to debug crashes.</li>
</ol>

<h2>VMWare Player</h2>
VMWare Player is the free, non-commercial version of VMWare available for free download at the <a href="http://www.vmware.com/">VMWare site</a>. Note that once an OS has been installed on a virtual machine, VMWare Player does not support booting into a CD to install another OS.
<h3>Installation</h3>
<ol>
<li>Create a new virtual machine and choose to install an operating system later when prompted for the installation disk.</li>
<li>Select Other when asked for the Guest Operating System.</li>
<li>Select the size of the virtual disk. It is recommended to store the virtual disk as a single file when prompted.</li>
<li>Once the virtual machine is created, choose 'Edit virtual machine settings' and set the system resources to the recommend values.</li>
<li>Under the CD/DVD section, choose 'Use ISO image file' and select the ReactOS installation image.</li>
<li>Run the VM and follow the directions of the ReactOS installer. Make sure you choose <strong>Install bootloader on the harddisk (MBR)</strong></li>
<li>Boot the VM again and select your desired boot option. The first option selected is suitable for poking around but the DEBUG option is required if you wish to debug crashes.</li>
</ol>
<h3>Serial Configuration</h3>
VMWare Player's graphical user interface does not provide a way to configure serial ports. You will have to edit the .vmx file that describes your virtual machine. Adding the following lines will create a port and connect it to a port on the host machine.
<blockquote>
serial0.present = "TRUE"
serial0.fileName = "COM1"
</blockquote>
