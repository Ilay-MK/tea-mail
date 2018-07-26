"use strict";

/// Добавление класса c модификатором hover при hover item breadcrumb (link).
$(function() {
    $.extend(true, $('.breadcrumb__item_active a.breadcrumb__link').click(), $('.breadcrumb__item_active a.breadcrumb__link').click(function (e) {
        e.preventDefault();
    }));
});
