---
title:       "ReactOS 0.3.9 Released"
author:      "Ged"
date:        2009-04-26
aliases:     [ "reactos-039-released", "node/293" ]
---

<h2>ReactOS 0.3.9 Released</h2>
<p>
Our development team is pleased to announce the 9th increment of the 0.3 series of ReactOS, an open source Windows® compatible operating system.
</p>
<p>
As we draw ever closer to the 0.4 series, more and more work is being put into bugfixing existing code in an effort to get more applications and drivers working. This release is testament to that and is our most compatible release to date.
However, the development team have still been working on expanding the features alongside bugfixing existing features, and quite a few additions have found their way into this release.
Two key areas which stand out are the much improved network stack and the emergence of sound support in the kernel via the new kernel streaming services.
</p>
<p>
Along with the rest of the 0.3 series, this release is still considered alpha quality software so it may not run all your apps or run on your hardware. 
</p>
<h3>Changes summary</h3>A detailed consolidation of all changes can be found in the <a href="../wiki/index.php/ChangeLog-0.3.9">changelog</a>.
A sum up of some of the more important changes is as follows: 
<ul>
	<li>Reduced minimum memory requirement to 32Mb. In theory ReactOS can now be installed with 24Mb and run with only 20Mb</li>
	<li>A new, faster Hyperspace Mapping Interface has been implemented in the kernel resulting in a speed improvement of over 300%</li>
	<li>Security check improvements to the Object Manager in the kernel improves performance by 500%. Noticeable during large file/registry operations</li>
	<li>Various NDIS and AFD problems have been solved which increase compatibility with 3rd party NIC drivers and hardening of the network stack</li>
	<li>Preliminary support for sound via the new Kernel Streaming service. It's now possible to use the ac97 driver via our new Port Class library to play sound bytes using winamp</li>
	<li>A great deal of work has been put into the command prompt to make it much more compatible. It's now able to run very complex scripts, including our own Build Environment</li>
	<li>Many bugfixes to the kernel mode portion of the GDI resulting in much improved drawing engine across all bit depths</li>
	<li>Synchronization of most of the Wine usermode DLLs</li>
</ul>

