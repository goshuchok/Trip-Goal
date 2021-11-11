$(function () {
  $('.menu__toggle').click(function () {
    $(this).toggleClass('active');
    $('.menu__ul').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});

$(function () {
  $('.location__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.arrow__prev',
    nextArrow: '.arrow__next',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $('.customer__sliders').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(function () {
  $('a.topLink').click(function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top + 'px',
      },
      {
        duration: 5000,
        easing: 'swing',
      }
    );
    return false;
  });
});
