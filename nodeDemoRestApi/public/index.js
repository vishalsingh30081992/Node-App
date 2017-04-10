var app=angular.module("demoapp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'partials/home.html',
			controller:'HomeController'
		})
});