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
            .when('/children-work', {
                templateUrl: 'template/children-work.html'
            })
            .when('/book-cover', {
                templateUrl: 'template/book-cover.html'
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