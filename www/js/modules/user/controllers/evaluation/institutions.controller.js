(function(){
	'use strict';
	
	angular
		.module('evaluon.user')
		.controller('Evaluation.InstitutionsController', InstitutionsController);
		
	function InstitutionsController($scope, Institution, list){
		
		$scope.institutions = [];
		getInstitutions();
		
		function getInstitutions(){
			Institution.getList().then(function(data){
				$scope.institutions = list.doubled(data);
			});
		};
	};
})();