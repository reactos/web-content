---
title:       "Translation"
author:      "Z98"
type:        book
date:        2013-02-10
changed:     2013-03-28
draft:       false
promote:     false
sticky:      false
url:         /translation
aliases:     [ node/130 ]

---

ReactOS uses resource files to hold translations. These must be encoded using UTF-8 so take care the text editor used on these files does not accidentally change the encoding. Each language's resource file must be included in the rsrc.rc or application.rc file of the respective component being translated. Please keep in mind that some components are imported from WINE and as such translations of those components should be sent upstream instead.
<h2>Instructions</h2>
The first thing to do is to make a copy of the english rc-file, usually called en-US.rc, and name it after the target language. If you do not know the code for your language, check the two-letter codes of the <a href="http://www.w3.org/WAI/ER/IG/ert/iso639.htm">ISO 639</a> standard. Microsoft also maintains a list of language identifiers <a href="http://msdn.microsoft.com/library/dd318693%28v=VS.85%29.aspx">here</a>. Please note that a few files may differ from this list, for example files originally from Wine. As such, make sure to confirm a translation does not already exist before starting a new one.

When translating, following the guidelines below.
<ul>
<li>Change LANG_ENGLISH into your language (Example: LANG_SWEDISH). Depending on your language and location, you might also have to change the Sublang from SUBLANG_NEUTRAL or SUBLANG_DEFAULT.</li>
<li>Translate the strings in quotes. There are a few exceptions but they are fairly obvious. For example you should not translate "MS Shell Dlg" (which is a font, as you can see in the beginning of the line) or "SysListView32".</li>
<li>Leave an end of file line (a blank line) at the end of your rc file for ease of building.</li>
</ul>

<h3>Common Characters </h3>
<ul>
<li>&
The ampersand denotes the letter that comes after it as a hotkey. A hotkey is a key you can use to quickly access different menus and options. The hotkey is shown with an underline.
</li>
<li>%
The percent sign is followed by another character, like the %1 you see in the .rc file above. This should not be changed as it is usually a text string or a value being printed.
</li>
<li>\n
This is a line break.
</li>
<li>/* text */
This is commented text. You may consider leaving the source language text in order to facilitate future work.
</li>
</ul>

<h3>Size</h3>
The size of fields and labels can be changed if they are too small or big for the translation. In the following line,
<blockquote>PUSHBUTTON "&Some text", IDC_ACELIST_REMOVE, 170, 87, 50, 14</blockquote>
the numbers 170, 87, 50, 14 stand for LEFT, TOP, WIDTH, HEIGHT. Changing 50 to 60 will result in a longer pushbutton. 

<h2>Example</h2>
Below is an example rc-file from ReactOS Access Control List Editor (aclui).
Note that in a few lines some things irrelevant to translation have been removed.
<code>
&lt;source lang="c"&gt;
    include &lt;reactos/resource.h&gt;
    include &lt;defines.h&gt;
    include "resource.h"

LANGUAGE LANG_ENGLISH, SUBLANG_NEUTRAL
IDD_SECPAGE DIALOGEX 0, 0, 227, 215 STYLE WS_CHILD | WS_VISIBLE | WS_CAPTION CAPTION "Security" FONT 8, "MS Shell Dlg", 0, 0, 0x0 BEGIN
<blockquote>
LTEXT "&Group or user names:", -1, 7, 7, 105, 8
 CONTROL "", IDC_ACELIST, "SysListView32", LVS_REPORT
 PUSHBUTTON "A&dd...", IDC_ACELIST_ADD, 116, 87, 50, 14
 PUSHBUTTON "&Remove", IDC_ACELIST_REMOVE, 170, 87, 50, 14
 LTEXT "Allow", -1, 135, 107, 32, 8, SS_CENTER
 LTEXT "Deny", -1, 176, 107, 32, 8, SS_CENTER
</blockquote>
END

STRINGTABLE DISCARDABLE {
 IDS_PSP_TITLE "Permissions for %1"

} &lt;/source&gt;
</code>
