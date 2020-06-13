`use strict`;

mathsApp.controller("formulaeInfo", function($scope) {
    $scope.header = "Try";
    $scope.infos = [{

        header: `The Perimeter of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
        formula: `P = 4 * A`,
        explanation: `A is the length of one of the sides.`
    }, {
        header: `The perimeter of Circle`,
        information: `Perimeter is a length around the circle. `,
        formula: `P = 2 *π * R`,
        explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`
    }, {

        header: `The Perimeter of Triangle`,
        information: `Perimeter is the sum of three sides of triagle.`,
        formula: `P = A + B + C`,
        explanation: `A, B and C are the length of each of the sides.`
    }, {

        header: `The Perimeter of Rectangle`,
        information: `Perimeter is the sum of two times length and two times width. `,
        formula: `P = 2 * (A + B) `,
        explanation: `A is a length and B is a width.`
    }, {

        header: `The Perimeter of regular Polygon`,
        information: `Perimeter is the sum all equal sides of polygon.`,
        formula: `P = X * A `,
        explanation: `A is a length of one of the sides and X is number of the sides.`
    }, {

        header: `The Area of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
        formula: `Area =  A * A`,
        explanation: `A is the length of one of the sides.`
    }, {
        header: `The Area of Circle`,
        information: `The area of a circle is encolsed from his perimeter. `,
        formula: `Area = π * R * R`,
        explanation: `π is constant equal on 3,1415926535, R is a radius of a circle .`
    }, {

        header: `The Area of Triangle`,
        information: `Area is the sum of three sides of triagle.`,
        formula: `Area = 1/2 * B * H`,
        explanation: `B is a length of the base and H is vertical hight.`
    }, {

        header: `The Area of Rectangle`,
        information: `Area .... `,
        formula: `Area = W * H `,
        explanation: `W is a width and H is a height.`
    }, {

        header: `The Area of regular Polygon`,
        information: `Area is the ...`,
        formula: `Area = 1/2 * Perimeter * Apothem `,
        explanation: `Perimeter and Apothem.`
    }];
});