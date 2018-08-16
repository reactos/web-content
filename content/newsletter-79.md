---
title:       "Newsletter 79"
author:      "Z98"
type:        news
date:        2010-12-25
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-79
aliases:     [ node/220 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Coverity Redux</li>
# <li>FASTFAT Buffers</li>
# <li>New Developer</li>
# </ul>

---
<p>The ReactOS team would like to wish everyone a merry Christmas and a happy New Year.</p>
<h2>Coverity Redux</h2>
<p>The ReactOS team recently ran another Coverity scan on the source code.  While a few new issues were discovered thanks to enhancements to Coverity's analysis program, the vast majority of issues fell into two categories; false positives due to the way the Portable Structured Exception Handling (PSEH) library is implemented and used, and warnings from third party code not developed by this project.  Setting ignore on the PSEH usage should hopefully reduce such false positives in future scans but problems discovered in third party code is another matter entirely.  Some projects we import from also submit their code for Coverity scans so in such instances it is their responsibility to fix any issues uncovered, though the ReactOS developers will submit bug reports or patches if we see no action on their part.  Other projects however are not part of the scanning program and the team is contemplating relaying relevant result data to them to help with their development.</p>
<p>A few new issues were discovered by the latest scan and a steady stream of commits referencing Coverity scan IDs has flowed since then and the interested can review the SVN logs to see what has been fixed.  Many of the issues dealt with incorrectly sizing something when doing memory operations, so data got overwritten or were written to the wrong location.  One of the more interesting issues uncovered by Coverity is detailed below.</p>
<h2>FASTFAT Buffers</h2>
<p>The old FAT driver cropped up as a troublespot in the Coverity scans and stood out because the scan found both an overflow and overrun in a buffer the driver was using.  And overflow basically means writes to the buffer are going beyond the size allocated to that buffer, whereas overruns happen when indexing of the buffer is done in a way that overshoots the size of the buffer.  Both have the same effect of writing outside the buffer.  Pierre Schweitzer investigated and discovered that for some reason there exists three separate buffers in the FAT driver that were being used for the same purpose.  The consequence of this is that in certain operations, it would become unclear as to which buffer was actually being used.  Whether the contents of the buffers were ever synchronized was also an open question and so the success of operations that relied on these buffers becomes hard to determine.</p>
<p>While trying to fix the overflow and overruns, Pierre also ran across usages of the number 13 but could not determine how that number was arrived at.  This is generally considered bad practice as one should either use sizeofs on whatever type or data structure is the source of a number or define them as a constant somewhere so that changes to the number does not require manually hunting down all instances where it gets used.  It also makes it much easier to actually figure out what the number is for.  It is hoped that the new FAT driver will help alleviate the number of instances such problems are run into.</p>
<h2>New Developer</h2>
<p>Roel Messiant has joined the project and several of the Coverity fixes are his.  Known as Mephisto on the IRC channel, Roel has proven considerably more helpful than his nick's namesake and we look forward to what else he will bring to the project.</p>
<p>&nbsp;</p>
