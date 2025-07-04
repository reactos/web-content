---
title:       "Carl Bialorucki hired to improve ReactOS test suite"
author:      "Carl Bialorucki"
date:        2025-07-04
tags:        [ "newsletter", "tests", "test-suite" ]
---
Hi, my name is Carl J. Bialorucki.
I started making a name for myself in the ReactOS community by contributing several shell improvements.
In May of 2024 I was added to the core development team and in March of 2025 I led the release of ReactOS 0.4.15 after the previous release manager was unable to continue working on the project.

I’m pleased to announce that I was hired for a full-time contract position with ReactOS Deutschland e.V. in May of 2025.<!--more-->
The contract is scheduled to run until August of 2025.

## Current State of Our Test Infrastructure
Our test infrastructure is currently unreliable.
Our tests often fail, crash, hang or even bugcheck&mdash;the technical term for a ‘Blue Screen of Death’ or ‘BSoD’&mdash;on Windows.
Tests that fail on Windows clearly don’t measure how accurately we replicate Windows’ behavior.

ReactOS also includes several tests from the Wine project.
Unfortunately, these tests are from older versions of Wine and several didn’t pass on Windows either.
Wine has since improved their tests, but we failed to keep up with their changes.

## What I’m Working on and What’s Changing
I’m currently working to eliminate test failures, crashes, hangs, and bugchecks from our test suite when running on Windows.
I’m working on both our kernel-mode (kmtests) and user-mode (apitests) tests; on versions of Windows newer than Server 2003; and on x86 and x86_64.

In addition, I’m syncing our Wine tests to Wine 10.0.
While this isn’t the absolute latest version of Wine; it is the latest major release and having a common target will make future syncs of these tests easier.

Due to significant differences between Windows Server 2003 x86 and x64; we’ve made the decision to no longer use Windows Server 2003 x64 in our automated testing.
As a result, all future automated 64-bit testing will now be done on Windows Vista and newer versions.
Since Wine no longer prioritizes compatibility with Server 2003, we also decided not to automatically run Wine tests against Windows Server 2003 and instead run these on Windows Vista and newer versions only.

## Looking Ahead
Long term, we want a solid automated testing platform that identifies regressions and issues with new pull requests before manual human reviews; especially as we transition towards supporting drivers and programs for versions of Windows newer than Server 2003.

I would like to express my deepest gratitude towards our community, our contributors, our donors, and ReactOS Deutschland e.V. for affording me this opportunity.
Without these important financial contributions, this work would take much longer.
I invite every eligible and able programmer to join us in improving ReactOS.

You can follow my progress on GitHub [here](https://github.com/reactos/reactos/pulls/cbialorucki). 

Sincerely,

Carl J. Bialorucki
