"use strict";

$(function () {
    console.log('in common.js! ');
})

$(document).ready(function () {

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - HEADER - - - - - - - - - - - - - - -  */

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - TEA_ROOM - - - - - - - - - - - - - -  */
    /*$("#tea_room").on('inview', function(event, isInView) {
        if (isInView) {

        } else {
            // element has gone out of viewport
        }
    });*/

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - - - - - COMMON - - - - - - - - - - - - - -  */

    $(document).scroll( function () {
        parallax($('.tea_mail--imgLink').addClass("parallax"), 'margin-top', -getPageSize()[3] / 2, "px", -4, 400, 25);
        parallax($('#tea_room-content').addClass("parallax"), 'margin-top', getPageSize()[3] / 2);
        parallax($('#tea_room').addClass("parallax-bg"), 'background-position-y', 0, "px", -4, 400, -400);
        parallax($('#dishes').addClass("parallax-bg"), 'background-position-y', -getPageSize()[3] / 6, "px", -10);
        parallax($('#map--address').addClass("parallax"), 'top', getPageSize()[3] / 2);
    } );

    // Автоудаление классов анимации animate.css после проигрывания анимации
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

//Parallax effect
function parallax(object, cssRule, baseline, unit, rate, maxOffsetY, minOffsetY) {
    if (getPageSize()[2] < 768) {
        return;
    }

    if (unit === undefined) {
        unit = "px";
    }
    if (maxOffsetY === undefined) {
        maxOffsetY = +object.outerHeight()/2;
    }
    if (minOffsetY === undefined) {
        minOffsetY = -object.outerHeight()/2;
    }
    if (rate === undefined) {
        rate = 4;
    }

    var currScrollPos = +$(document).scrollTop(),
        offsetFromTop = object.offset(),
        currToBlock   = +offsetFromTop.top - currScrollPos,
        hOffset       = (currToBlock + baseline) / rate;

    console.log("----------------------");
    console.log("getPageSize()[3]: " + getPageSize()[3]);
    console.log("maxOffsetY: " + maxOffsetY);
    console.log("minOffsetY: " + minOffsetY);
    console.log("currToBlock: " + currToBlock);
    console.log("hOffset: " + hOffset);

    if ( hOffset > maxOffsetY ) { hOffset = maxOffsetY; }
    if ( hOffset < minOffsetY ) { hOffset = minOffsetY; }

    console.log("hOffset + unit: " + hOffset + unit);
    console.log("----------------------");

    /*object.addClass("parallax");*/
    object.css(cssRule, hOffset + unit);
}

// Кроссбраузерное получение размеров окна на JS
function getPageSize() {
    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight, pageWidth, pageHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }

    return [pageWidth, pageHeight, windowWidth, windowHeight];
}
