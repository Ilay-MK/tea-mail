"use strict";

function deliveryMethodsLabelDescHeight() {
    if (getPageSize()[2] < 992) {
        $('.delivery-methods__label-desc').css('height', '0');
        $('.delivery-methods__label-desc').addClass('text-collapsing__text collapse');
    }
    else {
        $('.delivery-methods__label-desc').css('height', 'auto');
        $('.delivery-methods__label-desc').removeClass('text-collapsing__text collapse');
    }
}

$(function() {
    deliveryMethodsLabelDescHeight();
    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function () {
        deliveryMethodsLabelDescHeight();
    }));
});
