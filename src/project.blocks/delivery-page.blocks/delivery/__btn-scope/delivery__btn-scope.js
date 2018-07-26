"use strict";

$(function() {

    /// Показываем "Доставку" или "Оплату"
    $('.delivery__btn-scope').click(function () {
        if( $( this ).hasClass('delivery__btn-scope_active') ) return;

        var activeScope = $( this ).attr('data-target');

        $('.delivery__btn-scope').removeClass('delivery__btn-scope_active');
        $('.delivery__scope').removeClass('delivery__scope_active');

        $( this ).addClass('delivery__btn-scope_active');
        $( activeScope ).addClass('delivery__scope_active');
    });

});
