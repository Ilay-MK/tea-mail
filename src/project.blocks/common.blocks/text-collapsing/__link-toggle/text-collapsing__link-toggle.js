"use strict";

$(function() {

    /// Событие click() с отменой перехода по ссылке
    /// Toggle описание страницы.
    $(".text-collapsing__link-toggle").click(function (e) {
        e.preventDefault();
        if ( $( this ).attr("data-alttext") === undefined ) return;

        /* --- */

        var linkToggle, obj, text, altText;

        /* --- */

        linkToggle  = $( this );

        /*obj         = linkToggle.attr("data-target");*/
        altText     = linkToggle.attr("data-alttext");
        text        = linkToggle.text();

        /* --- */

        linkToggle.attr("data-alttext", text);
        linkToggle.text(altText);

        /* --- */

        /* Показать заголовок меню каталога при разворачивании меню */
        if( $( '.menu-catalog__title' ) !== undefined && linkToggle.hasClass('menu-catalog__link-toggle') )
            $( '.menu-catalog__title' ).slideToggle();

        /* --- */

        /*
        if($(obj).attr('aria-expanded') == 'false') {

        }
        else {

        }
        */

    });

});
