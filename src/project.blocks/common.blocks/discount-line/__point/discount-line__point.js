"use strict";

/// Позиционирование Точек на линии дисконта.
function positioningDiscountLinePoint() {
    var countVisiblePoints,
        $point,
        $pointVisible,
        pointWidth,
        rate = 2;


    $point              = $('.discount-line__point');
    $pointVisible       = $('.discount-line__point:visible');
    pointWidth          = $point.outerWidth();
    countVisiblePoints  = +$pointVisible.length;
    rate               += rate * (countVisiblePoints > 2 ? countVisiblePoints-rate : 0) ;

    $pointVisible.not($pointVisible[0])
        .css("margin-left",
             "calc(" + ( 100/rate ) + "%" + " - " + pointWidth/2 + "px)");
    $pointVisible.not(":last-child")
        .css("margin-right",
             "calc(" + ( 100/rate ) + "%" + " - " + pointWidth/2 + "px)");

    $pointVisible.first().css("margin-left", "-" + pointWidth/2 + "px");
    $pointVisible.last().css("margin-right", "-" + pointWidth/2 + "px");
}

$(function() {
    positioningDiscountLinePoint();

    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize(function() {
        positioningDiscountLinePoint();
    }));
});
