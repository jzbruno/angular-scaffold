(function () {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService);

	dataService.$inject = ['$http'];

	function dataService($http) {
		return {
			get: get
		};

		function get(collection) {
			return $http.get('/data/' + collection + '.json').then(function (response) {
				console.log(response);
				return response.data[collection];
			});
		}
	}
})();
