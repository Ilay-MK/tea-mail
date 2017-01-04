"use strict";

$(function() {

    /// Событие click() с отменой перехода по ссылке
    $('a.menu-catalog__link[data-toggle=collapse]').click(function (e) {
        e.preventDefault();
    });
});
