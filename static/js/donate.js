$(function() {
	$("#other_amount").keyup(function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ""));
		if ($(this).val() != "") {
			$("INPUT[name='amount_options']").filter(":checked").removeAttr("checked");
			$("#amount_buttons > .active").removeClass("active");
			$(".hidden_amounts").val($(this).val());
		}
	});

	$("INPUT[name='amount_options']").change(function() {
		$("#other_amount").val("");
		$(".hidden_amounts").val($(this).val());
	});
});
