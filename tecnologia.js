$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').ease()
    } else {
      $('a[href="#top"]').ease()
    }
  })

  $('a[href="#top"]').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800)
    return false
  })
})
