// owlCarousel
jQuery( document ).ready(function() {
   

    var imgpath = "/images/";

    var leftarrow = "<img src='" + imgpath + "left-arrow.png' />";
    var rightarrow = "<img src='" + imgpath + "right-arrow.png' />";


    jQuery('.wrapper_events_line_new.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navText: [leftarrow,rightarrow],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });



});

