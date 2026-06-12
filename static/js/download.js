var bootcd = $("#bootcd").attr("href");
$("#bootcd").removeAttr("href");
$(".modalbtn").click(function(e){
  $("#bootcdModal").modal("toggle");
  url = bootcd;
  $('.modal-footer a').attr("href", url)
});
