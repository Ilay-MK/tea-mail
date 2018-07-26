"use strict";

/// Parallax effect
function parallax(object, cssRule, baseline, unit, rate, maxOffsetY, minOffsetY) {
    if (getPageSize()[2] < 992) {
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

    /*
    console.log("----------------------");
    console.log("getPageSize()[3]: " + getPageSize()[3]);
    console.log("maxOffsetY: " + maxOffsetY);
    console.log("minOffsetY: " + minOffsetY);
    console.log("currToBlock: " + currToBlock);
    console.log("hOffset: " + hOffset);
    */

    if ( hOffset > maxOffsetY ) { hOffset = maxOffsetY; }
    if ( hOffset < minOffsetY ) { hOffset = minOffsetY; }

    /*
    console.log("hOffset + unit: " + hOffset + unit);
    console.log("----------------------");
    */

    /*object.addClass("parallax");*/
    object.css(cssRule, hOffset + unit);
}
