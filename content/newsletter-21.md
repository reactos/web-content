---
title:       "Newsletter 21"
author:      "samwise52"
type:        news
date:        2007-04-02
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-21
aliases:     [ node/162 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Another newsletter </li>
# <li>Project News </li>
# <li>SVN movers and shakers </li>
# <li>Bugzilla </li>
# </ul>

---
<h2>Another newsletter </h2>
<p>I am glad I am able to bring you the latest news about ReactOS through this newsletter. It is the purpose of this newsletter to inform everyone of the recent work and notable highlights of this great project. It is my hope that you will find it useful and informative. (Insert license agreement indicating no particular usefulness, assorted legal wording and notices here... Just kidding!) </p>
<h2>Project News </h2>
<ul>
    <li>New storage stack based on NT4-DDK examples implemented in trunk, fixes booting on VmWare and several other nasty bugs. </li>
</ul>
<blockquote dir="ltr" style="MARGIN-RIGHT: 0px">
<p>As part of the rewrite Fireball updated Scsi port to be compatible to the new semantics. Drivers included in this rewrite: atapi, cdrom, classpnp, and disk. It is expected that this will speed up development of the much expected 0.3.2 release scheduled for next month or later. Much work still remains to create a more up to date (XP/2003/Vista compatible) stack, but its a large step in the right direction. </p>
</blockquote>
<ul>
    <li>SVN sever updated to version 1.4.3, this will permit faster and smaller downloads and create a smaller traffic footprint per transaction. Faster, smaller, better! </li>
    <li>SVN data to be copied to googlecode servers. This will provide a highly reliable backup in case of server failure. Currently the process has hit some technical snags, but will soon be available at: <a href="http://reactos.googlecode.com/svn/">http://reactos.googlecode.com/svn/</a> </li>
    <li>The big decision finally made. Alex Ionescu to work at Apple, Inc. for summer internship. (<a href="http://www.alex-ionescu.com/?p=33">blog entry</a>) </li>
</ul>
<blockquote dir="ltr" style="MARGIN-RIGHT: 0px">
<p>This does not mean he will stop contributing to ReactOS or Tinykrnl, on the contrary he explicitly choose Apple because it will allow him to continue his work. For more details read his blog article about the expirience. As a friend I wish him the best luck in all his endeavors. </p>
</blockquote>
<ul>
    <li>Video of conference given by Alex Ionescu at the University of Waterloo, Canada made available (<a href="http://csclub.uwaterloo.ca/media/ReactOS%20-%20An%20Open%20Source%20OS%20Platform%20for%20Learning.html">Link to video</a>). </li>
    <li>Native SEH support, an important feature for ReactOS considered for GCC Summer of Code Project. </li>
</ul>
<blockquote dir="ltr" style="MARGIN-RIGHT: 0px">
<p>In short Structured Exception Handling is a compiler dependant feature(currently done in a non-optimized way via a&nbsp;series of macros in a static&nbsp;library) that Windows uses to handle both hardware and software exceptions. The key to this is the EXCEPTION_REGISTRATION structure which the compiler creates for any function that has a try/catch block. Using this structure the kernel can know what code must be executed to handle this exception, or if none the OS will abort the thread.&nbsp;For&nbsp;more technical details <a href="http://www.microsoft.com/msj/0197/exception/exception.aspx">this</a>is a good article about it.</p>
</blockquote>
<h2>SVN movers and shakers </h2>
<ul>
    <li>dgorbachev - committed translations and fixed several issues in npfs and kernel bug fixes. </li>
    <li>Fireball - rewrote several scsiport routines to be compatible with the new storage stack, committed new storage stack, many kernel bug fixes, and build fixes. </li>
    <li>gedmurphy - fixed unicode build/link issues. </li>
    <li>greatlrd - updated several reactos ddk headers to match MS ddk headers. Worked extensively on DirectX and GDI. </li>
    <li>hpoussin - committed translations, fixed critical bugs, svn maintenence and kernel PnP work. </li>
    <li>hyperion - revamped the PSEH library, removed potentially dangerous code. Changed syntax to be more flexible and powerful. </li>
    <li>ion - Fixed kernel bugs in DPC stack, improve NPX support, trap fixups, debug register save and restore and cleaned up the lib directory. </li>
    <li>janderwald - worked on the reactos build tools/environment. </li>
    <li>silverblade - committed missing headers and fixed several sound driver compiling issues. </li>
    <li>spetreolle - also fixed build issues and warnings in the sound drivers. </li>
    <li>tretiakov - worked on win32k keyboard layouts and kernel. </li>
</ul>
<h2>Bugzilla </h2>
<p>For the period of 2007-03-18 through 2007-04-02 there where 72 active bugs.</p>
<ul>
    <li>48 new bugs reported, of these 14 were translation patches. </li>
    <li>By the time of this report 16 of those new bug reports had already been closed. </li>
    <li>A total of 17 bugs where marked fixed and additionaly&nbsp;4 invalid, 8 duplicate, 1 later. </li>
    <li>Oldest bug marked fixed was number 463 &quot;Dillo.exe - Font TGMarlett.ttf incompatible&quot; </li>
</ul>
