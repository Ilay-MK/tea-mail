"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.catalog-carousel__control').hover(), $('.catalog-carousel__control').hover(
        function() {
            $( this ).find('.chevron__inner').addClass( "chevron__inner_hover" );
        }, function() {
            $( this ).find('.chevron__inner').removeClass( "chevron__inner_hover" );
        }
    ));
});
