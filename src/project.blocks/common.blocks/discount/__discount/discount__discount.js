"use strict";

$(function() {
    /// Расширение функции hover
    $.extend(true, $('.discount__discount').hover(), $('.discount__discount').hover(
        function() {
            $( this ).find('.discount__img-card').addClass('discount__img-card_hover');
        }, function() {
            $( this ).find('.discount__img-card').removeClass('discount__img-card_hover');
        }
    ));
});
