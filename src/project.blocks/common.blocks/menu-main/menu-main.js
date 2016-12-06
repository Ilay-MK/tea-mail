"use strict";

/// NAV TOP responsive nebu bg && margins
/// p.s. вынести всё в класыы и скриптом только присваивание классов сделать!.
function menuMainResponsive() {
    if(+$(document).scrollTop() > 50) {
        if (getPageSize()[2] > 991) {
            $("#nav-main").css("background-size", "280% 219px");
            $("#nav-main").css("height", "202px");
            $("#nav-main").css("margin-top", "-110px");
            $("#nav-main").css("padding-top", "104px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo_mini.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#nav-main").css("background-size", "300% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-117px");
            $("#nav-main").css("padding-top", "117px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#nav-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#nav-main").css("background-size", "800% 219px");
        }
    }
    else {
        if (getPageSize()[2] > 991) {
            $("#nav-main").css("background-size", "180% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-100px");
            $("#nav-main").css("padding-top", "100px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 992) {
            $("#nav-main").css("background-size", "300% 219px");
            $("#nav-main").css("height", "219px");
            $("#nav-main").css("margin-top", "-117px");
            $("#nav-main").css("padding-top", "117px");
            $("#nav-main .logo").html('<img src="assets/img/nav/logo.png" alt="">');
        }

        if (getPageSize()[2] < 768) {
            $("#nav-main").css("background-size", "500% 219px");
        }

        if (getPageSize()[2] < 555) {
            $("#nav-main").css("background-size", "800% 219px");
        }
    }
}

$(function() {
    $.extend(true, $(document).scroll(),
        function () {
            menuMainResponsive();
        }
    );

    $.extend(true, $(document).resize(),
        function () {
            menuMainResponsive();
        }
    );
});
