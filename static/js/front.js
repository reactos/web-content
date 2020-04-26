/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  menuSliding()
})

/* menu sliding */
function menuSliding () {
  $('.dropdown').on('show.bs.dropdown', function () {
    if ($(window).width() > 750) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
    } else {
      $(this).find('.dropdown-menu').first().stop(true, true).show()
    }
  })

  $('.dropdown').on('hide.bs.dropdown', function () {
    if ($(window).width() > 750) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
    } else {
      $(this).find('.dropdown-menu').first().stop(true, true).hide()
    }
  })
}
