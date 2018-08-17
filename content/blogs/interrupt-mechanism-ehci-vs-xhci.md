---
title:       "Interrupt mechanism: eHCI vs xHCI"
author:      "ramateja.g"
date:        2017-06-22
aliases:     [ node/45380 ]

# Summary:
# This blog post is first one of a series of posts which will deal with various topics related to xHCI (usb 3.0). I'm Rama Teja one of the participants in GSOC 2017. My project is to develop xHCI driver for ReactOS with the help of my mentor Thomas Faber. In the xHCI documentation given by Intel there are three major topics i.e., Register Interface, Data Structures and Operational model. The hardware controller's register interface is used to send commands to it or get the status etc., Data structures are components in the memory space allocated to the Driver. Operational model defines how the controller works i.e., how to initialize the controller, how to connect a device etc. 

---
This blog post is first one of a series of posts which will deal with various topics related to xHCI (usb 3.0). I'm Rama Teja one of the participants in GSOC 2017. My project is to develop xHCI driver for ReactOS with the help of my mentor Thomas Faber. 
In the xHCI documentation given by Intel there are three major topics i.e., Register Interface, Data Structures and Operational model. The hardware controller's register interface is used to send commands to it or get the status etc., Data structures are components in the memory space allocated to the Driver. Operational model defines how the controller works i.e., how to initialize the controller, how to connect a device etc. 

First, I initiated the hardware components. With the Register interface I could write a basic driver which just resets the Controller. I checked it with both ReactOS livecd and win 2003 server edition. The driver loads and resets the hardware without crashing the OS. All the tests are being done in VMware Workstation connected to windBg.
Transferring commands or data to the Hardware controller can be done in two ways, Asynchronous transfer and Periodic transfer. Control and bulk transfer types fall under Asynchronous transfer. My next objective is to get the control transfer working. To implement this we need Data structures like TRB, TD etc., How the control transfer works is given in the operational model in the Intel Documentation. Presently I've implemented various data structures required for Control transfer.
 
While working on Control transfer I came across the Interrupt mechanism which is a crucial part of the driver model. So to see how it behaves I tried to compare it with the interrupt mechanism of usb 2.0 driver (eHCI). In that process I've found some differences and similarities between them. 
eHC implementation uses PCI Pin interrupt mechanism. xHC supports Message Signaled Interrupt (MSI), MSI-X and also PCI Pin interrupt mechanism. In xHC Pin interrupt support is optional. It depends on the implementation.

PCI Pin interrupt mechanism:
IRQs (Interrupt request lines) are hardware lines over which devices can send interrupt signals to the microprocessor. PCI bus has 4 dedicated interrupt lines INTA, INTB, INTC and INTD. When a device with external interrupt pin is attached to the PCI bus it connects to one of the dedicated interrupt lines. 
CPU interrupt pins are expensive and limited so PCI interrupt lines are connected to the input pins of interrupt controllers like PIC or APIC. Whenever an interrupt triggers, the interrupt controller asserts CPU’s interrupt pin. Upon receiving interrupt signal from hardware, CPU control is transferred to host controller. Interrupt handler function of the respective driver will take control. The precise mechanism to do the transfer is OS specific. 

eHCI : 
When an interrupt is triggered by eHC, CPU hands over the control to its interrupt handler. When the interrupt handler receives control it does the following in order.

1. It reads the USB status register. 
2. It acknowledges the interrupt by clearing all the interrupt status bits. To clear interrupt status bits they should be set to 1.
3. It determines the cause of interrupt whether the interrupt is due to schedule processing or some other event.
4. In the final stage it schedules a deffered procedure call(DPC) which will be executed later.

Later the DPC routine processes the results of the schedule execution.

xHCI:
In xHC there are Interrupters that manage events and their notification. xHC supports up to 1024 interrupters. Number of interrupters implemented can be known from MaxIntrs field in HCSPARAMS1 register. 

Each interrupter made of the following.
1. Interrupter management register (hardware)
2. Interrupter moderation register (hardware)
3. Event ring (memory)

To use an Interrupter it should be enabled and it asserts interrupt signal if there is a TRB in its event ring. A Transfer Request Block (TRB) is a data structure constructed in memory by software. It transfers a single physically contiguous block of data between host memory and the xHC. 
This interrupt can be generated in two ways either the Pin interrupt in PCI like eHC or MSI/MSI-X mechanism. Message signaled Interrupt(MSI) is supported in PCI 2.2 and above. Since the PCI driver of ReactOS does not support MSI/MSI -X so Pin Interrupt should be used. 
PCI Pin interrupt will be used by interrupter 0 if the Message signaled interrupt is not enabled. Important point to be noted is that when using Pin interrupt all Interrupters except 0 ( 1 to MaxIntrs-1) will be disabled. As PCI Pin interrupt support is optional MSI support development is crucial. Vmware Workstation’s xHC implementation provides PCI pin support. 	
<img src="/sites/default/files/imagepicker/49141/blog_1.png" alt="Image"  class="imgp_img" width="1808" height="1017" />
