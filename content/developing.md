---
title:       "Developing!"
author:      "vicmarcal"
type:        page
date:        2015-11-21
changed:     2016-02-11
draft:       false
promote:     false
sticky:      false
url:         /developing
aliases:     [ node/957 ]
menu:        [ "main-menu" ]

---

<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h1 class="center"> Interested in ReactOS development?</h1>
		<p class="lead center">Becoming a ReactOS developer is both simple and rewarding. The codebase allows developers of all different backgrounds and skillsets to find something that interests them, and allows them to get going quickly using our excellent build environment. <br/><br/>
The challenge of working on a mainstream operating system is something many people are interested in, however the opportunities to do so are rather limited. Linux and BSD are the obvious choices, but not everyone wants to work in a unix environment or are put off by the vast scale of unix communities and the large choice on offer. There are other smaller operating systems, but the majority of these are bespoke and don’t offer much in terms of real world usage. <a class="MoreLess">More...</a> </p> 
               <div class="text_container"><p class="lead center">Some people just really like Windows or the NT architecture, and want to get their hands dirty in a way you can't with Windows. ReactOS offers the chance to work on a mature, open source version of the NT operating system, the most popular desktop operating system in the world.<br/><br/>
Working on ReactOS enables you to develop a deep insight into the NT operating system, allowing you to hone your Windows internals skills which are directly transferable to real world jobs. In fact many of our developers are well respected members in the NT community, and working on ReactOS has been an important tool in reaching that goal<br/><br/>
So if you’re a budding Windows developer looking to learn as much as possible about operating system development, or a seasoned driver developer looking for a fun project, then ReactOS will definitely have something to offer.</p></div>
			<p class="cursiveblue center">Build it!></p><br/><br/>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
				<a href="#applications"><div class="dtapps">ReactOS Applications</div></a>
				<a href="#system"><div class="dtsys">System Processes</div></a>
				<a href="#shell"><div class="dtshell">Shell and Explorer</div></a>
				<a href="#subsystems"><div class="dtsubs">Win32 API</div></a>
				<a href="#drivers"><div class="dtdriv">Drivers</div></a>
				<a href="#executive"><div class="dtexec">Nt Kernel</div> </a>
		</div>
	</div>
</div>

<style>
.Hidden{visibility:hidden;height:0}
.Shown{visibility:visible}
</style>
<script type="text/javascript">
(function ($) {
    $(document).ready(function() {
        $('.text_container').addClass("Hidden");
        $('.MoreLess').click(function() {
            if ($('.text_container').hasClass('Hidden')) {
                $('.text_container').removeClass('Hidden').addClass('Shown');
                $('.MoreLess').text('Less...');
            } else {
                $('.text_container').removeClass('Shown').addClass('Hidden');
                $('.MoreLess').text('More...');
            }
        });
    });
})(jQuery);
</script>
