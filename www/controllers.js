var appControllers = angular.module('controllers',[]);

appControllers.controller('MainCtrl',['$scope',function($scope){
	$scope.nome = "MARIA BBB 19";
}]);
	
appControllers.controller('listacCtrl',['$scope',function($scope){
	$scope.nome = "pao de batata";
}]);

appControllers.controller('clienteCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addcliente/'+$scope.ncliente+'/'+$scope.cpfcliente+'/'+$scope.telefcliente+'/'+$scope.emailcliente+'/'+$scope.idadecliente);
	};
}]);

appControllers.controller('AddclienteCtrl',['$scope','$routeParams',function($scope,$routeParams){
	
	$scope.nmclit = $routeParams.ncliente;
	$scope.cpfclit = $routeParams.cpfcliente;
	$scope.telefoneclit = $routeParams.telefcliente;
	$scope.emailclit = $routeParams.emailcliente;
	$scope.idadeclit = $routeParams.idadecliente;
	console.log('Cheguei até aqui!');
	
}]);

appControllers.controller('exercicioCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addexercicio/'+$scope.tipexerc+'/'+$scope.quantperco+'/'+$scope.tempgast+'/'+$scope.caloperdi);
	};
}]);

appControllers.controller('AddexercicioCtrl',['$scope','$routeParams',function($scope,$routeParams){
	
	$scope.tpexercicio = $routeParams.tipexerc;
	$scope.quantiperc = $routeParams.quantperco;
	$scope.temgas = $routeParams.tempgast;
	$scope.calperd = $routeParams.caloperdi;
	console.log('Cheguei até aqui!');
	
}]);

appControllers.controller('imcCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addimc/'+$scope.alturac+'/'+$scope.pesoc);
	};
}]);

appControllers.controller('AddimcCtrl',['$scope','$routeParams',function($scope,$routeParams){
	
	$scope.alturacli = $routeParams.alturac;
	$scope.pesocli = $routeParams.pesoc;
	$scope.mediaimc = $routeParams.pesoc / ($routeParams.alturac * $routeParams.alturac);
	console.log('Cheguei até aqui!');
	
}]);

appControllers.controller('apagar-consultar-clienteCtrl',['$scope','$location',function($location){
    // $scope.enviar=function(){
	// $location.path('/apagar-consultar-cliente');
	// }
}]);

appControllers.controller('apagar-consultar-exercicioCtrl',['$scope','$location',function($location){
    // $scope.enviar=function(){
	// $location.path('/apagar-consultar-exercicio');
	// }
}]);

appControllers.controller('apagar-consultar-imcCtrl',['$scope','$location',function($location){
    // $scope.enviar=function(){
	// $location.path('/apagar-consultar-imc');
	// }
}]);
