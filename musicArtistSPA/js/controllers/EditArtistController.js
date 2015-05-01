'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope,artistData) {

        $scope.saveArtist = saveArtist;

        $scope.cancel = cancel;

        function saveArtist(artist, newArtistForm) {
            if (newArtistForm.$valid) {
                artistData.saveArtist(artist);
                alert('Artist '+ artist.name + ' ' + artist.created);
            }
            else {
                alert('Invalid');
            }
        }

        function cancel() {
            alert('cancel');
        }

    });