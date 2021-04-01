$(document).ready(function(){
  
  $('.course__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.reviews__slider').slick({
    // fade: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: true,
    // infinite: true,
    // speed: 300,
    // adaptiveHeight: true
  });
  
  $('.mentors__slider').slick({
    fade:true,
    dots:true,
    // slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    // slidesToScroll:1,
    arrows: false,
    // adaptiveHeight: true,
  })
})