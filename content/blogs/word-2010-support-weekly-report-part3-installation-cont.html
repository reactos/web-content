---
title:       "Word 2010 support – Weekly report – Part 3: Installation progress"
author:      "hbelusca"
date:        2016-12-06
aliases:     [ node/27385 ]

---

<p>
Hello everybody. Today I am going to summarize my progress on Word 2010 installation so far, concerning the main two problems I did encounter: setting a correct environment block for services, and understanding why the <code>SLInitialize</code> function fails, leading to the failure of the Word 2010 installation. The third problem, namely correctly stopping services, will be addressed in a subsequent report. Reading the two previous weekly reports: <a href="http://reactos.org/blogs/word-2010-support-weekly-report-part1-installation">"Part 1: Installation"</a>, and <a href="http://reactos.org/blogs/word-2010-support-weekly-report-part2-installation-cont">"Part 2: Installation (cont.)"</a>, is strongly advised ;-)
</p>
<!--break-->

<h2>Services environment block</h2>

<p>
In my <a href="http://reactos.org/blogs/word-2010-support-weekly-report-part1-installation">first report</a>, section <b>"OSPPSVC service investigation, 1/2"</b>, I showed that our services were not started with a correct environment block, and in particular some of them, for example the OSPPSVC service used by Word 2010 installation, needed particular environment variables: <code>ALLUSERSPROFILE</code>, <code>USERPROFILE</code>, <code>CommonProgramFiles</code> and <code>ProgramFiles</code>. These environment variables are not present by default in the system, for example, the environment block for programs loaded under the SYSTEM account, such as winlogon.exe or services.exe, only have a restricted number of variables, basically the following ones:
</p>
<pre>
ComSpec, OS, Path, PATHEXT; + some related to system architecture;
SystemDrive, SystemRoot, TEMP, TMP, windir
</pre>
<p>
while regular applications, as well as services, also have the ones related to ProgramFiles and the per-user ones. The latter are initialized by the ReactOS component "User Environment DLL" (userenv.dll), responsible, amongst other things, for loading and unloading the so-called "user profiles", which consist in the "current user" registry settings, for each different users.
</p>
<p>
The JIRA report <a href="https://jira.reactos.org/browse/CORE-12414">CORE-12414</a> tracks the commits related to fixing the environment block problem for services. In commit <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73431">r73431</a> I added an APITest: <code>advapi32:ServiceEnv</code>, which looks for the existence of the user-related environment variables Inside services' environment blocks. The test of course succeeds on a clean Windows (2k3, Vista+) installation, while it currently fails in ReactOS as seen in this <a href="http://www.reactos.org/testman/detail.php?id=30859865&prev=0">test result</a> (revision 73432). The correct fix, committed by Eric Kohl in <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73433">revision 73433</a> on my behalf, consists in using the <a href="https://msdn.microsoft.com/en-us/library/windows/desktop/bb762270(v=vs.85).aspx">CreateEnvironmentBlock</a> API to initialize a suitable environment block for the services. You can see <a href="http://www.reactos.org/testman/diff.php?id1=30859865&id2=30861801&type=1&strip=0">here</a> the result of the <code>advapi32:ServiceEnv</code> test (left–r73432: before the fix; right–r73433: after the fix).
</p>

<h2>The reason of the <code>SLInitialize</code> function failure</h2>

<p>
In my <a href="http://reactos.org/blogs/word-2010-support-weekly-report-part2-installation-cont">second report</a>, section <b>"OSPPSVC service investigation 2/2, and MSI installation (cont.)"</b>, I showed that another main cause of the Word 2010 installation failure was due to the <code>SLInitialize</code> function. This is a function that is exported by a DLL named OSPPCEXT.DLL (a helper for the Office Software Protection service), and is called by the Word 2010 installation. As I explained it in the previous report, this function is partially crypted, and is decrypted at run-time.
</p>
<p>
The approach that I have chosen here is to trace all the API calls done by <code>SLInitialize</code>. Following a suggestion by Sylvain Petreolle I decided first to take a trace of the Word 2010 installation under Wine. The reason for this choice was partly driven by the fact that ReactOS uses most of the its user-mode dlls from Wine, in particular msi.dll and some others. The aim is then to compare the calls made during <code>SLInitialize</code> executions, with the ones made by this function under ReactOS. Taking the full list of API calls under Wine is done by running (in a terminal): <code>WINEDEBUG=+relay wine setup.exe</code>, possibly redirecting the output to a file. The command sets a shell environment variable <code>WINEDEBUG</code> to <code>+relay</code>, then starts the setup executable proper under Wine. The environment variable asks Wine to trace the API calls with a special built-in mechanism. This generates at the end a 5GB log file, of which only approximately 450kB of trace is useful and corresponds to the calls made during <code>SLInitialize</code> execution. Performing the trace under ReactOS is actually a bit easier: I place a breakpoint before the call to <code>SLInitialize</code> using WinDbg, as well as other breakpoints inside some critical called functions (using the Wine trace as a guidance).
</p>
<p>
For the curious reader, here are some excerpts, first under Wine, then under ReactOS. I display two interesting <code>RegCreateKeyExW</code> calls, the second one is the one that makes the installation to actually fail under ReactOS. The first parameter of this function is either an existing registry key handle or one of the special values, amongst which:
</p>
<pre>
#define HKEY_LOCAL_MACHINE ((HKEY)0x80000002)
#define HKEY_USERS         ((HKEY)0x80000003)
</pre>
<p>Call trace in Wine:</p>
<pre>
...
0035:Call advapi32.RegCreateKeyExW(80000002,6bed4a30 L"SOFTWARE\\Microsoft\\OfficeSoftwareProtectionPlatform\\ReferralData\\",00000000,00000000,00000000,000f003f,051bd440,051bd450,051bd480) ret=6bf07141
0035:Ret  advapi32.RegCreateKeyExW() retval=00000000 ret=6bf07141
...
0035:Call advapi32.RegCreateKeyExW(80000003,6bed48e8 L"S-1-5-20\\SOFTWARE\\Microsoft\\OfficeSoftwareProtectionPlatform\\Policies\\PayloadOverride\\",00000000,00000000,00000000,000f003f,051bdc74,051bdc84,051bdcb4) ret=6bf07141
0035:Ret  advapi32.RegCreateKeyExW() retval=00000000 ret=6bf07141
...
</pre>
<p>The two calls succeed, because <code>retval=0: ERROR_SUCCESS</code>.</p>
<p>
Now let's see the call trace in ReactOS, by stepping through with WinDbg: I am stepping inside <code>RegCreateKeyExW</code> and I display first the value of the subkey being created, then the value of a <code>NTSTATUS Status</code> variable from which the return value of <code>RegCreateKeyExW</code> will be derived.
</p>
<pre>
...
Breakpoint 6 hit
advapi32!RegCreateKeyExW:
001b:7c665a10 8bff            mov     edi,edi
kd> ?? lpSubKey
wchar_t * 0x6bed4a30
 "SOFTWARE\Microsoft\OfficeSoftwareProtectionPlatform\ReferralData\"
kd> p
...
kd> ?? Status
long 0n0 // <--- This is 0x00000000: STATUS_SUCCESS : The call succeeds.
kd> g
...
Breakpoint 6 hit
advapi32!RegCreateKeyExW:
001b:7c665a10 8bff            mov     edi,edi
kd> ?? lpSubKey
wchar_t * 0x6bed48e8
 "S-1-5-20\SOFTWARE\Microsoft\OfficeSoftwareProtectionPlatform\Policies\PayloadOverride\"
kd> p
...
kd> ?? Status
long 0n-1073741811 // <--- This is 0xC000000D: STATUS_INVALID_PARAMETER : The call fails, and the installation fails at this point.
kd> g
Breakpoint 2 hit
msi!ITERATE_Actions+0x175:
001b:781d1ab5 c745f800000000  mov     dword ptr [ebp-8],0
</pre>
<p>
Hence, while the call: <code>RegCreateKeyExW(HKEY_USERS, L"S-1-5-20\\SOFTWARE\\Microsoft\\OfficeSoftwareProtectionPlatform\\Policies\\PayloadOverride\\", ...)</code> succeeds under Wine, it plainly fails under ReactOS. Why?
</p>
<p>
To elucidate this problem, let us remind that <code>RegCreateKeyExW(HKEY_USERS, ...)</code> opens the registry key "HKEY_USERS" that contains the registry hives for each logged user on the system. On Windows (see first screen-capture), there is usually the default user registry settings inside the .DEFAULT hive, then the settings of the special accounts (see <a href="https://support.microsoft.com/en-us/kb/243330">MS KB243330</a>): S-1-5-18 for "Local System" (associated with SYSTEM rights), S-1-5-19 for "NT AUTHORITY\Local Service", and S-1-5-20 for "NT AUTHORITY\Network Service". Then comes the regular users' settings. On ReactOS we do not have the S-1-5-19 and S-1-5-20 accounts loaded yet, because they are unused.
</p>
<div class="imgp_title">Contents of HKEY_USERS under Windows 2003</div><img src="/sites/default/files/imagepicker/23908/win2k3_hkeyusers.png" alt="Contents of HKEY_USERS under Windows 2003"  class="imgp_img" width="660" height="344" /><div class="imgp_desc"></div>
<p></p>
<div class="imgp_title">Some Windows 2003 services with their default user account assignments</div><img src="/sites/default/files/imagepicker/23908/win2k3_services_1.png" alt="Some Windows 2003 services with their default user account assignments"  class="imgp_img" width="1315" height="748" /><div class="imgp_desc">Translation: &quot;Service local&quot; == &quot;Local Service&quot;; &quot;Service réseau&quot; == &quot;Network Service&quot;; &quot;Système local&quot; == &quot;LocalSystem&quot;. In ReactOS only the latter account is currently used.</div>
<p></p>
<p>
Why does this matter for the Word 2010 installation problem? As seen from the call traces above, the installation code happens to hardcode the registry key to open/create, and in particular hardcodes that it wants to create a subkey inside HKEY_USERS\S-1-5-20 , in other words <b>expects</b> the existence of the S-1-5-20 ("Network Service") account to be loaded. On Windows this expectation is correct because, first, the Office protection service OSPPSVC is loaded under this account, as well as other native Windows services, <b>while on ReactOS, this is not the case</b>: all of our services are loaded under the "Local System" account. No one loaded under "Network Service" means, no S-1-5-20 key loaded under HKEY_USERS, and therefore the installation is going to fail (as well as all other code trying to open/create subkeys under HKEY_USERS\S-1-5-20).
</p>
<p>
So, the "fix" would be to have some of our services to load under the "Network Service", and the job is done, you would say? Sadly the code needed for services to be started under a different user account than the default "Local System" is not completely implemented yet (as of revision 73438), so more work has to be done to be able to do that properly. Eric Kohl, one of the ReactOS developers, is currently working on this topic. In the meantime, one plausible hack I see would be to unconditionally load the "Network Service" account, to be able to have its registry key available.
</p>

<h2>Conclusion/criticism: Why does it work on Wine?!</h2>

<p>
But <i>Why does it (already) work on Wine?!</i> As it turns out, this is a side-effect of their own hacks. The code of their registry implementation (in the Wine server) allows anybody to create direct subkeys under HKEY_USERS (this is forbidden on a real NT implementation, or in ReactOS, since HKEY_USERS is a virtual registry key, under which real registry keys are loaded), subkeys that are only <b>volatile</b> (are not stored anywhere in a file). As a consequence, when the Word 2010 installation attempts to create/open a subkey under HKEY_USERS\S-1-5-20, even when S-1-5-20 does not exist (and it does not in Wine, since they do not have the special accounts implemented), this key is created on the fly, allowing for the installer to continue its normal route and ultimately succeed. However, as soon as the Word 2010 installer quits (and the Wine server exits), these registry keys just plainly vanish. This fact was confirmed by Sylvain Petreolle. As it may seem acceptable for Wine, this hack is not acceptable <b>at all</b> for ReactOS; we need instead a proper implementation.
</p>
<p>I hope coming with a nice fix in the coming next week!</p>

