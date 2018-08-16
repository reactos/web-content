---
title:       "Newsletter 3"
author:      "TwoTailedFox"
type:        news
date:        2005-10-31
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-3
aliases:     [ node/143 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>A Request!</li>
# <li>0.2.8!</li>
# <li>Wine 0.9</li>
# <li>Eyes on SVN</li>
# </ul>

---
<p>Another Week, Another Newsletter, a lot of news stuffed into a single issue, like an 8-course Barium meal.</p>

<h2>A Request!</h2>

<p>I actually got a request for some content for the newsletter. And since I like the look of them I'll have a look at both subjects. Let us begin.</p>

<h3>New Voting System</h3>

<p>It was decided a while back that the voting procedures needed to be changed, after a slight mis-hap on IRC, and some questioning the validity of a vote conducted there, as opposed to the Ros-Dev Mailing List.</p>

<p>It was decided to use the <a href="http://www.reactos.org/forum">ReactOS Forums</a>, as a platform for voting, with a twist; Each time a new Vote is created on the forum, the Ros-Dev Mailing List is notified. This is for people who don't frequent the forums, and yet still wish to remain on top of new issues. Also, forum votes are Anonymous, so people won't know who voted what, like a Secret Ballot in most national-level voting systems.</p>

<p>Aside from that, all other Voting Procedures will remain in effect.</p>

<h3>New Mailing List Search</h3>

<p>One of the things I liked about Gmail was its ability to search through all my Emails (Including SVN Commit Messages), so I can located old news quickly. Now, you, too, can use the same powerful search functionality, and this time, it includes all mailing list emails ever sent, for every list. You can find the search <a href="http://www.reactos.org/mlsearch">here</a>.</p>

<h2>0.2.8!</h2>

<p>Yup, ReactOS 0.2.8 has been officially released, I had a browse of the Changelog on the Wiki this morning (I even tidied up a few of the entries). The <a href="http://www.reactos.org/xhtml/en/dev_changelogs_ros028.html">Changelog</a> really is a sight to behold. In that article, is every change made since 0.2.7. Quit Impressive, no? In fact, go read it now. Just by reading you'll feel the Zen of being a ReactOS User, knowing that you're participating in one of the most active Open-Source efforts in the world today.</p>

<p>0.2.8 can be <a href="http://www.reactos.org/xhtml/en/download.html">Downloaded</a> via Sourceforge, As always it's available as a Boot CD, Live CD, QEMU Image, or as Raw Source Code. Or, you could be like me, and keep a copy of all ReactOS Source Code from the Trunk and Branches, with a copy of MinGW, for the "When-You-Feel-Like-It" Compilation Feeling.</p>

<h2>Wine 0.9</h2>

<p>I actually felt this was news worth mentioning, since WINE is very close to us. With the release of 0.9, they've offically migrated from the "Alpha" to "Beta" stage of Testing. What does this mean for WINE? Well, it means WINE has reached a stage of stability, and that, while many bugs still exist, a significant enough percentage of the Win32 API has been implemented, to reflect a degree of maturity. After all, WINE has been in Alpha for nearly 12 years prior to a few days ago. Incredible work, and keep it up, guys.</p>

<h2>Eyes on SVN</h2>

<p>Now, for me, this is the real juicy bit. Every day, each time I open a new SVN Commit message, it like I'm getting a present, "Oh, what change could this commit bring?". OK, it's worrying, and deeply sad, but it's as good as anything to look forward to. As always, the usual bug fixes, and minor flaw fixes have been taking place, but I've correlated all the significant aspects here. Bear in mind, these changes are to the Trunk only, not to 0.2.8, for those of you that get confused.</p>

<p>Implemented:</p>

<ul>
<li>COM-Related Functions</li>
<li>DirectDraw-Related COM Interfaces</li>
<li>SetupDiSetSelectedDriverA</li>
<li>SetupDiGetSelectedDriverA</li>
<li>SetupDiCreateDevRegKeyA</li>
<li>GetSystemWow64DirectoryA/W - 32-Bit Version</li>
<li>Hal GetAVailableVidMem</li>
<li>Hal WaitForVerticalBlank</li>
<li>Hal GetScanLine</li>
<li>Hal FlipToGDISurface</li>
<li>GetServiceDisplayNameW</li>
<li>IDirectDrawSurface::Blt for HAL</li>
<li>IRP_MJ_PNP and IRP_MN_QUERY_INTERFACE for GUID_BUS_INTERFACE_STANDARD</li>
<li>GetServiceKeyNameW</li>
</ul>

<p>MmReleaseMemoryArea has now been merged into MmReleaseMmInfo.</p>

<p>ddraw.dll has undergone a heck of a lot of work, and as I understand it, 10 API's have been implemented. With the WIN
