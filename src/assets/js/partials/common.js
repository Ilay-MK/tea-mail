/*
    Third party
*/

"use strict";

$(function () {
    console.log('in common.js! ');
})

$(document).ready(function () {

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - HEADER - - - - - - - - - - - - - - -  */

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - COMMON - - - - - - - - - - - - - -  */

    // автоудаление классов анимации animate.css после проигрывания анимации
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* - - - - - - - - - - - - - - - - FUNCTION - - - - - - - - - - - - - - - */
