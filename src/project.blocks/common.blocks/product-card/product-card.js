"use strict";

/// Добавление класса
$(function() {
    $(".product-card").hover(function (){
            $(this).addClass('product-card_hover');
        }, function (){
            $(this).removeClass('product-card_hover');
    });
});
