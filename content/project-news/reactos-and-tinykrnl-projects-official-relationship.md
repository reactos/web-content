---
title:       "ReactOS and TinyKRNL projects' official relationship"
author:      "fireball"
date:        2006-05-19
aliases:     [ "reactos-and-tinykrnl-projects-official-relationship", "node/261" ]
---

<h2>ReactOS and TinyKRNL projects<span class="literal">' official relationship</span></h2>
<p>Prepared by Aleksey Bragin and Alex Ionescu, Project Coordinators.</p>
<p>There is a little information posted officially about TinyKRNL project and <span class="keyword">this</span> provides a base <span class="keyword">for</span> gossip to appear. This <span class="keyword">short</span> article is intended to clear up official relations between these two projects.<br/>
&nbsp;<br/>
TinyKRNL is an educational and documentation project which creates plug-in replacements <span class="keyword">for</span> various modules of Windows 2003 SP 1 (ultimately replacing the kernel too) and a series of papers ultimately combined into a book. The methods used <span class="keyword">for</span> development of TinyKRNL&rsquo;s modules source code involve all possible methods of achieving the end result of having a 100% compatible (or even identical) result. Reverse engineering is one of them (mainly so-called &lsquo;dirty&rsquo; way, <span class="keyword">for</span> further reference see Wikipedia&rsquo;s article about clean room reverse engineering vs. dirty room reversing).<br/>
&nbsp;<br/>
Unfortunately, due to copyright laws and other law-related stuff, ReactOS (which aims at commercial usage too) can not directly utilize methods of development like dirty reverse engineering, and thus ReactOS can not share all code with the TinyKRNL project like we are sharing code with WINE.<br/>
&nbsp;<br/>
However, there are some very useful exceptions:</p>
<ul>
    <li>Firstly, all interfaces are shared. This gives ReactOS project an unbeatable level of compatibility and legal freedom too (interfaces can not be copyrighted). </li>
    <li>Secondly, the great thing is that TinyKRNL will provide the most complete documentation of the most recent and technically advanced version of a released NT-famility operating system &ndash; Windows 2003 SP1. ReactOS developers can use <span class="keyword">this</span> documentation <span class="keyword">for</span> reference when creating a clean implementation of functions or improving already developed code.&nbsp; </li>
    <li>Thirdly, any code in TinyKRNL which respects the ReactOS policies regarding development can directly be added into ReactOS, as well as any build tools or 3rd-party files. </li>
</ul>
<p>For more detailed information regarding TinyKRNL project, please look at <a href="http://www.tinykrnl.org.">http:<span class="comment">//www.tinykrnl.org.</span></a>&nbsp;<span class="comment">We also encourage you to signup on the TinyKRNL </span>. We also encourage you to signup on the TinyKRNL development Mailing List by sending a blank email to <a href="mailto:devel-subscribe@tinykrnl.org">devel-subscribe@tinykrnl.org</a> as well as joining the #tinykrnl channel on the same IRC server as #reactos; many of the ReactOS developers and users are usually present and discuss interesting and challenging kernel issues as well as general off-topic chat.</p>
