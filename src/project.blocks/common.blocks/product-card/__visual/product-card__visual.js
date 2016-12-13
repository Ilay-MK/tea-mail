"use strict";

/// Добавление класса c модификатором hover при hover карточки продукта.
$(function() {
    $.extend(true, $('.product-card').hover(),
        function() {
            $( this ).find('product-card__visual').addClass( "product-card__visual_hover" );
        }, function() {
            $( this ).find('product-card__visual').removeClass( "product-card__visual_hover" );
        }
    );
});
