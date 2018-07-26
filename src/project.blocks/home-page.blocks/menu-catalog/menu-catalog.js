"use strict";

/* Переделать в классы! */
function menuCatalogRespTemp() {
    if (getPageSize()[2] < 992) {
        $('#menu-catalog .menu-catalog__content > .menu-catalog__list').removeClass('pull-left');
    }
    else {
        $('#menu-catalog .menu-catalog__content > .menu-catalog__list').addClass('pull-left');
    }

    if (getPageSize()[2] < 930) {
        $('#menu-catalog__link_other').siblings('.menu-catalog__list_sub').hide();
        $('#menu-catalog__link_dishes').siblings('.menu-catalog__list_sub').hide();
    }
    else {
        $('#menu-catalog__link_other').siblings('.menu-catalog__list_sub').show();
        $('#menu-catalog__link_dishes').siblings('.menu-catalog__list_sub').show();
    }

    if (getPageSize()[2] < 501) {
        $('#menu-catalog .menu-catalog__content > .menu-catalog__list > .menu-catalog__item > .menu-catalog__list_sub').css("margin-bottom", "20px");
    }
    else {
        $('#menu-catalog .menu-catalog__content > .menu-catalog__list > .menu-catalog__item > .menu-catalog__list_sub').css("margin-bottom", "auto");
    }
}

$(function() {
    menuCatalogRespTemp();

    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize(
        function() {
            menuCatalogRespTemp();
            detachPrependTo('#menu-catalog', '.navbar-collapse_catalog', '#place_menu-catalog', 992);
        }
    ));

    detachPrependTo('#menu-catalog', '.navbar-collapse_catalog', '#place_menu-catalog', 992);
});
