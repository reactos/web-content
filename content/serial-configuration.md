---
title:       "Serial Configuration"
author:      "Z98"
type:        book
date:        2013-02-09
changed:     2013-02-10
draft:       false
promote:     false
sticky:      false
url:         /serial-configuration
aliases:     [ node/123 ]

---

Debugging ReactOS over serial tends to be the most reliable methodology as it minimizes the risk of losing debug output when ReactOS crashes compared to directing output to a file or application in ReactOS. It however takes a bit more setup on the receiving side and some extra hardware if attempting to debug a physical machine. The following provides basic instructions for setting up serial on both the sending and receiving side. For more detailed instructions on configuring serial output for virtual machines, please refer to the virtual machine section of this guide.

<h2>Serial Configuration</h2>
When debugging a physical machine with ReactOS installed, the machine must have a serial port installed. While many motherboards do have such an interface, most do not expose it to the end user and require an extra ribbon cable to connect the serial pins to a port. The receiving machine does not necessarily need a serial interface installed, as USB adapters do exist. Please be aware however that such adapters can be somewhat temperamental and it is generally more reliable to use an actual serial device. These adapters also cannot be used on the machine with ReactOS installed, as ReactOS is not capable of using USB to output debug messages. If a motherboard does not have a serial port or serial pins that can be easily hooked up to a port, serial PCI cards also exist.

By default, the debug build of ReactOS has its serial baud rate set at 115200. This can however be changed if there is a reliability issue at that speed. To do so, simply modify the BAUDRATE line in freeldr.ini like so:
<blockquote>/BAUDRATE=921600</blockquote>

Another value that might need to be changed is the serial port to use to send output. To do so, simply modify the DEBUGPORT to an appropriate port like so:
<blockquote>/DEBUGPORT=COM1</blockquote>

<h2>Serial Terminals on Linux/Unix Platforms</h2>
There are a wide range of programs that people can use to capture data from a serial port on Unix based platforms. The following lists a few options that should be easy to use and instructions on how to get started. For more detailed information, it is advised that interested readers look up the respective man pages for these utilities.

<h3>cu</h3>
Assuming that a serial port is installed on the receiving computer, users can use the cu program to receive messages over serial. This program is installed by default on FreeBSD and is known as uucp on RPM-based Linux distros. The following command shows how to start up cu to listen on a serial port.
<blockquote>sudo cu -s 115200 -e -o -t -l /dev/ttyS0</blockquote>
<ul>
<li>-l specifies the device being connected, which in this case is /dev/ttyS0. This name can be determined by using dmesg</li>
<li>-e -o means there is no parity. An alternative way of specifying this is -parity=none.</li>
<li>-s specifies the baud rate at which output is transmitted. 115200 is a conservative value. Most systems can probably handle a speed of 9600.</li>
</ul>

A useful script for storing debug output to a file is as follows:
<blockquote>DATE=`date +"%F_%H%M%S"` screen -dmS ROSlogger script MyMachine1-ROS-debug-$DATE.log sudo cu -s 115200 -e -o -t -l /dev/ttyS0</blockquote>

This script will output the debug log to a file incorporating the date and time.

<h3>minicom</h3>
To capture serial output using minicom, simply type in the following command:
<blockquote>minicom -D /dev/ttyS0</blockquote>

The -D option specifies the device one wants to capture output from. Inside of minicom, hit Ctrl+A to access the configuration menu to set things like parity and baud rate.

<h2>Serial Terminals on Windows</h2>
Capturing serial output on Windows is a bit trickier. Windows used to have a built in serial console before in versions of NT before Vista, but does not any longer. There are however many third party programs that work just as well. In actuality, any telnet client should be suitable for use as a serial reader.

<h3>Putty</h3>
Putty is likely better known as a SSH client for Windows, but can also act as a telnet client and capture serial output. It can be acquired <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/">here</a>. To configure it to capture serial data, select the Serial option for Connection type and enter the Serial path. The path \\.\pipe\ros_pipe is used in many examples in this guide. Speed is also commonly set to 115200.

<h3>TeraTerm</h3>
TeraTerm is an open source terminal emulator that supports both SSH and telnet and can be acquired <a href="http://en.sourceforge.jp/projects/ttssh2/">here</a>. It too can be configured to capture input to serial ports and might actually be more intuitive to set up for such connections.

<h2>Other Tools</h2>
A few other utilities and tools exist to help in dealing with serial devices.

<h3>com0com</h3>
Com0com is an open source utility to create virtual serial port bridges which can be used to capture the debug output of ReactOS and direct it to a terminal program. It can be acquired <a href="http://com0com.sourceforge.net/">here</a>.
