'use strict';

newspaperApp.factory('bookData', function ($resource) {
    var resource = $resource('data/books/:id', { id: '@id' });
    return {
        getBook: function (id) {
            return resource.get({id:id});
        }

    }
});