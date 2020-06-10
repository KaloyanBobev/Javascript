// let nav = new Vue({
//     el: `#nav`,
//     data: {
//         items: [
//             { text: `Perimeter` },
//             { text: `Area` }
//         ],
//         figures: [
//             { text: `Square` },
//             { text: `Rectangle` },
//             { text: `Circle` },
//             { polygon: `Polygon` },
//             { text: `Triangle` },
//         ]
//     },
// });

let infoSquare = new Vue({
    el: `#infoSquare`,
    data: {
        header: `The Perimeter of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
        formula: `P = 4 * A`,
        explanation: `A is the length of one of the sides.`
    }
});

let infoCircle = new Vue({
    el: `#infoCircle`,
    data: {
        header: `The perimeter of Cirlce`,
        information: `Perimeter is a length around the circle. `,
        formula: `P = 2 *π * R`,
        explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`
    }
});

let infoTriangle = new Vue({
    el: `#infoTriangle`,
    data: {
        header: `The Perimeter of Triangle`,
        information: `Perimeter is the sum of three sides of triagle.`,
        formula: `P = A + B + C`,
        explanation: `A, B and C are the length of each of the sides.`
    }
});

let infoRectangle = new Vue({
    el: `#infoRectangle`,
    data: {
        header: `The Perimeter of Rectangle`,
        information: `Perimeter is the sum of two times length and two times width. `,
        formula: `P = 2 * (A + B) `,
        explanation: `A is a length and B is a width.`
    }
});

let infoPolygon = new Vue({
    el: `#infoPolygon`,
    data: {
        header: `The Perimeter of regular Polygon`,
        information: `Perimeter is the sum all equal sides of polygon.`,
        formula: `P = X * A `,
        explanation: `A is a length of one of the sides and X is number of the sides.`
    }
});