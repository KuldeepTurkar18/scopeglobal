
  $('.owl-carousel').owlCarousel({
    items: 5,
    loop:true,
    autoplay:true,
    margin:30,
    dots:false,
    nav:false,
    smartSpeed: 2500,
    // responsiveClass:true,
    responsive:{
        0:{
            items:2,
            margin:10,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
});

$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('sticky-header');
    else sticky.removeClass('sticky-header');
});

