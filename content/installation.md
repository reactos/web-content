+++
title = "Installation"
aliases = [ "node/129" ]
+++

{{% unfinished-page "This needs to be included or linked somewhere" %}}


Installing ReactOS is very much like installing Windows XP. However, due to it still undergoing heavy development, a few pointers are helpful when first getting started.

<h2>Installation Platform</h2>
ReactOS currently supports running on x86 processors with x64 support still in development. In additional to real hardware, ReactOS also supports running on a variety of virtual machine platforms. More details on setting up ReactOS can be found on the <a href="virtual-machines">virtual machines</a> page. Several caveats exist regarding what hardware ReactOS will work with and the following sections seek to document the more prominent issues.

<h3>Minimum System Requirement</h3>
<ul>
<li>Pentium I processor or later</li>
<li>32 MB of RAM (Debug builds may require 48MB of RAM)</li>
<li>IDE/SATA hard disk drive with at least 350MB of space</li>
<li>VGA compatible video card (VESA BIOS version 2.0 or later)</li>
<li>PS/2 keyboard</li>
<li>PS/2 compatible mouse or Microsoft Mouse compatible serial mouse</li>
</ul>

<h3>Drives</h3>
<ul>
<li>ReactOS has uneven support for SATA drives. It is recommended that IDE compatibility mode be used for best results</li>
<li>The boot partition must be the first FAT16 or FAT32 partition on the disk.</li>
<li>The setup utility cannot check the integrity of file systems.</li>
</ul>

<h3>USB</h3>
USB support is still in development and not all devices are yet supported. Generally it is advised to set USB keyboard and mice to legacy mode in the BIOS when installing ReactOS.

<h2>Boot Options</h2>
A variety of options can be added to the freeldr.ini file to change the configuration that ReactOS will boot into. The following is an example of an entry for booting ReactOS in a specific configuration.
<blockquote>
[ReactOS]
BootType=ReactOS
SystemPath=multi(0)disk(0)rdisk(0)partition(1)\reactos
Options=/DEBUGPORT=SCREEN
</blockquote>

<h3>DEBUG</h3>
Turn on debugging output. This option is automatically turned on when running a debug build of ReactOS.

To specify output device use DEBUGPORT option. If DEBUGPORT is not specified output by default goes to COM1.

Format: <code>DEBUG</code>

<h3>DEBUGPORT </h3>
Specifying DEBUGPORT as a boot option will enable certain debugging features. 

Format: <code>DEBUGPORT=[SCREEN|BOCHS|GDB|PICE|COM1|COM2|COM3|COM4|COM:|FILE|MDA]</code>
Any one of the following values may set:
<ul>
<li>SCREEN: Send debug output to the screen.</li>
<li>BOCHS: Send debug output to bochs.</li>
<li>GDB: Enable the GNU debugger (GDB) stub so remote debugging using GDB is possible.</li>
<li>PICE: Enable the Private ICE driver so debugging using Private ICE is possible.</li>
<li>COM#: Send debug output to COM port #.</li>
<li>COM:[hex address]: Specifies the COM port address. (Example: /DEBUGPORT=COM:0xCC00 )</li>
<li>FILE: Send debug output to a file %systemroot%/reactos/debug.log</li>
<li>MDA: Send debug output to MDA (The old text graphics card from IBM).</li>
</ul>

It is permitted to use several DEBUGPORT options, but for ports of the same class, for example, COM ports, only the last one will be used for output.

<h3>BAUDRATE</h3>
Specifies baudrate of the serial port to be [baudrate] bps. Used in conjunction with COM1-4 or GDB. 

Format: <code>BAUDRATE=[baudrate]</code>

<h3>IRQ</h3>
Specifies the IRQ number of the serial port to be [irq-number]. Used in conjunction with COM1-4 or GDB.

Format: <code>IRQ=[irq-number]</code>

<h3>PROFILE</h3>
Enables profiling. Profiling information will be written in %windir%\profiler.log. This will slow down the system quite a bit.

Format: <code>PROFILE</code>

<h3>MAXMEM</h3>
Will restrict ReactOS to use only the first [maxmem] MB of physical memory.

Format: <code>MAXMEM=[maxmem]</code>

<h3>NOGUIBOOT</h3>
Disables the bitmap that displays the progress bar at ReactOS startup.

Format: <code>NOGUIBOOT</code>

<h3>FIRSTCHANCE</h3>
Set up exceptions to be passed to debugger on its occurrence, before being handled by regular exception handling code.

Format: <code>FIRSTCHANCE</code>

<h3>MININT</h3>
Loads the Registry SYSTEM hive as a volatile hive, such, that changes made to it in memory are not saved back to the hive image, into registry file. Useful for running ReactOS from a liveCD.

Format: <code>MININT</code>
