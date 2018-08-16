---
title:       "RAPPS Enchancements: GSoC 2017 Edition"
author:      "sanchaez"
type:        blog
date:        2017-06-24
draft:       false
promote:     false
sticky:      false
url:         /blogs/rapps-enchancements-gsoc-2017-edition-0
aliases:     [ node/45525 ]

---

<h1>Introduction</h1>
<p>My name is Alexander Shaposhnikov, i'm a GSOC student from Ukraine working on <a href="https://www.reactos.org/wiki/Google_Summer_of_Code_2017_Ideas#Applications_Manager_Rapps">ReactOS App Manager (RAPPS) project.</a> Last two weeks was extrodinary hard - university work took all the time. Fortunately it was dealt with and I'm working at full capacity. I don't like to write stories in the blog so I'll keep this blog short and informative. And with screenshots!</p>
<h1><img alt="RAPPS: overview" class="imgp_img" height="738" src="/sites/default/files/imagepicker/51653/2017-06-23_13_25_49-ReactOS_Applications_Manager.png" style="color: rgb(119, 119, 119); font-size: 14px;" width="1358">Changes</h1>
<p>During this 3 weeks I've made some changes to visual part and to the RAPPS DB. These include:</p>
<ul>
	<li>Removing "Install applications" part</li>
	<li>Adding installation status check</li>
	<li>Adding icons for apps in the list</li>
</ul>
<p><strong>1. Removing "Install applications" part</strong></p>
<p><img alt="Rapps: app list" class="imgp_img" src="/sites/default/files/imagepicker/51653/2017-06-23_13_26_44-ReactOS_Applications_Manager_0.png" style="width: 235px; height: 134px;"></p>
<p>The "Installed application" part showed all the apps installed on the machine. It is rather incomplete and is not planned in the design draft anyway so I've cut it from the view. It may return in another form though - to show only the apps available through RAPPS.</p>
<p><strong>2. Adding installation status check</strong></p>
<p><img alt="Image" class="imgp_img" src="/sites/default/files/imagepicker/51653/2017-06-23_13_26_05-ReactOS_Applications_Manager_0.png" style="width: 235px; height: 134px;"></p>
<p>The installation status check is mandatory to proceed. It uses unused until now&nbsp;RegName field in the DB. Its checks both 64 and 32 bit registries for a RegName entry as every app writes their own string and it's usually not the apps name. It is shown in the app info.</p>
<p><strong>3. Adding icons for apps in the list</strong></p>
<p><img alt="Image" class="imgp_img" src="/sites/default/files/imagepicker/51653/2017-06-23_13_24_13-ReactOS_Applications_Manager_0.png" style="width: 235px; height: 134px;"></p>
<p>If you felt original icon to be boring than you will totally like this. It's the most pretty change here.<br>
	For now it loads the icon from the database folder, from<em> \icons</em> directory by the Name of the app. If the icon is not present, program loads the default one.</p>
<h1>Summary</h1>
<p>The project is a very good inspiration for me I've learned very much already. Recently I've configured .sln using the automated script in the repo. What a relief that was! Anyways, I plan to add language, freeness (license), installed version info and also start working on showing screenshots in the info! Stay tuned for my and other GSoCers updates!</p>

