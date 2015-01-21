(function () {
    'use strict';

    angular
        .module('app')
        .filter('ago', ago);

    function ago() {
        return function (timestamp) {
            if (timestamp) {
                return moment(timestamp).fromNow();
            }
        };
    }
})();
