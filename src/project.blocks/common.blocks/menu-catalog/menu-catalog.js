"use strict";

/// Menu catalog responsive  nebu bg && margins
/// p.s. вынести всё в класыы и скриптом только присваивание классов сделать!.
function menuCatalogResponsive() {
    if(+$(document).scrollTop() > 50) {
        /* opened */
        $(".nav-catalog-opened").css("padding-top", "60px");
    }
    else {
        /* opened */
        $(".nav-catalog-opened").css("padding-top", "100px");
    }
}

$(function() {
    $.extend(true, $(document).scroll(),
        function () {
            menuCatalogResponsive();
        }
    );

    $.extend(true, $(document).resize(),
        function () {
            menuCatalogResponsive();
        }
    );
});
