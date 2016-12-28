"use strict";

$(function() {
    /* Добавление класса мода содержимого элемента хлебных крошек типа стрелки   */
    $('.breadcrumb-arrow__item').not(':first').find('.breadcrumb-arrow__item-content').addClass('breadcrumb-arrow__item-content_not-first-child-item');
});
