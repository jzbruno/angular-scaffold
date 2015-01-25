(function () {
    'use strict';

    angular
        .module('app')
        .directive('tableFilter', tableFilter);

    function tableFilter() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/tableFilter.html',
            scope: {
                fields: '=',
                filter: '=',
                keywords: '='
            },
            link: link
        };

        function link(scope) {
            scope.addFilter = addFilter;
            scope.removeFilter = removeFilter;

            function addFilter() {
                if (!scope.filter) {
                    scope.filter = {};
                }
                scope.filter[scope.filterName] = scope.filterValue;
            }

            function removeFilter(field) {
                delete scope.filter[field];

                if (Object.keys(scope.filter).length === 0) {
                    scope.filter = null;
                }
            }
        }
    }
})();
