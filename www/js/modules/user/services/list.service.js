(function(){
	'use strict';
	
	angular
		.module('evaluon.user')
		.service('list', list);
		
	function list(_){
		
		this.doubled = doubled;
		
		function doubled(list, newL){
			 if(!newL) newL = [];
       			return list.length == 0 ?
       			newL :
        		doubled(
            	_.tail(list, 2),
            	_.union(newL, [_.head(list, 2)])
        		);	
		};
		
	};
})();