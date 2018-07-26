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
                }, 2000);
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

    /* ------------ */
    /* -= SEND FORM =- */
    // Ajax send mail
    $("form").submit(function (e) {

        if ( $( this ).hasClass('form_catalog-filter') ) {
            ajax(this, "./catalog-filter.php");
        }

        return false;
	});

});

/// TEMP
function ajax(ob, processor) {
    var msg;
    var result;

    var result = $("#result");

    if (processor === undefined) {
        processor = "./mail.php";
    }

    $.ajax({
        type: "POST",
        url: processor,
        data: $(ob).serialize(),
        beforeSend: function(data) { // сoбытиe дo oтпрaвки
            /*$(ob).find('input[type="submit"]').attr('disabled', 'disabled');*/ // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            //$(ob).find('.submit').attr('disabled', 'disabled');
        },
        complete: function(data) { // сoбытиe пoслe любoгo исхoдa
            /*$(ob).find('input[type="submit"]').prop('disabled', false);*/ // в любoм случae включим кнoпку oбрaтнo
            //$(ob).find('.submit').prop('disabled', false);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            /*result.addClass("text-danger bg-danger").text("Пожалуйста, проверьте введённые данные!");*/
            /*alert("Ошибка: "+xhr.responseCode+" | сообщение: "+str);*/ /* отладка */
            //alert("send email ERROR! "+ xhr.responseText); /* xhr.responseCode */
            //alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
            //alert(thrownError); // и тeкст oшибки
        },
        success: function(data) {
            //alert(data); /* $('.results').html(data); */
        },
    }).done(function (msg) {

        /*if(msg === "OK"){
            var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
            form.html(result);
        } else {
            form.html(msg);
        }*/

        //$(ob).find("[type='text']").val("");
        //$(ob).trigger("reset");


    });

    return false;
}
