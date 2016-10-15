angular.module('myApp',[
	'ngRoute', 
	'dogs',
	'bananas'
	])
.controller('AppController',['$scope', function ($scope){
	$scope.test = 'test';
}])
.config(function ($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'dogs/dog.html',
		controller: 'DogController'
	}).
	when('/banana', {
		templateUrl: 'banana/banana.html',
		controller: 'bananaController'
	})
})
// .factory('AppMap', function (){
// 	return{

// 	}
// })