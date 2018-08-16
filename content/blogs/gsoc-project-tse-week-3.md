---
title:       "GSOC Project TSE Week 3"
author:      "SR13"
type:        blog
date:        2017-06-26
changed:     2017-06-29
draft:       false
promote:     false
sticky:      false
url:         /blogs/gsoc-project-tse-week-3
aliases:     [ node/45674 ]

---

<p>Hey there! Great to see you all in my 4th blogpost of this series. ;)</p>

<p>So far, so good!! No blockers and nothing to worry about, and just being around reactos community is pure fun. Coming straight to the point, this week I continued what I had left last time and that was the james band... err.. i mean CISFBand!! XP</p>

<p>After forwarding the methods of the built in system CISFBand and testing its integrity within live virtual machine, the next thing to do was to replace this system CISFBand with my own implementation of it. So I made a class named CISFBand, stubbed the required methods and as done earlier (with system cisfband) forwarded that to CQuickLaunchBand. This is done to simplify the process and separate the code of registration, initialization and all, from the important code of  handling and provision of the band object. The important thing regarding this CISFBand class was, that its methods weren't exposed like any other COM class (as done with CQuickLaunchBand) and there was no need for providing its own CLSID (which is unique ID, a string of alphanumeric code which is guaranteed to be unique once generated from a GUID generator). Most of you must have got an idea for doing this, and its used by CQuickLaunchBand to do its job. And so a C constructor was used (which was explained last week) as this class isn't instantiated with CoCreateInstance.</p>

<img src="/sites/default/files/imagepicker/51617/week3_1.jpg" alt="toolbar test"  class="imgp_img" width="803" height="601" />

<p>To check the robustness of newly implemented code, I created a button and tested it via this CISFBand class and it worked fine, just like it had worked earlier with basic CQuickLaunchBand. This time I took a step further and tested a toolbar with simple buttons embedded inside. This really confirmed the integrity of the implemented CISFBand as its main work would be to generate and provide the toolbar for file and folder objects. The above image shows, the simple test toolbar showing 3 buttons (one of them with disabled style).</p>

<img src="/sites/default/files/imagepicker/51617/week3_2.jpg" alt="pidl"  class="imgp_img" width="669" height="481" />

<p>Now the time had come to actually know what lies under the hood of the folders, the things which made 'double clicks' famous, which everyone must be familiar with. One of the most important concept related to them was PIDL. So, what are this crazy little things called PIDL !? In simple words, you can say they represent a file system object in a same way a path does, which you know. But PIDLs are not just paths, but way more powerful than that. A PIDL is a data structure that's meant to identify an item contained in a folder uniquely. A PIDL — the acronym stands for pointer to an identifier list — is more versatile than a fully qualified file name. It has to guarantee the uniqueness of the item not just within the folder, but also throughout the shell's namespace. More importantly, it must be able to handle files and file objects transparently. A fully qualified file name is just a string, but it's a string with a very particular format. It's a concatenation of substrings, each of which identifies a level in the file system's hierarchy. You have the drive name, then the directory name(s), the filename, and finally the extension, all separated by backslashes. What you perceive to be a fully qualified file name is no more than a pointer to these concatenated elements — a pointer to a string in this case. Conceptually, you could see it as a pointer to an array of structures, each of which identifies an element of the path name.   </p>

<p>More or less that's what I learned this week. Nothing great happened, but I got the chance to learn and implement the fundamentals which would form the basis of the upcoming Quick Launch Toolbar. I doubt, next week gonna be an exciting one and if you want to know why then stay tuned! ;)</p>

#Some Important links to fast track:
<ol>
<li><a href="https://docs.google.com/document/d/1zLTNqZ5eV35JUxoWIfPOIdV-ECPDrlWB-xOZbc28mBE/edit?usp=sharing">List of Milestones and plan</a></li>
<li><a href="https://code.reactos.org/committer/reactos/ssawant">Present history of commits</a></li>
<li><a href="https://code.reactos.org/browse/reactos/branches/GSoC_2017/shellext/reactos/dll/shellext/qcklnch">Code Repository</a></li>
</ol>
