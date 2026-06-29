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

			var item = '<li>' + text + '<div class="time"><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="150 80 350 500"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z" fill="000000ff"></path></svg> ' + time + '</div></li>';
			$("#jirafeed").append(item);
		});
	});
	setTimeout(updateActivity, 60000);
}

$(updateActivity);
