var bootcd = $("#bootcd").attr("href");
$("#bootcd").removeAttr("href");
$(".modalbtn").click(function(e){
  e.preventDefault();
  $("#bootcdModal").modal("toggle");
  $('.modal-footer a').attr("href", bootcd)
});
