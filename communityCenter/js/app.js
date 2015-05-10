'use strict';

var newspaperApp = angular
    .module('newspaperApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'template/home.html'
            })
             .when('/books', {
                 templateUrl: 'template/books.html'
             })
            .when('/history', {
                templateUrl: 'template/history.html'
            })
            .when('/photo-gallery', {
                templateUrl: 'template/photo-gallery.html'
            })
            .when('/contacts', {
                templateUrl: 'template/contacts.html'
            })
            .otherwise({ redirectTo: '/home' })
    })
    .constant('author', 'Kaloyan Bobev');