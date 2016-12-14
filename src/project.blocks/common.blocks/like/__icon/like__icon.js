"use strict";

/// Добавление класса .chevron__inner_hover при hover контрола
$(function() {
    $.extend(true, $('.like__icon').click(), $('.like__icon').click(
        function () {
            $(this).stop().animateCss("bounceIn");
            if($(this).hasClass("like__icon_liked")) {
                $(this).removeClass('like__icon_liked');
            }
            else {
                $(this).addClass('like__icon_liked');
            }
        }
    ));
});
