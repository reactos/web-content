$(function() {
	const copyToClipboard = str => {
		const el = document.createElement('textarea');
		el.value = str;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		const selected =            
			document.getSelection().rangeCount > 0
				? document.getSelection().getRangeAt(0)
				: false;
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		if (selected)
		{
			document.getSelection().removeAllRanges();
			document.getSelection().addRange(selected);
		}
	};

	$("#other_amount").keyup(function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ""));
		if ($(this).val() != "") {
			$("#amount_buttons button.active").removeClass("active");
			$(".hidden_amounts").val($(this).val());
		}
	});

	$("#amount_buttons button").click(function() {
		$("#amount_buttons button.active").removeClass("active");
		$(this).addClass("active");
		$(".hidden_amounts").val($(this).data("amount"));
		$("#other_amount").val("");
	});

	$("#donate_monthly_btn").click(function() {
		$("#donate_monthly").submit();
	});

	$("#donate_once_btn").click(function() {
		$("#donate_once").submit();
	});

	var el = $("span.copy");
	for (var i = 0; i < el.length; i++)
	{
		var e = $(el[i]);
		var text = e.text();
		var style = e.attr("style");
		e.html("<span class=\"copy-box\"><span class=\"copy-data\"></span><button class=\"btn btn-primary copy-btn\">Copy</button></span>");
		var d = e.find(".copy-data");
		d.text(text);
		if (style != null) d.attr("style", style);
		e.find(".copy-btn").css("opacity", 0);
	}

	$(".copy").hover(function() {
		$(this).find(".copy-btn").animate({opacity: 1}, 50);
	}, function(e) {
		$(this).find(".copy-btn").animate({opacity: 0}, 50);
	});

	$("button.copy-btn").click(function(e) {
		copyToClipboard($(e.target).parent().find('.copy-data').text());
		var text = $(e.target).text();
		$(e.target).text("✔");
		setTimeout(function(j, oldText) {
			$(j).text(oldText);
		}, 1000, e.target, text);
	});
});
