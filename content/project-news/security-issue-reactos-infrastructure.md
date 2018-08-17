---
title:       "Security issue on the ReactOS infrastructure"
author:      "Heis Spiter"
date:        2015-01-21
aliases:     [ node/928 ]
news:        [ "news" ]

---

Dear all,

On the 20th of January, we discovered a vulnerability affecting our infrastructure. This vulnerability has been immediately fixed after its discovery. Unfortunately, it was a vulnerability present for years on the infrastructure.

This vulnerability was affecting our main users database. This means that our complete user database may have leaked, including user name, password (hashed) and email address.

We do not have any evidence that the database actually leaked. But we do not have any evidence that it did not leak either. As a matter of fact, we highly recommend you to consider that your data leaked and that your password hash is compromised. And thus, we recommend you to change your password.

Keep in mind that when you change your password, it takes up to 6h to propagate to Jira/Fisheye.

We are terribly sorry and apologize for what (may have) happened. We took measures to make sure it does not happen again. And further measures will be taken in the following weeks in order to harden the overall security of our complete infrastructure.

In case of doubts or questions, do not hesitate to query me or to email me, I will be glad to answer.

With my best regards,
Pierre Schweitzer
