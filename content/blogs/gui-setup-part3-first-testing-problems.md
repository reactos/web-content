---
title:      "1st-stage GUI setup, Part 3 - December 2023: First tests"
author:     "hbelusca"
date:       2024-01-31
tags:       [ newsletter, gui-setup ]
---

Greetings!

Welcome to the third blog of the series "1st-stage GUI setup":

1. [September 2023: partly Wine-syncing setupapi](/blogs/gui-setup-part1-setupapi)
2. [October-November 2023: Making partitioning UI work](/blogs/gui-setup-part2-partitioning)
3. December 2023: First tests

In this third blog post, I will cover my [work done during the month of December 2023](https://docs.google.com/spreadsheets/d/1Kx80SmSkj1IdomVC9gcbA_MJ7XFiz_YlYYVxoxv-Jgs/view#gid=946565330):
testing the whole 1st-stage GUI setup, together with the [partially wine-synced setupapi dll](/blogs/gui-setup-part1-setupapi).


## Finishing and testing the partitioning page UI

The first week was devoted to finally putting together the code for manipulating partitions from the user interface, [using the new workflow](/blogs/gui-setup-part2-partitioning#workflow-change-in-the-gui-mode-setup), and testing it.
At the UI level, this means:

- Verifying that inserting and deleting partitions correctly inserts or deletes their entries from the list;
- That two consecutive empty space entries get merged together;
- And that supplemental partition creation properties (such as selected formatting options) stay associated to the correct partition (and don't get freed, until the correct partition entry is deleted).


## Putting everything together, testing...

In this test-case scenario, running ReactOS GUI setup requires booting an _all-in-one_ CD ISO image.
This is an image that contains both the installation files, that we usually distribute as part of the _bootcd_, and the rest of the OS to boot from a graphical environment, that we distribute as a _livecd_.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/hybridcd_boot_menu.png" src="/img/blogs/hbelusca_gui-setup/hybridcd_boot_menu.png" caption="All-in-One ISO Boot menu (subject to change in the future)">}}
{{< /gallery >}}

Selecting one of the `ReactOS Live` (or `ReactOS Setup and Live`) entries, execution proceeds to the usual language-selection dialog,
followed by a dialog to choose between starting the usual LiveCD desktop environment or the ReactOS GUI installer.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/hybridcd_lang_select.png" src="/img/blogs/hbelusca_gui-setup/hybridcd_lang_select.png" caption="General language and keyboard layout selection">}}
{{< figure link="/img/blogs/hbelusca_gui-setup/hybridcd_run_install_select.png" src="/img/blogs/hbelusca_gui-setup/hybridcd_run_install_select.png" caption="Want to run the LiveCD environment, or start the GUI setup?">}}
{{< /gallery >}}

Note that the latter can also be started from the LiveCD desktop.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/hybridcd_guisetup_from_desktop.png" src="/img/blogs/hbelusca_gui-setup/hybridcd_guisetup_from_desktop.png" caption="The GUI setup can also be run from the LiveCD desktop">}}
{{< /gallery >}}

The language selection dialog, shown above, currently also affects the language and keyboard layout that will be used for the new ReactOS installation (_NOTE: This is subject to change in the future._)
Installation then starts with the usual welcome screen, followed by the choice of supported hardware presets (computer, display and keyboard types).
Then follows the list of disks and their partitions detected on the system.
Currently, partitions can only be created on initialized MBR disks.
Additional support for GPT disks and uninitialized disks is planned for the future.
For a description of partition operations, please refer to my [previous blog post](/blogs/gui-setup-part2-partitioning#workflow-change-in-the-gui-mode-setup).

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_config_pages.png" src="/img/blogs/hbelusca_gui-setup/guisetup_config_pages.png" caption="Overview of the ReactOS GUI setup configuration pages (from top-left to right-bottom: Welcome, Type of Install, Basic hardware selection, Partition list)">}}
{{< /gallery >}}

Under `Advanced Options...`, the user can choose the target directory for ReactOS installation (default: `\ReactOS`) and where to install the ReactOS bootloader.
For MBR disks, the default choice is to install the bootloader on both
the [VBR (Volume Boot Record)](https://en.wikipedia.org/wiki/Volume_boot_record) of the system ("active") partition where the FreeLoader `freeldr.sys` file is copied,
and the [MBR (Master Boot Record)](https://en.wikipedia.org/wiki/Master_boot_record) of the disk where this partition belongs to.

GPT support is presently absent, but will be added in the future.
Therefore, a combo-box list was chosen in the new options dialog over the old radio-button selection, so that platform-dependent options can be dynamically added or removed.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_advopts.png" src="/img/blogs/hbelusca_gui-setup/guisetup_advopts.png" caption="The new \"Advanced Installation Options\" dialog, with custom installation directory">}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_old_advopts.png" src="/img/blogs/hbelusca_gui-setup/guisetup_old_advopts.png" caption="The old \"Advanced Installation Options\" dialog, for comparison">}}
{{< /gallery >}}

After the user has made these choices, a page summarizing the installation options is presented.
Since it is well-known that ReactOS may behave erratically, I added a checkbox that the user needs to click before proceeding with the installation, to confirm that the user knows what he or she is doing!

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_confirm_page.png" src="/img/blogs/hbelusca_gui-setup/guisetup_confirm_page.png" caption="Are you _really_ sure you want to install ReactOS? ( ͡° ͜ʖ ͡°) ඞ (;´༎ຶٹ༎ຶ`)">}}
{{< /gallery >}}

After this confirmation, installation begins. Partitions are created or deleted, formatted and checked, then files are copied.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_fmtvol.png" src="/img/blogs/hbelusca_gui-setup/guisetup_fmtvol.png" caption="Formatting the installation partition">}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_chkvol.png" src="/img/blogs/hbelusca_gui-setup/guisetup_chkvol.png" caption="Checking the installation partition">}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_prepare_fileslist.png" src="/img/blogs/hbelusca_gui-setup/guisetup_prepare_fileslist.png" caption="Preparation of the list of files to copy">}}
{{< /gallery >}}


## ... and bugfix time!

### 1st main bug

File copy quickly hangs when copying a file.
{{< video src="/img/blogs/hbelusca_gui-setup/guisetup_install_filecopy_hang.mp4" type="video/mp4" caption="Setting up the installation, and file copy hang">}}

It turns out that this happens for every file present in the compressed `reactos.cab` installation archive.

The reason of this hang is due to the fact that, when extracting compressed files, a temporary file is created _somewhere_. But where exactly?
Looking at the code gives some clues:

```c
//
// setupapi/queue.c
//
1012 static BOOL do_file_copyW( LPCWSTR source, LPCWSTR target, DWORD style,
1013                            PSP_FILE_CALLBACK_W handler, PVOID context )
1014 {
...
...
1028 #ifdef __REACTOS__
1029     /* Get a temp file name */
1030     if (!GetTempPathW(ARRAYSIZE(TempPath), TempPath))
1031     {
1032         ERR("GetTempPathW error\n");
1033         return FALSE;
1034     }
1035
1036     /* Try to open the source file */
1037     hSource = LZOpenFileW((LPWSTR)source, &OfStruct, OF_READ);
1038     if (hSource < 0)
1039     {
1040         TRACE("LZOpenFileW(1) error %d %s\n", (int)hSource, debugstr_w(source));
1041         return FALSE;
1042     }
1043
1044     if (!GetTempFileNameW(TempPath, L"", 0, TempFile))
1045     {
...
...
1056         return FALSE;
1057     }
1058
1059     /* Extract the compressed file to a temp location */
1060     hTemp = LZOpenFileW(TempFile, &OfStruct, OF_CREATE);
1061     if (hTemp < 0)
1062     {
...
...
1076         return FALSE;
1077     }
1078
1079     lRes = LZCopy(hSource, hTemp);
1080
```

(_Important NOTE:_ This is ReactOS-specific code to support a behaviour similar to what Windows has, which is _**NOT**_ currently supported on Wine.
_However_, Wine code also uses a temporary destination file to perform the copy, instead of directly copying over any possible existing file.)

The default `TEMP` directory for the currently-running ReactOS installation is retrieved by a call to `GetTempPathW()`, then followed by an attempt to open the source file with `LZOpenFileW()` that also handles single-compressed source files.
(Remember those `MSPAINT.EX_`-like files in your Windows &le; 2003 installation disks? They are compressed single-file CAB archives, containing just one file, in this example: `MSPAINT.EXE`.)
This call will succeed even if the file is _not_ compressed.

Then, a temporary destination file path is generated with `GetTempFileNameW()`, based on the retrieved `TEMP` directory path.
Finally, the source file is extracted to this temporary path (or just copied to, if it was not compressed).
Only then is the created temporary file is moved to its final target.
This temporary file step is necessary for handling copy and replace operations on existing files that are currently in use, for which the operation is [delayed until reboot](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-movefileexw#remarks).

This raises the following question: _**Where is the default**_ `TEMP` directory, when running the ReactOS setup via the LiveCD?
The answer is: _**Located** in the currently-running ReactOS instance, that is, **in the read-only LiveCD ISO itself!**_ (in `X:\reactos\TEMP`).
Obviously, attempting to create or write a file to this destination will inevitably fail.
(Even though the ultimate destination of the extracted and copied file will be on the write-accessible ReactOS partition on the hard-disk.)

Because of this failure, attempting to install such files will fail.
This failure, coupled with the fact that the [custom setupapi file copy queue callback function](https://learn.microsoft.com/en-us/windows/win32/setupapi/creating-a-custom-queue-callback-routine) I wrote for the GUI installer did not handle file copy failures correctly, led to an infinite loop and thus an apparent hang.

#### The fix

Fixing this bug was actually pretty simple.

First, the [custom setupapi file copy queue callback function](https://learn.microsoft.com/en-us/windows/win32/api/setupapi/nc-setupapi-psp_file_callback_w) in the GUI installer needs to recognize it is called due to a copy error
(with the [`SPFILENOTIFY_COPYERROR`](https://learn.microsoft.com/en-us/windows/win32/setupapi/spfilenotify-copyerror) setupapi [notification](https://learn.microsoft.com/en-us/windows/win32/setupapi/notifications))
and return `FILEOP_SKIP` or any other "error" value, instead of the default `FILEOP_DOIT` or `FILEOP_RETRY`.
This would make the code more "future-proof" for any other sort of copy errors.
(An improvement could also be to show a custom error message box.)

Then, in the `do_file_copyW()` function, instead of calling `GetTempPathW()` to get the temporary directory, we generate a temporary file path and name based on the target path, where the file will actually be installed.
Since this path is inside the write-accessible ReactOS installation partition and the (sub-)directory was created by a previous step, temporary files will be created there without issues.


### 2nd main "bug"

Now that the first bug has been fixed, another one soon appears: an extreme slowdown when copying files.
Clearly this does not happen when using the text-mode USETUP.
What is going on here?

{{< video src="/img/blogs/hbelusca_gui-setup/guisetup_filecopy_slow.mp4" type="video/mp4" caption="File copy deadly slow">}}

The GUI setup used the Wine-synced setupapi routines for extracting the files from the `reactos.cab` source.

The gist of how the file copy loop works is as follows:

1. Get the next file source/target paths from the queue.
2. Call `do_file_copyW()` for the file. If it exists in the source installation directory, copy it and go to step 1.
3. If not, check installation CAB file (`reactos.cab` in our case) with `extract_cabinet_file()`.
If it fails, throw an error via the file copy callback.
4. Open the CAB file, loop through it to find the file, extract it, and close the CAB file.
5. Go to step 1 for the next file.

In steps 3 and 4, the helper function `extract_cabinet_file()` is used and ultimately calls into the `cabinet.dll!FDICopy()` function (`cabinet.dll` is also a Wine-synced dll).
Finding one given file in a CAB archive is a costly operation (with a ~80MB sized archive, if the file is at its end, finding it can take approximately 1 second), due to how [CAB files](https://msopenspecs.azureedge.net/files/Archive_Exchange/%5bMS-CAB%5d.pdf) [work](https://learn.microsoft.com/en-us/previous-versions/bb417343(v=msdn.10)#microsoft-cabinet-file-format).

These two steps are the bottleneck of this whole file copy loop:
because, for each file to copy, potentially present in the _same_ CAB archive, the archive is opened, the file has to be found (by looping through them to find the correct one) and extracted, then the CAB archive is closed.
This operation is done over and over again.

In comparison, it is _much faster_ to open the CAB archive _only once_, then whenever a file needs to be copied, check whether it exists in the CAB archive, starting from the current search position, and if possible, exploit the fact that the files in the copy queue are sorted in order of their appearance in the CAB archive.
(Alternatively, the program could loop once through all the files in the CAB archive and check which files need to be extracted.)
If the next file is not after the previous one, the program restarts searching from the beginning of the CAB archive.
This would be the slow code path, but not actually taken in real life due to the reasons from above.

This is exactly what the text-mode USETUP installer does, and is why USETUP is blazing fast in comparison.

After some further investigation suggested by Mark Jansen, it appears that each read operation from the CAB file, which is implemented using a `fdi->read()` callback (which is registered by setupapi when initializing the fdi context with the `FDICreate()` function), does a `ReadFile()` call.
Meaning, basically, that each data read from the CAB triggers a file I/O operation to disk, making the whole operation slower than it could be.
This could be alleviated by adding ReactOS-specific code in setupapi, to memory-map the CAB archive instead so that reading from it can be done directly via memory reads.
Such a trick is also used by the text-mode USETUP.

#### The current workaround

To alleviate the problems described above, the simplest workaround is just to use USETUP's file-copying and extraction functions.
With minimal adaptations, the existing code can be easily reused in the GUI installer.
File copy now works and finishes quickly.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_filecopy_finish.png" src="/img/blogs/hbelusca_gui-setup/guisetup_filecopy_finish.png" caption="Last file being copied. The directory listing shows that the files are there.">}}
{{< /gallery >}}


### 3rd bug

At the end of the installation, the ReactOS GUI installer creates the necessary registry hives (`SYSTEM`, `SOFTWARE`, `SAM` and `SECURITY`) in their respective locations inside the installation directory (`%SystemRoot%\system32\config`).
Using NT APIs, the registry hives are created from default settings and installation-specific settings, then flushed back to disk.

Notice that the created registry hives are separate from those being used by the LiveCD itself.
In the LiveCD (running in the so-called "WinPE" or "MiniNT" mode), the system root hives are mounted with shared (read-only) access, because they usually reside on a read-only medium, or in network boot they are on an external network share.
Thus for these LiveCD hives, any writes made to them (and any flush to disk) is a no-operation.

{{< gallery >}}
{{< figure link="/img/blogs/hbelusca_gui-setup/guisetup_create_registry.png" src="/img/blogs/hbelusca_gui-setup/guisetup_create_registry.png" caption="Creating the registry hives">}}
{{< /gallery >}}

The other hives (that could be loaded manually) can be loaded with full access because they may reside elsewhere than on a read-only medium (and can be on the local computer).

The bug was that _all_ registry hives, including any that could be created and mounted long after the LiveCD system hives, were mounted by the kernel in read-only mode.
And thus, any changes made to them during installation were not saved and were lost after reboot.
(More precisely, the `CmpShareSystemHives` flag, signalling that root system hives have to be loaded with shared access, was not reset for loading other hives with full access.)

This has been recently fixed in the `master` branch in commit [feb67576d](https://github.com/reactos/reactos/commit/feb67576ddf09b847c6ecf7b8fd9675ccf74e11c).


## What's next?

With these three major bugs now fixed, the ReactOS GUI setup just barely works.
However, other minor bugs still need to be fixed, and many aspects require polishing:

- Fix the wizard pages transitions for the "Update/Repair ReactOS" scenario -- not discussed in this present blog.
- Remove several hacks added in the partition UI page code.
- Fix a bug where the GUI setup would install ReactOS and always set its default language to the very first one (index 0) in the language list... which is Albanian!
- Improve the bootloader installation functions, shared with the text-mode USETUP.

In the next [blog post](/blogs/gui-setup-part4-future-improvements), I will discuss these improvements and more for the ReactOS GUI installer.

Stay tuned!

----

#### Some credits

I thank [@binarymaster](https://github.com/binarymaster) and [@cbialorucki](https://github.com/cbialorucki) for the thorough review of this blog post!

Below are the credits, in order of appearance, of what I have used for making the [guisetup_filecopy_slow.mp4](/img/blogs/hbelusca_gui-setup/guisetup_filecopy_slow.mp4) video:

Music:

- "Elevator Music" (https://youtu.be/jj0ChLVTpaA)
- Spongebob Time Card voice: "The French Narrator (Tom Kenny) model" (https://fakeyou.com/tts/TM:vjzq7981swey)
- "Local Forecast - Elevator" by Kevin MacLeod (https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1300012)
- ROBLOX oof (https://www.myinstants.com/en/instant/roblox-oof/)

And online tools:

- SpongeBob Time Cards Generator (https://spongebob.gavinr.com/)
- Online MP4 Video Editor (https://online-video-cutter.com/video-editor/mp4)
- Resize Online Video (https://www.resize-video.com/)

