---
title:       "Newsletter 65"
author:      "Z98"
type:        news
date:        2009-10-11
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-65
aliases:     [ node/205 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Disks and Partitions</li>
# <li>Sound Mixing</li>
# </ul>

---
<h2>Disks and Partitions</h2>
<p>One of the non-cross platform aspects of ReactOS was in how the bootloader dealt with disks and partitions.  The naming scheme used was very x86 centric and also was limited in which partitions it could access.  Herv&eacute; Poussineau started working on a new API to remove the limitations, one based on names instead of drive numbers.  Previously on platforms like PPC and ARM, developers would have needed to give numbers to each storage device they wanted to use.  Because these numbers were originally specified on the x86 architecture, other platforms ended up needing to hijack the designated numbers if they were using a device that did not have one originally assigned.  With the new interface, each platform can use names to better describe the devices they are on and uniquely identify it.  Another very nice change was made to how files were opened.  Originally a program would need to make a series of calls to first open a specific volume and then open a file on that volume.  If the file was located on another volume, the program would need to explicitly open the other volume to access that file.  The new interface simply takes the full path to the file, including which device and volume it is on.&nbsp; Herv&eacute; based this new interface on the Advanced RISC Computing specification, which Microsoft itself used before XP for naming boot devices.</p>
<p>All this niceness unfortunately is meaningless until the rest of the code gets rewritten to make use of it.  Herv&eacute; is making steady progress going through filesystem drivers, fixing the old call sites to use his new interface.  At the same time he also created a compatibility layer so things do not break during the transition.&nbsp; Once this is completed, additional boot devices besides disks can be added.</p>
<h2>Sound Mixing</h2>
<p>Johannes Anderwald continues his work with sound and has reached the point where ReactOS can enumerate all the mixers and their respective lines present on the system.  The terminology may be a bit confusing to those not familiar with how sound systems work in operating systems so the following is a simplified explanation.  Mixers act as the primary control units for an audio device but not in the sense that it controls the components that make up such a device.  Instead it controls the lines, the signal flow between the devices.  These lines embody the audio data that is being routed, either as input from devices like microphones, or output being sent to the speakers.  The mixer controls these lines and by modifying it can change attributes like volume.  As such, each line has a set of controls that the mixer can make use of to change the source.  ReactOS cannot yet enumerate all these controls but when it can the system will offer much better control over audio input and output.</p>
