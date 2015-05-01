'use strict';

musicApp.factory('artistData', function ($resource) {
    
    var resource = $resource('http://kaloyanbobev.com/demos/musicArtistSPA/data/artist/:id'+'.json', {id:'@id'})

    return {
        getArtist: function (id) {
            return resource.get({ id: id });
        },
        saveArtist: function (artist) {
            resource.save(artist);
        },
        getAllArtists: function () {
            return resource.query();
        }
    }
});