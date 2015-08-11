'use strict';

websiteApp.controller('MonumentsController',
    function MonumentsController($scope) {

        var monuments = [{
            id: 1,
            name: "Бранителите на Стара Загора",
            image: "img/monument-SZ.jpg",
            address: 'парк “Българско опълчение” – източна част на Стара Загора',
            text: "Паметникът е посветен на битката за Стара Загора от 31 юли 1877 г., в която Самарското знаме и българското опълчение получават своето бойно кръщение. Открит през 1977 г., по случай 100-годишнината от боевете за Стара Загора."
        }, {
            id: 2,
            name: "Шипка",
            image: "img/monument-Shipka.jpg",
            address: 'връх Шипка',
            text: "Националният парк-музей Шипка се намира на старопланинския връх Шипка (1326 м), на 28 км от Казанлък и на 22 км от Габрово. Паркът обхваща 26 паметника, възстановените позиции, батареи и землянки на бранителите на прохода Шипка по време на Руско-турската война от 1877 - 78 г. Паметникът на свободата е най-големият сред паметниците в парка. Неговият силует наподобява средновековна българска крепост и се вижда от десетки километри."
        }];

        $scope.monuments = monuments;
        $scope.hideText = true;
        $scope.showText = showText;

        function showText() {
            if ($scope.hideText === true) {
                $scope.hideText = false;
            } else {
                $scope.hideText = true;
            }
        }
    });