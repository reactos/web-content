---
title:       "Progress update: fixing the ReactOS test suite"
author:      "Carl Bialorucki"
date:        2025-11-04
tags:        [ "newsletter", "tests", "test-suite" ]
banner:      "img/blogs/cbialorucki_tests/tests-2-banner.png"
# Note: blog post release planned for 2025-11-04
---
For many years, the ReactOS test suite was neglected.
It was a random collection of our own tests and old Wine tests that were only checked against Windows Server 2003 and sometimes a random newer version of Windows up to the discretion of the contributor.
The Wine tests we imported were heavily modified and the changes made weren’t always well documented.

I’m here to clean up this mess.

I have been deeply involved with the ReactOS project since 2023 and in May of 2024 I became an official project developer.
In May of 2025, I was contracted to clean up the test suite and in August the contract was extended through the month of December.
Let’s take a look at what I’ve been doing for ReactOS with this contract.

## Our tests
Since I began this contract, I’ve merged fixes for 55 of our own test modules and wrote 5 new test modules.
These fixes were tested against the latest versions of Windows Server 2003, Windows Vista, Windows 7, Windows 8.1, and Windows 10 build 1607; for both x86 and x64; and for tests compiled using GCC and MSVC.
As you can imagine, verifying fixes took a lot of time for testing.

Some of our test suite includes kernel mode tests, we call them “kmtests”.
Several of these kmtests were invalid for Vista and newer Windows versions. Running these tests would cause bugchecks (BSoDs) on newer Windows versions.
With these merged fixes, we can now run our full test suite on Windows Vista without experiencing a bugcheck. 

## Wine tests
After working on our own tests, I turned my attention towards where most of our test failures were coming from: the tests that we share or ‘sync’ with the Wine project.
As a project, we’ve been working to improve the quality of our Wine syncs.
We decided to focus on syncing as many Wine projects as possible to Wine 10.0 and to cleanly document our changes to the Wine code using C preprocessor guards.
Wine 10.0 is not the latest version of Wine, but using a fixed version across the board can help simplify future Wine syncs.

One difficulty with using code from the Wine project is that Wine’s headers are not compatible with Microsoft’s headers used in the public Windows SDK.
For years, our headers were trying to accommodate both, and because of that our headers weren’t compatible with either Microsoft’s headers or Wine’s headers.
This necessitated several definition hacks for Wine code, our own code, and code we sync with other projects that expect the official Microsoft headers.
As part of my syncing efforts for the Wine tests, I created a new directory for Wine headers and separated our headers from the Wine headers.
Moving forward, we will use up-to-date Wine headers for Wine code and our Microsoft-compatible headers for everything else.
To reinforce this separation of headers, I also rewrote several of our headers that originated from Wine.
This header separation helps reduce the number of changes to Wine and other code we would otherwise need to apply.
In addition, this header separation opens up the possibility of distributing an MIT-licensed SDK separate from ReactOS in the future.

Despite the new header initiative, many Wine tests still need several patches to pass and not crash on Windows Server 2003, Windows Vista, Windows 7, Windows 8.1 and even early versions of Windows 10.
Wine also doesn’t write their tests with the MSVC compiler in mind, so I sometimes have to write more patches for MSVC builds.
After the Wine tests pass on Windows without failures, I then see if the test crashes on ReactOS.
Additional test failures on ReactOS are a good thing, they show where we can fix bugs; but when a test crashes, we can’t use it to tell if ReactOS is getting better or getting worse.
After ensuring synced tests don’t crash on ReactOS, I open a pull request that is then reviewed by other core developers and eventually it gets merged.

## What’s next?
ReactOS Deutschland e.V. pays for my contract and to host our infrastructure, which includes our website, our wiki, our bug tracker, and our test bots.
To view the results of test bot runs, we developed a tool called Testman that is integrated into our website.
Testman was also neglected and now has several issues.
For example, the tool was developed back when we used SVN for version control and the search interface was designed for that.
Now that we migrated to Git, searching is broken on Testman.
Test results shown in Testman are also sometimes incorrect, especially when a test spawns child processes.
I plan to fix these issues with Testman during my contract.

Eventually I would like to see our test bots play a larger role in our CI/CD pipeline.
Currently we use GitHub Actions to ensure each pull request can be compiled using all the targets we currently support.
However, project developers have to manually initiate test bot runs for pull requests and paste the results into the description for each pull request.
If this process was automated, test results would be easier to trace, contributors would have a clearer picture of the impact of their pull request, and reviews would be faster to complete.
No plans are formalized at this time to further utilize our test bots in our CI/CD pipeline.

If you’d like to see more ReactOS progress, [donate at reactos.org/donate](https://reactos.org/donate) or [contribute at github.com/reactos/reactos](https://github.com/reactos/reactos).
Every dollar and every pull request helps us move towards a free and open-source future with a Windows-compatible operating system for everyone!

Gratefully,

Carl Bialorucki
