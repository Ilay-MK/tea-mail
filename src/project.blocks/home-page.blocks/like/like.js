"use strict";

/// Добавление класса c модификатором hover при hover карточки продукта.
$(function() {
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.like').addClass( "like_hover" );
        }, function() {
            $( this ).find('.like').removeClass( "like_hover" );
        }
    ));
});
