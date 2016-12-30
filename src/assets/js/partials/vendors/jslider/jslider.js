"use strict";

$(function() {

    jQuery("#catalog-filter__slider-price").slider({
        from: 0,
        to: 1000,
        step: 1,
        heterogeneity: ['50/100', '75/250'],
        limits: true,
        dimension: '&nbsp; руб.',
        skin: "round"
    });
});
