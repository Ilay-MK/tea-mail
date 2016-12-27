"use strict";

/// Добавление класса c модификатором hover при hover карточки продукта.
$(function() {
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.product-card__form-container').addClass( "product-card__form-container_hover" );
        }, function() {
            $( this ).find('.product-card__form-container').removeClass( "product-card__form-container_hover" );
        }
    ));
});
