'use strict';

newspaperApp.controller('BookDetailController',
    function BookDetailController($scope) {

   var book = {
        id: 1,
        author: "Иван Дамянов",
        name: "Влакът на детството",
        gender: "стихове за деца и възрастни",
        date: "юли 2011 г."
    }

   $scope.book = book;
});