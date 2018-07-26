"use strict";

$(function() {

    /// Удаление товара из покупаемого списка (корхины).
    $('.cart-items__item-remove').click(function (e) {
        $( this ).closest('.product-card').remove();
    });

});
