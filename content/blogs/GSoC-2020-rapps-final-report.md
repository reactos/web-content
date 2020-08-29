---
title:       "Rapps Enhancement final report - GSoC 2020"
author:      "kernel.bin"
date:        2020-08-29
tags:        [ "gsoc", "gsoc-2020", "rapps" ]
banner:      "/img/blogs/gsoc2020-rapps-final-report.png"
---

Hi, I'm He Yang (@kernel.bin), one of the GSoC-2020 students of ReactOS.
How time flies, three month have passed and now GSoC is coming to an end. During last three month, I've been working on rapps, and I've made some small progress on it, improving rapps by increase it's functionality, stability, and make the code more well-organized.

During GSoC, I've learned a lot about coding skills and knowledge about Win32 too. It's a precious and unforgettable experience for me, I'm very grateful to my mentor for his patient teaching, and also everyone in ReactOS community who gave me help and advice.

## The work I've done in past three month

This is the link to the final Pull Request containing the work done by me, you can find the code here.
[Pull Request 3108](https://github.com/reactos/reactos/pull/3108)

### Stage 1

During stage 1, I mainly focused on screenshot and icon support and various small improvements.

#### work done:
- Add support for screenshots. 

- Improve icon support. 

- Some other invisible improvements.

### Stage 2

During stage 2, I mainly focused on improving listview and related code. This turned out the be a pretty big refactor, and it improved the UI a bit.

#### work done:
- Move ToolBar and SearchBar to AppView, and remove "settings" and "exit" button.

- Enable users to choose how to view apps using a ComboBox.

- Some small bugfix and improvements. 

- Some other invisible improvements and some refactoring.

##### More detailed information about work I've done during stage 1 & 2 can be found here: [GSoC 202 RAPPS Stage 1 & 2](/blogs/gsoc-2020-rapps-stage12/)

### Stage 3

During stage 3, I mainly focused on improving command-line option for rapps, turning rapps an commandline program in order to output to console. Some work improving settings storage are also done.

#### work done:

- Using package name in command line instead of using software's name.

- Turning rapps a command-line program. It will detach the console when it's asked to run in GUI mode （e.g. when no parameters being passed to it).

- Add ```/?``` command to show basic usage of rapps commandline.

- Add /find and /info command (for search and displaying software information)

- some minor improvements. (Allow using ```-``` as option prefix, and so on)

- Store settings in registery in a more human-friendly form instead of binary form.

**screenshots**
![RAPPS screenshot](/img/blogs/gsoc2020-rapps-final-report.png)

## work left
because of my limited time and ability, there's still some work left undone. Some are left by me, some are bugs/imperfection I discovered and don't have time to fix. I will list all of them here.


- Currently, only first screenshot will be displayed. It should be displayed somewhere.

- Clicking links in richedit using left button with ```Ctrl``` pressed, should just open the browser instead of popup a menu.

- Code about downloading apps need a refactor. it should reuse code in ```AsyncInet.cpp```.

- Currently, downloaded apps will be stored all in a same folder using filename extracted from URL. (code ca be found in ```loaddlg.cpp```) there are some problem with this design. 

    - URL may not have a filename. for example, see twsynth.txt （probably in this case we should retrieve filename form HTTP header?)
    - Different apps should be stored in their respective folders, otherwise if filename in URL is the same, it could lead to a disaster.
    - URL can be quite long, and it may contain illegal character in it. we should make sure it's shorter than ```MAX_PATH``` and no illegal character in it.

- The current code reading INI file is really slow. It the reason why rapps always take a long time to start. It should be improved.

- When removing installed apps from registery, if there are sub-keys, it will fail. Delete them recursively? (it will fail when we don't have access to it too, and I think in this case we should tell user about this failure)

- Some icon can not be loaded and displayed correctly. More investigate required.

- When uninstall a program, if it requires an administrator privilege, it will fail (code can be found in ```misc.cpp```,  function ```StartProcess```)