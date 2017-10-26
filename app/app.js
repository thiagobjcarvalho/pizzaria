'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            templateUrl: '/views/principal.html',
            controller: 'PizzaController'
        });
        $routeProvider.when('/tradicional/:id', {
            templateUrl: '/views/tradicional.html',
            controller: 'PizzaController'
        });
        $routeProvider.when('/montada', {
            templateUrl: '/views/montada.html',
            controller: 'PizzaController'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    }]);
