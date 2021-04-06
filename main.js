$(document).ready(function(){
  
  $('.course__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.reviews__slider').slick({
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: true,
  });
  
  $('.mentors__slider').slick({
    fade:true,
    dots:true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  });
  $('.header__burgbody').click(function (e) { 
    $('.menu').toggleClass('active');
  });
  $('.menu_link').click(function (e) {
    $('.menu').removeClass('active');
  });
  if ($('#slick-slide-control00').attr('aria-label') == "1 of 1") {
    $('li.slick-active button').css('display','none')
  };
})