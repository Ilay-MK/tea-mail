"use strict";

$(function() {

    /// Событие click() с отменой перехода по ссылке
    $('a.menu-catalog__link[data-toggle=collapse]').click(function (e) {
        e.preventDefault();
        var obj;

        obj = $( this ).attr("data-target");

        if($(obj).is(':hidden')) {
            $( this ).addClass("link_theme_pushed")
            .find('.link__caret').addClass("link__caret_theme_pushed");
        }
        else {
            $( this ).removeClass("link_theme_pushed")
            .find('.link__caret').removeClass("link__caret_theme_pushed");
        }

    });
});
