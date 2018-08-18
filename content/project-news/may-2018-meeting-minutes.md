---
title:       "May 2018 meeting minutes"
author:      "Harteex"
date:        2018-06-06
aliases:     [ "node/68579" ]
---

<p>2018-05-31<br />
	19:00 UTC<br />
	#meeting</p>
<h2>Proceedings</h2>
<p>Meeting started at 19:03 by Colin Finck</p>
<ul>
    <li>Point 1: Status Reports</li>
    <li>Point 2: Improving our handling of PRs and JIRA reports</li>
    <li>Point 3: Google Summer of Code</li>
    <li>Point 4: Changes affecting base addresses</li>
    <li>Point 5: Miscellaneous</li>
</ul>

<h2>Point 1: Status Reports</h2>

<p><b>Amine Khaldi</b> is doing the usual, Wine syncs and anything he can help with.</p>

<p><b>Colin Finck</b> finished his university studies after almost 7 years! On the ReactOS side of things he converted the "web" repo to Git. The only SVN repo left is "press-media", but it's too fat for a simple conversion, so a conversion ruleset with commit filters will have to be written first.</p>
<p>Colin also worked on his RosLogin Single-Sign-On system along with a MediaWiki upgrade and modules for our Drupal and Wiki. Still left is a phpBB upgrade and module as well as the importer script before this can be deployed. When this is live, Colin expects less login weirdness on the web services, such as no more 30 minute delay of account changes propagating to JIRA. After that, Drupal could finally start to be dropped for the Git-managed Jekyll static page CMS.</p>

<p><b>David Quintana</b> has been working on a little project called <a href="https://github.com/gigaherz/TransDiffer/releases">TransDiffer</a>, to help fix errors in translation files, such as missing strings in some language files. He also made a PR for others to review fixes to the language files.</p>

<p><b>Mark Jansen</b> did some work on FLS callbacks and added basic verifier hooks in LDR. He also started writing a driver for the E1000 line of network cards (Intel 82545EM to be precise, which is the default VMWare network adapter).</p>

<p><b>Pierre Schweitzer</b> worked on fixing CC and FS to make it possible to build ReactOS on ReactOS. He also fixed fsck running on our FAT partitions.</p>

<p><b>Stanislav Motylkov</b> has fixed multiple bugs in the Paint applications, including some crashes when zooming out.</p>

<p>The other meeting participants (<b>Aleksandar Andrejevic</b>, <b>Alexander Rechitskiy</b>, <b>Daniel Reimer</b>, <b>Hermès Bélusca-Maïto</b>, <b>Oleksandr Shaposhnikov</b>, <b>Thomas Faber</b>, <b>Timo Kreuzer</b>) had nothing to report or joined late.</p>
<p><b>Victor Perevertkin</b> will report his status under the GSoC agenda point.</p>

<h2>Point 2: Improving our handling of PRs and JIRA reports</h2>

<p>The number of open PRs on GitHub has steadily risen, and if nothing is done, they will just continue to increase. Some are waiting for requested changes, some are just sitting there, and for some, it's hard to make a decision on what to do with them. Other problems also exist in the handling of the PRs.</p>

<p>Colin used <a href="https://github.com/reactos/reactos/pull/276">PR #276</a> as an example of a PR without a solution, and started the discussion from there. After a long discussion of a set of rules, the rules were narrowed down to the following:</p>

<ul>
    <li>If a PR has at least one approval, it can be merged after 1 week of waiting for additional comments. If you consider the change trivial enough or it has at least 3 approvals, it may also be merged right away.</li>
    <li>If a PR stays in "changes requested" for 2 weeks, and that change has not been done in the meantime, it shall be closed.</li>
    <li>If you require a review from a particular person, assign the PR to that person. Don't just rely on the "review requested" feature of GitHub.</li>
    <li>Don't feel obliged to comment everything you see, just for the sake of commenting. Be it on JIRA, GitHub, or even on IRC.</li>
    <li>Refrain from
      <ul>
        <li>Asking the contributor to do unrelated work</li>
        <li>Editing the code without asking first</li>
        <li>Closing without providing a reason</li>
        <li>Merging with the intention to rewrite that code soon after</li>
      </ul>
    </li>
</ul>

<p>David Quintana volunteered to make a PR for the new rules, to allow other developers not present during the meeting, to comment and suggest changes. The PR was later opened as <a href="https://github.com/reactos/reactos/pull/585">PR #585</a>.</p>

<h2>Point 3: Google Summer of Code</h2>

<p>Victor Perevertkin is our only GSoC student this year, and he was welcomed to the monthly meetings. He didn't have anything in particular to discuss during the meeting, but mentioned he was setting up a debug environment for developing bootloader code at the moment.</p>

<p>Be sure to check out <a href="https://reactos.org/blog/43215">Victor's blog</a> for more information on his progress.</p>

<p>The mentors to Victors (Hermès Bélusca-Maïto, Oleksandr Shaposhnikov, Pierre Schweitzer and Thomas Faber) were asked to assign a primary mentor on the next GSoC meeting.</p>

<p>On the topic of GSoC, some concerns were expressed about the <a href="https://www.reactos.org/wiki/Google_Summer_of_Code_2018#Make_a_small_contribution">"Make a small contribution"</a> rule for ideas that do not touch core ReactOS code. The rule will be considered to be dropped for such ideas next year.</p>

<h2>Point 4: Changes affecting base addresses</h2>

<p>Robert Naumann requested a brainstorming session for the meeting to get a conclusion on how to deal with changes that affect base addresses. He couldn't merge several PRs translating .mc files, because that would blow up the kernel and require a regeneration of all base addresses.</p>

<p>Mark Jansen wrote a script a while ago to regenerate base addresses. Changing the base addresses could trigger regressions, so Mark advised against doing it automatically, but will commit his python script, so Robert (and others) can use it manually.</p>

<h2>Point 5: Miscellaneous</h2>

<p>The last agenda point covers USB status in general and getting the demo laptop running completely and adding it into our testbot.</p>

<p>As for the USB status, this is unchanged since the last meeting, and can be read in the previous Meeting Minutes.</p>

<p>When it comes to the demo laptop, Colin said that if anyone would benefit from  a remote Dell D531, they should reply to <a href="https://reactos.org/pipermail/ros-dev/2018-May/018811.html">his mail</a>. Kaasimir, a remote computer used mainly for GPU debugging and testing which Colin set up previously, has been unused so far, so Colin will only spend time on the above if it really benefits someone in particular.</p>

<p>Meeting was closed at 21:08 by Colin Finck</p>
<p>Meeting minutes prepared by Andreas Bjerkeholt</p>
