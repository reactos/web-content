---
title:       "Hermès Bélusca-Maïto hired full-time to work on the ReactOS GUI Setup"
author:      "GeoB99"
date:        2023-10-01
---

Our team proudly announces that ReactOS Deutschland e.V. has hired Hermès Bélusca-Maïto to work full-time on the [ReactOS GUI Setup](/wiki/First_Stage_GUI_Setup) for the next 5 months, starting September 2, 2023.

Hermès is a long-time contributor and developer who worked on the project since 2012.
He has several skills and expertise into various components of ReactOS, notably being the Client/Server Runtime Subsystem (CSRSS), Console Server Subsystem (CONSRV), NTVDM, and others.

His upcoming goal is to finish the first-stage ReactOS GUI setup, which offers an alternative to the classic first-stage text-mode setup (also called USETUP).
Currently the only option to install ReactOS is through the text-mode setup, with the rest of the setup installation being handled after the second-stage setup.
This has been the standard method of installing ReactOS on virtual machines or bare metal since the inception of the project.

His roadmap for the GUI Setup is as follows:

* Finish partial-Winesync of setupapi.dll regarding CAB-file extraction;
* Move the FreeLdr bootloader installation choice step after the ROS disk/partition-choice step and **JUST** before the actual installation;
* Integrate registry settings callbacks (currently absent in the GUI setup);
* Add GPT support for the GUI Setup;
* Miscellaneous stuff (further cleanup, some refactorings, etc).

The work sheet can be found [here](https://docs.google.com/spreadsheets/d/1Kx80SmSkj1IdomVC9gcbA_MJ7XFiz_YlYYVxoxv-Jgs/edit#gid=538572214).

With the help of donations from the community, we were able to finance his full-time paid contract.
The ReactOS team is very thankful for your donations. Stay tuned, the progress of this work will be followed by new blog posts from Hermès!