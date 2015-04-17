'use strict';

musicApp.controller('EditArtistController',
    function EditArtistController($scope) {

        

        $scope.saveArtist = saveArtist;

        $scope.cancel = cancel;

        function saveArtist(artist, newArtistForm) {
            if (newArtistForm.$valid) {
                alert(artist.name + ' ' + artist.created);
            }
            else {
                alert('Invlaid');
            }
        }

        function cancel() {
            alert('cancel');
        }

    });