---
title:       "GSOC Project TSE Week 11 : Last but not the least..."
author:      "SR13"
date:        2017-08-20
aliases:     [ node/49398 ]

---

<p>Hello, everyone! 0/</p>

<p>As you can see in the title, this is officially the last week of coding but not the least as we still have a week left until final evaluation period ends. As we are coming close towards the end of GSoC, you all might feel sad as I won't be able to share about my work anymore... :`( 
But hold your hankies, fellas, GSoC might end soon but my journey with ReactOS is just beginning. ;D</p>

<p>This week, as you know, was the ReactOS-Hackfest week held in Germany. My mentor Giannis and my GSoC-mate Alexander (aka sanchaez) were part of the hackfest team. As you all might know, the team brought the hackfest to life by live-streaming on youtube and sharing all the fun and facepalms they had. And they also participated in FrOsCon too. Of course, I was not only enjoying the livestreams but also working towards finishing this last phase of coding. ;P</p>

<p>So, I continued my work from where I had left last week, and yeah that was about popping some balloons! Jokes apart, making the notifications to pop was not easy initially and it took a great deal of work. (I was experimenting with sleep timers like a time traveler!) And since I am using "Windows XP" virtual machine for tests, its own 'Safely Remove Device' balloon was also popping. You must have guessed by now, how many balloons I had popped! </p>

<p>Currently, this is how the notification system works. As soon as  DBT_DEVICEREMOVECOMPLETE notification message is received, a custom-made function NotifyBalloon() is called which pops your familiar balloon notification. This function receives the respective device name when you click on the context menu. You can see what other hacks had to be made in the code repo. Another thing was about handling failed ejection of a device. In this case, I made it show a familiar warning message showed in windows. But you know whats the best thing happened in this week? We <b>finally got the proper enumeration filters</b> for safely removable devices! \0/ Thanks to sir Thomas Fabber (aka ThFabba) and of-course Giannis. Finally, I was able to test these hotplug module as a whole and it worked fine.</p>

<p>That was all I can remember about what I did this week. And as per our initial plans, looks like my GSoC project is finished (Theoretically! XP). So if you want to know what else might have been left... then...</p>

<p>(probably for the last time) Stay Tuned! ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/stobject">Code Repository: Phase 3</a></li>
</ol>
