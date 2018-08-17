---
title:       "GSOC Project TSE Week 9"
author:      "SR13"
date:        2017-08-05
aliases:     [ node/48594 ]

---

<p>Hey there, its Shriraj here! 0/</p>

<p>We are already in week 9 of this 12-week journey of GSoC! Soon about to take the final lap, but wait we have a lot to do before that. This time too I don't have any pics as such to show visible progress, but yeah let's see through words what I managed to do last week. ;P</p>

<h3>What I did Last week?</h3>
<p>As I told in my <a href="https://www.reactos.org/blogs/gsoc-project-tse-week-8-phase-3">last blog</a>, we are currently working to find the appropriate enumeration filters required for safely removable devices, but as that feature is being tested on a standalone console app, I was free to prepare the <b>stobject</b> of ReactOS to welcome the hotplug! And that was perhaps the best thing to do, i.e. to parallelly work on the actual ReactOS code too instead of only concentrating on standalone tests. (which is unexpectedly slow in progress :P) </p>

<p>So first, I understood the idea behind <b>stobject</b> and its <b>csystray</b>. Basically, it uses function pointer mechanism to handle different notification tray modules. Then I added hotplug.cpp and integrated it with <b>stobject</b> for handling the <b>safely remove feature</b> and stubbed the required methods. But simply stubbing the methods didn't felt good to me so I added some code to test the icon and its response too. And it worked fine.</p>

<p>Next, I cleared my doubts regarding the API used for implementing removable devices and understood how WM_DEVICECHANGE notifications et al should be handled.
Besides, I also worked to visually understand what <b>Windows</b> does while handling removable devices and tried to figure out how control should flow through our code.</p>

<h3>Next week!</h3>
<p>I am planning to code the remaining features and figure out the appropriate enumeration with help from my mentor and devs. Plus I want to rectify some serious bugs which might have remained within my earlier modules. Also, we would be getting some flashy new icons for battery and perhaps this hotplug too, thanks to Mr. Jared Smudde ( a.k.a Pi_User5, his nick on ReactOS IRC).</p>

<p>(Spoiler Alert!) Being excited, I already went one step ahead and plugged in the experimental enumeration function which is under test.  (Shh.. don't tell this to anyone. XP) Assuming it works, I am coding some features (like showing the icon only when removable devices are present, just like windows) and results look promising. But that's for the next time!</p>

<p>Keep calm, and Stay Tuned!! ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/stobject">Code Repository: Phase 3</a></li>
</ol>
