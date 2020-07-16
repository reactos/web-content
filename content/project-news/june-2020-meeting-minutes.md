---
title:       "June 2020 meeting minutes"
author:      "Harteex"
date:        2020-07-16
tags:        [ "meeting-minutes" ]
banner:      "img/project-news/meeting-minutes.png"
---

2020-06-25  
19:00 UTC  
Mattermost meeting channel

## Proceedings
Meeting started at 19:01 by Colin Finck.
* Point 1: Achievements and Future Outlook
* Point 2: GSoC 2020 Status
* Point 3: Channel moderation
* Point 4: 0.4.14 release status
* Point 5: Unifying our contribution guidelines and handling Pull Requests

## Point 1: Achievements and Future Outlook

**Amine Khaldi** worked on the built-in PCH CMake, the flex/bison PR and some other minor tasks.

**Can Taşan** continued to test Microsoft Office 2003 on ReactOS and caught two regressions.
Meanwhile, he opened a Turkish ReactOS Twitter account to promote ReactOS.

**Colin Finck** released RosBE 2.2.1 and he's now checking out libc++ for ReactOS with Dominik.
He's also keeping our infrastructure alive and mentoring a GSoC student.

**Mark Jansen** has been doing some improvements / fixes in the shell, and fixed some headers where structs were wrong.
He also worked with Hervé on the kernel shim engine.
It's not completed yet, but the first part is available in a PR.

**Stanislav Motylkov** joined in late, but still posted his status report.
He has been helping Victor with PnP manager testing and he has been helping genedisean with the PC-98 port when possible.
He has also been testing the Xbox port from time to time, and he has been spreading the word about ReactOS in some places where we can hopefully attract new developers.

**Victor Perevertkin** worked on build systems and transitioning to GitHub Actions CI.
At the moment he's mostly busy with kernel work: making the PnP Storage Stack work.
He decided to do this through implementing PnP support in scsiport.sys so it can wrap a legacy uniata driver, and attach it properly to the PnP storage stack.
For this to work properly, IO/PnP kernel changes are required, which is what he has been busy with the past two weeks.

## Point 2: GSoC 2020 Status
The mentors reported on how their students were doing.

## Point 3: Channel moderation
Daniel Reimer talked about problems which makes moderation harder than it should be.
Victor Perevertkin suggested the topic about hiring a web developer once again, but noted that there's currently no one willing to manage this.
Colin said he would outline his plan in a JIRA issue in the next few days, which may make it easier to find a skilled person to work on that.

## Point 4: 0.4.14 release status
Joachim was not available to report about the release itself, so Bișoc George was asked about the status on the press release.

He reported that it's almost ready.
Foxlet provided all the press media kit screenshots with his design.
What's left is to bring the press document to Zachary for English grammar corrections and such.

## Point 5: Unifying our contribution guidelines and handling Pull Requests
For the last agenda point, Victor had already created a document outlining his thoughts.
He gave a quick recap in the meeting channel about the two basic goals he wanted to achieve:
* Reduce the decision time: reject PR or not, and reduce overall review time of course
* Do not pollute commit log with nitpicks which are not important at our development phase

Colin agreed that we simply lack manpower to handle every trivial Pull Request, and Mark wrote that having clear contribution guidelines would help in shooting down those PRs.

We already have CONTRIBUTING.md and PULL_REQUEST_MANAGEMENT.md (the latter which was decided during a previous meeting).
On the question which guidelines in the tree the new document should replace, Victor responded that it probably should be merged with CONTRIBUTING.md.

Some of the suggestions in the document was discussed.
One of the points suggested in the document was a limit on the number of open PRs, but most disagreed with this change.

Discussed next was code style.
Colin wrote that code is always some developer's baby, and you don't want to disturb their coding style, or they will stop working on it.
Simple PRs to fix someone else's coding style are exactly like that.
Timo added that we shouldn't accept "fix coding style" PRs from outside.
However we should accept code checker warnings.
For Coverity, we should only accept fixes that actually fixes something, false positives should be marked as such.
Coverity makes this easy because it allows to disregard issues online.
With other code checkers, we need to find a policy.

It was also discussed if the requirement of supplying real names for translation and art contributions should be dropped.
This was generally opposed, so the requirement will stay.

Colin suggested Victor to create a PR to the contributing and pull request management documents.


Meeting was closed at 21:32 by Colin Finck  
Meeting Minutes prepared by Andreas Bjerkeholt
