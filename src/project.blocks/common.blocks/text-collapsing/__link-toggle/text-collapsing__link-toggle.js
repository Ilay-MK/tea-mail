"use strict";

$(function() {

    /// Событие click() с отменой перехода по ссылке
    /// Toggle описание страницы.
    $(".text-collapsing__link-toggle").click(function (e) {
        e.preventDefault();
        var linkToggle, obj;

        linkToggle  = $( this );
        obj         = linkToggle.attr("data-target");

        if($(obj).attr('aria-expanded') == 'false') {
            linkToggle.text("Свернуть описание");
        }
        else {
            linkToggle.text("Читать полностью");
        }

    });

});
