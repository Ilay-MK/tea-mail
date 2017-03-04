"use strict";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - VARIABLES - - - - - - - - - - - - - - */



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - FUNCTION - - - - - - - - - - - - - -  */



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - DOCUMENT READY - - - - - - - - - - - -  */

$( document ).ready(function() {
    // Handler for .ready() called.

    /* --------- */
    /* -= MAP =- */
    /* Перемещение карты во вкладку доставки "Самовывоз" и обратно по условию: ширина < 992px */
    detachPrependTo('#gmap', '#map-container', '.delivery__tabpanel-content-map', 992, false, true);

    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            detachPrependTo('#gmap', '#map-container', '.delivery__tabpanel-content-map', 992, false, true);
        }
    ));
});
