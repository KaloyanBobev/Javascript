'use strict';

websiteApp.controller('ZooparkController',
    function ZooparkController($scope) {

        var zoopark = [{
            id: 1,
            name: "Зоопарк Стара Загора",
            image: "img/zoopark.jpg",
            address: 'Парк „Митрополит Методий Кусев“',
            text: "Началото се поставя през 1956 година, когато от трудовото поделение в града улавят избягал вероятно елен лопатар от гориста местност „Орманя” край град Ямбол.  Поделението подарява елена на тогавашното предприятие „Градини и паркове”. Градския народен съвет решава с него да се постави началото на бъдещата зоологическа градина. На мястото на сега съществуващата бадминтон площадка е бил първият дом на зоокъта. През 1957 година е заградена поляна около 4 дка с телена ограда. Не след дълго ловците Димитър Лалев от с. Шейново и Иван Кратунков от град Казанлък залавят две мечета от Шипченския балкан и ги даряват на зоокъта в Стара Загора. Кръщават ги Иванка и Димитринка. Тогавашния директор на зоопарка в София дарява на втория до тогава в страната зоокът лама и лъв. В началото на март през 1960 година вече има повече от 40 животни."
        }, {
            id: 2,
            name: "Парк Загора",
            image: "img/Zagorka.jpg",
            address: 'Парк „Загорка“',
            text: "Паркът заема площ от 1060 дка, залесен е от 1958 г. В него се намира “Старият чинар”, на възраст около 500 г., обявен за природна забележителност. През парка протича река Бедечка, дълга 34 км, ляв приток на Съзлийка."
        }];

        $scope.zoopark = zoopark;
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
