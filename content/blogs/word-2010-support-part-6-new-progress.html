---
title:       "Word 2010 support Part 6: New progress"
author:      "hbelusca"
date:        2017-02-27
aliases:     [ node/33475 ]

---

<p>
Hello everyone, I'm summarizing here my latest progress towards making Word 2010 running in ReactOS.
</p>

<p>
After having paused a little my ReactOS development during the first two weeks of February (due to personal matters), I started reviewing Samuel Serapión's NTLM code (in the <a href="https://svn.reactos.org/svn/reactos/branches/sspi-bringup/?view=log">"sspi-bringup" branch</a>) and first focused on trying to convert his NTLM tests into something that can be included into our apitest framework. This is still work-in-progress because his original tests are interactive, and I need to find the good way of turning them into automated tests and finding a way to store the test results (for comparison purposes), as the tests are modeled around a client/server architecture.
</p>
<p>
In addition I was warned that somebody in our team wanted to make a presentation of ReactOS to a group of people, including a presentation of Word 2010 running in ReactOS, at the very end of February. Since the NTLM implementation of Samuel could not be obviously ready for such an extremely short time lapse, I tried to think about the possibility of importing the Wine's NTLM code layer into our codebase, as an interim solution until Samuel's proper implementation would be ready.
As I indicated in a <a href="https://www.reactos.org/blogs/word-2010-support-weekly-report-part4-update-authentication-failed">previous blog report</a>, Wine implements NTLM as a layer around Samba's "ntlm_auth" helper utility, in other words, this NTLM layer is dependent on a 3rd-party program that should be already installed. As such this is not satisfactory for ReactOS for the long-term; however I nonetheless explored the possibility of temporarily adding this NTLM layer into ReactOS, as also advocated by other people.
</p>
<p>
After two days of work I had the Wine's NTLM code layer integrated into ReactOS (with a modification concerning the way how the 3rd-party "ntlm_auth" helper utility is started), and the layer was added in <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73868">revision r73868</a>. The "only" problem now was to find a Windows build of Samba that could be downloaded & installed inside ReactOS. Fortunately I've found one on the Internet, at http://smithii.com/samba . This is a build of Samba 3.0.23c , which is quite old now, but is actually enough to make the Word/Office 2010 installation working. One of the minor modifications that I added to the Wine NTLM layer was to lower the required version of Samba (which was originally of 3.0.25) down to 3.0.23 to make this build version usable. The other solution would have been to create a Windows build of a more recent version of Samba, but this would have needed me to install Cygwin & bring modifications to Samba's code. My aim being not to play with Samba but to improve our support for Word in ReactOS, I chose the simplest solution to find an existing build on the Internet. I invite you to read the commit log of <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73868">revision r73868</a> for the details of installation of this Windows build of Samba in ReactOS; alternatively you can find a pre-packaged installer of this Samba build in our RAPPS repository (under the section "Internet").
</p>
<p>
Everything was good and nice so far, the Word/Office 2010 installation successfully passing through the steps that required this NTLM authentication support (read my <a href="https://www.reactos.org/blogs/word-2010-support-weekly-report-part4-update-authentication-failed">previous</a> blog reports for the details), however the installation continued to fail at the very last step, with the following error:
</p>
<pre>
err:(dll\win32\msi\action.c:528):msi:ITERATE_Actions Execution halted, action L"InstallFinalize" returned 1603
</pre>
<p>
So, what was happening? I enabled extended debug tracing in msi.dll, and noticed the following (debug snippets):
</p>
<pre>
err:(H:\trunk\reactos_clean\dll\win32\msi\action.c:489):msi:ITERATE_Actions Starting action: L"InstallFinalize"
trace:(H:\trunk\reactos_clean\dll\win32\msi\action.c:7818):msi:ACTION_PerformAction Performing action (L"InstallFinalize")
[...]
trace:(H:\trunk\reactos_clean\dll\win32\msi\action.c:7818):msi:ACTION_PerformAction Performing action (L"[\"\" \"C:\\Program Files\\Fichiers communs\\Microsoft Shared\\OfficeSoftwareProtectionPlatform\\OSPPWMI.MOF\"<=>S-1-5-21-830519046-1312593930-835119747-500<=>{90140000-003D-0000-0000-0000000FF1CE}]InstallOSppMof.x86")
[...]
trace:(H:\trunk\reactos_clean\dll\win32\msi\custom.c:1212):msi:ACTION_CustomAction Handling custom action L"InstallOSppMof.x86" (e01 L"WixCA" L"CAQuietExec")
[...]
trace:(H:\trunk\reactos_clean\dll\win32\msi\package.c:2117):msi:msi_get_property returning L"\"\" \"C:\\Program Files\\Fichiers communs\\Microsoft Shared\\OfficeSoftwareProtectionPlatform\\OSPPWMI.MOF\"" for property L"InstallOSppMof.x86"
[...]
trace:(H:\trunk\reactos_clean\dll\win32\msi\custom.c:669):msi:HANDLE_CustomType1 Calling function L"CAQuietExec" from L"C:\\DOCUME~1\\ADMINI~1\\LOCALS~1\\Temp\\msi7A7B.tmp"
trace:(H:\trunk\reactos_clean\dll\win32\msi\custom.c:412):msi:wait_thread_handle waiting for L"InstallOSppMof.x86"
trace:(H:\trunk\reactos_clean\dll\win32\msi\custom.c:616):msi:DllThread custom action (380) started
[...]
trace:(H:\trunk\reactos_clean\dll\win32\msi\custom.c:620):msi:DllThread custom action (380) returned 1603
[...]
err:(H:\trunk\reactos_clean\dll\win32\msi\action.c:521):msi:ITERATE_Actions Action: L"InstallFinalize" finished with error code 1603
err:(H:\trunk\reactos_clean\dll\win32\msi\action.c:532):msi:ITERATE_Actions Execution halted, action L"InstallFinalize" returned 1603

< From there on, the failed installation rolls back... >
</pre>
<p>
So what is happening there? It happens that the very last step of the Office/Word 2010 installation consists in <a href="https://answers.microsoft.com/en-us/msoffice/forum/msoffice_install-mso_other/cannot-install-office-2010-error-occurred-while/505f95b1-0c89-4794-a19c-e99053394358">installing</a> new <a href="https://msdn.microsoft.com/en-us/library/aa394582(v=vs.85).aspx">WMI ("Windows Management Instrumentation")</a> classes for helping <a href="https://support.symantec.com/en_US/article.DOC3476.html">managing different aspects of the Office installation</a>. This is done by compiling the <a href="https://msdn.microsoft.com/en-us/library/aa823192(v=vs.85).aspx">"Managed Object Format" (MOF)</a> file OSPPWMI.MOF (see also <a href="https://technet.microsoft.com/en-us/library/cc180827.aspx">this article</a>) using the MOF compiler <a href="https://msdn.microsoft.com/en-us/library/aa392389(v=vs.85).aspx">mofcomp.exe</a>, which exists in native Windows installations (starting Windows 2000), in the <code>System32\wbem</code> directory. As it turned out, this application did not exist in the ReactOS code base, while it exists in Wine's (stubbed out). This explains why the Word installation succeeded in Wine, while it failed in ReactOS!! (see also JIRA report <a href="https://jira.reactos.org/browse/CORE-12811">CORE-12811</a>).
</p>
<p>
With this knowledge I imported the mofcomp stub from Wine into our source tree (in <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73867">revision 73867</a>). The Office installation actually does not care about the actual result of the MOF compilation; what it wants is just to be able to find and start the compiler, therefore the stub is sufficient for our purposes.
</p>
<p>The end result: Word (and more generally, Office) 2010 can be installed & started inside ReactOS!</p>
<div class="imgp_title">Word 2010 on ReactOS r73854</div><img src="/sites/default/files/imagepicker/23908/Word2010_on_ReactOS_r73854.png" alt="Word 2010 on ReactOS r73854"  class="imgp_img" width="1024" height="768" />
<p></p>
<div class="imgp_desc">Excel and Word 2010 running on ReactOS r73868.</div>
<img src="/sites/default/files/imagepicker/23908/Excel_Word_2010_on_ReactOS_r73868.png" alt="Excel and Word 2010 running on ReactOS r73868"  class="imgp_img" width="1024" height="768" />
<p>
<b><u>WARNING #1:</u></b>
The apparent "beauty" of these pictures actually hide another problem that exists only in ReactOS, namely that we currently still suffer from strange graphical bugs. Indeed if you happen to move the graphics shown in the Excel window (or, any figure drawn inside Word), the moved object is drawn upside-down (inversion of y-coordinates), and black rectangular areas appear at the places where the object should actually appear.
</p>
<p>
<b><u>WARNING #2:</u></b>
I was warned by some people that they still could not install completely Office (or just Word) 2010. After some discussion I realized they all used the Office 2010 Pro Plus version, while in all my tests I used the Office 2010 Pro version. The difference between the two versions is additional collaborative tools in the Pro Plus version, and this translates into additional steps in the installer. Therefore I temporarily recommend to people to use the Office Pro version, until all problems are fixed. Note that it is however possible to continue the Office Pro Plus installation, after the appearance of the two popup "errors" saying that the file "sqdedev.dll" is missing. The installation can finish without any further problems.
</p>
