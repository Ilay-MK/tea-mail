"use strict";

$(function() {
    /// Расширение функции hover
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.product-card__cost').addClass('product-card__cost_hover');
        }, function() {
            $( this ).find('.product-card__cost').removeClass('product-card__cost_hover');
        }
    ));
});
