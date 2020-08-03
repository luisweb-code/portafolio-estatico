/* Efecto Parallax JS */

$(document).ready(function () {
  /* Detectar el eveneto del scroll */

  $(window).scroll(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 800) {
      var scroll = $(window).scrollTop();
      //Se modifican los textos
      $("header .textos").css({
        transform: "translate(0px," + scroll / 2 + "%)"
      });

      $(".acerca-de article").css({
        transform: "translate(0px, -" + scroll / 4 + "%)"
      });
    }
  });

  //Cuando cambie el tamaño de la venta queremos que ajuste los valores
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".acerca-de article").css({transform: "translate(0px, 0px)"});
    }
  });
});
