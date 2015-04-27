'use strict';

musicApp.factory('artistData', function ($http,$q) {


    return {
        getArtist: function (id) {

            var defer = $q.defer();

            $http({ method: 'GET', url: 'http://kaloyanbobev.com/demos/musicArtist/data/artist/' + id + '.json' })
               .success(function (data, status, headers, config) {
                   defer.resolve(data);
               })
               .error(function (data, status, headers, config) {
                   defer.reject(data);
               });

            return defer.promise;
        }

    }
});