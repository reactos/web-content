---
title:       "ReactOS 0.3.14 Released"
author:      "fireball"
type:        news
date:        2012-02-08
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /reactos-0314-released
aliases:     [ node/308 ]
news:        [ "news" ]

---

<h2>The ReactOS team is proud to announce the release of ReactOS 0.3.14.</h2>
<p>This version includes a significant amount of changes including both user visible and architectural improvements. Also included in this release is the valuable work accomplished as part of the Google Summer of Code 2011 event, of which ReactOS was a mentoring project.

<p>One of the more significant sets of improvements was to ReactOS’ networking stack. As part of the GSoC, ReactOS gained a new TCP/IP driver built around the LwIP project. The LwIP library is a popular and stable implementation of TCP/IP originally intended for embedded use.  The new driver has significantly increased both stability and performance, allowing the use of high bandwidth applications such as torrents. Furthermore, ReactOS has improved compatibility with NT5.1 drivers with the export of scatter/gather DMA functionality. Last but not least, ReactOS now includes wireless network support and is able to connect to both open and WEP encrypted networks.</p>

<p>One of the more obvious user visible changes includes the implementation of theme support. Users can now change the look and feel of ReactOS’ user interface by installing XP based themes and changing the appearance of the desktop from the default classic look to something more exciting.</p>

<p>Architecturally, the addition of a kernel mode testing framework has helped to identify a variety of bugs in kernel mode components. This is an important change with regards to core stability and is proving invaluable in ensuring the project does not suffer unexpected regressions in the kernel.</p>

<p>Support for building ReactOS using the Microsoft toolset has also played a large part in the release. This is now at a stage where ReactOS can be entirely built using an MSVC based environment and can produce a working boot and livecd. Along with GCC, ReactOS can now be built using two different toolsets and on a variety of platforms including Windows, Linux and Mac OS X.</p>

<p>During the preparation of this release 789 bugs were fixed, including 118 regressions with the oldest regression being issue #1009 (can't open context menu with Shift-F10). The oldest bug fixed was #209 (PrintScreen doesn't work) from over eight years ago. 811 new bugs were opened since the release of 0.3.13.</p>

<p>A list of some of the more significant changes includes:</p>
<ul>

<li><p>ACPI</p>
Advanced Configuration and Power Interface support is now enabled automatically when the ACPI Hardware Abstraction Layer is used, providing support for power buttons and full system power off.</li>

<li><p>LwIP</p>
A new TCP/IP driver using the LwIP driver has been integrated into ReactOS, significantly improving network performance and stability and also presenting an upgrade path to IPv6.</li>

<li><p>MSVC Compatibility</p>
ReactOS can now be built using Microsoft's compiler to create a working boot or livecd.</li>

<li><p>Scatter/Gather Support</p>
Scatter/Gather DMA operations are now supported, significantly improving compatibility with network drivers written for NT5.1 and later.</li>

<li><p>Shell Improvements</p>
The shell32 library rewrite in C++ has been  merged in and brings with it various architectural improvements that will help serve as a foundation for future work on the new explorer shell.</li>

<li><p>Special Pool</p>
A special pool designed to guard against misuses of kernel pool memory has been implemented.</li>

<li><p>Theme Support</p>
ReactOS now has the infrastructure needed to theme the user interface and shell, allowing users to install and use something besides the classic Windows theme.</li>

<li><p>WiFi Support</p>
ReactOS now supports wireless network drivers and is able to join open and WEP encrypted wireless networks.</li>
</ul>

<br />
<p>The detailed <a href="../wiki/index.php/ChangeLog-0.3.14">0.3.14 changelog</a> is also available. </p>
