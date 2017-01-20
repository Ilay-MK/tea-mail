"use strict";

/// Добавление класса c модификатором hover при hover карточки продукта.
$(function() {
    $.extend(true, $('.similar-product__product-card').hover(), $('.similar-product__product-card').hover(
        function() {
            $( this ).find('.similar-product__product-card-visual').addClass( "similar-product__product-card-visual_hover" );
        }, function() {
            $( this ).find('.similar-product__product-card-visual').removeClass( "similar-product__product-card-visual_hover" );
        }
    ));
});
