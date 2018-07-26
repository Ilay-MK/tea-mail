"use strict";

/// Добавление класса c модификатором hover при hover item breadcrumb (link).
$(function() {
    $.extend(true, $('.breadcrumb__item').hover(), $('.breadcrumb__item').hover(
        function() {
            $( this ).addClass( "breadcrumb__item_hover" );
        }, function() {
            $( this ).removeClass( "breadcrumb__item_hover" );
        }
    ));
});
