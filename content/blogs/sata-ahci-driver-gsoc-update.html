---
title:       "SATA AHCI Driver GSoC - Update"
author:      "amaneureka"
date:        2016-07-25
aliases:     [ node/14445 ]

---

<!-- [ContentTable] -->
<strong><a name="#">Links</a></strong><br>
<ul>
	<li><a href="#tldr">Short Brief</a></li>
	<li><a href="#testing">Driver Testing</a></li>
	<li><a href="#noBlog">Why no blog?</a></li>
	<li><a href="#knownIssues">Known Issues</a></li>
</ul>
<br>
<br>
<!-- [!ContentTable] -->

<!-- [TLDR] -->
<strong><a name="tldr">Short Brief</a></strong><br>
Supported Features:<br>
<ul>
	<li>Device Adapter Detection</li>
	<li>Non-Fatal Error Handling</li>
	<li>Adapter Srb PNP Request</li>
	<li><a href="#SCSIOP_INQUIRY">SCSIOP_INQUIRY : Device Inquiry</a></li>
	<li>SCSIOP_REPORT_LUNS : Report LUN</li>
	<li>SCSIOP_READ_CAPACITY : Device Geometry</li>
	<li>SCSIOP_TEST_UNIT_READY</li>
	<li><a href="#SCSIOP_READ">SCSIOP_READ : Device Read Request</a></li>
</ul>
UnSupported Features:<br>
<ul>
	<li>Fatal Error Handling</li>
	<li>SCSIOP_MODE_SENSE</li>
	<li><a href="#SCSIOP_READ">SCSIOP_WRITE</a></li>
	<li>NCQ : Native Command Queuing</li>
	<li>Cache and Priority Requests</li>
</ul>
<br>
<!-- [!TLDR] -->

<!-- [Testing] -->
<strong><a name="testing">Driver Testing</a></strong><br>
Platform: Virtual Machine (Vmware)<br>
Operating System: Windows Server 2003 x86 Free Build<br><br>
<strong>Device Management Window</strong><br>
<img src="/sites/default/files/imagepicker/49146/devmgmt_vm.png" alt="devmgmt vm" class="imgp_img" width="640" height="452" /><br>
Detected Devices: &quot;2 3 SCSI Disk Driver&quot;<br>
2, 3 are actually faked VendorId and Product ID, Please refer to <a href="https://github.com/amaneureka/reactos/blob/master/reactos/drivers/storage/storahci/storahci.c#L1675">code</a> for more detail.<br><br><br>
<strong>Vmware Settings Tab</strong><br>
<img src="/sites/default/files/imagepicker/49146/vm_settings.png" alt="vm settings"  class="imgp_img" width="690" height="620" /><br><br>
<strong>Disk Management</strong><br>
<img src="/sites/default/files/imagepicker/49146/diskmgmt_0.png" alt="Image"  class="imgp_img" width="640" height="554" /><br>
Though windows is not able to detect NTFS formatted partition (Disk 2, Partition 1) maybe because It was expecting a write support first. So, I tried to dump partition and compared it with raw virtual hard disk file(VHD) dump, So Reading Feature is working perfectly.<br><br>
<strong>Active Disk Editor - VHD mounted image (Host PC, Windows 10)</strong><br>
<img src="/sites/default/files/imagepicker/49146/active_disc_editor_host.png" alt="Image"  class="imgp_img" width="1360" height="764" /><br><br>
<strong>Active Disk Editor - Win2k3 (Vmware)</strong><br>
<img src="/sites/default/files/imagepicker/49146/active_disc_editor_vm.png" alt="Image"  class="imgp_img" width="1367" height="768" /><br>
<br>
<!-- [!Testing] -->

<!-- [SCSIOP_READ] -->
<strong><a name="SCSIOP_READ">SCSIOP_READ</a></strong><br>
Routine: DeviceRequestReadWrite<br>
Description: This Routine Handles Read &amp; Write SRB_FUNCTION_EXECUTE_SCSI Requests, but currently supports Read Request only.<br>
Unsupported Features:<br>
<ul>
	<li>SCSIOP_WRITE</li>
	<li>NCQ</li>
	<li>Non Lba48BitMode</li>
</ul>
Assumptions:<br>
<ul>
	<li>SectorCount &lt; 0x100</li>
</ul>
Why not write feature supported?<br>
I am unsure about CommandReg value (considering all cases) and that is why I am not able to program TaskFile for write request, though Routine is perfectly implemented and a correct value of CommandReg will make it work.<br>
on a side note, I tried to set CommandReg = IDE_COMMAND_WRITE_DMA, But It crashed with Fatal Error (TFES : TaskFileErrorStatus != 0)<br>
<br>
<!-- [!SCSIOP_READ] -->

<!-- [SCSIOP_INQUIRY] -->
<strong><a name="SCSIOP_INQUIRY">SCSIOP_INQUIRY</a></strong><br>
Routine: DeviceInquiryRequest<br>
Description: This Routine Handles EVPD and VPD Requests.<br>
Unsupported Features:<br>
<ul>
	<li>VPD_SERIAL_NUMBER (storport.h)</li>
	<li>VPD_DEVICE_IDENTIFIERS (storport.h)</li>
	<li>VPD_MEDIA_SERIAL_NUMBER (storport.h)</li>
	<li>VPD_NETWORK_MANAGEMENT_ADDRESSES (storport.h)</li>
	<li>VPD_EXTENDED_INQUIRY_DATA (storport.h)</li>
	<li>VPD_MODE_PAGE_POLICY (storport.h)</li>
	<li>VPD_SCSI_PORTS (storport.h)</li>
</ul>
I don't think we need to support all VPD functions, though right now code assumes only one supported functions but driver will have support for VPD_SERIAL_NUMBER, VPD_MEDIA_SERIAL_NUMBER and VPD_EXTENDED_INQUIRY_DATA in future.<br>
<br>
<!-- [!SCSIOP_INQUIRY] -->

<!-- [knownIssues] -->
<strong><a name="knownIssues">Known Issues</a></strong><br>
Well, There is only one issue which I was able to find while testing the driver. It is the file system detection, Though It maybe because windows was expecting a write support too, and hence failed to detect filesystem; But I am not really sure on this point so I have better decided to put this into known issue section.
<br><br>
<!-- [!knownIssues] -->

<!-- [noBlog] -->
<strong><a name="noBlog">Why no blog?</a></strong><br>
Well It is known that I didn't made any blog entry for past 3 weeks, Below I have listed the reason<br>
<ul>
	<li><strong>Week 6: </strong>I was selected for Indian Programming Camp organised by <a href="https://www.codechef.com/">CodeChef</a>, They <a href="https://www.facebook.com/aman.eureka/posts/889186054558802?pnref=story">shortlisted 22 candidates</a> (sport programmers) to join the camp and learn some advance tricks to tackle programming contest's problems. I don't want to miss this oppurtunity so I talked to my mentor and he supported my decision of halting project for few days and join the camp.<br>
	Though I wasn't really inactive on project, I completed Dpc handling routine while traveling and fixed many bugs whenever I got time in camp.</li>
	<li><strong>Week 7: </strong>I was back to home, but interrupt bug actually pissed me, and I was giving 100% of my time in debugging stuffs.</li>
	<li><strong>Week 8: </strong>Well, All bugs were fixed by the end of week 7; But I was little tensed about project timeline so I worked on unsupported feature and decided to create blog entry once I am done with Read Request feature</li>
</ul>
There is one more reason for not giving any priority to blogs, I hate writing blogs :P<br>
<br>
<!-- [!noBlog] -->
