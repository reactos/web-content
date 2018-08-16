---
title:       "SATA AHCI Driver GSoC - Week 1 Update"
author:      "amaneureka"
type:        blog
date:        2016-06-02
draft:       false
promote:     false
sticky:      false
url:         /blogs/sata-ahci-driver-gsoc-week-1-update
aliases:     [ node/10563 ]

---

To be honest I started working on project after my college finals i.e. 27th of May, Before that I tried to setup build environment and test bed in virtual machine running win2k3. I was totally new to NT driver development so I started my journey with reading storage stack model and NT driver development guide.
In the first week I explored storage stack of NT 5.2 completely and presented my work plan to my mentor. In parallel with this I also started reading up AHCI 1.1 specification file and windows driver's sample (GitHub).
Right now ROS lacks the important features of NT 5.2 storage stack, like storport/ataport/classpnp. Most of the drivers like uni_ata which give ahci support in ROS are monolithic drivers and hold complete storage stack in itself which makes it impossible to add flexibility to drivers like filters/layers, And also makes it impossible to use Hardware manufacture's delivered windows driver. Hence we lack a proper communication of Hardware and upper class of abstraction that NT 5.2 holds.
My first goal is to make storport miniport ahci driver for win2k3, Hence AHCI reading capability in win2k3. storport miniport drivers are lower class hardware drivers called by storport storage driver and pnp manager. miniport drivers are responsible for loading and intializing up specific kind of devices. Earlier windows was using msahci.sys for ahci sata based communication which was called by ataport.sys storage class driver, but they changed it to storport storage driver because of speed and flexibility of the new driver and hence they replaced msahci miniport driver to storahci, But this driver is not available (officially) for win2k3.
Once I am done with storahci support in win2k3. I start working on storport storage driver, so that I can implement same in ROS and test storahci.sys driver on ROS.
Virtually the only progress I made in first week was reading up documentations and NT 5.2 storage stack model.

