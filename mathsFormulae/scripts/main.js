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

function calculate(id, container, formula) {
    id.on("keyup", function() {
        let $val = id.val();
        if (isNaN($val)) {
            container.text(`That is not a number!`);
        } else {
            container.text(formula * $val);
        }
    });
}

calculate($(`#tb-input-square`), $(`#container-square`), 4);
calculate($(`#tb-input-radius`), $(`#container-circle`), 2 * Math.PI);

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