"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.catalog-carousel__control').hover(), $('.catalog-carousel__control').hover(
        function() {
            $( this ).find('chevron-inner').addClass( "chevron-inner_hover" );
        }, function() {
            $( this ).find('chevron-inner').removeClass( "chevron-inner_hover" );
        }
    ));
});
