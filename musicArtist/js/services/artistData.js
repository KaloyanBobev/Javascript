'use strict';

musicApp.factory('artistData', function ($http) {


    return {
        getArtist: function (id, successcb) {
            $http({ method: 'GET', url: 'http://kaloyanbobev.com/demos/musicArtist/data/artist/' + id+'.json' })
               .success(function (data, status, headers, config) {
                   successcb(data);
               })
               .error(function (data, status, headers, config) {

               });

        }

    }
});