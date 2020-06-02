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

let info = new Vue({
    el: `#info`,
    data: {
        header: `The perimeter of Square`,
        formula: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles
        P = 4A
        A is the length of one of the sides.`
    }
});

$(document).ready(function () {
    $('#menubar').menu();

    $('#menubar').menu({
        position: { my: 'left top', at: 'left bottom' },
        blur: function () {
            $(this).menu('option', 'position', { my: 'left top', at: 'left bottom' });
        },
        focus: function (e, ui) {
            if ($('#menubar').get(0) !== $(ui).get(0).item.parent().get(0)) {
                $(this).menu('option', 'position', { my: 'left top', at: 'right top' });
            }
        },
    });
});