"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.catalog-view__option').click(), $('.catalog-view__option').click(
        function () {
            $(this).stop().animateCss("bounceIn");

            /* Добавляем мод карточки продукта для отображения на всю строчку */
            if($( this ).hasClass("catalog-view__option_block")) {
                /* работаем непосредсвенно с блоком-карточкой */
                $('.product-card').addClass('product-card_view_block');
                /* работаем с блоком visual */
                $('.product-card__visual').addClass('product-card__visual_view_block');
                /* работаем с контейнером описания продукта */
                $('.product-card__description').addClass('product-card__description_view_block');
                /* работаем с контейнером кнопки продукта */
                $('.product-card__btn-container').addClass('product-card__btn-container_view_block');
            }
            else {
                /* работаем непосредсвенно с блоком-карточкой */
                $('.product-card').removeClass('product-card_view_block');
                /* работаем с блоком visual */
                $('.product-card__visual').removeClass('product-card__visual_view_block');
                /* работаем с контейнером описания продукта */
                $('.product-card__description').removeClass('product-card__description_view_block');
                /* работаем с контейнером кнопки продукта */
                $('.product-card__btn-container').removeClass('product-card__btn-container_view_block');
            }
        }
    ));
});
