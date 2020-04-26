---
title:       "March 2020 meeting minutes"
author:      "Harteex"
date:        2020-04-14
tags:        [ "meeting-minutes" ]
banner:      "img/project-news/meeting-minutes.png"
---

2020-03-26  
19:00 UTC  
Mattermost meeting channel

## Proceedings
Meeting started at 19:05 by Colin Finck.

* Point 1: Achievements and Future Outlook
* Point 2: GSoC 2020 Status
* Point 3: Drop one theme from the default package
* Point 4: Hire a developer for dev-web interface and/or devops for our infrastructure
* Point 5: GitHub PR situation

## Point 1: Achievements and Future Outlook

**Stanislav Motylkov** is currently preparing a cumulative update for his SMBIOS parser code in sysdm.cpl. He and Victor Perevertkin wanted to organize another micro-hackfest in Moscow to look into the USB OHCI problem in ReactOS Xbox port, but couldn't meet due to COVID-19.

**Colin Finck** finally launched the new website! There is likely some necessary bugfixing within the next few weeks to deal with.

**Victor Perevertkin** mostly did web stuff recently, but he said it now looks like he's ready to go on with "real things". He also tried to fix Pierre's regression about USB sticks not working.

**Mark Jansen** has been working on some smaller tasks like improving ATL and looking at tickets from Jira/GitHub. He has also been going back and forth between working on mmc_new, appcompat, some shell related projects and of course the new website. As for the future, he thinks it will be mostly the same, with some small side-projects now and then.

**Robert Naumann** started porting the Flat Remix Icon theme to ReactOS compatible ico files. He is currently searching among about 2000 icons for usable replacements for our current tango icons.

When it comes to the upcoming **ReactOS 0.4.13** release, there are no blockers from Joachim Henze's side. Currently the release is only blocked by the changelog and press release.

Regarding **RosBE 2.2**, Victor asked if we had decided yet on selfhosting and Windows XP/2003 support. Support for that is crucial to Joachim. Mark meant to look at it, but it had slipped his mind and he will create an issue to not forget about it again.
Solutions for the other two blockers mentioned in https://jira.reactos.org/browse/CORE-16512 must also be found, especially the exception handling issue. Victor said he'd look into the exception handling. He was not sure he had enough expertise for that particular issue, but would consult Timo Kreuzer if he needed any help.

## Point 2: GSoC 2020 Status
The status of ReactOS GSoC 2020 participation was discussed. It was also noted that the GSoC timeline has shifted, in response to current events. There's now extra time for reviewing student proposals and an extended community bonding period.

## Point 3: Drop one theme from the default package
Victor Perevertkin submitted this agenda point because he believed that the recently added themes look unfinished in many aspects and also that 4 themes is too much for the default package. He also asked about an option to make custom themes installable from Rapps, since that has been discussed before.

Mark Jansen thought that until we have a solution that allows people to preview the theme, we should stick to the current way. Rapps does not allow previewing, and it makes building and hosting a bit harder.

A discussion on how many themes ReactOS should have bundled followed. Some expressed opinions for two options (classic + 1), but in the end most thought there is no reason to limit them at the moment.

The Modern theme was still suggested for deletion since it has broken graphics and looks unfinished. It was decided to check with the author if he is interested in fixing existing issues, otherwise it would be dropped.

It was also discussed whether to accept new themes or not, and how a process to select themes would work. The decision from the discussion was that everyone submitting a new theme PR must present it on the General Discussion forum first. Depending on the community's and our reactions, we will include it or not.

## Point 4: Hire a developer for dev-web interface and/or devops for our infrastructure
Victor asked if it was possible to hire a developer, considering paperwork and such. Colin responded that it is possible, we can pay any IT freelancer who is giving us a proper invoice. 

The suggestion from Victor is to hire someone to work on the development web, and let ReactOS own developers do what they like to do - OS development. He further said that we must modernize testman if we want to test different architectures and configs of ReactOS.

Victor also asked if this is something we need, and was backed by Colin saying that testman does need an overhaul. Mark also noted that the more accessible and easy to find stuff is, the more it will be used. Testman is not easy to use, so it's not used enough.

The plan is that Victor starts out by making a task and posting it on the website, and we'll see what happens next.

## Point 5: GitHub PR situation
Andreas Bjerkeholt also had a point to the agenda, concerning the PR situation at GitHub, where there are currently 147 open. He was worried that contributors might get put off if reviews and feedback takes too long time.

Colin suggested to try out a video conference on going through PRs. He added that it's not perfect, but it may get a bit closer to the Hackfest feeling. At Hackfest going through PRs was a lot faster with multiple people looking at the same PR.

A date for the first video conference will be chosen later.


Meeting was closed at 21:26 by Colin Finck  
Meeting Minutes prepared by Andreas Bjerkeholt
