---
title:       "Newsletter 38"
author:      "encoded"
type:        news
date:        2008-03-01
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-38
aliases:     [ node/178 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Server maintenance </li>
# <li>Recent Work</li>
# </ul

---
<h2>Server maintenance </h2>
<p>
Recent server maintenance caused outages of the web and SVN servers. The ordeal lasted a few hours for some users, which could not access the project web page, SVN servers, or send mail to the mailing lists. If you sent an email to our mailing list during the outage your mail could have bounced, or have been lost. Don&#39;t believe the conspiracy theories, it was just a DNS change.
</p>
<h2>Recent Work</h2>
<p>
Freeloader and Memory Manager improvements, mainly driven by the ARM team, have made it more portable and have been able to in fact use it to boot the ReactOS kernel on an ARM platform. The early kernel memory manager code had to be refactored in order to extract none portable parts and fix numerous issues that plagued it. Still, much work remains for the ARM team.
</p>
<p>
Win32k and friends are still under heavy &quot;construction&quot;, of note; many memory leaks have been fixed which has significantly improved memory usage and performance under certain conditions. Even so, some object referencing and deletions are still broken and object locking/unlocking still remains a bit... problematic. A lot of work has gone into every part of the win32 subsystem by many talented people, which is helping it to become a powerful platform that can run any Windows&reg; applications reliably.
</p>
<p>
The ext2 file system driver has been turned on. If you regularly test ReactOS you have probably seen some verbose output from the ext2 driver in the debug logs. It still doesn&#39;t work, and the code that would actually allow you to use it has been disabled. But it&#39;s a sign of things to come.
</p>
<p>
In general SVN is a busy place, there are hundreds of commits every week (with the exceptions of long holy days and server outages). Significant work goes into translating ReactOS to many languages, and keeping those translations up to date.  You can also see that developers usually work on many different things at the same time. There has also been noteworthy work on DirectX, GDI, Rbuild, speed optimizations, memory leaks in general, and assorted bug fixes.<br />
</p>

