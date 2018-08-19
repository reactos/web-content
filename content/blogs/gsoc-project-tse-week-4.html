---
title:       "GSOC Project TSE Week 4"
author:      "SR13"
date:        2017-06-29
aliases:     [ node/45872 ]

---

<p>Hi, everyone!!

<p>So you all are still with me? Good!! ;)</p>

<p>As I had told last week, that this week will be rather an exciting one, and yes it indeed was. And the reason is, finally, you all will see a working (prototype) of the quick launch band. (yay!!) </p>

<p>Let me go through chronologically, what I did this week. The first thing was to Implement the IShellFolderBand. This is a very important interface as it helps to initialize the IShellFolder and PIDL (via its InitializeSFB method) required to enumerate the folder objects. And thinking about the basic UI for the user, I added a folder browser module for getting started ( a similar thing which you see when you click on 'browse', which you must be familiar with). Basically, when you will click on 'Quick Launch' entry in taskbar context menu, the folder browse dialog will show up, where you will select any folder whose items will be shown in the band. Internally the InitializeSFB method will use the PIDL of your selected folder to initialize the CISFBand. (As this UI is not the finalized version it might be changed later.) </p>

<p>The next thing I learned was the enumeration part. The IShellFolder interface is very powerful and is fundamental behind the navigation of shell namespace. It helped me to retrieve an enumeration object for receiving the PIDLs. It also allowed me to get all the required attributes, especially the name and icon of the respective file/folder objects. Then the obvious task was to insert this names and icons into respective buttons. While I was doing that, Giannis taught me a better way of subclassing using CWindowImpl class. The thing is, the method I used earlier didn't allow the custom defined WndProc to access the class members and making itself the class member wasn't the correct way. CWindowImpl solved both the problems by making the subclassing task an object oriented one. All of these helped to achieve one very important task and that was to bring the buttons to life!! ;D</p>

<p>In the other half of the week, I sat down to learn about menus, especially the context/shortcut menus (which made the 'right-clicks' famous).  I learned about menu resources and various functions used to display them. The most important interface to be implemented in this regard was the IContextMenu. I implemented its QueryContextMenu method to load the required menu resource and merge it with the taskbar context menu. So whenever you will right click on the toolbar (not on the buttons of course) you will see some new entries like 'view', 'show text', etc. For the buttons, I had to handle the right click to show the familiar file/folder context menu. Among others one important task was to get the position of the mouse click and manipulate it to respond in context with the button selected and whether left/right mouse button was clicked. </p>

<p>All of these enabled me to present you a working prototype of quick launch. You can see the current progress in the following snaps:- </p>
<ol>
<li> Start with clicking the 'Quick Launch' entry in taskbar context menu:
<img src="/sites/default/files/imagepicker/51617/week4_1.jpg" alt="4.1"  class="imgp_img" width="1360" height="768" />
</li>
<li>Choose your respective folder whose items will be added in the band:
<img src="/sites/default/files/imagepicker/51617/week4_2.jpg" alt="4.2"  class="imgp_img" width="1360" height="768" />
</li>
<li>The respective items will be showed in quick launch band:
You can either use the chevron (aka ">>") :
<img src="/sites/default/files/imagepicker/51617/week4_5.jpg" alt="4.5"  class="imgp_img" width="1360" height="768" />
or pull the band entirely to display its contents on taskbar:
<img src="/sites/default/files/imagepicker/51617/week4_3.jpg" alt="4.3"  class="imgp_img" width="1360" height="768" />
</li>
<li>As you can see, clicking on buttons will open the respective folders and you can also check out the properties (for example) via right click:<img src="/sites/default/files/imagepicker/51617/week4_4.jpg" alt="4.4"  class="imgp_img" width="1360" height="768" />
</li>
</ol>

<p>Overall it was a very exciting week. I am looking forward now to finalize the Quick Launch Band by adding remaining functionalities and debugging existing ones. And that's for the next time. See you around. ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/qcklnch">Code Repository</a></li>
</ol>
