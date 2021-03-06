`use strict`;

mathsApp.controller("formulaeInfo", function($scope) {

    $scope.infos = [{
        header: `The Perimeter of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
        formula: `P = 4 * A`,
        explanation: `A is the length of one of the sides.`,
        src: `../img/perimeter-square.png`
    }, {
        header: `The perimeter of Circle`,
        information: `Perimeter is a length around the circle. `,
        formula: `P = 2 *π * R`,
        explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`,
        src: `../img/perimeter-circle.png`
    }, {

        header: `The Perimeter of Triangle`,
        information: `Perimeter is the sum of three sides of triagle.`,
        formula: `P = A + B + C`,
        explanation: `A, B and C are the length of each of the sides.`,
        src: `../img/perimeter-triangle.png`
    }, {

        header: `The Perimeter of Rectangle`,
        information: `Perimeter is the sum of two times length and two times width. `,
        formula: `P = 2 * A + 2 * B `,
        explanation: `A is a length and B is a width.`,
        src: `../img/perimeter-rectangle.png`
    }, {

        header: `The Perimeter of regular Polygon`,
        information: `Perimeter is the sum all equal sides of polygon.`,
        formula: `P = X * A `,
        explanation: `A is a length of one of the sides and X is number of the sides.`,
        src: `../img/perimeter-polygon.png`
    }, {

        header: `The Area of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
        formula: `Area =  A * A`,
        explanation: `A is the length of one of the sides.`,
        src: `../img/area-square.png`
    }, {
        header: `The Area of Circle`,
        information: `The area of a circle is encolsed from his perimeter. `,
        formula: `Area = π * R * R`,
        explanation: `π is constant equal on 3,1415926535, R is a radius of a circle .`,
        src: `../img/perimeter-circle.png`
    }, {

        header: `The Area of Triangle`,
        information: `This is a polygon with three vertices and  three edges.`,
        formula: `Area = 1/2 * B * H`,
        explanation: `B is a length of the base and H is vertical hight.`,
        src: `../img/area-triangle.png`
    }, {

        header: `The Area of Rectangle`,
        information: ` Rectange is a quadrilateral with four right angles `,
        formula: `Area = W * H `,
        explanation: `W is a width and H is a height.`,
        src: `../img/area-rectangle.png`
    }, {

        header: `The Area of regular Polygon`,
        information: `A regular polygon is a polygon where each of the sides have the same length and also equal angles`,
        formula: `Area = 1/2 * P * A `,
        explanation: `P is a perimeter and A is for apothem.`,
        src: `../img/area-polygon.png`
    }];

    $scope.questions = [{
        id: 0,
        task: `The circle has a radius = 5.5 cm, find the circle circumference if the π = 3.14`,
        src: `../img/perimeter-circle.png`,
    }, {
        id: 1,
        task: `The rectangle have side A = 5 and side B = 8, find the rectange circumference`,
        src: `../img/perimeter-rectangle.png`,
    }, {
        id: 2,
        task: `The triangle have base B = 7 and height H = 9, find the triangle area`,
        src: `../img/area-triangle.png`,
    }, {
        id: 3,
        task: `The rectangle have width W = 5.6 and height = 4.5, find a rectange area`,
        src: `../img/area-rectangle.png`,
    }, {
        id: 4,
        task: `The polygon have number of sides X = 6 and side A = 7.8, find the polygon perimeter`,
        src: `../img/perimeter-polygon.png`,
    }];
});