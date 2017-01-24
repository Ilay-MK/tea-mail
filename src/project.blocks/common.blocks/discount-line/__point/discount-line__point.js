"use strict";

/// Позиционирование Точек на линии дисконта.
function positioningDiscountLinePoint() {
    var countVisiblePoints,
        $pointVisible,
        rate = 2;

    $('#discount .discount-line__point').css("margin-left", "0").css("margin-right", "0");

    $pointVisible = $('#discount .discount-line__point:visible');
    countVisiblePoints = +$pointVisible.length;
    rate += rate * (countVisiblePoints > 2 ? countVisiblePoints-rate : 0) ;

    $pointVisible.not($pointVisible[0])
        .css("margin-left", ( 100/rate ) + "%");
    $pointVisible.not(":last-child")
        .css("margin-right", ( 100/rate ) + "%");
}

$(function() {
    positioningDiscountLinePoint();

    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize(function() {
        positioningDiscountLinePoint();
    }));
});
