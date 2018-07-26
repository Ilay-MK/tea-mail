"use strict";

/// Связь инпутов и ползунка.
/// P.S. переписать всё.
function statechangeSliderPrice () {

    /*$('#catalog-filter__slider-price').slider("value");*/
    /*$('#catalog-filter__slider-price').slider("value", p1, p2);*/
    /*$('#catalog-filter__slider-price').slider("prc");*/
    /*$('#catalog-filter__slider-price').slider("prc", p1, p2);*/
    /*$('#catalog-filter__slider-price').slider("calculatedValue");*/

    /*$('#catalog-filter__slider-price').bind("DOMAttrModified propertychange", function (e) {
        alert( $('#catalog-filter__slider-price').slider("value") );
    });*/
    var value, inputMin, inputMax, min, max;

    inputMin = $('#catalog-filter__input_price-min');
    inputMax = $('#catalog-filter__input_price-max');

    min = inputMin.attr("min");
    max = inputMin.attr("max");

    inputMin.on('input paste copy change', function(e) {
        var val = min;
        if( !Number.isNaN( val = parseInt($( this ).val(), 10 )) ) {
            if( val > min ) {
                if( val > inputMax.val() ) {
                    $('#catalog-filter__slider-price').slider("value", inputMax.val());
                    inputMin.val(inputMax.val());
                }
                else {
                    $('#catalog-filter__slider-price').slider("value", val);
                }
            }
        }
    });

    inputMax.on('input paste copy change', function(e) {
        var val = max;
        if( !Number.isNaN( val = parseInt($( this ).val(), 10 )) ) {
            if( val < max ) {
                if( val < inputMin.val() ) {
                    $('#catalog-filter__slider-price').slider("value", inputMin.val(), inputMin.val());
                    inputMax.val(inputMin.val());
                }
                else {
                    $('#catalog-filter__slider-price').slider("value", inputMin.val(), val);
                }
            }
        }
    });
}

$(function() {
    statechangeSliderPrice();

    /// Событие click() с отменой перехода по ссылке
    $('.catalog-filter__link_reset').click(function (e) {
        e.preventDefault();

        var form = $( this ).closest("form");
        form[0].reset();
        form.find('input').trigger('change');
        form.submit();

    });
});
