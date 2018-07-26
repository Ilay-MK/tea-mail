"use strict";

$(function() {
    $(".tabpanel__nav-item").bind('cssClassChanged', function() {
        var
            $parrent = $( this ).closest('.tabpanel'),
            n        = $parrent.find(".tabpanel__nav-item").index(this);

        // Удаляем класс активности у индикаторов
        $parrent.find('.tabpanel__indicator_active').removeClass('tabpanel__indicator_active');
        // Добавляем класс активности у индикатора
        $parrent.find('.tabpanel__indicator').eq(n).addClass('tabpanel__indicator_active');
    });
});
