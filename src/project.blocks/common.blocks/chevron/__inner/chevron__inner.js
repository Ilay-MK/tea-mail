"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.carousel-control').hover(), $('.carousel-control').hover(
        function() {
            $( this ).find('.chevron__inner').addClass( "chevron__inner_hover" );
        }, function() {
            $( this ).find('.chevron__inner').removeClass( "chevron__inner_hover" );
        }
    ));
});
