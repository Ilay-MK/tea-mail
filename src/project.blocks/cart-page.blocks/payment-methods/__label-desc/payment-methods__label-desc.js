"use strict";

function paymentMethodsLabelDescHeight() {
    if (getPageSize()[2] < 992) {
        $('.payment-methods__label-desc').css('height', '0');
        $('.payment-methods__label-desc').addClass('text-collapsing__text collapse');
    }
    else {
        $('.payment-methods__label-desc').css('height', 'auto');
        $('.payment-methods__label-desc').removeClass('text-collapsing__text collapse');
    }
}

$(function() {
    paymentMethodsLabelDescHeight();
    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function () {
        paymentMethodsLabelDescHeight();
    }));
});
