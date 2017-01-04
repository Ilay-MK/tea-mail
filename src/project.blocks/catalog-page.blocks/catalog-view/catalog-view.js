"use strict";

function catalogViewOptionAdaptive() {
    if (getPageSize()[2] < 992) {
        $("#catalog-view__option_inline-block").click();
    }
}

$(function() {
    catalogViewOptionAdaptive();
    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function (){
        catalogViewOptionAdaptive();
    }));
});
