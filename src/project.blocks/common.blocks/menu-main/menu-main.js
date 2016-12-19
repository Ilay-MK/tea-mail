"use strict";

/// NAV TOP responsive nebu bg && margins
/// p.s. вынести всё в класы и скриптом только присваивание классов сделать!.
function menuMainResponsive() {
    if(+$(document).scrollTop() > 50) {
        if (getPageSize()[2] > 991) {
            $("#menu-main").css("background-size", "280% 219px");
            $("#menu-main").css("height", "202px");
            $("#menu-main").css("margin-top", "-110px");
            $("#menu-main").css("padding-top", "104px");
            $("#menu-main .logo").html('<img src="assets/img/nav/logo_mini.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#menu-main").css("background-size", "300% 219px");
            $("#menu-main").css("height", "219px");
            $("#menu-main").css("margin-top", "-117px");
            $("#menu-main").css("padding-top", "117px");
            $("#menu-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#menu-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#menu-main").css("background-size", "800% 219px");
        }
    }
    else {
        if (getPageSize()[2] > 991) {
            $("#menu-main").css("background-size", "180% 219px");
            $("#menu-main").css("height", "219px");
            $("#menu-main").css("margin-top", "-100px");
            $("#menu-main").css("padding-top", "100px");
            $("#menu-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#menu-main").css("background-size", "300% 219px");
            $("#menu-main").css("height", "219px");
            $("#menu-main").css("margin-top", "-100px");
            $("#menu-main").css("padding-top", "100px");
            $("#menu-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#menu-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#menu-main").css("background-size", "800% 219px");
        }
    }
}

$(function() {
    $.extend(true, $(document).scroll(), $(document).scroll(
        function () {
            menuMainResponsive();
        }
    ));

    $.extend(true, $(document).resize(), $(document).resize(
        function () {
            menuMainResponsive();
        }
    ));
});
