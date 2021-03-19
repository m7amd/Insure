(function ($) {

  // calculate padding and height in navbar 

  $('body').css('paddingTop', $('.nav').outerHeight());

  // Scroll To Top

  let button = $('.scroll');

  $(window).on('scroll', function () {

    if ($(this).scrollTop() > 800) {

      button.fadeIn(500);

    } else {

      button.fadeOut(500);

    }

  });

  button.on('click', function () {

    $('html, body').animate({

      scrollTop: 0

    }, 1000);

  });


}(jQuery));

