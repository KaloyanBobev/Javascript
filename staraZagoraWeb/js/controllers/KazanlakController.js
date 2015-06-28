'use strict';

websiteApp.controller('KazanlakController',
    function KazanlakController($scope) {
        var kazanlakInfo = {
            name: 'Казанлък',
            location: {
                longitude: '25.400000',
                latitude: '42.616667'
            },
            teritory: 'Казанлък е център на Розовата долина. В града се намира най-голямата и най-добре запазена в страната Тракийска гробница, включена в списъка на ЮНЕСКО и Музеят на розата. Наблизо е античният град Севтополис и Долината на тракийските царе.',
            image: 'img/Kazanlak.jpg'
        };

        $scope.kazanlakInfo = kazanlakInfo;
        $scope.hideInfo = true;
        $scope.showInfo = showInfo;

        function showInfo() {
            if ($scope.hideInfo === true) {
                $scope.hideInfo = false;
            } else {
                $scope.hideInfo = true;
            }
        }
    });
