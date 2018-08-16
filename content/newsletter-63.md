---
title:       "Newsletter 63"
author:      "Z98"
type:        news
date:        2009-08-01
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /newsletter-63
aliases:     [ node/203 ]
news:        [ "newsletter" ]

# Summary:
# <ul>
# <li>Test Disruptions</li>
# <li>MSVC Fixes</li>
# <li>ARWINSS Redux</li>
# </ul>

---
<h2>Test Disruptions</h2>
<p>For several days the automated testing suite that runs every ReactOS revision got stuck in an infinite loop once it reached the msi_winetest.  Several people following the testing noticed this issue and suggested possible causes but Jeffrey Morlan eventually committed a patch that seems to resolve it.  The problem appeared to be in the LoadLibraryExW function, in a specific case where the LOAD_LIBRARY_AS_DATAFILE flag was set.  The function received as one of its inputs DllName, the name of the library it was being asked to load.  If there were spaces, the function would allocate a private copy that trimmed them.  Once the function was finished with its work it would then free this private copy.  However, the code committed by Dmitry Chapysev actually tried to free the private copy regardless of whether it was used or not.  When the string did not need to be trimmed, the attempt to free it caused a memory corruption that appears to be the cause of the infinite loop.  Jeffrey's commit corrects this and the test suite no longer encounters this issue.  Even though the test suite did seem to hang indefinitely, it did do its job by exposing this bug quickly.  Otherwise, the error might have gone unnoticed for a very long time before biting us in a more serious way.</p>
<h2>MSVC Fixes</h2>
<p>Stefan Ginsberg has been going through ReactOS module by module to deal with the numberous syntax issues that prevent MSVC from compiling ReactOS.  GCC is considerably more forgiving than MSVC when it comes to code syntax and as a result certain conventions in the ReactOS code while perfectly acceptable to GCC causes MSVC to choke.  One such case was the definition of function prototypes, wherein the placement and grouping of the return type and calling convention differed.  MSVC expected the calling convention and function name to be explicitly separated by parenthesis while GCC did not require this.  This particular occurance is sprinkled all over the code but is fortunately fairly easy to find and fix.</p>
<p>A much nastier issue cropped up due to GCC not warning about a function calling itself.  Granted there are uses for such recursive calls but in this instance the results were less than desirable as it resulted in an infinite recursive call.  The problem originated actually in the w32api headers used with mingw for Windows development.  In the headers, the function ExAllocatePoolWithQuotaTag was defined to be ExAllocatePoolWithQuota.  This caused a very awkward situation as ExAllocatePoolWithQuota consisted simply of a call to ExAllocatePoolWithQuotaTag since the former function serves to act as a wrapper for the latter.  Code that was compiled using those headers and tried to use the ExAllocatePoolWithQuotaTag function would likely end up in an infinite loop, eventually exhausting the stack and causing a blue screen.  MSVC noticed this issue and emitted a warning even at the lowest warning level while GCC did not seem to notice or care.</p>
<h2>ARWINSS Redux</h2>
<p>It seems there remains considerable confusion as to what ARWINSS is intended for due to the limited amount of statements made about it.  Many people interpreted it as a replacement for the Win32 subsystem, which it is not.  This was not made explicitly clear before and has led to some rather rampant speculation.  In light of this, Aleksey Bragin has stated that ARWINSS is intended to exist as a temporary measure, taking advantage of Wine's progress in running Windows applications to make ReactOS more functional. People who recall the time period surrounding the 0.3.1 release where ReactOS was incredibly unstable. The kernel rewrite taking place was slowly removing all the hacks that previously allowed the system to function and as things fell apart, developers working on other components were badly hampered until the hacks could be removed and development slowed considerably. To actually fix the Win32 subsystem would require a similar level of disruption because of major issues in critical components. Both Jim Tabor and Timo Kreuzer have struggled to keep regressions to a minimum as they rewrite the system, but it's a back and forth battle. Something needs to be there while the major refactoring and rewriting takes place and that is what ARWINSS can be used for. Whether it has a place in the long term remains to be seen, as its differences may allow experimentation not possible with the current Win32 subsystem.</p>
<p>Even with that in mind, not everyone agrees with the necessity of ARWINSS. Originally several developers thought Aleksey was trying to replace the Win32 subsystem in trunk and did not react well to that notion.&nbsp; Even with the clarifications there are concerns that ARWINSS might divert attention from the current rewrite.&nbsp; That said, ARWINSS is exposing some interesting issues within the operating system as a whole.&nbsp; It is certainly hoped that ARWINSS will provide a positive contribution to the project but only time will tell.</p>
