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

var visibilidade = true

var loadingbtn = document.getElementById('loading')

function exibir() {
  document.getElementById('loading').style.display = 'block'
}

function ocultar() {
  document.getElementById('loading').style.display = 'none'
}

function fixed() {
  document.getElementById('loading').style.position = 'fixed'
}

function loadingbtn() {
  if (visibilidade) {
    document.getElementById('loading').style.display = 'none'
    visibilidade = false
  } else {
    document.getElementById('loading').style.display = 'inline'
    document.getElementById('loading').style.position = 'fixed'
    visibilidade = true
  }
}
