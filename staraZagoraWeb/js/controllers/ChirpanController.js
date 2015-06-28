'use strict';

websiteApp.controller('ChirpanController',
    function ChirpanController($scope) {
        var chirpanInfo = {
            name: 'Чирпан',
            location: {
                longitude: '25.333333',
                latitude: '42.200000'
            },
            teritory: 'Чирпан е град в Централна България, Област Стара Загора, и е разположен в сърцето на Тракия. Той е трети по големина в областта след Стара Загора и Казанлък. Градът е административен център на община Чирпан и има богати културни традиции. Чирпан е известен със своите ножове и като родното място на поета и революционер Пейо Яворов.',
            image: 'img/chirpan.jpg'
        };

        $scope.chirpanInfo = chirpanInfo;
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
