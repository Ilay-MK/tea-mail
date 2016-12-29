"use strict";

$(function() {
    /* Добавление класса мода содержимого элемента хлебных крошек типа стрелки кроме первого элемента крошек */
    $('.breadcrumb-arrow__item').not(':first').find('.breadcrumb-arrow__item-content').addClass('breadcrumb-arrow__item-content_not-first-child-item');

    /* Добавление класса мода содержимого элемента хлебных крошек типа стрелки последнему элементу крошек */
    $('.breadcrumb-arrow__item:last-child .breadcrumb-arrow__item-content').addClass('breadcrumb-arrow__item-content_last-child-item');
});
