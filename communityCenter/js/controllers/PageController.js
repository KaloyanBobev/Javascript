'use strict';

newspaperApp.controller('PageController',
    function PageController($scope, author) {

        $scope.author = author;
        $scope.year = '2015-2020';
    });