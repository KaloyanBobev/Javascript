'use strict';

var musicApp = angular
    .module('musicApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/template/artist-details.html'
            })
            .when('/edit-artist', {
                templateUrl: '/template/edit-artist.html'
            })
        .when('/artist-details/:id', {
            templateUrl: '/template/artist-details.html'
        })
        .otherwise({ redirectTo: '/home' })
    })
    .constant('author', 'Kalyan Bobev');