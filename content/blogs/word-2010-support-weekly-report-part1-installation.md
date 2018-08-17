---
title:       "Word 2010 support – Weekly report – Part 1: Installation"
author:      "hbelusca"
date:        2016-11-19
aliases:     [ node/25992 ]

---

<p>
Hello everyone, I am Hermès Bélusca-Maïto. This is my first week report, <a href="http://reactos.org/project-news/reactos-hires-new-developer-we-re-hiring">as part of the part-time scholarship that I started two weeks ago</a>, that consists in making ReactOS being able to support Word 2010.
</p>
<!--break-->


<h2>Preliminaries</h2>

<p>
Before starting anything with Word 2010 I needed to prepare a testing environment. Because I am a native Windows user, I use a ReactOS trunk build made with the MSVC compiler. This ReactOS build was then properly installed and adequately configured on a VirtualBox (VBox) virtual machine (VM). I also use the WinDbg debugger to be able to easily debug ReactOS and perform step-by-step and source-code level debugging, and use <a href="http://virtualkd.sysprogs.org/">VirtualKD</a> as the debugger proxy to accelerate serial output especially when tracing is needed. As it can be instructive to compare execution traces of Word 2010 from ReactOS and from a real Windows Server 2003 (Win2k3), I have also installed a Win2k3 VBox VM similarly configured. To make many test reinstallations easier I created an ISO image out of my personal Office 2010 Professional DVD.
</p>
<p>
I quickly tested Word 2010 installation on Win2k3, where it is supposed to work. The installation did fail at first, because it required the presence of MSXML 6 SP1. The latter can easily be downloaded from Microsoft's website; I performed its installation, and then Word 2010 installation went correctly without any problem. Therefore I redid again a clean Win2k3 VM installation with MSXML 6 SP1 included, and then took VM snapshots (of the ReactOS and Win2k3 VMs) for easier purpose of being able to quickly restore the VMs to a clean state after installation tests.
</p>
<p>
I then inspected several monitoring tools on ReactOS to see which one(s) could be used for performing different tracing, such as file monitoring, registry monitoring, API calls monitoring etc... As it appeared ReactOS is not completely ready for some of them: SysInternals' Process Monitor (ProcMon) does not work due to the need for a functional filter manager driver (which is half-stubbed in ReactOS); SysInternals' Registry Monitor (RegMon) helper driver crashes due to a problem involving registry callbacks; and well-known Rohitab's APIMonitor is extremely slow to run <a href="https://jira.reactos.org/browse/CORE-10741">for some obscure reasons (CORE-10741)</a>, and therefore I do not want to use tools that would need ROS fixing to make them work before really starting working on Word 2010.</p>
<p>The only tool that really works flawlessly so far is <a href="http://court.shrock.org/sysinternals/FilemonNt.zip">SysInternals' File monitor (FileMon)</a>.</p>


<h2>First test of Word 2010 installation under ReactOS</h2>

<p>
First things first, I attempted to install Word 2010 on ReactOS. The installation package goes through the MSI ("Microsoft Windows Installer") framework. It went well until ≈ 60-70% where it then failed, just saying that "An error happened during the installation".
</p>

<div class="imgp_title">First installation attempt of Word 2010 in ReactOS</div><img src="/sites/default/files/imagepicker/23908/reactos_word2010_install_dryrun.png" alt="First installation attempt of Word 2010 in ReactOS"  class="imgp_img" width="1600" height="861" /><div class="imgp_desc"></div>

<div class="imgp_title">Installation failure at 70%</div><img src="/sites/default/files/imagepicker/23908/failure_70percent.png" alt="Installation failure at 70%"  class="imgp_img" width="1232" height="499" /><div class="imgp_desc"></div>

<p>
To attempt to diagnose this problem I first <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/aa368307(v=vs.85).aspx">disabled MSI rollback</a> and enabled MSI logging, both via <a href="https://support.microsoft.com/en-us/kb/223300">the standard MS method</a> and by using <a href="https://reactos.org/wiki/Debugging#WINE_Style">WINE-style debugging</a> (I thank Mark Jansen for pointing out the two first previous MS links to me).
I then re-attempted an installation and checked the debug logs, and here is what I have found when the installation fails:
</p>
<pre>
< Snip... >
(sdk\lib\rtl\path.c:682) In RtlGetFullPathName_Ustr: RtlQueryEnvironmentVariable_U(=C:) returned 0xc0000100
err:(dll\win32\msi\action.c:501) Execution halted, action L"CAInitSPPTokenStore.x86" returned 1603
< From there on, installation performs cleanup rollback ... >
</pre>
<p>
While the first line is innocuous (it actually says that a call failed and it will take a default code path, this is expected in this context), the second line shows that a MSI action of the Word 2010 installation, named <code>"CAInitSPPTokenStore.x86"</code>, failed with the rather generic error code:
</p>
<pre>1603: ERROR_INSTALL_FAILURE: Fatal error during installation.</pre>
<p>
To debug this failure I added much more WINE-style debug tracing, for msi, rpc and ole (the last two modules produce very noisy traces), and instantly noticed that the Word 2010 installation attempted to install, then try to start/stop the so-called "OSPPSVC" (Office Software Protection Platform) service. From there I decided to investigate much more the OSPPSVC service.
</p>


<h2>OSPPSVC service investigation, 1/2</h2>

<p>
Performing the installation with rollback disabled allowed me to keep the installed files even after the installation failed, and in particular the services installed by the Word 2010 installation: the "Office Source Engine" service (OSE, does not cause problems during the installation so far), and the "Office Software Protection Platform" service (OSPPSVC), the one that seems to cause the installation to fail.
</p>

<div class="imgp_title">Services installed by Office installer</div><img src="/sites/default/files/imagepicker/23908/reactos_office_services.png" alt="Services installed by Office installer"  class="imgp_img" width="731" height="496" /><div class="imgp_desc"></div>

<p>
Attempting to start it manually failed with a "hard-error" message box saying that the imported function <code>_wtof</code> (needed by OSPPSVC) was not found in MSVCRT.DLL . A quick look inside its code showed that this function was stubbed, and a patch to implement it – inspired from already existing similar functions – was promptly proposed by Amine Khaldi in <a href="https://jira.reactos.org/browse/CORE-12335">CORE-12335</a> and committed in <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73206">revision 73206</a>. No other imports being missing now, the service may be started.
</p>
<p>
Or can it be?
</p>
<p>
It happens that the service fails to successfully start and initialize itself. A look inside the ReactOS event log viewer clearly shows the problem: the service fails with the error:
</p>
<pre>0x80070002: HRESULT_FROM_WIN32(ERROR_FILE_NOT_FOUND: The system cannot find the file specified.</pre>
<p>This is in contrast with Win2k3 where nothing like that happens, and manually starting the service succeeds.</p>

<div class="imgp_title">OSPPSVC failing to load in ReactOS</div><img src="/sites/default/files/imagepicker/23908/reactos_osppsvc_BAD.png" alt="OSPPSVC failing to load in ReactOS"  class="imgp_img" width="1024" height="768" /><div class="imgp_desc"></div>

<div class="imgp_title">OSPPSVC successfully starts in Win2k3</div><img src="/sites/default/files/imagepicker/23908/win2k3_osppsvc_OK.png" alt="OSPPSVC successfully starts in Win2k3"  class="imgp_img" width="1581" height="777" /><div class="imgp_desc"></div>

<p>
But which file(s) the service cannot find in ReactOS and why? To attempt to answer this question, I have traced the file calls using FileMon, with its filter set to "osppsvc.exe". Here is what can be found in the log, taken within ReactOS:
</p>
<pre>
...
56  01:00:04    OSPPSVC.EXE:1960    OPEN    C:\WINDOWS\System32\%ALLUSERSPROFILE%\Microsoft\OfficeSoftwareProtectionPlatform\   SUCCESS Options: Open  Access: All
57  01:00:04    OSPPSVC.EXE:1960    CLOSE   C:  SUCCESS
58  01:00:04    OSPPSVC.EXE:1960    READ    C:  SUCCESS Offset: 0 Length: 16384
59  01:00:04    OSPPSVC.EXE:1960    CLOSE   C:  SUCCESS
60  01:00:04    OSPPSVC.EXE:1960    READ    C:  SUCCESS Offset: 0 Length: 16384
61  01:00:04    OSPPSVC.EXE:1960    CLOSE   C:  SUCCESS
62  01:00:04    OSPPSVC.EXE:1960    QUERY INFORMATION   C:\WINDOWS\System32\%ALLUSERSPROFILE%\Microsoft\OfficeSoftwareProtectionPlatform\   SUCCESS FileNetworkOpenInformation
63  01:00:04    OSPPSVC.EXE:1960    CLOSE   C:\WINDOWS\System32\%ALLUSERSPROFILE%\Microsoft\OfficeSoftwareProtectionPlatform\   SUCCESS
...
</pre>
<p>Now, here is what happens in Win2k3:</p>
<pre>
146 00:58:53    OSPPSVC.EXE:2372    QUERY INFORMATION   C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\ SUCCESS Attributes: D
...
280 00:58:54    OSPPSVC.EXE:2372    QUERY INFORMATION   C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\   SUCCESS Attributes: D
281 00:58:54    OSPPSVC.EXE:2372    QUERY INFORMATION   C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\cache.dat  SUCCESS Attributes: A
282 00:58:54    OSPPSVC.EXE:2372    OPEN    C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\cache.dat  SUCCESS Options: Open  Access: All
283 00:58:54    OSPPSVC.EXE:2372    QUERY INFORMATION   C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\cache.dat  SUCCESS Length: 189560
...
291 00:58:54    OSPPSVC.EXE:2372    READ    C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\cache.dat  SUCCESS Offset: 131072 Length: 61440
292 00:58:54    OSPPSVC.EXE:2372    CLOSE   C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\Cache\cache.dat  SUCCESS
...
</pre>
<p>and in addition, the service opens the following files:</p>
<pre>
C:\Program Files\Fichiers communs\Microsoft Shared\OfficeSoftwareProtectionPlatform\osppobjs-spp-plugin-manifest-signed.xrm-ms
C:\Program Files\Fichiers communs\Microsoft Shared\OfficeSoftwareProtectionPlatform\OSPPOBJS.DLL
</pre>
<p>
We start to see what is happening. While in Win2k3 the service opens a data cache file in <code>C:\Documents and Settings\All Users\Microsoft\OfficeSoftwareProtectionPlatform\</code>, on ReactOS it attempts to open instead <code>C:\WINDOWS\System32\%ALLUSERSPROFILE%\Microsoft\OfficeSoftwareProtectionPlatform\</code>, which is not the directory it was intended to open, yet it succeeds (because a previous step of the installer actually created such a directory). What is happening there is that the service cannot expand the <code>%ALLUSERSPROFILE%</code> environment variable (which should be equal to <code>C:\Documents and Settings\All Users\</code>), and instead falls back to a malformed path, i.e. is trying to open <code>%ALLUSERSPROFILE%\Microsoft\OfficeSoftwareProtectionPlatform\</code> from within its current directory <code>C:\WINDOWS\System32\</code>. As it turns out this problem is due to the fact that currently the environment block, which should contain the <code>%ALLUSERSPROFILE%</code> environment variable, is not suitable as it is for the service. This problem is the subject of the JIRA report <a href="https://jira.reactos.org/browse/CORE-12414">CORE-12414</a> that I intend to fix. Thanks to an apitest service I am currently developing, I can better see what is happening: in ReactOS the environment block of a started service is:
</p>
<pre>
(rostests\apitests\advapi32\service.c:51) ComSpec=C:\WINDOWS\system32\cmd.exe
(rostests\apitests\advapi32\service.c:51) NUMBER_OF_PROCESSORS=1
(rostests\apitests\advapi32\service.c:51) OS=Windows_NT
(rostests\apitests\advapi32\service.c:51) Path=C:\WINDOWS\bin;C:\WINDOWS\System32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\UnxUtils\bin;C:\UnxUtils\usr\local\wbin
(rostests\apitests\advapi32\service.c:51) PATHEXT=.COM;.EXE;.BAT;.CMD
(rostests\apitests\advapi32\service.c:51) PROCESSOR_ARCHITECTURE=x86
(rostests\apitests\advapi32\service.c:51) PROCESSOR_IDENTIFIER=x86 Family 6 Model 14 Stepping 5, G
(rostests\apitests\advapi32\service.c:51) PROCESSOR_LEVEL=6
(rostests\apitests\advapi32\service.c:51) PROCESSOR_REVISION=0e05
(rostests\apitests\advapi32\service.c:51) SystemDrive=C:
(rostests\apitests\advapi32\service.c:51) SystemRoot=C:\WINDOWS
(rostests\apitests\advapi32\service.c:51) TEMP=C:\WINDOWS\TEMP
(rostests\apitests\advapi32\service.c:51) TMP=C:\WINDOWS\TEMP
(rostests\apitests\advapi32\service.c:51) windir=C:\WINDOWS
</pre>
<p>while in Win2k3, it is:</p>
<pre>
(rostests\apitests\advapi32\service.c:51) ALLUSERSPROFILE=C:\Documents and Settings\All Users
(rostests\apitests\advapi32\service.c:51) ClusterLog=C:\WINDOWS\Cluster\cluster.log
(rostests\apitests\advapi32\service.c:51) CommonProgramFiles=C:\Program Files\Fichiers communs
(rostests\apitests\advapi32\service.c:51) COMPUTERNAME=PC-HERMES-2K3
(rostests\apitests\advapi32\service.c:51) ComSpec=C:\WINDOWS\system32\cmd.exe
(rostests\apitests\advapi32\service.c:51) FP_NO_HOST_CHECK=NO
(rostests\apitests\advapi32\service.c:51) NUMBER_OF_PROCESSORS=1
(rostests\apitests\advapi32\service.c:51) OS=Windows_NT
(rostests\apitests\advapi32\service.c:51) Path=C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem
(rostests\apitests\advapi32\service.c:51) PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH
(rostests\apitests\advapi32\service.c:51) PROCESSOR_ARCHITECTURE=x86
(rostests\apitests\advapi32\service.c:51) PROCESSOR_IDENTIFIER=x86 Family 6 Model 30 Stepping 5, GenuineIntel
(rostests\apitests\advapi32\service.c:51) PROCESSOR_LEVEL=6
(rostests\apitests\advapi32\service.c:51) PROCESSOR_REVISION=1e05
(rostests\apitests\advapi32\service.c:51) ProgramFiles=C:\Program Files
(rostests\apitests\advapi32\service.c:51) SystemDrive=C:
(rostests\apitests\advapi32\service.c:51) SystemRoot=C:\WINDOWS
(rostests\apitests\advapi32\service.c:51) TEMP=C:\WINDOWS\TEMP
(rostests\apitests\advapi32\service.c:51) TMP=C:\WINDOWS\TEMP
(rostests\apitests\advapi32\service.c:51) USERPROFILE=C:\Documents and Settings\Default User
(rostests\apitests\advapi32\service.c:51) windir=C:\WINDOWS
</pre>
<p>
And we clearly see all the missing important environment variables: <code>ALLUSERSPROFILE</code>, <code>USERPROFILE</code>, <code>CommonProgramFiles</code> and <code>ProgramFiles</code>.
</p>


<p>In my next report I will further investigate the Word 2010 installation after having resolved the problem of environment variables for the OSPPSVC service.</p>
<p>Stay tuned!</p>

