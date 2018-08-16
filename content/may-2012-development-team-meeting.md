---
title:       "May 2012 Development Team Meeting"
author:      "Z98"
type:        news
date:        2012-06-03
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /may-2012-development-team-meeting
aliases:     [ node/312 ]
news:        [ "news" ]

---

<p>2012-05-31 19:00 UTC dev.reactos.org, #meeting</p>
<p>Proceedings</p>
<p>Meeting started at 19:08 UTC by Aleksey Bragin.</p>
<h2>Point 1: Website Revamp</h2>
<p>Danny Goette explained that about a month ago he started a new approach for the website revamp, based on the typo3 cms, with a theme based on the current website, a working forum (a mm_forum extension for typo3) that has all the data of our current phpbb forum, along with current user accounts imported from roscms. He also mentioned that the software for the wiki is subject to change from mediawiki (which is tricky to update) to dokuwiki (which is easy to update, and brings some other benefits like acl).</p>
<p>He mentioned that software like getbuilds, testman and compatdb already "works" with the new cms by adopting the design and user management, but they are subjects to rewrites as typo3 extensions, something that can be done after the release/switch.</p>
<p>Danny also explained that he is working on authentication for atlassian tools against the typo3 user database, which does not work at the moment, but the code is nearly finished.</p>
<p>The discussion then moved to the content and the translations, with a minimalistic approach towards moving content from the actual website to the new one. Ziliang Guo already started working on it in the drupal effort, and he mentioned that he'll migrate those into the typo3 effort whenever possible. As to translations, the members agreed that the languages which are badly outdated should not be maintained anymore. These plans are far from being finalized, because the revamp is still ongoing, so there's still time to bring up the current translations up to speed.</p>
<h2>Point 2: Trunk Status</h2>
<p>Olaf Siejka stressed that developers need to start actually fixing the reported bugs in order for the bug tracking system to be useful. James Tabor explained that his development work is completely focused on the reported bugs. This sets a good example of how developers should handle the bug tracking system.</p>
<h2>Point 3: Automated Regression Testing based on AutoHotKey</h2>
<p>With the absence of Amine Khaldi and Edijs Kolesnikovics, Olaf Siejka gave an overview of AutoHotKey and how we're leveraging its power to create an automated regression testing framework. He explained that it's not far from being ready, and presented a couple issues that stand on its way, issues that are being tackled.</p>
<p>Meeting closed at 20:18 UTC by Aleksey Bragin.</p>
<p>Minutes written by Amine Khaldi.</p>
