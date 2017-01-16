"use strict";

$(function() {

    /// Добавляем в label кол-во фотографий, которые не видны
    $('.carousel-indicators__label-count').html(
        +$( ".carousel-indicators__item" ).length - 4 + "+"
    );
});
