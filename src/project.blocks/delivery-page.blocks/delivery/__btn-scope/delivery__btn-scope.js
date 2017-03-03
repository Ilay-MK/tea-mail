"use strict";

$(function() {

    /// Показываем "Доставку" или "Оплату"
    $('.delivery__btn-scope').click(function () {
        if( $( this ).hasClass('delivery__btn-scope_active') ) return;

        $('.delivery__btn-scope').removeClass('delivery__btn-scope_active');
        $( this ).addClass('delivery__btn-scope_active');
    });

});
