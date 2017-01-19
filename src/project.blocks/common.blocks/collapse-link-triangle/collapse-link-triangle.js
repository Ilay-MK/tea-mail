"use strict";

$(function() {
    /// Расширение функции
    /*$.extend(true, $('.collapse-link-triangle').click(), $('.collapse-link-triangle').click( function (e) {
        e.preventDefault();
        var obj;

        obj = $( this ).attr("data-target");

        if($(obj).is(':hidden')) {
            $( this ).addClass('collapse-link-triangle_active');
        }
        else {
            $( this ).removeClass('collapse-link-triangle_active');
        }
    }));*/

    /*
    $('.collapse-link-triangle').click( function (e) {
        e.preventDefault();
        var obj;

        obj = $( this ).attr("data-target");

        if($(obj).is(':hidden')) {
            $( this ).addClass('collapse-link-triangle_active');
        }
        else {
            $( this ).removeClass('collapse-link-triangle_active');
        }
    });
    */

    $('.collapse-link-triangle').click( function (e) {
        e.preventDefault();


        if( $( this ).hasClass('collapse-link-triangle_active') ) {
            $( this ).removeClass('collapse-link-triangle_active');
        }
        else {
            $( this ).addClass('collapse-link-triangle_active');
        }
    });

});
