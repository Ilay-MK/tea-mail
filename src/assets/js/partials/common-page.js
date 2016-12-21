"use strict";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - VARIABLES - - - - - - - - - - - - - - */



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - FUNCTION - - - - - - - - - - - - - -  */



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - DOCUMENT READY - - - - - - - - - - - -  */

$( document ).ready(function() {

    /* ------------ */
    /* -= COMMON =- */
    // Автоудаление классов анимации animate.css после проигрывания анимации
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {

        }
    ));

    $.extend(true, $(window).resize(), $(window).resize(
        function () {

        }
    ));

    /* --------- */
    /* -= NAV =- */
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

    /*$("body").click(function () {
        var $obj;

        $obj = $(this);

        $(obj).toggle();
    });*/

    /* ---------- */
    /* -= MAPS =- */
    detachPrependTo('.address-container', '#map .container', '#gmap', 480, true);

    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {
            parallax($('#map--address'), 'top', getPageSize()[3] / 2);
        }
    ));

    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            /* Вроде уже нужно убрать это... */
            detachPrependTo('.address-container', '#map .container', '#gmap', 480, true);

            if (getPageSize()[2] < 768) {
                window.setTimeout(function() {
                    map.setCenter( marker.getPosition() );
                }, 1500);
            }
        }
    ));

    /* ------------ */
    /* -= FOOTER =- */
    /// Перемещение формы подписки в подвале после навигации при ширине экрана < 768
    /// и возрат обратно в противном случае
    detachPrependTo('.footer--newsletters--container', '#footer--newsletters--top', '#footer--newsletters--bottom');
    detachPrependTo('.footer--newsletters--container', '#footer--newsletters--bottom', '#footer--newsletters--top', 480, true);

    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            /// Перемещение формы подписки в подвале после навигации при ширине экрана < 768
            /// и возрат обратно в противном случае
            detachPrependTo('.footer--newsletters--container', '#footer--newsletters--top', '#footer--newsletters--bottom');
            detachPrependTo('.footer--newsletters--container', '#footer--newsletters--bottom', '#footer--newsletters--top', 480, true);
        }
    ));

});
