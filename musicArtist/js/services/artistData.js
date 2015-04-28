'use strict';

musicApp.factory('artistData', function ($resource) {
    
    var resource = $resource('http://kaloyanbobev.com/demos/musicArtist/data/artist/ :id', {id:'@id'})

    return {
        getArtist: function (id) {
            return resource.get({ id: id });
           

        }

    }
});