'use strict';

musicApp.controller('PageController',
	function PageController($scope, author) {
	    $scope.author = author;
	    $scope.year = 2015;

	});