(function(){
	'use strict';
	
	angular
		.module('evaluon.user')
		.controller('Evaluation.InstitutionController', InstitutionController);
		
	function InstitutionController($scope, Institution, list){
		
		$scope.institutions = [];
		getInstitutions();
		
		function getInstitutions(){
			Institution.getList().then(function(data){
				$scope.institutions = list.doubled(data);
				console.log($scope.institutions);
			});
		}
	};
})();