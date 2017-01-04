"use strict";

function removeInClassFromCatalogFilter_992() {
    if (getPageSize()[2] < 992) {
        $('#catalog-filter-container__content').removeClass("in");
    }
    else {
        $('#catalog-filter-container__content').addClass("in");
    }
}

$(function() {
    setTimeout(function() {
        removeInClassFromCatalogFilter_992();
    }, 1500);

    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function (){
        removeInClassFromCatalogFilter_992();
    }));
});
