+++
title = "Intellectual Property Guideline"
aliases = [ "node/16" ]
+++


## Preface

The ReactOS&trade; Project is an international group of developers whose goal
is to create a work-alike version of the Microsoft Windows operating system. In
light of recent activity in the free software world relating to copyright and
patent concerns, the administrators of the ReactOS Project feel that a general
guideline would be helpful for developers and potential contributors. For
questions regarding this guideline, please e-mail [Colin Finck][colin]. Please note
that none of this should be construed as legal advice, as any sort of warranty
regarding the project&#39;s products, or anything else save a statement of
policy on the part of the project. The &quot;Microsoft&quot; and
&quot;Windows&quot; trademarks are property of Microsoft Corp.

[colin]: mailto:colin@reactos.org

## I. INTRODUCTION

Because of the nature of the ReactOS Project, copyright, patent, and other
legal issues regularly arise in the course of development. This document
provides definitions for many terms that are used in the project and points to
certain guidelines the project expects developers to adhere to.

### A. Helpful Definitions

Throughout this policy document, the following definitions will apply, unless
stated otherwise:

**Application Programming Interface (API)**: A collection of functions, data
structures, constants, objects, etc., which defines the programming interface
to a piece of software. For example, computer operating systems have APIs that
must be used in order to write software to inter-operate with those systems.
&quot;API&quot; can refer to an individual function provided by the operating
system.

**Compiler**: A software development tool that translates human-readable source
code into object code for execution in the target environment.

**Copyright**: A form of government-created monopoly that protects creative
expression, including written works, recorded works, songs, visual art,
computer source code, and the like. Copyright protects the literal expression
contained in a work, not the ideas and concepts that a work embodies. Copyright
arises automatically in any copyrightable work at the moment it is fixed in
tangible form, including the writing of computer source code and, sometimes,
object code.

**Debugger**: A piece of software that is used to help developers fix flaws in
their software, or which is used to help developers understand more about the
system on which they are developing. Examples include SoftICE from Compuware
and WinDbg from Microsoft.

**Device Driver (&quot;Driver&quot;)**: A piece of software designed to
directly or indirectly manage a piece of hardware on behalf of an operating
system. Sometimes also used to refer to any software designed to run as a
direct plug-in to an operating system kernel. Drivers tend to be very
low-level, becoming part of the core of the operating system once they are
loaded. They are generally very closely tied to an operating system
architecture.

**Disassembler**: A piece of software used to allow developers to convert
object code into human-readable assembly language code. These are used to help
developers fix flaws in their software and to help them understand the system
in which their code runs. They are also used for source code recovery in case
of loss of the original source code.

**Free Software**: Software whose license conforms to the Free Software
definition, as published by the Free Software Foundation (http://www.gnu.org).
The GNU General Public License (GPL) is a popular Free Software license.

**Header File**: A source code file, usually in the C or C++ programming
languages, that is included by reference in other source code files. Header
files provide information that defines the APIs, data structures, operational
constants, and other characteristics of a software system. For example, to
write software to run on an operating system, one must use the header files
provided by that system&#39;s developers in order to interface with that
system.

**Library**: An object code file that contains reusable software components. In
the setting of an Operating System, the system libraries must be used by
third-party software to &quot;link&quot; functions with the operating system,
so that the software can properly run on the operating system.

**Non-Free [Software]**: Software that is not Free Software. Most commercial
software still falls into this category.

**Object Code**: Output from a compiler or other similar program designed to
translate human-readable source code into a format suitable for execution in
the targeted environment. Typically refers to machine language instructions
that may be executed directly on a microprocessor. The counterpart of Source
Code, which is translated (usually by a compiler) into object code.

**Open Source Software**: Software whose license conforms to the Open Source
definition, as published by the Open Source Initiative [here][osd]. The BSD
license is a popular Open Source license.

[osd]: http://www.opensource.org/docs/definition.php

**Operating System (OS)**: A special class of computer software designed to
provide an environment in which general software can be run. Operating systems
interface directly with the hardware of a computer, and provide a standardized
set of services that applications can interface with. Examples include
Microsoft&reg; Windows&trade; XP, GNU/Linux&trade;, and Apple&reg;
Macintosh&trade;.

**Patent**: A legal monopoly granted by the government to the inventor of a new
and useful invention. Patents refer to tangible or intangible concepts,
methods, procedures, practices, devices, and so on. Patents are not specific to
a particular expression of an invention.

**Public domain**: A work that is eligible for copyright protection may be
placed in the public domain by explicit notice given by the original creator of
the work. Once in the public domain, the work has no copyright whatsoever and
carries no protection of any kind.

**Reverse engineering**: Discovering the principles of a device or system by
analyzing its structure and operation.

**Service Mark**: A trademark that is used to identify the source of one&#39;s
services.

**Software Development Kit (SDK)**: Software and documentation used to create
computer programs that inter-operate with those of the SDK&#39;s supplier.
Typically, these kits include C language header files, object code libraries,
and various forms of documentation regarding the use of the kit and the details
of the software that the kit is designed to support.

**Source Code**: The representation of computer software in a computer
programming language (such as C or C++). This term refers to the form of a
program that is directly human-readable, and in which the software is typically
originally written and maintained. Source code typically includes comments to
aid the reader in understanding the software. In particular, source code
includes header files.

**Trade Secret**: Information that is valuable to its owner (typically a
company), which would damage the company&#39;s ability to compete in the
marketplace if it were revealed, which the owner takes affirmative steps to
protect.

**Trademark**: A mark that distinguishes a product of a particular producer.
Trademarks are typically used to uniquely identify a product within an
industry.

## II. COPYRIGHT ISSUES

Copyright law is relevant to ReactOS in several contexts. The primary license
in use by the Project, the GNU GPL, relies on the basic framework of copyright
to provide for enforcement of its freedoms. Nearly all of the sample code,
documentation, header files, and reference material available about the Windows
APIs is subject to some form of copyright.

### A. ReactOS Copyright

The ReactOS Project releases almost all of its code under the GNU General
Public License (http://www.gnu.org). Each developer maintains his or her
copyright in the developed source code, but licenses that code under the GPL or
other suitable license for use by the ReactOS Project. Some portions of ReactOS
may be licensed under other licenses, including the GNU Lesser GPL, the BSD
license, or in the public domain.

### B. ReactOS License Binary Linking Exception

The GNU GPL generally prohibits the combining of non-free software with
GPL-licensed software such as ReactOS. That (or any other such policy)
notwithstanding, the ReactOS Project&#39;s official position with respect to
runtime linking of non-free modules is as follows: ReactOS may be used and
distributed with non-free software such as commercial device drivers and
commercial applications. This exception does not alter any other
responsibilities of the licensee under the GPL. This exception is in
recognition that the majority of the Windows ecosystem is composed of closed
source applications and drivers. While the project encourages open source as a
matter of principle, the project does not intend to enforce philosophical
beliefs on developers interested in using ReactOS as a replacement platform for
Windows. The project also recognizes that attempting to force such a belief is
infeasible in an ecosystem where there is a significant body of software
already written and distributed as closed source.

### C. Copyrights of Others

The ReactOS project expects that all contributions made to it are the original
work of the contributing developer. The NT&trade; platform is not fully
publicly documented however. As such, contributors often need to conduct
research to understand the internal architecture of the NT&trade; operating
system. In such cases, the project follows the [GNU guidelines for referencing
non-free code][non-free]. This applies both to usage of reverse engineering and
exposure to proprietary code such as in the Windows Research Kernel.

[non-free]: http://www.gnu.org/prep/standards/standards.html#Reading-Non_002dFree-Code

### III. PATENT ISSUES

Software patents have a profound affect on the ReactOS Project. Currently,
software patents are legal (i.e. software is statutory matter) in the United
States. As a rule, patents are fundamentally incompatible with Free Software,
and should be carefully avoided in the context of such projects. Patent
infringement occurs whenever anyone &quot;makes, sells, uses, or offers to
sell&quot; a patented invention without a license to do so from the
patent&#39;s owner. It is clear that all developers on the Project are affected
by patents. This is an extremely difficult issue to address, but the
Project&#39;s policies regarding patents are as follows:

1. The ReactOS Project administrators, coordinators, and participants are not
   required to make an active search for potentially relevant patents. A patent
   search covering all aspects of a system as complicated as ReactOS would be
   impractical, or at least prohibitively expensive and time-consuming.
2. The Project participants will make a good-faith effort to disclose any known
   patents relevant to the development of ReactOS to the project coordinator.
   This does not mean that the project desires others to engage in a full
   patent search; it does, however, mean that developers are duty-bound to
   report any patents that they know of that they suspect might be relevant.
3. The Project coordinator will maintain a list of relevant patents, and will
   make a good-faith effort to avoid infringement. As a rule, legal counsel
   will not be sought out on each patent. Instead, the project leaders, at
   their discretion, will make a determination as to the technical relevance of
   patents, and if necessary, will direct the removal and/or redesign of
   infringing parts of the system.
4. Project participants agree that they will not seek patent protection for any
   new developments made in conjunction with ReactOS, or in the alternative,
   agree in advice to assign ownership of such patents to the ReactOS
   Foundation, or else to grant a perpetual, irrevocable, transferable,
   royalty-free license to anyone who wishes to use the patented invention in
   conjunction with the ReactOS system or in any derivative work of the system.
5. The coordinators of the Project agree to promptly remove infringing
   implementations of patented inventions from the codebase, subject to a
   confirmatory analysis by a Project administrator. Please notify the
   coordinator email address listed at the top of this document to request
   removal of material you believe to be in violation of a patent.

## IV. TRADEMARK ISSUES

The ReactOS Project endeavors to respect the trademarks of others, and takes
steps to protect the integrity of its marks. Project policies relating to
trademarks include the following:

1. The integrity of the ReactOS mark must be maintained at all times.
   Developers are asked to use ReactOS mark carefully, and to always note the
   existence of the mark with a &trade; sign after the first use in any
   published materials.
2. Any Project member writing published materials such as documentation, news
   articles, website content, and so on, must take all appropriate measures to
   protect the marks of others by indicating the appropriate &trade; and &reg;
   designations on first use of a mark.

## V. TRADE SECRET ISSUES

From time to time, members of the ReactOS Project may find themselves in
possession of information that is prohibited from further dissemination. This
is the case when the participant is in possession of trade secrets. Possessors
of trade secrets are encouraged to maintain the secrecy of the relevant
information. Public projects such as ReactOS are generally incompatible with
trade secrets. Project members should never reveal trade secrets to the
Project. The Project maintains no trade secrets, and while it makes every
effort to respect the trade secrets of others, the Project makes no guarantees
on behalf of any of the members of the project. It is the policy of the Project
to not possess trade secrets. This means that project participants should never
acquire access to trade secrets in the context of their work on ReactOS.

## VI. NON-DISCLOSURE AGREEMENTS

Members of the ReactOS project may occasionally find it necessary to enter into
various non-disclosure agreements for work unrelated to ReactOS. Due to the
fundamentally incompatible nature of the Project with the concept of
non-disclosure, it is the policy of the project that no member may enter into a
non-disclosure agreement for the purpose of ReactOS development. Project
members are required to inform the Project coordinators of any such agreements
that might be relevant to their participation in the project. The Project will
make a good-faith effort to prevent the violation of non-disclosure agreements
on the part of project participants, but it makes no guarantees as to the
behavior of participants. Participants that are found to be under a relevant
NDA are prohibited from supplying code, documentation, implementation advice,
architecture advice, etc., that is covered by that NDA to the project. Any such
code that is supplied in violation of an NDA will be removed from the codebase.

## VII. Other

1. Trademark and Service Mark Anti-Dilution. Anti-dilution provisions prevent
   even the unrelated use of a &quot;famous&quot; mark or at trademark that is
   confusingly similar to a famous mark. ReactOS uses only one mark, the
   ReactOS mark itself, which does not appear to raise any trademark
   anti-dilution issues with any other marks.
2. Trade Dress. Trade Dress refers to the look-and-feel of a product. Famous
   examples include the Coca-Cola bottle and the Apple Macintosh user
   interface. The Project maintains that its implementation of the Windows
   classic theme is for compatibility purposes due to the built-in nature of
   the theme in the Windows UI libraries. The Project otherwise respects the
   trade dress of other parties.

## VIII. DEVELOPMENT KITS

ReactOS requires the use of several third-party software development kits for
its development. These each present unique legal issues. The following
development kits are used in the development of ReactOS:

1. Microsoft Windows SDK (including related and component SDKs): The latest
   version of this SDK can be found [here][windows-sdk]. This SDK contains
   header files, libraries, documentation, and other support files, as well as
   sample source code for programs that illustrate use of the API defined in
   the SDK. This is the main development kit that is used to develop
   third-party software to be run on Windows and Windows-compatible operating
   systems.
2. Microsoft Windows Driver Kit (WDK): The latest version of the WDK can be
   found [here][wdk]. A special-purpose SDK designed for the development of
   kernel-mode software (including device drivers). The WDK also includes the
   headers and libraries necessary for filesystem driver development.

[windows-sdk]: http://www.microsoft.com/download/en/details.aspx?id=8279
[wdk]: http://www.microsoft.com/download/en/details.aspx?id=11800
