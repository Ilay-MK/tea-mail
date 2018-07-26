"use strict";

$(function() {

    /// Событие click() по контролам (кнопкам) управления шагами в оформлении заказа (в корзине).
    $('.cart__steps-ctrl').click(function (e) {
        /*e.preventDefault();*/

        if( $( this ).hasClass('cart__steps-ctrl_prev') ) {
            $('.cart-steps__step_active').removeClass("cart-steps__step_active").prev().addClass("cart-steps__step_active");
        }
        else if ( $( this ).hasClass('cart__steps-ctrl_next') ) {
            $('.cart-steps__step_active').removeClass("cart-steps__step_active").next().addClass("cart-steps__step_active");
        }
    });

});
