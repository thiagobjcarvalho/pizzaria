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

        $routeProvider.when('/monte-sua-pizza', {
            templateUrl: '/views/montagem.html',
            controller: 'MontagemController'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    }]);
