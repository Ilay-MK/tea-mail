"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.catalog-view__option').click(), $('.catalog-view__option').click(
        function () {
            $(this).stop().animateCss("bounceIn");
        }
    ));
});
