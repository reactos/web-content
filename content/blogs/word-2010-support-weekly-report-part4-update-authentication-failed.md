---
title:       "Word 2010 support – Weekly report - Part 4: Update + Authentication failed!"
author:      "hbelusca"
date:        2017-01-04
aliases:     [ node/29411 ]

---

<p>Hi everyone, let me first wish you a happy new year 2017!</p>

<p>
During the second half of last month (December) I did not have much time to work on ReactOS, hence the fact I could not write more reports for you to read. I was however able to test some stuff I started to work on during last November. I have started to familiarize and play a bit with the user-profile APIs inside userenv.dll . I then was able to add a <a href="https://jira.reactos.org/browse/CORE-12541">temporary hack (see CORE-12541)</a> in the Services Control Manager (SCM, in services.exe) to create (if needed) and always load the user profiles for the system service profiles "NT AUTHORITY\Local Service" and "NT AUTHORITY\Network Service", the latter being needed for the Word 2010 installation. The hack was committed in revisions <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73486">73486</a> and <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=73487">73487</a>. Some people have however spotted <a href="https://jira.reactos.org/browse/CORE-12613">minor</a> <a href="https://jira.reactos.org/browse/CORE-12614">regressions</a> due to the hack, with the former (<a href="https://jira.reactos.org/browse/CORE-12613">CORE-12613</a>) due to the fact that, since the hack consists in indistinctly loading all the service profiles in memory (instead of when only needed).
</p>

<p>
After the hack being in place, I retested the Word 2010 installation. Now the MSI installation step <code>"CAInitSPPTokenStore.x86"</code> (related to the initialization of the Office Software Protection service) passes with success; however the next installation steps, <code>"CAInstallSppPlugin.x86"</code>, <code>"CAInstallLicenses"</code> and <code>"CAPopulateSPPCache"</code> just fail completely with the following error:
</p>
<pre>fixme:(dll\win32\rpcrt4\rpc_binding.c:1865) unsupported AuthnSvc 10</pre>
<p>(with AuthnSvc == 10 == RPC_C_AUTHN_WINNT, meaning "NTLM"). They however succeed when testing the installation in Wine.</p>
<p>
I was able to trace this problem back to the fact that ReactOS does not implement one of the security authentication providers that is normally found in MS Windows, namely the <a href="https://en.wikipedia.org/wiki/NT_LAN_Manager">NTLM</a> authentication provider. This security provider is built in the secur32.dll (in %SystemRoot%\System32). I have created a JIRA report, <a href="https://jira.reactos.org/browse/CORE-12601">CORE-12601</a>, where you can find more details about how the missing provider problem appears when trying to install Word 2010. It is interesting to note that on Wine, the NTLM support is actually already <b>somewhat</b> present in secur32.dll, by wrapping around Samba's "ntlm_auth" helper utility (thus it needs a 3rd-party program to be already installed). Therefore this is not satisfactory for ReactOS, and a proper support has to be implemented for it.
</p>
<p>
It appears that such a support was actually being worked on, in a separate branch <a href="https://svn.reactos.org/svn/reactos/branches/sspi-bringup/?pathrev=73485">"sspi-bringup"</a> by Samuel Serapión since some time around 2011-2012. The support currently bails out to a modified secur32.dll, the NTLM authentication package in a second dll ntlmsspi.dll, and one registry modification. I talked to him about this, and he kindly provided me with a binary build of these dls from his branch with updated code, that I was able to test in ReactOS (by replacing the dlls). With this, the above-mentioned MSI installation steps (the <code>"CA...SPP..."</code> ones) now seem to work OK (they return success); however I now get new problems: during the MSI installation step <code>"CAInstallLicenses"</code> I get a bunch of the following errors:
</p>
<pre>err:(dll\win32\rpcrt4\rpc_message.c:1845) we got fault packet with status 0xc004f012</pre>
<p>
(not present in Wine), which may indicate a possible memory corruption. Then the next MSI installation step <code>"CAPopulateSPPCache"</code> is run and subsequently fails (making the full installation failing).
</p>
<p>
These last problems need more investigation. I hope obtaining new interesting results during the next weeks! Stay tuned!
</p>
