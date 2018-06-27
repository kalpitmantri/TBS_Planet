(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };
}(jQuery));



jQuery(document).ready(function(){
    
        $(".LNMIIT").hide();
        $(".enter").hide();
        $(".ASME").hide().fadeIn(2500, function(){

            $(".LNMIIT").fadeIn(3000, function(){
                $("#spinner").addClass("spinner").fadeIn(function(){
            
                    $("body").addClass("loaded");
                    
                });
                
                    
                
            });
        });


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("fix_button").style.display = "block";
        } else {
            document.getElementById("fix_button").style.display = "none";
        }
    }

    $("#fix_button").click(function(){

        $('html,body').animate({

            scrollTop: 0

        },'slow');
    });


	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});




$(document).ready(function(){

    $("#clients-logo").owlCarousel({
 
        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

    })

});



// // fancybox
// $(".fancybox").fancybox({
//     padding: 0,

//     openEffect : 'elastic',
//     openSpeed  : 450,

//     closeEffect : 'elastic',
//     closeSpeed  : 350,

//     closeClick : true,
//     helpers : {
//         title : { 
//             type: 'inside' 
//         },
//         overlay : {
//             css : {
//                 'background' : 'rgba(0,0,0,0.8)'
//             }
//         }
//     }
// });






 




