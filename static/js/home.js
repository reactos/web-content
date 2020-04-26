/*
 * PROJECT:     ReactOS Website JavaScript
 * LICENSE:     AGPL-3.0-or-later (https://spdx.org/licenses/AGPL-3.0-or-later)
 * PURPOSE:     The entry point for all actions and pages
 * COPYRIGHT:   Copyright 2019 Colin Finck (colin@reactos.org)
 */


/*
 * Function timeToNow() taken from Haiku. License header follows:
 *
 * Copyright 2017-2018, Haiku Inc. All rights reserved.
 * Distributed under the terms of the MIT License.
 *
 * Contains portions of John Resig's Pretty Date.
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 *
 * Authors:
 *		Augustin Cavalier <waddlesplash>
 */
function timeToNow(b) {
	var a = new Date();
	var diff = parseInt((a - b) / 1000)
	var day_diff = Math.floor(diff / 86400);

	return day_diff == 0 && (
		diff < 60 && "just now" ||
		diff < 120 && "1 minute ago" ||
		diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
		diff < 7200 && "1 hour ago" ||
		diff < 86400 && Math.floor(diff / 3600) + " hours ago"
	) ||
		day_diff == 1 && "yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}

function updateActivity() {
	$.ajax({
		url: "https://jira.reactos.org/activity?maxResults=6",
		type: "GET",
		dataType: "xml"
	}).done(function(xml) {
		$("#jirafeed").empty();
		$.each($("entry", xml), function(i, elem) {
			var text = $(elem).find("title").first().text();
			var time = timeToNow(Date.parse($(elem).find("published").first().text()));

			var item = '<li>' + text + '<div class="time"><i class="fa fa-calendar-o"></i> ' + time + '</div></li>';
			$("#jirafeed").append(item);
		});
	});
	setTimeout(updateActivity, 60000);
}

$(updateActivity);
