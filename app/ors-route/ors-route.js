'use strict';
var orsRoute = 'ors-route';
import 'angular-route';

var app = angular.module(orsRoute, ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider
		.html5Mode(true)
		.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl: 'ors-route/tmpl/home.html'
		})
		.when('/product', {
			templateUrl: 'ors-route/tmpl/product.html',
			controller: 'ProductCtrl',
			controllerAs: '$ctrl'
		})
		.when('/service', {
			templateUrl: 'ors-route/tmpl/service.html'
		})
		.when('/contact', {
			templateUrl: 'ors-route/tmpl/contact.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
