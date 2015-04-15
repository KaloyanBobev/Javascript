'use strict';

musicApp.controller('ArtistDetailsController',
    function ArtistDetailsController($scope) {
    var artist = {
        id: 1,
        name: "Linkin Park",
        image: "/img/1.jpg",
        created: "01/10/1998",
        additionalInformation: {
            location: "USA",
            bandMembers: ["Chester Benington", "Mike Shinoda", "Felix", "Joseph Han", "Rob Burton"],
            albums: 12,
            singles: 25
        },
        albums: [{
            id: 1,
            name: "Hybrid Theory",
            image: "/img/hybrid-theory.jpg",
            year: 1999,
            songs: 12,
            rating: 0,
            price: 12,
            status: 1
        }, {
            id: 2,
            name: "Meteora",
            image: "/img/meteora.jpg",
            year: 2003, "songs": 10,
            rating: 0,
            price: 11,
            status: 2
        }, {
            id: 3,
            name: "A thousand suns",
            image: "/img/thousand-suns.png",
            year: 2008,
            songs: 14,
            rating: 0,
            price: 10,
            status: 3
        }]
    }

    $scope.artist = artist;

    $scope.hideInformation = true;
    $scope.showInfoText = "Show";
    $scope.showMoreInfo = showMoreInfo;

    $scope.HideBandMembers = true;
    $scope.showBandMembersText = "Show";
    $scope.showBandMembers = showMembers;

    $scope.boldFontCss = {
        fontWeight:'bold'
    };

    $scope.greenTextClass = 'blue-text';
    $scope.grayBackroundClass = "gray-background";

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
    });