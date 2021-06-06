$('.testimonal .owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:20,
    nav:true,
    autoplay:true, 
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
});

$('.menu_btn').click(function(){
    $('.menu').slideToggle(200);
})


$(".menu li a").click(function() {
    $('.menu').slideUp(200);
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetDiv).offset().top
    }, 1500);  
});

AOS.init({
    duration: 1000,
    delay: 100,
});