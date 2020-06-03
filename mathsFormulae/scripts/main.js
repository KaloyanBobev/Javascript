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

let $sideA = $(`#tb-input`)
$sideA.on("keyup", function() {
    let $val = $sideA.val();
    let container = $(`#container`);
    if (isNaN($val)) {
        container.text(`That is not a number!`);
    } else {
        container.text(` ${$val * 4}`);
    }
});

$(function() {
    $("#accordion").accordion();
});

let info = new Vue({
    el: `#info`,
    data: {
        header: `The perimeter of Square`,
        information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles `,
        formula: `P = 4A`,
        explanation: `A is the length of one of the sides.`
    }
});