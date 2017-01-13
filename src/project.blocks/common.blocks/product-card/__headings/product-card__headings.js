"use strict";

$(function() {
    /// Расширение функции hover
    $.extend(true, $('.product-card__headings').hover(), $('.product-card__headings').hover(
        function() {
            $( this ).addClass('product-card__headings_hover');
        }, function() {
            $( this ).removeClass('product-card__headings_hover');
        }
    ));

    /// Расширение функции
    $.extend(true, $('.product-card__headings').click(), $('.product-card__headings').click(function() {
        var product = $( this ).closest( '.product-card' ).attr( 'id' ),
            url = "./?product=" + product;
        $(location).attr('href', url);
    }));
});
