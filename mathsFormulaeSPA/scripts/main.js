$('#container-nav li').hover(
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

(function drawSquare() {
    $(`#tb-input-square`).on(`keyup`, () => {
        let ctx = $(`#canvas-square`).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(50, 20, 100, 100);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("A", 160, 80);
    })
})();

(function drawCircle() {
    $(`#tb-input-radius`).on(`keyup`, () => {
        let ctx = $(`#canvas-circle`).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(100, 75);
        ctx.lineTo(150, 75);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("R", 115, 65);
    })
})();

(function drawTriangle() {
    $(`#tb-input-triangle-c`).on(`keyup`, () => {
        let ctx = $(`#canvas-triangle`).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(50, 50);
        ctx.lineTo(150, 50);
        ctx.lineTo(150, 100);
        ctx.lineTo(50, 50);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("A", 100, 40);
        ctx.font = "1.5em Arial";
        ctx.fillText("B", 160, 75);
        ctx.font = "1.5em Arial";
        ctx.fillText("C", 95, 105);
    })
})();

(function drawRectangle() {
    $(`#tb-input-rectangle-b`).on(`keyup`, () => {
        let ctx = $(`#canvas-rectangle`).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(50, 20, 100, 60);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("A", 160, 60);
        ctx.font = "1.5em Arial";
        ctx.fillText("B", 90, 110);
    })
})();

(function drawRectangle() {
    $(`#tb-input-polygon-a`).on(`keyup`, () => {
        let ctx = $(`#canvas-polygon`).get(0)
            .getContext("2d");

        let numberOfSides = $(`#tb-input-polygon-numbers`).val();
        let radius = $(`#tb-input-polygon-a`).val() * 5;
        let x = 50;
        let y = 50;
        let angle = 2 * Math.PI / numberOfSides;

        ctx.beginPath();
        ctx.clearRect(-50, -50, 300, 300);
        ctx.lineWidth = 5;
        ctx.translate(x, y);
        ctx.moveTo(radius, 0);
        for (let i = 1; i <= numberOfSides; i += 1) {
            ctx.lineTo(radius * Math.cos(i * angle), radius * Math.sin(i * angle));
        }
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("R", x - 50, y - 50);

    })
})();