(function () {
	'use strict';

	angular
		.module('app')
		.controller('UsersController', UsersController);

	UsersController.$inject = [
		'dataService'
	];

	function UsersController(dataService) {
		var vm = this;
		vm.users = [];
		vm.user = {};
		vm.selectUser = selectUser;

		activate();

		function activate() {
			dataService
				.get('users')
				.then(function (users) {
					console.log(users);
					vm.users = users;
				});
		}

		function selectUser(user) {
			vm.user = user;
		}
	}
})();
