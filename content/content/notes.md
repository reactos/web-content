---
title:       "Notes"
author:      ""
type:        forum
date:        2011-10-31
changed:     2012-12-03
draft:       false
promote:     false
sticky:      false
url:         /content/notes
aliases:     [ node/17 ]
forums:      [ "general discussion" ]

---

I'm currently working with the stylesheets.  Here are my findings:

Change File>reactos-style.css

[Selector]
#block-system-main-menu ul.menu

text-align: center; (change to left)
margin-left:0px; (change to 230px;)

or optionally, create a new reactos-menu-style.css and recreate all the above to override the system stylesheet in zen.  

Fix 1: Handles all menus and may be detrimental to others.  
Fix 2: Handles only the reactos main menu.  But, means another css to work with.

Either way an issue.


