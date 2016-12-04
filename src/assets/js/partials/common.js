"use strict";

$(function () {
    console.log('in common.js! ');
})

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

$(document).ready(function () {

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - NAV - - - - - - - - - - - - - - - - - */
    $("nav .catalog-toggle").click(function (e) {
        e.preventDefault();
        var obj;

        obj = $(this).attr("data-target");

        if($(obj).is(':hidden')) {
            $(this).parent("li.catalog").addClass("pushed");
        }
        else {
            $(this).parent("li.catalog").removeClass("pushed");
        }

        /*$(obj).toggle();*/
    });

    /* Прячем выпадающее меню при потере фокуса */
    document.addEventListener("click", function(e) {
        /*e.preventDefault();*/

        if(e.isTrusted) {
            /*alert(e.target.getAttribute("role"));*/
            /*alert(e.target.tagName + e.target.localName + e.target.nodeName);*/

            /*alert(e.target.localName);*/

            if(e.target.localName != "nav" && e.target.dataset.toggle === undefined && !e.target.closest("nav")) {
                if($($("nav .catalog-toggle").attr("data-target")).is(':visible')) {
                    $($("nav .catalog-toggle").attr("data-target")).collapse('toggle');
                    $("nav .catalog-toggle").parent("li.catalog").removeClass("pushed");
                }
            }
        }

    }, false);

    detachPrependTo('.navbar-main-collapse', '.container-collapse-menu', 'main', 992);

    /*$("body").click(function () {
        var $obj;

        $obj = $(this);

        $(obj).toggle();
    });*/

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - HERO - - - - - - - - - - - - - - -  */
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

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - TEA_MAIL - - - - - - - - - - - - - -  */
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

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - TEA_ROOM - - - - - - - - - - - - - -  */
    /*$("#tea_room").on('inview', function(event, isInView) {
        if (isInView) {

        } else {
            // element has gone out of viewport
        }
    });*/

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - KITS - - - - - - - - - - - - - - -  */
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

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - MAPS - - - - - - - - - - - - - - -  */
    detachPrependTo('.address-container', '#map .container', '#gmap', 480, true);

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - FOOTER - - - - - - - - - - - - - - -  */
    /// Перемещение формы подписки в подвале после навигации при ширине экрана < 768
    /// и возрат обратно в противном случае
    detachPrependTo('.footer--newsletters--container', '#footer--newsletters--top', '#footer--newsletters--bottom');
    detachPrependTo('.footer--newsletters--container', '#footer--newsletters--bottom', '#footer--newsletters--top', 480, true);

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - COMMON - - - - - - - - - - - - - -  */

    if (getPageSize()[2] < 1280) {

    }

    $( window ).resize(function() {
        /* NAV TOP */
        navMainResp();

        /// Перемещение формы подписки в подвале после навигации при ширине экрана < 768
        /// и возрат обратно в противном случае
        detachPrependTo('.navbar-main-collapse', '.container-collapse-menu', 'main', 992);
        detachPrependTo('.address-container', '#map .container', '#gmap', 480, true);
        detachPrependTo('.footer--newsletters--container', '#footer--newsletters--top', '#footer--newsletters--bottom');
        detachPrependTo('.footer--newsletters--container', '#footer--newsletters--bottom', '#footer--newsletters--top', 480, true);

        if (getPageSize()[2] < 992) {
            $('#tea_room-content').css("margin-top", "0");
        }

        if (getPageSize()[2] < 768) {
            map.setCenter( marker.getPosition() );
        }
    });

    $(document).scroll( function () {
        parallax($('#tea_mail').addClass("parallax-bg"), 'background-position-y', -getPageSize()[3], "px", -8);
        parallax($('#tea_room-content').addClass("parallax"), 'margin-top', getPageSize()[3] / 2);
        /*parallax($('#tea_room').addClass("parallax-bg"), 'background-position-y', 0, "px", -4, 400, -400);*/
        /*parallax($('#dishes').addClass("parallax-bg"), 'background-position-y', -getPageSize()[3] / 6, "px", -10);*/
        parallax($('#map--address').addClass("parallax"), 'top', getPageSize()[3] / 2);

        /* NAV TOP */
        navMainResp();

    });

    // Автоудаление классов анимации animate.css после проигрывания анимации
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - FUNCTION - - - - - - - - - - - - - - - */

/// NAV TOP responsive nebu bg && margins
/// p.s. вынести всё в класыы и скриптом только присваивание классов сделать!.
function navMainResp() {

    if(+$(document).scrollTop() > 50) {
        if (getPageSize()[2] > 991) {
            $("#nav-main").css("background-size", "280% 219px");
            $("#nav-main").css("height", "202px");
            $("#nav-main").css("margin-top", "-110px");
            $("#nav-main").css("padding-top", "104px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo_mini.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#nav-main").css("background-size", "300% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-117px");
            $("#nav-main").css("padding-top", "117px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#nav-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#nav-main").css("background-size", "800% 219px");
        }

        /* opened */
        $(".nav-catalog-opened").css("padding-top", "60px");
    }
    else {
        if (getPageSize()[2] > 991) {
            $("#nav-main").css("background-size", "180% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-100px");
            $("#nav-main").css("padding-top", "100px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#nav-main").css("background-size", "300% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-117px");
            $("#nav-main").css("padding-top", "117px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#nav-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#nav-main").css("background-size", "800% 219px");
        }

        /* opened */
        $(".nav-catalog-opened").css("padding-top", "100px");
    }
}

/// Эффект наведения на картинки-линки в блоке чайной почты
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
/// @route - "prev" или "next"
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

/// Перемещение объектов
/// с условиями по ширине
/// @obj - объект, который необходимо перенести
/// @from - откуда производится перенос
/// @to - куда производится перенос
/// @width - при какой ширине производить перенос { < width }
function detachPrependTo(obj, from, to, width, insertAfter) {
    if (width === undefined) {
        width = 768;
    }
    if (insertAfter === undefined) {
        insertAfter = false;
    }

    if (getPageSize()[2] < width) {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(from).find(obj).detach().insertAfter(to);
        }
        else {
            $(from).find(obj).detach().prependTo(to);
        }
    }
    else {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(to).siblings(obj).detach().prependTo(from);
        }
        else {
            $(to).find(obj).detach().prependTo(from);
        }
    }
}

/// Parallax effect
function parallax(object, cssRule, baseline, unit, rate, maxOffsetY, minOffsetY) {
    if (getPageSize()[2] < 992) {
        return;
    }

    if (unit === undefined) {
        unit = "px";
    }
    if (maxOffsetY === undefined) {
        maxOffsetY = +object.outerHeight()/2;
    }
    if (minOffsetY === undefined) {
        minOffsetY = -object.outerHeight()/2;
    }
    if (rate === undefined) {
        rate = 4;
    }

    var currScrollPos = +$(document).scrollTop(),
        offsetFromTop = object.offset(),
        currToBlock   = +offsetFromTop.top - currScrollPos,
        hOffset       = (currToBlock + baseline) / rate;

    console.log("----------------------");
    console.log("getPageSize()[3]: " + getPageSize()[3]);
    console.log("maxOffsetY: " + maxOffsetY);
    console.log("minOffsetY: " + minOffsetY);
    console.log("currToBlock: " + currToBlock);
    console.log("hOffset: " + hOffset);

    if ( hOffset > maxOffsetY ) { hOffset = maxOffsetY; }
    if ( hOffset < minOffsetY ) { hOffset = minOffsetY; }

    console.log("hOffset + unit: " + hOffset + unit);
    console.log("----------------------");

    /*object.addClass("parallax");*/
    object.css(cssRule, hOffset + unit);
}

/// Кроссбраузерное получение размеров окна на JS
function getPageSize() {
    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight, pageWidth, pageHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }

    return [pageWidth, pageHeight, windowWidth, windowHeight];
}
