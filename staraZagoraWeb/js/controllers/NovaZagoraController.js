'use strict';

websiteApp.controller('NovaZagoraController',
    function NovaZagoraController($scope) {
        var novaZagoraInfo = {
            name: 'Нова Загора',
            location: {
                longitude: '26.016667',
                latitude: ' 42.483333'
            },
            teritory: 'Община Град Нова Загора е разположен в северната част на Горнотракийската низина. о̀ва Заго̀ра е град в Централна България, Област Сливен, на 32 км източно от Стара Загора и 37 километра западно от Сливен. Градът е втори по големина в областта след Сливен и е административен център на Община Нова Загора.',
            image: 'img/Nova-Zagora.jpg'
        };

        $scope.novaZagoraInfo = novaZagoraInfo;
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
