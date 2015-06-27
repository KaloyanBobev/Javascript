'use strict';

websiteApp.controller('StaraZagoraController',
    function StaraZagoraController($scope) {

        var staraZagoraInfo = {
            name: 'Стара Загора',
            location: {
                longitude: '25.6248617',
                latitude: ' 42.4192551'
            },
            teritory: 'Община Стара Загора заема територия от 1 019,4 км2, покриваща части от живописната Сърнена Средна гора и плодородната Горнотракийска низина. ',
            image: 'img/Stara-Zagora-3.jpg'
        };
        $scope.staraZagoraInfo = staraZagoraInfo;
        $scope.hideInfo = true;
        $scope.showInfo = showInfo;

        function showInfo() {
            if (hideInfo === true) {
                $scope.hideInfo = false;
            } else {
                $scope.hideInfo = true;
            }
        }

    });
