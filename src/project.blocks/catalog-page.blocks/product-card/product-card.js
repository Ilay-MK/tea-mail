"use strict";

/// Добавление класса
$(function() {
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.catalog-carousel__control').addClass('catalog-carousel__control_hover');
        }, function() {
            $( this ).find('.catalog-carousel__control').removeClass('catalog-carousel__control_hover');
        }
    ));
});
