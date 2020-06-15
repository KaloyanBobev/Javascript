function drawSquare(id, el) {
    $(id).on(`keyup`, () => {
        let ctx = $(el).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(50, 20, 100, 100);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText("A", 160, 80);
    })
};

drawSquare(`#tb-input-square`, `#canvas-square`);
drawSquare(`#tb-input-square-area`, `#canvas-square-area`);

function drawCircle(id, el) {
    $(id).on(`keyup`, () => {
        let ctx = $(el).get(0)
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
};

drawCircle(`#tb-input-radius`, `#canvas-circle`);
drawCircle(`#tb-input-radius-area`, `#canvas-circle-area`);

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


function drawRectangle(id, el, width, height) {
    $(id).on(`keyup`, () => {
        let ctx = $(el).get(0)
            .getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(50, 20, 100, 60);
        ctx.stroke();
        ctx.font = "1.5em Arial";
        ctx.fillText(width, 160, 60);
        ctx.font = "1.5em Arial";
        ctx.fillText(height, 90, 110);
    })
};

drawRectangle(`#tb-input-rectangle-b`, `#canvas-rectangle`, `A`, `B`);
drawRectangle(`#tb-input-rectangle-heigthRect`, `#canvas-rectangle-area`, `H`, `W`);

function drawRectangle(id, el, numbers) {
    $(id).on(`keyup`, () => {
        let ctx = $(el).get(0)
            .getContext("2d");
        let numberOfSides = $(numbers).val();
        let radius = $(id).val() * 5;
        let x = 50;
        let y = 50;
        let angle = 2 * Math.PI / numberOfSides;
        ctx.save();
        ctx.beginPath();
        ctx.clearRect(-x, -y, 300, 300);
        ctx.lineWidth = 5;
        ctx.translate(x, y);
        ctx.moveTo(radius, 0);
        for (let i = 1; i <= numberOfSides; i += 1) {
            ctx.lineTo(radius * Math.cos(i * angle), radius * Math.sin(i * angle));
        }
        ctx.stroke();
        // ctx.font = "1.5em Arial";
        // ctx.fillText("R", x - 50, y - 50);
        ctx.restore();
    })
};

drawRectangle(`#tb-input-polygon-a`, `#canvas-polygon`, `#tb-input-polygon-numbers`);
drawRectangle(`#tb-input-polygon-aphotem`, `#canvas-polygon-area`, `#tb-input-polygon-perimeterPolygon`);