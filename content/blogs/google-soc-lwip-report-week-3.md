---
title:       "Google SoC lwIP Report Week 3"
author:      "zhu48"
type:        blog
date:        2016-06-12
draft:       false
promote:     false
sticky:      false
url:         /blogs/google-soc-lwip-report-week-3
aliases:     [ node/11288 ]

---

<p>In week 3, I discovered a lot more about how data is being passed around.</p>
<p>After more in depth inspection of the memory, I realized that Winsock was passing on the correct IP address; I just wasn't aware of the data structure it was using. After modifying my driver to correctly extract the IP address from the IRP, my test server and client performed a successful TCP connection hand shake, with my client program exiting correctly. However, when I attempted to run the client program again, the operating system crashes.</p>
<p>To investigate this issue, I separated the client and server programs into their individual system calls to see what IRQ each system call sends out to the driver. This investigation revealed that I was handling socket binding wrong. On the bind call, I'm supposed to create a transport address. On the connect call, another IRQ creates a connection context. It is this connection context against which a connection to the server is made. In my code, I did not take into account that each TCP socket can have multiple connections associated with it.</p>
<p>The latter part of the week was spent looking at how trunk handles the two different IRQs - the one that create a transport address and the one that creates a connection context, and how I should link those IRQs to lwIP. I am not yet finished with this investigation. Next week, I will continue trying to finish socket creation and connection establishment, taking into account the fact that each TCP socket can hold multiple connections.</p>
<p><a href="https://www.reactos.org/forum/viewtopic.php?f=2&amp;t=15531">Discussion</a></p>

