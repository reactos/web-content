---
title:       "Newsletter 56"
author:      "Z98"
date:        2009-04-09
aliases:     [ "newsletter-56", "node/196" ]
---

<h2>USB</h2>
<p>
USB support has an odd history in ReactOS.  The original effort involved porting the Cromwell USB stack from Linux, which Aleksey Bragin spent awhile trying to get working.  This was eventually abandoned for another third party project, an USB stack developed for NT4 by a programmer in China. This stack however was incomplete and rather buggy and the original author no longer maintained it so Aleksey spent some time fixing it up, to an extent.  A USB mouse driver was hacked in but did not work reliably, as many people who attempted to use one on ROS can attest to.  Recently Aleksey went back into the cold to add a USB keyboard driver and intended to apply the same hack he used on the USB mouse driver to get it somewhat working.  However, he decided to get fancy and try to control the LED lights on his keyboards, which involves slightly different communication methods than just sending keystrokes or mouse movements.  Aleksey eventually discovered that the USB driver was parsing the configuration descriptor sent by the device wrong and after consulting a member of the Haiku team knowledgeable in USB development fixed the problem.  This incidentally removed the need for the hack in the USB mouse driver as well.  The USB drivers themselves rely on the regular keyboard and mouse drivers, which means the regular drivers must be loaded before the USB drivers. Supporting the USB devices in the regular drivers was originally done by Hervé Poussineau. Aleksey simply put together the various pieces to get a semi-working system. 
</p>
<p>
While ReactOS now has both an USB mouse and keyboard driver, it should be pointed out that both these drivers were designed for the current USB stack in ReactOS.  USB in NT5 and higher has two stacks, PnP and HID which is completely different than what is in ReactOS.  Before we can consider implementing USB drivers following the NT5+ design, we first need a USB stack that actually follows the NT5+ design.  This would mostly be for compatibility with third party drivers, as it is possible to provide the base functionality one expects from USB using the current USB stack in ReactOS.
</p>
<h2>Networking</h2>
<p>
Art Yerkes and Cameron Gutman have been putting in a good deal of effort getting the network stack in better shape and implementing missing functionality.  One issue that was failing was sites requiring SSL would fail due to a memory corruption issue.  An array of IP addresses is maintained and used by two functions, AfdGetPeerName and AfdGetSockName.  Art believes that sites using SSL may call either of the two extra times in order to verify certificates, which exposed the bug. With the issue fixed, it is now possible to get to sites like the gmail login page as well as applications like Thunderbird that rely on SSL for security.
</p>
<p>
Art and Cameron face a slightly different set of challenges in working with the networking code compared to the others.  The problem they face is that the network interface is in many respects overengineered, with multiple structures that have very similar names and have slightly different members.  Case in point would be the TDI_ADDRESS_INFO, TDI_ADDRESS_INFORMATION, and TRANSPORT_ADDRESS data structures.  The underlying assumption for all this was that a protocol might return multiple addresses on a request, which is not the norm on a networked system.  Since all these are part of the defined interface, they cannot change it and have to go through the code to make sure the appropriate data structure and the appropriate member of said data structure are being used.  What is even messier is that sometimes the differences between the data structures don't matter, which means it could work in one situation and break in another.  Regardless, the two have their work cut out for them.
</p>
<h2>Testing Infrastructure</h2>
<p>
Christoph von Wittich got automated winetests running a while back and Alwyn Tan, a member of the community had created a temporary GUI for viewing and comparing the results of tests across revisions.  Colin Finck has been working on a more permanent solution that also has more features.  The new web interface allows for comparing up to five different builds or just examining results that have changed.  In addition, the buildbot used for compiling and running the tests was also upgraded.  The rosautotest program was rewritten by Colin so that it can restart testing in case ReactOS crashes.  Combined with the efforts by Stefan Ginsberg to bypass tests known to cause ROS to crash, we can now be fairly certain ROS will go through the entire suite of tests instead of stopping after a crash.  For those of you who wish to play with the test manager, it is currently located on the test server at this <a href="http://79.99.5.181/testman/">address</a>. 
</p>

