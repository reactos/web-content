---
title:       "Newsletter 48"
author:      "Z98"
type:        news
date:        2008-10-25
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-48
aliases:     [ node/188 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>General Developments</li>
# <li>Win32k Mess</li>
# <li>New Guy I Missed Last Time Plus One</li>
# </ul>

---
<h2>General Developments</h2>
<p>
The release was delayed to take care of a series of regressions.  That and I was busy so the changelog itself wasn&#39;t ready either.  Anyways, every time a branch is created, Colin Finck, the release engineer, puts up a build and our team of testers run it through its paces and see if any applications that worked in the past got broken.  If that happens, effort is made to fix the regression.  Things that didn&#39;t work in previous versions and still didn&#39;t work aren&#39;t given that kind of attention.
</p>
<p>
KJK::Hyperion has been working on getting the ICU libraries integrated and filling in the holes. The ICU libraries are the de facto reference implementations for Unicode standards, possessing almost everything we would need for internationalization purposes. He has integrated the string normalization algorithms and their functionality will be exposed in the 0.3.7 release, and is now working on support for locale data.&nbsp;He claims it isn&#39;t a lot of stuff, but it is time consuming to get it all set up.  The data in question tells us how to display things like dates, currency, and location based off of what locale the user has set.  Some of it is fairly simplistic, simply numbers or strings, while others are more complex data structures.  The most difficult part will be simply translating data from the formats used in ICU to the formats expected by the Windows API. 
</p>
<p>
While waiting for the new explorer shell, we all have to deal with the old one that&#39;s been with this project since 0.2.0.  Ged Murphy has done some work on it to at least streamline and remove the more annoying issues, though any drawing bugs due to win32 are beyond fixes applied to the shell.  Some of the changes include removal of the address bar at the buttom of Explorer and changing the amount of space given to the four virtual desktop buttons on the taskbar.
</p>
<h2>Win32k Mess</h2>
<p>
Readers of the newsletter will likely remember my bemoaning of how jumbled parts of ReactOS are.  It seems that this is especially true for the Win32 subsystem.  Many of the data structures in our Win32k are completely different than Windows&#39;, whether it be a different name or completely mismatched data in those structures.  Timo Kreuzer has been working on rectifying that situation, this time working out the THREADINFO structure and the code that deals with it.  ReactOS actually broke up the THREADINFO data, putting some of it in another data structure called W32THREADINFO.  This data structure doesn&#39;t exist in Windows, and in fact has parts of DESKTOPINFO and CLIENTINFO as well, so it&#39;s pretty much an amalgamated mess.  While moving the members to their respective owners is easy, updating all the code that relied on the old data structure is another matter entirely.
</p>
<p>
W32THREADINFO isn&#39;t the only ReactOS specific structure that needs to be removed.  PROCESSINFO is another, but Timo hasn&#39;t had time to look into it in detail yet.
</p>
<h2>New Guy I Missed Last Time Plus One</h2>
<p>
Another newcomer had actually been granted commit access while I was working on the last newsletter but I published it before finding out about him, so his introduction here was delayed.  The latest developer to join us is Gregor Schneider, known as DosX on the IRC channel.  He intends to try and get rosdbg in better shape as well as deal with win32k and gdi issues, or whatever else grabs his interest.  One issue he did fix was the messed up icons for the virtual desktops on the taskbar, a long standing bug that we hackfixed in every previous release but now finally has been properly fixed in the GDI.  Hopefully this doesn&#39;t unravel some other major bug in the future.
</p>
<p>
Another newcomer would be Kamil Hornicek, known as Pigglesworth on IRC and preston on the forums.  Thankfully, he is far more skilled than his namesake.  Kamil had helped Magnus in the past in updating the Mesa code and other aspects of ReactX as well.  He intends to continue the ReactX work and the associated stuff in Win32k.
</p>

