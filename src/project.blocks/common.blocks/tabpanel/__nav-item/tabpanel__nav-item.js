"use strict";

$(function() {

    /// Активация таба
    $(".tabpanel__nav-item").click(function (e) {
        e.preventDefault();
        var activeTarget;

        $('.tabpanel__nav-item').removeClass('tabpanel__nav-item_active');
        activeTarget = $( this ).addClass('tabpanel__nav-item_active').attr('data-target');

        $('.tabpanel__pane').removeClass('tabpanel__pane_active');
        $( activeTarget ).addClass('tabpanel__pane_active');
    });

});
