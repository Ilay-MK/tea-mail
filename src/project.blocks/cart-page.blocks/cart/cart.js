"use strict";

/// Получаем ключ шага: на каком мы сейчас шаге.
function currentStep() {
    return $('.cart-steps__step_active').attr('data-step');
}

/// Отображение атрибутов соответствующего шага и контролов.
function displayStepAttributes() {
    var purposeAttr = "data-purpose__text_" + currentStep();

    $('.cart__steps-ctrl[' + purposeAttr + ']').each(function() {
        $( this ).addClass('cart__steps-ctrl_displayed').find('.label').text( $( this ).attr(purposeAttr) );
    });
}

$(function() {
    displayStepAttributes();

    $('.cart-steps__step').bind('cssClassChanged', function() {
        // Удаляем класс обображения контролов
        $('.cart__steps-ctrl').removeClass('cart__steps-ctrl_displayed');

        // Отработает, как только сменится класс
        displayStepAttributes();
        /* Переписать, чтоб не искало сново активный класс, а передовала
           текущий "хэндлер".
        */
    });
});
