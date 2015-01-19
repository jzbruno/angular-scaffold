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
                templateUrl: 'users/users.html',
                controller: 'UsersController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/users'});
    }
})();
