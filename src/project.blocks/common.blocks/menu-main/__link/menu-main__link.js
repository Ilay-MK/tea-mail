"use strict";

$(function() {
    /// Расширение функции
    $.extend(true, $('.menu-main__link').hover(), $('.menu-main__link').hover(
        function() {
            $( this ).addClass('menu__link_theme_tea-mail');
        }, function() {
            $( this ).removeClass('menu__link_theme_tea-mail');
        }
    ));
});
