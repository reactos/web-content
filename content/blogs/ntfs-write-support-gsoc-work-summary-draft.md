---
title:       "NTFS Write Support GSoC - Work Summary"
author:      "coderTrevor"
type:        blog
date:        2016-08-23
changed:     2016-08-29
draft:       false
promote:     false
sticky:      false
url:         /blogs/ntfs-write-support-gsoc-work-summary-draft
aliases:     [ node/17329 ]

---

<p>This is a detailed summary of the work I've performed during GSoC.</p>

<h3>Highlights</h3>
<ul>
<li>Wrote numerous functions which allow for NTFS write-support.</li>
<li>Expanded ReactOS' NTFS driver with the ability to overwrite files and change a file's size.</li>
<li>Identified and repaired several bugs related to reading files from NTFS.</li>
<li>Fixed ReactOS' LargeMCB implementation, facilitating support for <strong>four</strong> file systems, NTFS included (See <a href="https://jira.reactos.org/browse/CORE-11002">CORE-11002</a>).</li>
<li>Diagnosed and fixed a regression using log files (See <a href="https://jira.reactos.org/browse/CORE-11707">CORE-11707</a>).</li>
</ul>
<h3>Code Submitted:</h3>
<p>The following improvements have been submitted to my GSoC branch:</p>
<ul style="List-style-type: none">

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;">
<b><a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71224">r71224</a> - Added minimal write support from <a href="https://jira.reactos.org/browse/CORE-10998">CORE_10998</a> along with updates as suggested by <a href="https://code.reactos.org/cru/CR-90">CR-90</a>. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71616">r71616</a>.</b>
<p>This code started its life as a Jira patch, <a href="https://jira.reactos.org/browse/CORE-10998">CORE_10998</a>. I posted that patch with the hopes of being selected for GSoC.</p><p>This commit adds only the most basic write support imaginable to ReactOS' NTFS driver. It only allows for overwriting the contents of an existing file. Only non-resident files (those larger than about 700 bytes) can be overwritten, and the file size can't be changed. This minimalism is by design.</p>
<p>The following functions have been added:
<br><b>NtfsLockUserBuffer()</b> - Utility function. Ensures a give IRP has an MDL address.
<br><b>NtfsWrite()</b> - Handles IRP_MJ_WRITE I/O Request Packets for NTFS.
<br><b>NtfsWriteDisk()</b> - Writes data to the disk.
<br><b>NtfsWriteFile()</b> - Writes a file to the disk.
<br><b>WriteAttribute()</b> - Writes data to an attribute. Files on NTFS consist of attributes, including an attribute for the file's data.</li>


<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71494">r71494</a> - Added some fool-proofing to the build script for Windows.</b><p>I lost some development time early-on because I needed additional instructions on how to use ReactOS' build script. Once I knew what I was doing wrong, I updated the script to ensure nobody else would stumble on it as I did.</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71660">r71660</a> - When writing to a file, increase the file size if trying to write past the end.</b><p>This was a significant improvement over the minimal support added by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71677">r71677</a>.</p>
<p>Introduced functions:
<br><b>SetAttributeDataLength()</b> - Allows for altering the data size of an attribute. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71677">r71677</a>, <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71820">r71820</a>, <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71832">r71832</a>, <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71942">r71942</a> and <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71968">r71968</a>.
<br><b>UpdateFileRecord()</b> - Updates a file record in the master file table at a given index. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71920">r71920</a> and <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72423">r72423</a>.
<br><b>AddFixupArray()</b> - Prepares a file record or directory index for writing to the disk. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71662">r71662</a>.</p>
</li>

<!-- r71664 -->
<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71664">r71664</a> - Update a file's size in the relevant $FILE_NAME attribute of the index entry in the parent directory.</b><p>Another improvement. Introduced functions:
<br><b>UpdateFileNameRecord()</b> - Searches a parent directory for the proper index entry, then updates the file sizes in that entry.
<br><b>UpdateIndexEntryFileNameSize()</b> - Recursively searches directory index and applies the size update.
</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71680">r71680</a> - Allow for an existing file to be opened with FILE_OVERWRITE, FILE_OVERWRITE_IF, or FILE_SUPERSEDE dispositions, and truncate that file.</b><p>Another incremental improvement. This allows for a file to be opened and saved in ReactOS' Notepad.exe</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71696">r71696</a> - Lays some groundwork for extending allocation size. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71857">r71857</a> and <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71858">r71858</a></b>
<p>Another incremental improvement. Introduced functions:
<br><b>AddRun()</b> - Adds a data run to a non-resident attribute (for increasing a file's size). First implemented in <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71942">r71942</a> and supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71945">r71945</a> and <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72422">r72422</a>.
<br><b>GetLastClusterInDataRun()</b> - Returns the LCN of the last cluster associated with an attribute. Used to prevent file fragmentation when assigning the next cluster.
<br><b>NtfsAllocateClusters()</b> - Allocates a series of clusters on an NTFS volume. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71697">r71697</a>.</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71820">r71820</a> - Add ability to write to resident attributes.</b>
<p>Another incremental improvement. Introduced function:
<br><b>InternalSetResidentAttributeLength()</b> - Sets the length of a resident attribute. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71837">r71837</a></p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71897">r71897</a> - Add error-checking to InternalGetNextAttribute(); don't crash if CurrAttr-&gt;Length is invalid.</b>
<p>This fixed a problem with the existing driver that I would sometimes encounter during development, one that lead to blue screens.</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71921">r71921</a> - Adds support functions.</b>
<p>Another incremental improvement. Introduced functions:
<br><b>NtfsDumpDataRuns() and NtfsDumpDataRunData()</b> - Provide diagnostic output.
<br><b>GetPackedByteCount()</b> - Used to encode data runs.</p>
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71942">r71942</a> - Implements AddRun() and adds support functions and documentation.</b>
<p>A fairly significant improvement. Introduced functions:
<br><b>ConvertDataRunsToLargeMCB() and ConvertLargeMCBToDataRuns()</b> - Convert NTFS data runs to and from Large memory control block structures (which I fixed earlier in the project). Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72422">r72422</a>.
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71968">r71968</a> - Adds FreeClusters().</b>
<p>A fairly significant improvement. Introduced function:
<br><b>FreeClusters()</b> - To free clusters on an NTFS volume. Supplemented by <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72422">r72422</a>.
</li>

<li style="Overflow-wrap: break-word;background-color: #E9FFE9;border: 1px solid green;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72424">r72424</a> - Adds NtfsDumpFileRecord().</b>
<p>A small improvement. Introduced function:
<br><b>NtfsDumpFileRecord()</b> - Provides diagnostic information about a file record.
</li>




</ul>
<h3>Contributions to Trunk:</h3>
<p>The following improvements have already been incorporated into ReactOS by my mentor, Pierre Schweitzer, as a result of my work:</p>
<ul style="List-style-type: none;">
<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71060">r71060</a>, <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71156">r71156</a> - Fix invalid read for data shared over two sectors.</b><p>I found this bug while performing an automated-test of WriteAttribute(). I realized later that I was allocating extra memory in my first patch.</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71155">r71155</a> - Don't leak memory in case of failures in NtfsReadDisk().</b><p>I found this small issue while reviewing the existing code.</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71159">r71159</a> - Don't attempt to read a sparse run off the disk.</b><p>I found this issue after adding sparse-run support to my automated-tester.</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71229">r71229</a> - Don't fail too early in NtfsCreateFile() when requesting write/supersede operation. This allows already setting appropriate error in certain cases and making the driver more consistent.</b><p>My mentor, Pierre and I found a piece of misplaced code here.</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71409">r71409</a> - Rewrote FsRtlGetNextBaseMcbEntry(), FsRtlLookupBaseMcbEntry(), and FsRtlNumberOfRunsInBaseMcb() using simpler logic.

This finally fixes broken MCB handling in ReactOS and allows FSDs relying on MCB to properly work in ReactOS!
</b><p>I'm very proud of this one! As you can see from <a href="https://jira.reactos.org/browse/CORE-11002">CORE-11002</a>, fixing LargeMCB's not only allowed me to advance the NTFS driver, but it also contributed to ReiserFS, FFS, and ext2 support!!</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=71869">r71869</a> - Fix ReadAttribute() and NtfsReadAttribute() in the case when an attribute contains two data runs; Remove extra if statement that prevents second data run from being read after it's decoded.</b><p>Yet another couple of issues that I found and fixed through the power of automated testing.</p></li>

<li style="Overflow-wrap: break-word;background-color: #F0F0FF;border: 1px solid blue;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
<a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72067">r72067</a> - This fixes a regression introduced by the patch above. The regression was found by DopeFishJustin and reported on Jira in <a href="https://jira.reactos.org/browse/CORE-11707">CORE-11707</a>.</b><p>Fixing this required only minimal back-and-forth between DopeFishJustin and myself. This was the first time I've diagnosed and fixed code based solely on log files.</p>

<p>The issue was caused by the fact that the function is being fed invalid data, and prior to r71869, it would fail more gracefully. I added additional error-checking and confirmed with DopeFishJustin that he no longer sees the regression. See <a href="https://jira.reactos.org/browse/CORE-11707">CORE-11707</a> for more information.</p></li>

</ul>

<h3><a href="https://jira.reactos.org/secure/attachment/36709/NTFS_Bonus.zip">Bonus Code</a></h3>

<p>During the course of this activity, I also wrote a considerable amount of code that was useful to me, but never intended to be committed. Only the minimal amount of time was spent writing these programs, so I wasn't distracted from writing driver code. As such, this bonus code has numerous errors: memory is often leaked; file handles are leaked; comments are missing, deceptive, or just plain wrong; things are done in an inconsistent manner; etc. For the most part, these programs can't be interacted with except at the level of their source code.</p>

<ul style="List-style-type: none;">
<li style="Overflow-wrap: break-word;background-color: #FFF4D8;border: 1px solid red;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
Tester (AKA "Disk_Test_1")</b><p>This automated-tester was absolutely crucial to my progress. Not only did it consistently find errors that would have been impossible to reproduce otherwise, it was the only way I could test many of my incremental improvements to write support. Since file creation is not yet supported, you have to first run the program in Windows, where it will create the files it needs.</p></li>


<li style="Overflow-wrap: break-word;background-color: #FFF4D8;border: 1px solid red;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
"NTFSbrowse"</b><p>I developed this program as a learning tool for myself. It was intended to be a stand-alone application that lets the user navigate the file structure of a live NTFS volume. In the end, I did not need to finish this feature. In its current inception, the program will give you a lot of information about a particular file record, identifying most of the individual fields in its HTML output.</p></li>


<li style="Overflow-wrap: break-word;background-color: #FFF4D8;border: 1px solid red;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
"DumpDrive"</b><p>This program is designed to create images of an NTFS partition, then compare these images. If it's able, the tool will keep track of every file that's changed, and display information related to the change.</p></li>


<li style="Overflow-wrap: break-word;background-color: #FFF4D8;border: 1px solid red;margin: 15px;padding: 10px 15px;border-radius: 25px;box-shadow: 2px 2px 5px #888888;"><b>
"BuildRosFast.ahk"</b><p>I wrote this AutoHotKey script during the community bonding period and assigned it to a custom toolbar button in Visual Studio. When I click this button, it starts building a livecd of ReactOS, kills any sessions of WindBg, reboots a VM, Launches WindBg, Launches ReactOS with debugging enabled, and finally adds whatever breakpoints I'm interested in before clicking the two buttons prompted by a livecd before you enter the desktop. This script is pretty crude (it would be better if it paid attention to the build results) but at the same time, it's an <em>extremely</em> powerful time saver!</p></li>

</ul>

<h3>What's working / What can be used now</h3>
<p>Every change mentioned under "Contributions to Trunk" has already found it's way into the ReactOS operating system. These changes can be used by simply running a livecd of the latest version of ReactOS and reading an NTFS volume. You can also use my tester; the read tests stress the parts of the driver that used to be broken.</p>

<p>Overwriting a file is mostly finished and works as an end-user would expect, with the caveats I'm aware of listed below. There's two ways to test: First, build my branch with <a href="https://www.reactos.org/wiki/Building_ReactOS">the usual method</a>. In a virtual machine, mount an NTFS volume in Windows, preferably Windows Server 2003. Create a text file on the volume. To test writing to resident files, you can leave this blank, to test writing to non-resident files, add at least 800 bytes of text then save the file.</p>

<p>Reboot into ReactOS (built with <a href="https://svn.reactos.org/svn/reactos/branches/GSoC_2016/NTFS/">my GSoC branch</a>). Open the file with Notepad.exe and change the contents. If testing resident files, make sure you add less than about 600 bytes of data (migrating resident attributes to non-resident isn't implemented at present). If testing non-resident files, there isn't such a restriction. Save the file. Reboot into Windows. You should be able to observe that your file has been updated from within ReactOS.</p>

<p><img src="/sites/default/files/imagepicker/49142/File_Overwriting_in_ReactOS.png" alt="Overwriting a file"  class="imgp_img" width="1608" height="588" /></p>

<p>Alternate testing method: Use my automated tester, Disk_Test_1. The principle is the same. You need to copy the tester onto an NTFS drive from within Windows, and run the program once. Then, you can run the tester from within ReactOS.</p>

<p><img src="/sites/default/files/imagepicker/49142/ROS_NTFS_Tester_final.png" alt="NTFS Tester"  class="imgp_img" /></p>


<h3>What's left to be done</h3>
<p>There's still considerable work to be done before the driver is ready for the end-user. Immediate goals include:</p>
<p>As suggested by Thomas Faber, write support should be disabled by default, and enabled via the registry. This will prevent end-users who misunderstand the experimental-nature of the driver from losing data.</p>
<p>For overwriting a file:</p>
<ul>
<li>Support changing a file's [allocation] size via IRP_MJ_SET_INFORMATION.</li>
<li>Support migrating a resident file to non-resident, when it grows too large.</li>
<li>Add support for creating $ATTRIBUTE_LIST (very rarely needed).</li>
</ul>

<p>For creating a new file:</p>
<ul>
<li>Commit code to create a new file record (this is working but I didn't have the commit ready in time for the end of GSoC).</li>
<li>The file must have an index entry added to the parent directory's index.</li>
</ul>

<p>From there, creating directories, deleting and renaming files and directories would be next, making the driver fairly usable. However, before the driver can be considered "feature complete," considerable development is still needed beyond even this point. Off the top of my head and in no particular order: we need to make sure we support caching, compression, logging, async IO, memory mapped files, installing to and booting from NTFS, etc...</p>

<h3>Looking Forward</h3>
<p><strong>Thank you to my mentors, ReactOS, and Google for this wonderful opportunity!!</strong></p><p>I definitely plan to keep contributing to ReactOS! As of right now, the last commit made to my branch by the GSoC deadline is <a href="https://svn.reactos.org/svn/reactos?view=revision&amp;revision=72424">r72424</a>, and newer commits should be considered to be made after GSoC has ended.</p>
