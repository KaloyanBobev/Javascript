'use strict';

musicApp.filter('status', function () {
    return function (input) {
        switch (input) {
            case 1: return "Sold out";
                break;
            case 2: return "Realased";
                break;
            case 3: return "Unrealased";
                break;
        }

    }
})