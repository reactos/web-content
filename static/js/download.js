var bootcd = $("#bootcd").attr("href");
var livecd = $("#livecd").attr("href");
$("#bootcd").removeAttr("href");
$("#livecd").removeAttr("href");
$(".modalbtn").click(function(e){
  $("#bootcdModal").modal("toggle");
  url = bootcd;
  if (e.target.textContent == "LiveCD") {
    url = livecd;
  }
  $('.modal-footer a').attr("href", url)
});