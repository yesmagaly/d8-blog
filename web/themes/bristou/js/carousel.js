(function demo ($, Drupal) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      $(".banner__content").slick({
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        arrows: false
      });
    }
  }
})(jQuery, Drupal)
