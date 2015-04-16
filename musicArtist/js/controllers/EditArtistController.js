'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope) {
        $scope.saveArtist = saveArtist;
        $scope.cancel = cancel;

        function saveArtist(artist) {
            alert(artist.name + " " + artist.created);
        }

        function cancel() {
            alert('cancel');
        }

    });