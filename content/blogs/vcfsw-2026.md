---
title:       "ReactOS Joins VCF Southwest for the First Time"
author:      "Carl Bialorucki"
date:        2026-06-01
tags:        [ "newsletter", "vcf", "vcfsw" ]
banner:      "img/blogs/vcfsw-2026/banner.png"
---

{{< gallery >}}
{{< figure link="/img/blogs/vcfsw-2026/booth.jpg" src="/img/blogs/vcfsw-2026/booth.jpg" caption="Our first VCF Southwest booth">}}
{{< /gallery >}}

I had no idea how unprepared I was until it was too late to back out.
I had just set up my booth, with nothing to show off.
Bracing for the worst, I reached out to strangers who quickly became friends.
I expected to confidently show off ReactOS but instead found a resourceful and friendly community willing to help me when my plans fell apart.

## A Last-Minute Opportunity
While I was talking with Justin Miller at our appearance at Chemnitz Linux Days in late March, we talked about how we want ReactOS to appear at more conventions.
I mentioned VCF, but thought we might not be a good fit because we were focusing on supporting newer hardware.
But Justin reminded me that we have an original Xbox port, we have an NEC PC-98 port, and we run on original Pentium PCs.
After doing some research, I found that I recently moved close enough to attend VCF Southwest without needing to book a hotel. 

I decided to put myself on the wait list, not expecting to get in.
About a month before VCF Southwest, I was invited to sign up for a table because another vendor canceled.
I took the opportunity not knowing what I signed myself up for.
Lots of late nights trying to figure out how I would get the swag, banners, and hardware needed to run the booth.
I wasn't much of a hardware collector so I had to quickly become one.

I bought, then immediately returned a 3D printer after changing my mind on what free swag to hand out.
I got a 6' x 2' ReactOS banner made at a local print shop. Unhappy with commercial sticker options, I opted to learn how to make professional looking stickers at home.
I printed them on a high end wide format inkjet (which I hope to use to make big boxes in the future!), laminated them, and used a consumer vinyl cutter to cut the stickers out.
I got several bags of candy at a local wholesale club.
I scoured eBay and local classified ads to find hardware for my booth.
All I was able to get at a reasonable price in time was an original Xbox and an eMachines 366i2 with an original Celeron.

## Everything Went Wrong
After all the other preparation work I needed to do, I only had the night before the convention to get ReactOS working on the hardware I got.
I started with the eMachines, figuring it would be trivial to get ReactOS to boot.
Unfortunately, the disc drive on the eMachines PC did not work.
Luckily, I had some floppy disks and a USB floppy disk drive, so I imaged a copy of Plop Boot Manager to the floppy disk and tried booting ReactOS from USB.
Freeldr, the bootloader for ReactOS, could not load the first stage setup because of some weird memory layout settings baked into the BIOS of that machine.
I also tried running it directly from the hard disk of the machine and ran into the same issue.
I then tried to find a generic BIOS image for that board that may have had a more normal layout but was unsuccessful.

After failing to get ReactOS running on the eMachines, I turned my attention to the original Xbox.
I built ReactOS and confirmed that it ran in an emulator.
The original Xbox port of ReactOS requires Cromwell BIOS to be loaded.
I opted to install a hardware modchip which necessitated soldering a wire to a small via (d0) on the back of the board.
After installing my modchip it acted very strangely, only working in about 1 in every 15 boots or so.
I resoldered it multiple times hoping to fix the issue, it never got better.
In desperation, I flashed Cromwell to the modchip anyways hoping I could get it to boot at least sometimes.
This bricked the modchip and I had to reflash it, which fixed all the issues I was having with it.
Or so I thought.
With the Xbox reliably booting into Cromwell, I burned a ReactOS CD for an Xbox build and it wouldn't get to Freeldr.
After some investigation, it appeared that my disk drive was burning CDs too fast for the Xbox to read them properly.
By the time I came to this realization, I needed to leave to set up the convention.
At this point I had not slept since the previous day and I still needed to run the booth.
I felt defeated.

## The Community Saved the Booth
Desperate to find any piece of hardware that could run ReactOS, I rummaged through all the desktop PCs in the free pile at the convention.
Most of the PCs were stripped for parts and missing something to prevent them from being fully operational.
However, I found a Lenovo Thinkcenter that was complete and could run ReactOS *if* I disabled USB.
Unfortunately this machine had no PS/2 ports so it sat at the LiveCD install screen.

As I was burning a new copy of the Xbox port to a CD, the modchip on the Xbox suddenly stopped working.
I took it to another booth to see if we could take a look at that problematic d0 via again.
We removed it and ripped the via.
I stopped by the Obtainium Retro booth and talked with Dave Park, who kindly looked at the board and told me he couldn't fix it at his booth but that normally he would be able to fix it.
I was not going to be able to show the Xbox running ReactOS at the booth.

However, Timothy Gaskell, who was running the "Attack of the OS Clones" booth (which was also featuring ReactOS), did have a couple machines that ran ReactOS and let me use them at my booth.

Despite the setbacks, the ReactOS booth was very popular.
At first I made about 300 stickers, I almost ran out of them on the first day.
I made another 360 stickers on the second day and I completely ran out of those too.
On the third day, I made another 150 stickers and even then most of those were taken.
The experimental stickers that featured memes and our unofficial mascot did the best.
I gave out about 500 pieces of candy.
And I was talking constantly with other exhibitors and convention goers about ReactOS.
I also talked briefly with some microcelebrities like Clint Basinger from LGR, Adrian Black from Adrian's Digital Basement, David Murray from 8-Bit Guy, and Oliver Molini: founder of Protoweb.
{{< gallery >}}
{{< figure link="/img/blogs/vcfsw-2026/clint_and_carl.jpg" src="/img/blogs/vcfsw-2026/clint_and_carl.jpg" caption="Clint Basinger with Carl Bialorucki">}}
{{< figure link="/img/blogs/vcfsw-2026/oliver_and_carl.jpg" src="/img/blogs/vcfsw-2026/oliver_and_carl.jpg" caption="Oliver Molini with Carl Bialorucki">}}
{{< /gallery >}}

## Looking Back
I would like to thank everyone in the community who helped me get my booth together.
Without their help I would've only been able to show ReactOS in a VM.
I look forward to attending VCF Southwest again next year.
Next time I will invite other core developers to help run the booth, I will have more hardware, and I will make more stickers.

One comment that stuck with me was from Dave Park, who was frustrated at software developers maintaining really cool projects (like ReactOS) and then not porting it to obscure hardware that they want to talk about and show off.
While these ports may not be useful for most people's daily workflows, they are important for winning over the hearts and minds of this community.
When you care about what is important to them, they care about what is important to you.
