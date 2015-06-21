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
            .otherwise({
                redirectTo: '/home'
            })


    });
