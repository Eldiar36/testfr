$(document).ready(function(){
    $(".home-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
        /*autoplay:true,
        autoplayTimeout:6000,
        autoplaySpeed:1000,*/
        responsive: {
            0:{
                items: 1
            },
            480:{
                items:1
            },
            767:{
                items:1
            },
            991:{
                items:1
            }
        }
    });
});