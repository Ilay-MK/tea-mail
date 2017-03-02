"use strict";

function productCardViewOptionAdaptive() {
    if (getPageSize()[2] < 992) {
        /* работаем непосредсвенно с блоком-карточкой */
        $('.product-card').removeClass('product-card_view_block');
        /* работаем с блоком visual */
        $('.product-card__visual').removeClass('product-card__visual_view_block');
        /* работаем с контейнером описания продукта */
        $('.product-card__description').removeClass('product-card__description_view_block');
        /* работаем с контейнером кнопки продукта */
        $('.product-card__btn-container').removeClass('product-card__btn-container_view_block');
        /* работаем с кнопкой продукта */
        $('.product-card__btn').removeClass('product-card__btn_view_block');
        /* работаем с контейнером заготовков продукта */
        $('.product-card__headings').removeClass('product-card__headings_view_block');
        /* работаем с ценами продукта */
        $( '.product-card__prices' ).each(function() {
            var parCont = $( this ).closest(".product-card__description");
            $( this ).detach().insertAfter(parCont.find('.product-card__headings'));
        });
        $('.product-card__prices').removeClass('product-card__prices_view_block');
        $('.product-card__cost').removeClass('product-card__cost_view_block');
        $('.product-card__inner').removeClass('product-card__inner_view_block');
    }
    else {
        /* работаем непосредсвенно с блоком-карточкой */
        $('.product-card').addClass('product-card_view_block');
        /* работаем с блоком visual */
        $('.product-card__visual').addClass('product-card__visual_view_block');
        /* работаем с контейнером описания продукта */
        $('.product-card__description').addClass('product-card__description_view_block');
        /* работаем с контейнером кнопки продукта */
        $('.product-card__btn-container').addClass('product-card__btn-container_view_block');
        /* работаем с кнопкой продукта */
        $('.product-card__btn').addClass('product-card__btn_view_block');
        /* работаем с контейнером заготовков продукта */
        $('.product-card__headings').addClass('product-card__headings_view_block');
        /* работаем с ценами продукта */
        $( '.product-card__prices' ).each(function() {
            var parCont = $( this ).closest(".product-card__description");
            $( this ).detach().insertAfter(parCont.find('.insertAfter'));
        });
        $('.product-card__prices').addClass('product-card__prices_view_block');
        $('.product-card__cost').addClass('product-card__cost_view_block');
        $('.product-card__inner').addClass('product-card__inner_view_block');
    }
}

/// Добавление класса
$(function() {
    $.extend(true, $('.product-card').hover(), $('.product-card').hover(
        function() {
            $( this ).find('.catalog-carousel__control').addClass('catalog-carousel__control_hover');
        }, function() {
            $( this ).find('.catalog-carousel__control').removeClass('catalog-carousel__control_hover');
        }
    ));

    productCardViewOptionAdaptive();
    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize( function () {
        productCardViewOptionAdaptive();
    }));
});
