"use strict";

/// Перемещение объектов
/// с условиями по ширине
/// @obj - объект, который необходимо перенести
/// @from - откуда производится перенос
/// @to - куда производится перенос
/// @width - при какой ширине производить перенос { < width }
function detachPrependTo(obj, from, to, width, insertAfter, inverse) {
    if (width === undefined) {
        width = 768;
    }
    if (insertAfter === undefined) {
        insertAfter = false;
    }
    if (inverse === undefined) {
        inverse = false;
    }

    var condition;

    if( inverse ) {
        condition = getPageSize()[2] > width-1;
        console.log(condition);
    }
    else {
        condition = getPageSize()[2] < width;
        console.log(condition);
    }

    if (condition) {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(from).find(obj).detach().insertAfter(to);
        }
        else {
            $(from).find(obj).detach().prependTo(to);
        }
    }
    else {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(to).siblings(obj).detach().prependTo(from);
        }
        else {
            $(to).find(obj).detach().prependTo(from);
        }
    }
}
