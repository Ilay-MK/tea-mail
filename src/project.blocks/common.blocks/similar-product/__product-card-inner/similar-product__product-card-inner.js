"use strict";

/// Добавление класса
$(function() {
    $.extend(true, $('.similar-product__product-card').hover(), $('.similar-product__product-card').hover(
        function() {
            $( this ).find('.similar-product__product-card-inner').addClass('similar-product__product-card-inner_hover');
        }, function() {
            $( this ).find('.similar-product__product-card-inner').removeClass('similar-product__product-card-inner_hover');
        }
    ));
});
