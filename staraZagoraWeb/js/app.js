'use strict';


var websiteApp = angular
    .module('websiteApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'template/home.html'
            })
            .when('/landmarks', {
                templateUrl: 'template/landmarks.html'
            })
            .when('/romanExcavations', {
                templateUrl: 'template/romanExcavations.html'
            })
            .when('/museum', {
                templateUrl: 'template/museum.html'
            })
            .when('/monuments', {
                templateUrl: 'template/monuments.html'
            })
            .when('/zoopark', {
                templateUrl: 'template/zoopark.html'
            })
            .when('/cites', {
                templateUrl: 'template/cites.html'
            })
            .when('/stara-zagora', {
                templateUrl: 'template/city-stara-zagora.html'
            })
            .otherwise({
                redirectTo: '/home'
            })


    });
