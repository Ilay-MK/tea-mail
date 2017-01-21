"use strict";

/// Листание карусели похожих продуктов.
$(function() {
    $('.similar-product__carousel').carousel({
      interval: false
    });

    $('.similar-product .carousel-control.right').click(function() {
        if (getPageSize()[2] > 767) {
            $(this).blur();
            $(this).parent().find('.item').first().insertAfter($(this).parent().find('.item').last());
        }
    });
    $('.similar-product .carousel-control.left').click(function() {
        if (getPageSize()[2] > 767) {
            $(this).blur();
            $(this).parent().find('.item').last().insertBefore($(this).parent().find('.item').first());
        }
    });
});
