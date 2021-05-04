var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listacliente',{templateUrl: 'partials/listacliente.html',controller: 'listacCtrl'}).
	when('/novocliente',{templateUrl:'partials/novocliente.html',controller:'clienteCtrl'}).
	when('/addcliente/:ncliente/:cpfcliente/:telefcliente/:emailcliente/:idadecliente',{templateUrl:'partials/addcliente.html',controller:'AddclienteCtrl'});
	

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listaexercicio',{templateUrl: 'partials/listaexercicio.html',controller: 'listaeCtrl'}).
	when('/novoexercicio',{templateUrl:'partials/novoexercicio.html',controller:'exercicioCtrl'}).
	when('/addexercicio/:tipexerc/:quantperco/:tempgast/:caloperdi',{templateUrl:'partials/addexercicio.html',controller:'AddexercicioCtrl'});
	

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listaimc',{templateUrl: 'partials/listaimc.html',controller: 'listaeCtrl'}).
	when('/novoimc',{templateUrl:'partials/novoimc.html',controller:'imcCtrl'}).
	when('/addimc/:alturac/:pesoc',{templateUrl:'partials/addimc.html',controller:'AddimcCtrl'});
	
	$routeProvider.when('/apagar-consultar-cliente',{templateUrl: 'partials/apagar-consultar-cliente.html',controller: 'apagar-consultar-clienteCtrl'});
	
	$routeProvider.when('/apagar-consultar-exercicio',{templateUrl: 'partials/apagar-consultar-exercicio.html',controller: 'apagar-consultar-exercicioCtrl'});
	
	$routeProvider.when('/apagar-consultar-imc',{templateUrl: 'partials/apagar-consultar-imc.html',controller: 'apagar-consultar-imcCtrl'});
	
	$locationProvider.html5Mode(false).hashPrefix('!');
	
	
	

}]);

