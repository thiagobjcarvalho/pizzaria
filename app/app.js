'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            templateUrl: '/views/principal.html'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    }]);
