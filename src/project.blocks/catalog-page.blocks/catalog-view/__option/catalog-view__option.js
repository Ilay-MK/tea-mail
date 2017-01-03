"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.catalog-view__option').click(), $('.catalog-view__option').click(
        function () {
            $(this).stop().animateCss("bounceIn");

            /* Добавляем мод карточки продукта для отображения на всю строчку */
            if($( this ).hasClass("catalog-view__option_block")) {
                $('.product-card').addClass('product-card_view_block');
            }
            else {
                $('.product-card').removeClass('product-card_view_block');
            }
        }
    ));
});
