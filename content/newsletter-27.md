---
title:       "Newsletter 27"
author:      "Z98"
type:        news
date:        2007-07-04
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-27
aliases:     [ node/167 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Bug Hunt</li>
# <li>OLPC</li>
# </ul>

---
<h2>Bug Hunt</h2>
<p> The past few weeks have seen quite a lot of activity.&nbsp; At least six major blocker bugs were dealt with, ranging from the network issue to various bugs in the command line console.&nbsp; The pre VMware Workstation 6 Display Driver also now installs and works, which opens up some interesting possibilities.&nbsp; Specifically, on VMware Workstation, the driver allows the use of DirectX or ReactX.&nbsp; Which means Magnus Olsen's work on ReactX can actually be demo'ed on Workstation, to an extent.&nbsp; However, the npfs issue stubbornly remains and will require a lot of work by Aleksey Bragin to fix.<br/>
<br/>
Several other major bugs also surfaced or have been moved up in terms of priority.&nbsp; The first is the Cirrus Logic CL-54xx NT graphics driver failing to work on QEMU.&nbsp; While not a make or break blocker, it would still be nice to get it working before the 0.3.3 release.&nbsp; A more serious issue is the kernel debugging system crashing under certain conditions.&nbsp; If KDBG fails, expect to see a blue screen.&nbsp; Perhaps ironically, after the VMware Display Driver started working, VMware released a new one that fails.&nbsp; Well, not so much as fails as reduces the resolution to 320x240.&nbsp; So now we need to get ReactOS to play nicely with VMware 6.&nbsp; A hardware related issue is SCSI support.&nbsp; In theory, ReactOS supports being installed to SCSI drivers, something people have tested using VMware.&nbsp; This was also broken recently and several developers want to get it fixed before 0.3.3.&nbsp; The last major issue that really needs to be addressed is the Firefox 2 installer.&nbsp; Originally failing due to a problem with richedit, Christoph von Wittich resolved that issue only to have some odd permissions problem pop up.&nbsp; For that matter, the FF2 installer has failed with several rather odd errors.<br/>
</p>
<h2>OLPC</h2>
<p>Some people aren't aware that ReactOS was one of several projects that received hardware to test on from One Laptop Per Child.&nbsp; Aleksey has been playing around with it, slowly coaxing ReactOS to boot.&nbsp; Incidentally, this little side project occupied his attention for a while.&nbsp; Make any inferences you wish from that statement.&nbsp; Anyways, Aleksey managed to get to the point where the INACCESSIBLE_BOOT_DEVICE error popped up, which was pretty much where he had to stop since the OLPC's storage system isn't the one traditionally used by NT systems.&nbsp; While this effort doesn't directly impact ReactOS, it does demonstrate the possibilities.&nbsp; If Microsoft can get Windows to run on the OLPC, than so can we.<br/>
</p>
