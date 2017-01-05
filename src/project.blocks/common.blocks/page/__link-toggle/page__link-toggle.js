"use strict";

$(function() {

    /// Событие click() с отменой перехода по ссылке
    /// Toggle описание страницы.
    $(".page__description-toggle").click(function (e) {
        var linkToggle = $( this );
        e.preventDefault();

        /*$(this).prev();*/
        /*$(this).prev(".page__description");*/
        linkToggle.siblings(".page__description").animate({
            height: "100%"
          }, 1000, "linear", function() {
            linkToggle.fadeToggle();
          });

    });
});
