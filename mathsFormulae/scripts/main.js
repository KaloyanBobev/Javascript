let nav = new Vue({
    el: `#nav`,
    data: {
        items: [
            { text: `Perimeter` },
            { text: `Area` }
        ],
        figures: [
            { text: `Square` },
            { text: `Rectangle` },
            { text: `Circle` },
            { text: `Polygon` },
            { text: `Parallelogram` },
        ]
    },
});

$(document).ready(function() {
    $('#menubar').menu();
    $('#menubar').menu({
        position: { my: 'left top', at: 'left bottom' },
        blur: function() {
            $(this).menu('option', 'position', { my: 'left top', at: 'left bottom' });
        },
        focus: function(e, ui) {
            if ($('#menubar').get(0) !== $(ui).get(0).item.parent().get(0)) {
                $(this).menu('option', 'position', { my: 'left top', at: 'right top' });
            }
        },
    });
});

$(function() {
    $("#accordion").accordion();
    let container = $(`#container-circle`);

});

function calculateWithOneVariable(id, container, formula) {
    id.on("keyup", function() {
        let $val = id.val();
        if (isNaN($val)) {
            container.text(`That is not a number!`);
        } else {
            container.text(formula * $val);
        }
    });
};

let btn = $(`#btn-trianlge`);

function calculateWitTriangle(sideA, sideB, sideC, container) {
    btn.on("click", function() {
        let $sideAVal = +sideA.val();
        let $sideBVal = +sideB.val();
        let $sideCVal = +sideC.val();
        if (isNaN(sideA) && isNaN(sideB) && isNaN(sideC)) {
            container.text($sideAVal + $sideBVal + $sideCVal);
        } else {
            container.text(`input all three sides!`);
        }
    });
};

calculateWithOneVariable($(`#tb-input-square`), $(`#container-square`), 4);
calculateWithOneVariable($(`#tb-input-radius`), $(`#container-circle`), 2 * Math.PI);
calculateWitTriangle($(`#tb-input-triangle-a`), $(`#tb-input-triangle-b`), $(`#tb-input-triangle-c`), $(`#container-triangle`));
let infoSquare = new Vue({
    el: `#infoSquare`,
    data: {
        header: `The Perimeter of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles `,
        formula: `P = 4A`,
        explanation: `A is the length of one of the sides.`
    }
});

let infoCircle = new Vue({
    el: `#infoCircle`,
    data: {
        header: `The perimeter of Cirlce`,
        information: `Perimeter is a length around the circle `,
        formula: `P = 2πR`,
        explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`
    }
});

let infoTriangle = new Vue({
    el: `#infoTriangle`,
    data: {
        header: `The Perimeter of Triangle`,
        information: `Perimeter is the sum of three sides of triagle`,
        formula: `P = A + B + C`,
        explanation: `A, B and C are the length of each of the sides.`
    }
});