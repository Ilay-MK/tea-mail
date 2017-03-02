"use strict";

/// Получаем ключ шага: на каком мы сейчас шаге.
function currentStep() {
    return $('.cart-steps__step_active').attr('data-step');
}

/// Отображение атрибутов соответствующего шага и контролов.
function displayStepAttributes() {
    var purposeAttr = "data-purpose__text_" + currentStep(),
        $currStep;

    if (currentStep())

    switch( currentStep() ) {
        case 'delivery':
            $currStep = $( ".cart__delivery" );
        break;

        case 'payment':
            $currStep = $( ".cart__payment" );
        break;

        default:
            $currStep = $( ".cart__purchases" );
    }

    $currStep.show();

    $('.cart__steps-ctrl[' + purposeAttr + ']').each(function() {
        $( this ).addClass('cart__steps-ctrl_displayed').find('.label').text( $( this ).attr(purposeAttr) );
    });
}

$(function() {
    displayStepAttributes();

    $('.cart-steps__step').bind('cssClassChanged', function() {
        // Удаляем класс обображения контролов
        $('.cart__steps-ctrl').removeClass('cart__steps-ctrl_displayed');

        // Прячем шаги
        $('.cart__step-container').hide();

        // Отработает, как только сменится класс
        displayStepAttributes();
        /* Переписать, чтоб не искало сново активный класс, а передовала
           текущий "хэндлер".
        */
    });
});
