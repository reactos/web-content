---
title:       "Newsletter 59"
author:      "Z98"
date:        2009-06-04
aliases:     [ "newsletter-59", "node/199" ]
---

<h2>ReactOS Foundation
</h2>
<p>
The ReactOS Foundation is the entity that handles the legal affairs of the project and owns the trademarks and logos associated with the ReactOS Project.  The Foundation itself has been established for a few years now and is based in Moscow, but two recent developments have helped increase its legitimacy in a broader perspective.  The first was the approval of ReactOS as a registered trademark owned by the Foundation in Russia.  This means that the Foundation has a far stronger legal position when it needs to shut down unauthorized use of the word ReactOS, which as many people will recall is no small thing considering past events.
</p>
<p>
The other development is the obtainment of a digital codesigning certificate from VeriSign, which will allow the Foundation to digitally sign releases that it makes, authoritatively identifying them as being from the ReactOS project.  This should remove any ambiguities regarding official releases of binaries that the project makes and should prevent anyone from faking an official release.&nbsp; Not only that, but as many people are aware, 64bit versions of Windows require that all drivers to be signed if you want to use them.&nbsp; For open source projects that produce Windows drivers, this can be problematic as suddenly their releases are rendered useless on Windows.&nbsp; The Foundation is considering setting up a system where projects can apply to have their code signed with the Foundation&#39;s certificate, thus working around that particular issue.&nbsp; Of course we&#39;d be vetting the code for any issues and any code submitted must conform to the rules they would have followed had they applied for a certificate themselves, but this will at least save them some money along the way. 
</p>
<h2>
UniATA the Third
</h2>
<p>
Aleksey Bragin has fixed the issues with VirtualBox choking when dealing with UniATA.  It was failing by claiming that there was no boot drive and blue screening immediately after.  The theory was originally that the CD drive wasn&#39;t being found on the controller.  The debug logs from VMware, which was working, was then compared with logs from VBox, which unfortunately was turned out to be rather problematic due to VBox&#39;s mangling of serial output.  After considerable wasted time parsing through it, it was discovered that the CD-ROM was actually being detected so the failure was somewhere else.  Fortunately the error was immediately apparent as the first command sent to the CD-ROM kept failing and timing out.  The timeout and retries were adding noticeable delay to the boot process before it actually reported a failure.
</p>
<p>
The problem was ultimately traced to AtapiSendCommand, where Aleksey cleaned up some interrupt enabling and disabling calls that seemed to be causing VBox grief.  While the driver now could comunicate with the CD-ROM, it still ended up dying.  This final problem was in the DMA code of UniATA, which Aleksey was not familiar with so for the time being it is simply disabled.  In the future, we&#39;ll of course want to actually fix this as not having DMA imposes a performance hit.  In the mean time, the major blockers with UniATA are now gone and it has been switched over as the default ATA driver for ReactOS.
</p>
<h2>
Video Drivers
</h2>
<p>
After his work with the NIC drivers, Olaf Siejka has been testing various video card drivers to see how they interact with ReactOS.  Previously, he had been limited to somewhat older hardware because of the SATA problem but the UniATA fix should now open up more possibilities.  There are still installation issues with the drivers, so Olaf was slipstreaming them into ReactOS so that once ROS installs, everything is already there.  So far he&#39;s tested Matrox&#39;s G100 and G400 as well as the ATI Rage II+ and S3 Trio 64V.  Old hardware to be sure, but it&#39;s a start.
</p>
<p>
The good news however is that it seems the XP drivers seem to be more reliable than the Windows 2000 drivers, meaning the current kernel side that interfaces with the drivers behaves more like XP.  The drivers also provide 2D hardware acceleration.  The bad news is that currently there is still no 3D hardware acceleration.  That is going to take a good deal more work on the ReactOS side before we get those benefits.
</p>
<h2>
RosBE
</h2>
<p>
An issue cropped up with the Windows RosBE on 64bit systems, in that the 64bit version of Windows had directories like Program Files (x86).  The scripts that make up the BE unfortunately did not deal with those and Daniel Reimer had to modify them accordingly.  The new BE includes those fixes and people running 64bit Windows should now be good to go.
</p>

