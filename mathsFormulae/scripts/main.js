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

$('#container li').hover(
    function() {
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(200);
    }
);


$(function() {
    $("#accordion").accordion();
    let container = $(`#container`);

});

function calculateWithOneVariable(id, container, formula) {
    id.on("keyup", function() {
        let $val = +id.val();
        if (isNaN($val)) {
            container.text(`That is not a number!`);
        } else {
            container.text(formula * $val);
        }
    });
};

let btnTriangle = $(`#btn-trianlge`);

function calculateTriangle(sideA, sideB, sideC, container) {
    btnTriangle.on("click", function() {
        let $sideAVal = +sideA.val();
        let $sideBVal = +sideB.val();
        let $sideCVal = +sideC.val();
        // if ($sideAVal < $sideBVal + $sideCVal &&
        //     $sideBVal < $sideAVal + $sideCVal &&
        //     $sideCVal < $sideAVal + $sideBVal) {
        //     container.text(`The triangle with that sides can not exist!`);
        // } else 
        if (!isNaN($sideAVal) && !isNaN($sideBVal) && !isNaN($sideCVal)) {
            container.text($sideAVal + $sideBVal + $sideCVal);
        } else {
            container.text(`input all three sides!`);
        }
    });
};

let btnRectangle = $(`#btn-rectangle`);

function calculateRectangle(sideA, sideB, container) {
    btnRectangle.on("click", function() {
        let $sideAVal = +sideA.val();
        let $sideBVal = +sideB.val();
        if ($sideAVal === $sideBVal) {
            container.text(`Lendth must be different than width!`);
        } else if (!isNaN($sideAVal) && !isNaN($sideBVal)) {
            container.text(2 * ($sideAVal + $sideBVal));
        } else {
            container.text(`Input width and length!`);
        }
    });
};

let btnPolygon = $(`#btn-polygon`);

function calculatePolygon(sideA, numberSides, container) {
    btnPolygon.on("click", function() {
        let $sideAVal = +sideA.val();
        let $numberSidesVal = +numberSides.val();
        if ($numberSidesVal <= 2) {
            container.text(`Can not draw polygon with less than three sides!`);
        } else if (!isNaN($sideAVal) && !isNaN($numberSidesVal)) {
            container.text($sideAVal * $numberSidesVal);
        } else {
            container.text(`Input numbers and length of side A!`);
        }
    });
};

calculateWithOneVariable($(`#tb-input-square`), $(`#container-square`), 4);
calculateWithOneVariable($(`#tb-input-radius`), $(`#container-circle`), 2 * Math.PI);
calculateTriangle($(`#tb-input-triangle-a`), $(`#tb-input-triangle-b`), $(`#tb-input-triangle-c`), $(`#container-triangle`));
calculateRectangle($(`#tb-input-rectangle-a`), $(`#tb-input-rectangle-b`), $(`#container-rectangle`));
calculatePolygon($(`#tb-input-polygon-a`), $(`#tb-input-polygon-numbers`), $(`#container-polygon`));