"use strict";

/// Добавление класса
$(function() {
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.product-card__inner').addClass('product-card__inner_hover');
        }, function() {
            $( this ).find('.product-card__inner').removeClass('product-card__inner_hover');
        }
    ));
});
