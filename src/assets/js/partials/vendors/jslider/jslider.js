"use strict";

$(function() {

    jQuery("#catalog-filter__slider-price").slider({
        from: 0,
        to: 1000,
        step: 1,
        heterogeneity: ['50/100', '75/250'],
        limits: false,
        dimension: '&nbsp; руб.',
        skin: "round",
        onstatechange: function( value ) {
            /*console.dir( this );*/
            var p1, p2;

            p1 = value.split(';')[0];
            p2 = value.split(';')[1];

            $('#catalog-filter__input_price-min').val(p1);
            $('#catalog-filter__input_price-max').val(p2);
        },
        callback: function(value) {

        }
    });

    $('.jslider-value').hide();
});
