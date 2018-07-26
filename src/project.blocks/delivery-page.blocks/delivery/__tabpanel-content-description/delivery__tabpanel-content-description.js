"use strict";

function deliveryTabpanelContentDescHeight() {
    if (getPageSize()[2] < 992) {
        $('.delivery__tabpanel-content-description').css('height', '0');
        $('.delivery__tabpanel-content-description').addClass('text-collapsing__text collapse');
    }
    else {
        $('.delivery__tabpanel-content-description').css('height', 'auto');
        $('.delivery__tabpanel-content-description').removeClass('text-collapsing__text collapse');
    }
}

$(function() {
    deliveryTabpanelContentDescHeight();
    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function () {
        deliveryTabpanelContentDescHeight();
    }));
});
