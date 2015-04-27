'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController($scope,artistData) {
   

         artistData.getArtist(4).then( function(data) {
             $scope.artist = data;
        });

    $scope.hideInformation = true;
    $scope.showInfoText = "Show";
    $scope.showMoreInfo = showMoreInfo;

    $scope.HideBandMembers = true;
    $scope.showBandMembersText = "Show";
    $scope.showBandMembers = showMembers;

    $scope.boldFontCss = {
        fontWeight:'bold'
    };

    $scope.greenTextClass = 'green-text';
    $scope.grayBackroundClass = "gray-background";

    $scope.upVoteRating = upVoteRating;
    $scope.downVoteRating = downVoteRating;

    $scope.sort = 'id';

        function showMoreInfo() {
            if ($scope.hideInformation == true) {
                $scope.hideInformation = false;
                $scope.showInfoText = "Hide";
            }
            else {
                $scope.hideInformation = true;
                $scope.showInfoText = "Show";
            }
           
        }

        function showMembers() {
            if ($scope.HideBandMembers == true) {
                $scope.HideBandMembers = false;
                $scope.showBandMembersText = "Hide";
            }
            else {
                $scope.HideBandMembers = true;
                $scope.showBandMembersText = "Show";
            }
        }

        function upVoteRating(album) {
            album.rating += 1;
        }

        function downVoteRating(album) {
            if (album.rating >0) {
                album.rating -= 1;
            }
        }
    });