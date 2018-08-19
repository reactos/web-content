---
title:       "The cost of progress"
author:      "Z98"
date:        2013-05-21
aliases:     [ "node/653" ]
---

<p>The project often gets suggestions for what people consider to be &quot;improvements&quot; over how Windows does something. Nothing wrong with that, save for the fact people rarely consider the implications of what they are asking for. The most recent spurt was in &quot;enhancements&quot; for the shell, some of it due to the renewed attention I started drawing to it. We&#39;ll take the request for &quot;full screen&quot; application support to start with. On Windows, fullscreen support needs to be baked into the application, requiring an explicit decision by a developer to support it. Quite a few applications do, but some do not. Certain individuals proposed giving the user a way to make an application fullscreen regardless of whether it was supported or not. This however runs into a couple of interrelated problems. First, anything that a user can do, a program can probably do as well. Meaning the moment an option is exposed letting a user fullscreen any arbitrary application, an application itself can duplicate that same feat. This in and of itself may not be a bad thing, until one realizes that an implicit function has just been added that was never part of the original Win32 API. This is something the project really does not want to do, as it would represent a virtual fork from the Win32 API and suddenly we would own responsibility for it. Microsoft fell into this trap as developers dug underneath the Win32 API and discovered all sorts of interesting functionality not being exposed. The end result is the massive amount of compatibility guy that Windows needs to carry around with it in order to support older applications. ReactOS already faces the rather unpleasant task of duplicating the existing glue and we have no real interest in adding more to it, especially if it risks developers writing applications that work on ReactOS and not Windows. If users themselves installed some third party utility to do this, we are not going to stop them. We simply do not want to allow programmers to assume the presence of such functionality. As an aside, the keyboard shortcut of F11 will turn fullscreen any application that supports it.</p><p>Another request was for basically a text based list view alternative to the current preview based alt-tab functionality. This is <em>likely</em> more feasible, because it does <strong>not</strong> attempt to interact with how programs run/render. It would simply require an alternate codepath for the alt-tab functionality, which is confined to the shell. The question however is who is responsible for this rendering, the shell32 library or explorer itself. If the former, then shell32 has to support such rendering or else we run into the sticky problem of extending an existing API mentioned above. If it is explorer, then things are much simpler as explorer is ultimately an application and we can do whatever we want inside of it, within reason.</p><p>Asking ReactOS to do something that Windows does not do comes with costs, which too many people seem a tad too blase about. One must realize that the moment an exception is made, it acts as a precedent for further exceptions in the future, including exceptions that could break things the original requester actually cares about. So before asking for something new in ReactOS, ask yourself if you are prepared to give up something else that already works in exchange. If the answer is no, then you just might understand why Microsoft has so much trouble getting improvements into Windows.</p>