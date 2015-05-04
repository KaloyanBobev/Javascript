'use strict';

var newspaperApp = angular
    .module('newspaperApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/history', {
                templateUrl: 'template/history.html'
            })
            .when('/photo-gallery', {
                templateUrl: 'template/photo-gallery.html'
            })
         .when('/contacts', {
             templateUrl: 'template/contacts.html'
         })
    })
    .constant('author', 'Kaloyan Bobev');