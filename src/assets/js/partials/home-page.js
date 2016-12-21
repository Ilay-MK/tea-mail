"use strict";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - VARIABLES - - - - - - - - - - - - - - */

var heroCarousel = {
    h1 : [
        "Отборные сорта чая с азиатских плантаций",
        "Новый заголовок H1 ;)"
    ],
    bg : [
        "0",
        "1"
    ],
    h1_default: "Отборные сорта чая с азиатских плантаций",
    bg_default: "0",
    cursor: 0
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - FUNCTION - - - - - - - - - - - - - -  */

/// Эффект наведения на картинки-линки в блоке чайной почты
/// @access public
/// @require getPageSize()
function mh(ob, event) {
    if (getPageSize()[2] < 992) {
        return;
    }
    var x = event.offsetX;
    var y = event.offsetY;

    var left, top, $obj;

    $obj = $(ob).siblings(".hover");

    console.log("---------");
    console.log("X:"+x+"; Y:"+y);

    left = x ;
    top = y;

    left -= $(".tea_mail--imgLink .hover").width()/2;
    top -= $(".tea_mail--imgLink .hover").height()/2;

    console.log("left:"+left+"; top:"+top);
    console.log("---------");

    $obj.css("left", left);
    $obj.css("top", top);
    $obj.css("background-position-x", -left);
    $obj.css("background-position-y", -top);
}

/// Get Hero Carousel number of slide
/// @access public
/// @param route {String} - "prev" или "next"
function scrollHeroCarousel(route) {
    var h1, bg;

    switch(route) {
        case "prev":
            if(heroCarousel.cursor < 1) {
                heroCarousel.cursor = heroCarousel.h1.length - 1;
            }
            else {
                --heroCarousel.cursor;
            }
            break;
        case "next":
            if(heroCarousel.cursor > (heroCarousel.h1.length - 2)) {
                heroCarousel.cursor = 0;
            }
            else {
                ++heroCarousel.cursor;
            }
            break;
        default:
            if(heroCarousel.cursor > (heroCarousel.h1.length - 2)) {
                heroCarousel.cursor = 0;
            }
            else {
                ++heroCarousel.cursor;
            }
            break;
    }

    if(heroCarousel.h1.length > 0) {
        h1 = heroCarousel.h1[heroCarousel.cursor];
        bg = heroCarousel.cursor;
    }
    else {
        h1 = heroCarousel.h1_default;
        bg = heroCarousel.bg_default;
    }

    $("#hero h1").stop().text(h1).css("animation-duration", "0.8s").animateCss("fadeInDown");
    $("#hero").css("background-image", "url(assets/img/hero/bg_" + bg + ".png)");
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - DOCUMENT READY - - - - - - - - - - - -  */

$( document ).ready(function() {

    /* ---------- */
    /* -= HERO =- */
    $("#hero .ctrl-arrow-left").click(function () {
        scrollHeroCarousel("prev");
    });

    $("#hero .ctrl-arrow-right").click(function () {
        scrollHeroCarousel("next");
    });

    /* SEARCH */
    /*$("#hero--search--input").on('input', function () {
        var $item = $(this),
            value = $item.val();

        $item.siblings(".result").fadeIn();
    });*/

    /* SEARCH */
    $("#hero--search--input").on('focus', function () {
        var $item = $(this),
            value = $item.val();

        $item.siblings(".result").fadeIn();
    });

    /* SEARCH */
    $("#hero--search--input").on('blur', function () {
        var $item = $(this),
            value = $item.val();

        $item.siblings(".result").fadeOut();
    });

    /* -------------- */
    /* -= TEA_MAIL =- */
    /*$(".tea_mail--imgLink").hover(
        function(){

        },
        function(){
          //alert('Вы покинули территорию элемента "foo". Мы будем рады видеть вас снова.');
        }
    );*/

    $(".tea_mail--imgLink .field").mousemove(function( event ) {
        mh(this, event);
    });

    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {
            /*parallax($('#tea_mail').addClass("parallax parallax_bg"), 'background-position-y', -getPageSize()[3], "px", -8);*/
        }
    ));

    /* -------------- */
    /* -= TEA_ROOM =- */
    /*$("#tea_room").on('inview', function(event, isInView) {
        if (isInView) {

        } else {
            // element has gone out of viewport
        }
    });*/

    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {
            /*parallax($('#tea_room').addClass("parallax parallax_bg"), 'background-position-y', 0, "px", -4, 400, -400);*/
            parallax($('#tea_room-content'), 'margin-top', getPageSize()[3] / 2);
        }
    ));

    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            /* Переделать в классы! */
            if (getPageSize()[2] < 992) {
                $('#tea_room-content').css("margin-top", "0");
            }
        }
    ));

    /* ---------- */
    /* -= KITS =- */
    if (getPageSize()[2] > 991) {
        $('#kits').one('inview', function() {
            setTimeout(function() {
                $("#kits--imgLink-left-1").css("margin-left", "0");
            }, 500);
            setTimeout(function() {
                $("#kits--imgLink-left-2").css("margin-left", "0");
            }, 1000);

            setTimeout(function() {
                $("#kits--imgLink-right-1").css("margin-right", "0");
            }, 500);
            setTimeout(function() {
                $("#kits--imgLink-right-2").css("margin-right", "0");
            }, 1000);
        });
    }

    /* ------------ */
    /* -= DISHES =- */
    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {
            /*parallax($('#tea_mail').addClass("parallax parallax_bg"), 'background-position-y', -getPageSize()[3], "px", -8);*/
        }
    ));
});
