"use strict";

$(function() {

    /// Расширение функции
    /*$.extend(true, $('.page__link-toggle_target_menu-catalog').click(), $('.page__link-toggle_target_menu-catalog').click(function (e) {
        var obj;

        obj = $( this ).attr("data-target");

        if($(obj).is(':hidden')) {
            $( this ).text("Показать каталог");
        }
        else {
            $( this ).text("Скрыть каталог");
        }
    }));*/

    /// Событие click() с отменой перехода по ссылке
    $(".page__link-toggle_target_menu-catalog").click(function (e) {
        e.preventDefault();
        var obj;

        obj = $( this ).attr("data-target");

        /* инверсно, т.к. колапс занимает некоторое время */
        if($(obj).is(':hidden')) {
            $( this ).text("Скрыть каталог");
        }
        else {
            $( this ).text("Показать каталог");
        }
    });
});
