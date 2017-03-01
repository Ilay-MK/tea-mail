"use strict";

/// Переопределение метода добавления класса jQuery.
(function(){
    //Сохраняем ссылку на стандартный метод jQuery
    var originalAddClassMethod = jQuery.fn.addClass;
    //Переопределяем
    $.fn.addClass = function(){
        var result = originalAddClassMethod.apply(this, arguments);
        //Инициализируем событие смены класса
        $(this).trigger('cssClassChanged');
        return result;
    }
})();

/*
$(function(){
    $("#test").bind('cssClassChanged', function(){
        //Отработает, как только сменится класс
    });
});
*/
