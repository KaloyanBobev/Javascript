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
            .when(`/area`, {
                templateUrl: `template/area.html`
            })
            .when(`/volume`, {
                templateUrl: `template/volume.html`
            })
            .when(`/tests`, {
                templateUrl: `template/tests.html`
            })
            .otherwise({
                redirectTo: `/home`
            });
    })
    .constant('author', 'Kaloyan Bobev');