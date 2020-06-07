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
        let $val = id.val();
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
        if (isNaN(sideA) && isNaN(sideB) && isNaN(sideC)) {
            container.text($sideAVal + $sideBVal + $sideCVal);
        } else {
            container.text(`input all three sides!`);
        }
    });
};

btnRectangle = $(`#btn-rectangle`);

function calculateRectangle(sideA, sideB, container) {
    btnRectangle.on("click", function() {
        let $sideAVal = +sideA.val();
        let $sideBVal = +sideB.val();
        if ($sideAVal === $sideBVal) {
            container.text(`Lendth must be different than width!`);
        } else if (isNaN(sideA) && isNaN(sideB)) {
            container.text(2 * ($sideAVal + $sideBVal));
        } else {
            container.text(`Input width and length!`);
        }
    });
};

calculateWithOneVariable($(`#tb-input-square`), $(`#container-square`), 4);
calculateWithOneVariable($(`#tb-input-radius`), $(`#container-circle`), 2 * Math.PI);
calculateTriangle($(`#tb-input-triangle-a`), $(`#tb-input-triangle-b`), $(`#tb-input-triangle-c`), $(`#container-triangle`));
calculateRectangle($(`#tb-input-rectangle-a`), $(`#tb-input-rectangle-b`), $(`#container-rectangle`));

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

let infoRectangle = new Vue({
    el: `#infoRectangle`,
    data: {
        header: `The Perimeter of Rectangle`,
        information: `Perimeter is the sum of two times length and two times width `,
        formula: `P =2(A + B) `,
        explanation: `A is a length and B is a width.`
    }
});