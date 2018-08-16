---
title:       "GSOC Project TSE Week 10"
author:      "SR13"
type:        blog
date:        2017-08-12
changed:     2017-08-13
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc-project-tse-week-10
aliases:     [ node/48992 ]

---

<p>Hi, everyone! 0/</p>

<p>Tick-Tock is coming to an end, and the next week is perhaps the last week of coding before final evaluation starts! ;P But let's be calm and discuss what happened last week. And as promised, I managed to get some demonstrable snaps this time. So, here we go!</p>

<img src="/sites/default/files/imagepicker/51617/week10_1.jpg" alt="w10.1"  class="imgp_img" width="214" height="155" />

<p>As told in my <a href="https://www.reactos.org/blogs/gsoc-project-tse-week-9">last blog</a>, we got some flashy new icons for the <b>stobject</b> modules I worked on. The above pic shows the battery in charging mode. (Notice that the tiny lightning is replaced with hot 'plug' ;P) Last time I also told that I was working on auto showing/hiding the safely removable device icon. Though I am still using the experimental enumeration function, the test results look good. I tested on win XP virtual machine with my USB pen drive.</p>

<p>Basically, Shell_NotifyIcon() is used to handle all the icon notification features. But as I had told earlier, the <b>stobject</b> and its <b>csystray</b> was already implemented and it provided its own NotifyIcon() function for handling this things. (of-course using Shell_NotifyIcon() internally. ;P) But it didn't provide the necessary interface (parameters) to handle icon hiding. One solution was to actually ADD and DELETE the icon and simulate the hiding. But it felt inefficient and since hiding was supported by the API, it felt superfluous too. So what I did was, I just added a default parameter to existing csystray:: NotifyIcon() and added some code for handling the hiding state. Thus it not only added the hiding capability to that function but also maintained the compatibility with other modules which were using that function. And thanks to devs they also showed the green light to change and adapt the existing code. :)</p>

<p>But when the icon should be hidden? As you must have guessed, when no safely removable device is attached the icon remains hidden and it pops whenever one or more such devices are plugged in. For that, it maintains a list of the devices attached using an ATL:: CSimpleArray. That list is also used to populate the context-menu of the icon, showing the attached devices. And then comes the obvious feature, without which this module is useless! That important feature is ejection of the device. For that, I use CM_Request_Device_Eject_Ex() on the device clicked by the user from the list.</p>

<p>Okay, enough chit-chat today, lets straight away see the demonstration via pics:</p>
<ol>
<li>When you plug in the device (USB Pendrive in this case), the 'Safely Remove Hardware and Eject Media' icon will popup!
<img src="/sites/default/files/imagepicker/51617/week10_2_5.jpg" alt="w10.2"  class="imgp_img" width="1360" height="768" />
</li>
<li>When you click on the icon, a context-menu with a list of safely removable devices will be shown:
<img src="/sites/default/files/imagepicker/51617/week10_4.jpg" alt="w10.4"  class="imgp_img" width="357" height="104" />
</li>
<li>If the device is under use (some program is open from the device) then it would warn you with a dialog!
<img src="/sites/default/files/imagepicker/51617/week10_3.jpg" alt="w10.3"  class="imgp_img" width="1360" height="768" />
</li>
<li>If the device is ejected successfully, it would inform you of the same with the cute notification balloon! (Actually, this pic is a spoiler in disguise ;P)
<img src="/sites/default/files/imagepicker/51617/week10_5.jpg" alt="w10.5"  class="imgp_img" width="1360" height="768" />
</li>
<li>When no more devices are available for safe removal, the icon goes to play hide and seek! 
<img src="/sites/default/files/imagepicker/51617/week10_6.jpg" alt="w10.6"  class="imgp_img" width="1360" height="768" />
</li>
</ol>

<p>So that's the crust of how a 'Safely Remove Device' module should work. But still, some hacks and fixes are required besides the enumeration problem which is the core of this entire module. Another thing which I forgot to mention was that I fixed a bug which didn't pop the icon after restarting, even when a device was plugged in before the restart. (like when you kill and restart explorer!)</p>

<p>That's all for the week, but you might have been wondering that I didn't explain much about the balloon! And that my friends, is for the next time!</p>

<p>Stay tuned, and be awesome! ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/stobject">Code Repository: Phase 3</a></li>
</ol>
