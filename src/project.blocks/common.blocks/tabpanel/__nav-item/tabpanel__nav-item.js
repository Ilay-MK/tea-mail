"use strict";

$(function() {

    /// Активация таба
    $(".tabpanel__nav-item").click(function () {
        var activeTarget, $scope;

        $scope = $( this ).closest('.tabpanel');

        $scope.find('.tabpanel__nav-item').removeClass('tabpanel__nav-item_active');
        activeTarget = $( this ).addClass('tabpanel__nav-item_active').attr('data-target');

        $scope.find('.tabpanel__pane').removeClass('tabpanel__pane_active');
        $scope.find( activeTarget ).addClass('tabpanel__pane_active');
    });

});
