---
title:       "GSOC Project TSE Week 8 : Phase 3"
author:      "SR13"
date:        2017-07-31
aliases:     [ node/48355 ]

---

<p>Hey there! 0/</p>

<p>Sorry for posting my blog late this time :P. Was kinda busy with my family duties, besides some errands. Also, my college is starting from this week. As devs, we are better coders than writers but yeah, as a GSoC norm, blogging is a healthy habit which keeps us updated. ;)</p>

<h3>About this phase</h3>
<p>Let's keep it short this time, as I told in my last blog we are officially in the final phase of the project. But as we all know that no one is perfect so bugfixes will take place within all the code produced regardless of the current phase. This phase is all about implementing your favorite <b>Safely Remove Device</b> functionality. I will be using the same <b>stobject</b> which represents the system notification tray. The catchy name used for this feature is Hotplug! ;P</p>

<h3>What I did last week</h3>
<p>I started by fixing some bugs related to battery status project. One major bug was about blank strings in the context menu of the battery icon. Thanx to sir Mark Jansen, we were able to figure out the cause and temporarily resolve the issue. (That's the fun of working with ReactOS, not only the mentors but everyone helps in one way or another to make the project a success :) ) Also I added a minor feature to this battery status i.e the tooltips now are as dynamic as the battery icon itself indicating the charging/unknown/battery mode status instead of just showing remaining percentage.</p>

<p>Next thing I started to work on Hotplugs. I understood basic concepts and APIs (like SetupDi and CM) to be used for implementing this feature. For making the code robust, I wrote a stand alone console app for testing the safely removable concept before coding it within <b>stobject</b>. Currently, we are facing an issue about filters to be used for enumerating the proper devices. My mentor Giannis, colleague Thomas Faber and others are interactively helping me a lot to figure out the best possible solution for this issue. Thanks to their expertise ;)</p>

<p>So that was more or less what I did last week. I am planning to implement and test these feature on windows as soon as we get a proper solution. As my college is starting from this week my work hours will surely be reduced but fear not, I'll work and provide as good code as possible as always and of course post my blogs on time ;)</p>

<p>See ya!!</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/stobject">Code Repository: Phase 3</a></li>
</ol>
