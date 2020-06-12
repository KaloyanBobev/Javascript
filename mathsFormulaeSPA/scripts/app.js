`use strict`;
let mathsApp = angular.module(`mathsFormulaeApp`, [`ngRoute`])
    .config(function($routeProvider) {
        $routeProvider
            .when(`/`, {
                templateUrl: `template/home.html`
            })
            .when(`/perimeter`, {
                templateUrl: `template/perimeter.html`
            })
            .otherwise({
                redirectTo: `/home`
            });
    });