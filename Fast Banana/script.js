// ********* nav toggle ************
$(document).ready(function () {

    $('#toggle-btn').click(function () {
        $('.nav-links').slideToggle(1500);
    })
    // accordion
   $( "#accordion" ).accordion({animate:1000});

//    progress-bars
     $( "#p-bar-1" ).progressbar({
      value: 35
     });
     $( "#p-bar-2" ).progressbar({
      value: 70
     });
     $( "#p-bar-3" ).progressbar({
      value: 68
     });
     $( "#p-bar-4" ).progressbar({
      value: 80
     });
    
    // owl carousel
    // owl client
    $('.owl-carousel').owlCarousel({
    loop:true,
        margin: 10,
    smartSpeed: 1000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $('#nav').addClass('new-nav');
        } else {
            $('#nav').removeClass('new-nav');
        }
    })

$('nav a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, "slow");
})

})