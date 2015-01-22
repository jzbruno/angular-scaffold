(function () {
    'use strict';

    var modules = [
        'ngRoute'
    ];

    angular
        .module('app', modules)
        .run(init);

    init.$inject = [
        '$rootScope'
    ];

    function init($rootScope) {
        $rootScope.loading = 0;

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
        });
    }
})();
