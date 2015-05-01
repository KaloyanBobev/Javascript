'use strict';

musicApp.directive('searchArtists', function () {
    return {
        restrict:'EA',
        templateUrl: 'template/directives/search-artist.html',
        replace: true,
        scope: {

        }

    }
})