---
title:       "Google SoC lwIP Report Week 10"
author:      "zhu48"
type:        blog
date:        2016-08-01
draft:       false
promote:     false
sticky:      false
url:         /blogs/google-soc-lwip-report-week-10
aliases:     [ node/15226 ]

---

<p>Having rewritten all of the functions that I implemented and modified some of the functions that already existed before I started on this project at the end of last week, I now had to start flushing all of the bugs that invariably exist after a rewrite.&nbsp;</p>
<p>The major issue I dealt with this past week revolved around properly handling a TDI_LISTEN.&nbsp;</p>
<p>Part of the purpose for the rewrite was to reorganize my data so each TCP_CONTEXT struct represented a user socket or connection endpoint, and each ADDRESS_FILE struct only represented a local network address. In terms of the lwIP API, this would mean each TCP_CONTEXT should be a container for a tcp_pcb struct while each ADDRESS_FILE, as far as the TCP protocol is concerned, should just be an abstract handle for other parts of the network stack to hold onto. This architecture presents a problem when considering my driver's interaction with AFD/TDI.&nbsp;</p>
<p>When dealing with my driver, AFD/TDI expect data to be handled in a perticular way.</p>
<p>For ADDRESS_FILE structs, their life cycle begins when an IRP_MJ_CREATE message is sent to my driver, but there is never an explicit message to destroy the file. Instead, my driver is expected to deallocate the ADDRESS_FILE when there are no more references to it. For me, this means keeping track of the number of references to each ADDRESS_FILE from TCP_CONTEXT structs.&nbsp;</p>
<p>For TCP_CONTEXT structs, their life also begin when an IRP_MJ_CREATE message is sent to my driver. Unlike ADDRSS_FILE structs, however, TCP_CONTEXT structs are destroyed with an explicit IRP_MJ_CLOSE message.&nbsp;</p>
<p>The above is a nice way to conceptualize ADDRESS_FILE and TCP_CONTEXT structs as objects that upper level drivers directly manipulate, but that is too simple a view of the reality. AFD/TDI expects each object it creates as a TDI_CONNECTION_FILE (which a TCP_CONTEXT is) to correspond to a specific connection endpoint. That is, the endpoint belongs to a pair of endpoints on two opposite sides of an established connection. At a user level, a TCP socket does not have to correspond to an established connection. A socket can also be a listener who will never be connected to a remote endpoint, but will instead accept connection requests and spawn local endpoints for that purpose instead. Like user code, lwIP also treats these listeners as their own separate entities, represented as a tcp_pcb_listen struct. AFD/TDI messages, however, never directly deal with these listeners. Each TDI_CONNECTION_FILE (TCP_CONTEXT struct in my driver) is created with the express purpose of acting as the local endpoint of an established (or soon to be establish) connection. As such, no explicit TDI messages deal with creating or destroying listeners. I must handle creating and destroying these litener entities myself.&nbsp;</p>
<p>In the code that I scrapped, I used the ADDRESS_FILE to represent the listener entities and TCP_CONTEXT structs to represent connection endpoints, which was impractical for a number of reasons. lwIP protocol control blocks are created just like user sockets, uncaring of whether they become listeners or connection endpoints in the future. This scheme that when I allocated an lwIP PCB, it could end up in either an ADDRESS_FILE or a TCP_CONTEXT, and I won't know until I receive a TDI_CONNECT or a TDI_LISTEN IRP. This lead to a host of problems regarding how to keep track of ADDRESS_FILEs, TCP_CONTEXTs, and lwIP PCBs in the period between IRP_MJ_CREATE and TDI_CONNECT/TDI_LISTEN.&nbsp;</p>
<p>In the new code, TCP protocol control blocks are exclusively contained in TCP_CONTEXT structs. This simplifies keeping track of data between an IRP_MJ_CREATE and a TDI_CONNECT/TDI_LISTEN, but it still leaves the question of how to handle listener entities. Four days of coding and testing culminated in an architecture where the first TDI_LISTEN call marks an ADDRESS_FILE as having an active listening entity, and spawns a TCP_CONTEXT to hold the lwIP tcp_pcb_listen struct. Whenever a TDI_LISTEN IRP receives a cancellation, the listening TCP_CONTEXT and its associated tcp_pcb_listen struct are both deallocated.&nbsp;</p>
<p>This coming week, I will focus on thread-safety while smoothing out the bugs in this past week's code as I go.&nbsp;</p>
<p><a href="https://www.reactos.org/forum/viewtopic.php?f=2&amp;t=15697">Discussion</a></p>

