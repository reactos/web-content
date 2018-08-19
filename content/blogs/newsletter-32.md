---
title:       "Newsletter 32"
author:      "samwise52"
date:        2007-09-23
aliases:     [ "newsletter-32", "node/172" ]
---

<h2>ReactOS 0.3.3</h2>
<p>
Recently we released 0.3.3. We thank all the developers, testers, translators and everyone else who helped make it possible. The official release announcement by our project coordinator is <a href="../en/news_page_37.html">here</a>. The changelog can be found <a href="../wiki/index.php/ChangeLog-0.3.3">here</a>, new screenshots are also available <a href="../en/screenshots.html">here</a>. You can download your copy in the <a href="../en/download.html">download page</a>.
</p>
<h2>Rbuild Improvements</h2>
<p>
Herve has been working recently on several rbuild improvements. The focuses of these is correctly separate and represent files using only a single scheme, improving flexibility and speed. This eliminated mingw32 specific macros from other backends. Intermediate and auto generated files are now all created in the aptly named intermediate dir, usually &quot;obj-i386&quot;.
</p>
<h2>Bugzilla Maintainer</h2>
<p>
We welcome a new member to the ReactOS team, Amine Khaldi from Algeria, IRC nick amine48rz. He will be acting as the bugzilla maintainer. The position involves assigning bugs to the appropriate person so that they get resolved as quickly as possible. This is a new concept for ReactOS, where bugs often lay abandoned until someone noticed them and took the time to test them and act upon them.
</p>
<h2>Audit Bar</h2>
<p>
The audit progress bar has been removed from the front page and the reason for this is simple. The audit does not affect end-users, testers or patch submitters. The process of establishing a solid legal base for ReactOS code and coding standards cannot be measured by a simple progress bar and is a continuous process. This is not a measure to hide anything, since all information and history is still kept public. For more information refer to <a href="../archives/public/ros-dev/2007-September/009801.html">this</a> thread.
</p>
<h2>ReactOS Audio Service</h2>
<p>
A few days ago Andrew Greenwood committed the ReactOS audio service, the purpose of this service (just like the windows audio service) is to enumerate available devices so that the winmm component can use them. In this sense it works quite similarly to the windows service. Unfortunately it is only a small piece of the puzzle of the complete audio stack.
</p>
<p>
A few ideas have been discussed about how to speed up development, including porting OSS (Open Sound System) a *nix sound stack to serve as the ReactOS audio server. <span> </span>There is still much work to be done, but recent progress gives me hope of a nice ReactOS future.
</p>
<p>
&nbsp;
</p>

