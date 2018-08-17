---
title:       "Website upgraded"
author:      "Colin Finck"
date:        2018-07-04
aliases:     [ node/69563 ]

---

<p>Today, the ReactOS Website has been migrated to a <a href="https://github.com/reactos/web/tree/master/www/www.reactos.org/roslogin">new Login system</a> and all components have been upgraded to their latest versions.<br>
In the course of that, the user database has also been moved and cleaned from accounts that have never been used.</p>

<p>Such large migrations hardly go without issues, so if you notice anything wrong, please report a bug in our <a href="https://jira.reactos.org">JIRA bugtracker</a>.<br>
You are also advised to change your password in the <a href="https://reactos.org/roslogin/?p=selfservice">Self-Service</a>, even if it's just to the same one. Every password change from now on will use a state-of-the-art hashing algorithm to protect your account from credential theft.</p>

<p>Unfortunately, there have been several newer accounts, for which the password could not be migrated.<br>
If you encounter problems logging in, please reset your account password <a href="https://reactos.org/roslogin/?p=forgot">here</a> to regain access.</p>
