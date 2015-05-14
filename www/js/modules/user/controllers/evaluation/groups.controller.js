(function(){
	'use strict';

	angular
		.module('evaluon.user')
		.controller('Evaluation.GroupsController', GroupsController);

	function GroupsController($scope, $state, Group, list){

		var institution = $state.params.id;

		$scope.groups = [];

		$scope.routes = {
			tests: 'evaluation-tests'
		};

		getGroups();

		function getGroups(){

			Group.getList(institution).then(function(data){

				$scope.groups = list.doubled(data);
			});
		};
	};
})();
