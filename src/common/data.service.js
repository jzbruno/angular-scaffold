(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = [
        '$rootScope',
        '$http'
    ];

    function dataService($rootScope, $http) {
        return {
            get: get
        };

        function get(collection) {
            $rootScope.loading += 1;

            return $http
                .get('/data/' + collection + '.json')
                .then(function (response) {
                    return response.data[collection];
                })
                .finally(function () {
                    $rootScope.loading -= 1;
                });
        }
    }
})();
