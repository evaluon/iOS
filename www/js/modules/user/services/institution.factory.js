(function(){
	'use strict';

	angular
		.module('evaluon.user')
		.factory('Institution', Institution);

	function Institution(Auth, $http, api, headers){

		return{

			getList: function(){
				var user = Auth.userLogged()
				,	tokenType = user.token_type
				,	token = user.access_token;

				return $http({
					method: 'get',
					url: api.institution,
					headers:{
						'Authorization': headers.authorization(tokenType, token)
					}
				}).then(function(response){
					return response.data.data;
				});
			},

			getResultList: function(){
				var user = Auth.userLogged()
				,	tokenType = user.token_type
				,	token = user.access_token;

				return $http({
					method: 'get',
					url: api.results,
					headers:{
						'Authorization': headers.authorization(tokenType, token)
					}
				}).then(function(response){
					return response.data.data;
				});
			}
		};
	}
})();
