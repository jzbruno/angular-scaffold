(function () {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = [
        '$routeProvider'
    ];

    function routes($routeProvider) {
        $routeProvider
            .when('/users', {
                title: 'Users',
                templateUrl: 'views/users.html',
                controller: 'UsersController',
                controllerAs: 'vm'
            })
            .when('/errors/notfound', {
                title: 'Not Found',
                templateUrl: 'views/notfound.html'
            })
            .otherwise({redirectTo: '/errors/notfound'});
    }
})();
