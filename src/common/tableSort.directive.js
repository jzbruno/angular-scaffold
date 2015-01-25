(function () {
    'use strict';

    angular
        .module('app')
        .directive('tableSort', tableSort);

    function tableSort() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/tableSort.html',
            scope: {
                name: '@',
                sort: '='
            },
            link: link
        };

        function link(scope) {
            if (!scope.sort) {
                scope.sort = {
                    by: 'name',
                    reverse: false
                };
            }
            scope.toggleSort = toggleSort;

            function toggleSort(name) {
                if (scope.sort.by === name) {
                    scope.sort.reverse = !scope.sort.reverse;
                } else {
                    scope.sort.by = name;
                    scope.sort.reverse = false;
                }
            }
        }
    }
})();
