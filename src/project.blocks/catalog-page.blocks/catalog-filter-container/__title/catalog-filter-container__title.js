"use strict";

$(function() {
    /// Расширение функции
    $.extend(true, $('.catalog-filter-container__title').click(), $('.catalog-filter-container__title').click( function () {
        var obj;

        obj = $( this ).attr("data-target");

        if($(obj).is(':hidden')) {
            $( this ).addClass('catalog-filter-container__title_active');
        }
        else {
            $( this ).removeClass('catalog-filter-container__title_active');
        }
    }));

});
