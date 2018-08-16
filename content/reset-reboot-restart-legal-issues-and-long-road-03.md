---
title:       "Reset, Reboot, Restart,	legal issues and the long road to 0.3"
author:      "sedwards"
type:        news
date:        2006-01-27
changed:     2013-02-23
draft:       false
promote:     true
sticky:      false
url:         /reset-reboot-restart-legal-issues-and-long-road-03
aliases:     [ node/256 ]
news:        [ "news" ]

---

Hello,<br/>
There has been a lot of talk about possible tainted code in ReactOS<br/>
and or developers that had access to leaked Microsoft source code.<br/>
This has caused a lot of speculation about the future of the ReactOS<br/>
Project. I'm going to try to put those fears to rest and explain what<br/>
has been going on and where we are going to go from here.<br/>
 <br/>
There was one issue that started this discussion and it related to<br/>
clean-room reverse engineering of certain code in ReactOS. Due to the<br/>
fact we have developers in many different countries the term reverse<br/>
engineering can mean many things to many different people. For us in<br/>
the US when you speak of clean-room reverse engineering it means that<br/>
one person tears apart the implementation of a device, writes<br/>
documentation and another reads that documentation and implements.<br/>
Other countries do not require this invisible great wall of<br/>
development and allow the same person that disassembles the interface<br/>
to also write the replacement implementation.<br/>
 <br/>
Because of the confusion this has caused and the possible legal issues<br/>
this could lead to we have decided to do the following.<br/>
 <br/>
1) Amend our Intellectual Property Policy Statement to reflect<br/>
clean-room reverse engineering as meaning the US standard method for<br/>
reverse engineering and make that the project requirement<br/>
 <br/>
2) Audit the entire source tree and rewrite all code found to have<br/>
been implemented not using the US method for reverse Engineering<br/>
 <br/>
3) Require all developers contributing major code to accept the terms<br/>
of our IP Policy Document via signature.<br/>
 <br/>
Now as for the issue of leaked source code, I want to try to put all<br/>
fears to rest. We don't know what the legal ramifications are for<br/>
someone downloading and having leaked code, as the party that<br/>
maintains copyright ownership of that code might still try to claim<br/>
Trade Secrecy on information contained in the sources in a court of<br/>
law. It is our point of view that the source code leaks of Windows<br/>
have been spread to a broad enough audience that it would be<br/>
impossible to claim the product is still under Trade Secrecy. Because<br/>
of this we are not banning any developer who might have had access to<br/>
leaked sources from contributing to ReactOS, however they are being<br/>
limited as to what area they can contribute. Copyright law still<br/>
applies to all leaked Windows sources and no one in ReactOS may copy<br/>
code from a Windows source leak and try to apply it to code in the<br/>
ReactOS tree.<br/>
 <br/>
We know of four developers who have had access to leaked sources prior<br/>
to working on ReactOS and while they no longer have copies of the<br/>
source code in question, each of the developers have told us in<br/>
private which sections of the sources they were exposed to. As such<br/>
the project has amending the IP document as a fourth step of<br/>
protection<br/>
 <br/>
4) any developer that had access to leaked sources is baned from<br/>
contributing code to the project for any of the modules that are the<br/>
same as leaked sources they examined.<br/>
 <br/>
So to clarify that, lets say someone saw some of the leaked Windows<br/>
source code in version.dll, then they would be unable to contribute<br/>
code to the ReactOS project for that dll.<br/>
 <br/>
It is our hope that a court case will arise and declare Microsoft's<br/>
Windows code is no longer under Trade Secret protection so these<br/>
developers who did have access to some of the leaked sources will be<br/>
free to contribute again to all sections of the project.<br/>
 <br/>
One final note, this audit of the code is going to take a long time.<br/>
It could take years, but it will happen, this project will come out<br/>
better than it was before. I don't believe anything anyone has done<br/>
while working on this project was really wrong. Every decision has<br/>
three possibilities, being moral, ethical and or legal. Sometimes the<br/>
law in itself is unethical and immoral. If people made mistakes and<br/>
there was a violation of the law, I question the justice of the law<br/>
and or anyone that would try to prosecute any of the developers who<br/>
just want the freedom to learn and create a more free system.<br/>
<br/> 
--<br/>
Steven Edwards - ReactOS and Wine developer
