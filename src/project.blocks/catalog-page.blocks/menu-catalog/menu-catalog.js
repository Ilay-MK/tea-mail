"use strict";

/* Переписать нормально */
function detachInsertItemMenuCatalog() {
    var items_tea = [],
        target = '.menu-catalog__item_category_tea',
        $target = $(target),
        target_insert = '#menu-catalog__list_tea_',
        last_target_insert = '#menu-catalog__list_tea_3',
        $last_target_insert = $(last_target_insert),
        rate;

    /*$.each( { name: "John", lang: "JS" }, function(i, n){
        alert( "Name: " + i + ", Value: " + n );
    });

    $.each( [0,1,2], function(i, n){
        alert( "Item #" + i + ": " + n );
    });*/

    if ( (getPageSize()[2] < 1200) && (getPageSize()[2] > 991) ) {
        rate = 2;

        if ($last_target_insert.has( "li" ).length > 0) return false;
    }
    else {
        rate = 0;

        if ( !($last_target_insert.has( "li" ).length > 0) ) return false;
    }

    $target.each(function(index, domElem) {
        items_tea.push([]);

        $(this).each(function(i, dEl) {
            items_tea[index].push($(this).find('.menu-catalog__mark-item_992-1200').detach());
        });
    });

    $.each( items_tea, function(index, value) {
        $.each( items_tea[index], function(i, val) {
            if ( rate == 0 ) {
                $(target_insert + (index+rate)).append(items_tea[index][i]);
            }
            else {
                $(target_insert + (index+rate)).prepend(items_tea[index][i]);
            }
        });

        /*return (this != "four");*/
    });
}

$(function() {
    detachInsertItemMenuCatalog();

    /// Расширение функции
    $.extend(true, $(window).resize(), $(window).resize(function() {
        detachInsertItemMenuCatalog();
    }));
});
