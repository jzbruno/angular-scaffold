(function () {
    'use strict';

    angular
        .module('app')
        .directive('modal', modal);

    function modal() {
        return {
            restrict: 'E',
            templateUrl: 'views/modal.html',
            replace: true,
            transclude: true
        };
    }
})();
