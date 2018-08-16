---
title:       "ReactOS printing for the first time!"
author:      "Colin Finck"
type:        blog
date:        2015-07-25
changed:     2016-02-05
draft:       false
promote:     false
sticky:      false
url:         /blogs/reactos-printing-first-time
aliases:     [ node/3446 ]

---

<p>As some of you may already know, my university gave me the unique opportunity to choose a ReactOS topic for my bachelor thesis. Three months ago, my decision fell on the Printing Stack, which was totally non-existing in ReactOS at that time. Since then, you can watch my daily progress in the <a href="http://code.reactos.org/changelog/~br=colins-printing-for-freedom/reactos">colins-printing-for-freedom</a> branch.</p>

<p>The Printing Stack as found in modern Windows&reg; versions is a beast of its own. Microsoft&reg; never wanted to sacrifice backwards compatibility with each new Windows version, so the widely used higher level GDI Printing APIs (like <tt>StartDoc</tt> or <tt>EndDoc</tt> found in <i>gdi32.dll</i>) are still mostly compatible down to the 16-bit Windows generation. This comes with no surprise as GDI has always been characteristic for Windows: Every application uses it to draw graphics on the screen and the same APIs enable you to send graphics to a printer.
One level below that you find the Spooler APIs in <i>winspool.drv</i>. They have experienced their last radical change with Windows 95 and Windows NT, which introduced a totally new set of Spooler APIs compared to the 16-bit Windows generation. The Spooler APIs provide an interface for viewing and managing printers and their print jobs. Adding new print jobs is also possible, but the concept here is way different to the GDI Printing APIs: While these provide a more abstract approach on printing - you call some functions for drawing graphics and text and the printer will spit out the result - the Spooler APIs require you to have a stream of data prepared in a specific datatype. One of these datatypes is the RAW datatype, which will directly pass your data stream to the printer without any further processing.
When you go even deeper into the Printing Stack, there have always been fundamental differences between the Windows 9x/ME series of operating systems and the Windows NT series. Details are still changing with every Windows version.</p>

<p>You can imagine that radical changes in the lower levels don't always go well with fixed higher level APIs, and this became visible during my work on the Printing Stack as well. My commit in <a href="https://svn.reactos.org/svn/reactos?view=revision&revision=68550">revision 68550</a> is a good example of this: When a function with fixed parameters offers no way of passing additional options, you have to find a dirty way around this.</p>

<p>My work since May focused on the publicly exposed Spooler APIs in <i>winspool.drv</i> as well as all components in lower levels. Explaining all these in detail now would be out of scope for a single blog post, but when you press the <i>Print</i> button in any application, the following set of components will be involved (at least!):

<ul>
  <li>At some point, the application will load <i>winspool.drv</i> and use its Spooler API functions to create a new print job and tell it what data to write.</li>
  <li><i>winspool.drv</i> is loaded for every application, but do you have a single printer for every application? You usually don't, so you need a central instance managing available printers for all applications and all users. This is what the Spooler Server <i>spoolsv.exe</i> is for. Every loaded <i>winspool.drv</i> will pass down its information to the single <i>spoolsv.exe</i> instance running on your computer.</li>
  <li>A single Spooler Server instance managing the print jobs of all users is a powerful process. In today's world where security is a very important aspect of operating systems, you want to prevent possible security holes by limiting the rights of a process. Therefore, <i>spoolsv.exe</i> is accompanied by another component, <i>spoolss.dll</i>. <i>spoolsv.exe</i> passes down the received information to <i>spoolss.dll</i>, but the <i>spoolss.dll</i> functions will be run in the security context of the user who submitted the print job. This way, an application using the Spooler APIs can't get higher privileges by submitting a job to the Spooler Server.</li>
  <li><i>spoolss.dll</i> is also called the Spooler Router, because it now does a very important job: It decides whether the desired printer is a local or network printer. You may guess it already, there exist different DLL files again for local and network printers and information is usually just passed down to them.</li>
  <li><i>localspl.dll</i> is the filename of the component managing all local printers and their print queues. Consequently, some of the received information is finally being processed there and not just passed down to another component.</li>
  <li>When data for a full page has arrived at <i>localspl.dll</i>, it can be sent to the printer. But don't believe there is a direct route to the printer now! <i>localspl.dll</i> will first pass down its data to the configured Print Processor, usually <i>winprint.dll</i>. The Print Processor handles options such as printing multiple copies or converting between datatypes. If the application has submitted RAW data though, no additional processing is done.</li>
  <li>Local printers can be connected to traditional LPT ports, modern USB ports or even exotic ports like COM or Infrared. Every port type needs to be handled a bit differently and that's what Port Monitors are for. While Windows has integrated the Port Monitor for traditional ports into <i>localspl.dll</i> as well, I have decided for a cleaner approach and put it into a separate DLL <i>localmon.dll</i>. The Port Monitor opens the specified port and finally passes the data to the printer.</li>
</ul> 

<p>If you take GDI Printing, other datatypes or exotic printers into account, the data will pass even more components. This is just the bare minimum if you want to provide a compatible implementation, so these are the components I've focused on during my thesis work.
The breakthrough happened two days ago. My implementation has finally progressed enough to process a print job of RAW data from the Spooler API all the way down to the Port Monitor.</p>

<p>A fully compatible implementation of the Printing Stack still needs work on the GDI side, support for other datatypes, some generic printer drivers, support for other ports such as USB as well as some work on the User Interface to provide easy access to all these features. But given the upcoming <a href="https://reactos.org/wiki/ReactOS_Hackfest_2015">Hackfest</a>, I hope to be able to introduce others into the Printing Stack as well and accelerate development on it.</p>

<p>Enough said, here is a video of ReactOS printing for the first time - using my ThinkPad X61 and a HP DeskJet 710C:</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/cNzePucTOLY" frameborder="0" allowfullscreen></iframe>

Discussion: https://reactos.org/forum/viewtopic.php?f=2&t=14354
