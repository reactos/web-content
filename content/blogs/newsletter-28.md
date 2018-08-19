---
title:       "Newsletter 28"
author:      "samwise52"
date:        2007-07-22
aliases:     [ "newsletter-28", "node/168" ]
---

<h2>Release time</h2>
<p>The long awaited 0.3.3 release is branched; the usual preparations for releases are under way. You should already know we skipped a version number and that this release is primarily bug fixes from the massive kernel rewrites that have been taking place. Stability being the primary motivation of this release, I can safely say this is a big improvement from the 0.3.1 release. The outlook looks bright on future releases, ever closer to the 0.5 goal of beta status. </p>
<p>The stated goal of 2 month releases is upheld (.3.2 was skipped ~2 months after 0.3.1 was released). It should be repeated that 2 month releases are not set in stone; releases are done at the convenience of the developers and at such a time when the code base is deemed worthy of a version bump. </p>
<p>The actual full release will occur soon, currently waiting on further testing, change logs, minor bug fixes, and other stuff.&nbsp; The Release candidate can be downloaded <a href="http://www.reactos.org/en/download.html">here</a>. Changelog is still a work in progress, but&nbsp;can be viewed <a href="http://www.reactos.org/wiki/index.php/ChangeLog-0.3.3">here</a>.&nbsp;</p>
<h2>Language Resources</h2>
<p>Language resources are compiled into executables by windres, this allows the OS to switch to different languages, just by reading a different part of the executable program. The ROSBE 0.3.6 used a version of windres that created bad resource sections, where wrong languages were used or just simply bad data was created. We recommend everyone to update their build environments immediately to the latest version available <a href="http://reactos.colinfinck.de">here,</a>&nbsp;and will be available at our sourceforge page.</p>
<h2>Testing, bugs and the usual problems</h2>
<p>Operating Systems are very complex and the windows &quot;ecosystem&quot; is quite large, so it is actually very easy to break applications and features even with &quot;correct&quot; code. That is why we ask everyone to test and retest applications on ReactOS, all the time. If you notice applications that previously worked but don't do so now please file a bug report. This is probably the area we need the most help on, and can be a lot of fun... UT still works ;)</p>
<p>&nbsp;</p>
