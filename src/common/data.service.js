(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = [
        '$rootScope',
        '$http',
        'config'
    ];

    function dataService($rootScope, $http, config) {
        return {
            get: get
        };

        function get(collection) {
            $rootScope.loading += 1;

            return $http
                .get(config.API_URL + '/' + collection + '.json')
                .then(function (response) {
                    return response.data[collection];
                })
                .finally(function () {
                    $rootScope.loading -= 1;
                });
        }
    }
})();
