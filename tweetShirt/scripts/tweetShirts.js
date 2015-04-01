window.onload = function () {
    var button = document.getElementById("previewButton");
    button.addEventListener('click',previewHandler);
    makeImage();
}

function previewHandler() {
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    context.shadowColor = 'blue';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 7;

    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
        for (var squares = 0; squares < 30; squares++) {
            drawSquare(canvas, context);
        }
    }
    else if (shape == "circles") {
        for (var circles = 0; circles < 30; circles++) {
            drawCircle(canvas, context);
        }
    }

    inputText(canvas, context);
}

function drawSquare(canvas, context) {
    var w = Math.floor(randNumber() * 40);
    var x = Math.floor(randNumber() * canvas.width);
    var y = Math.floor(randNumber() * canvas.height);
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function randNumber() {
    return Math.random();
}

function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 30);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360));
    context.fillStyle = "lightblue";
    context.fill();
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function inputText(canvas, context) {
    var text = document.getElementById('text').value;
    context.font = 'italic bold 3em Verdana';
    var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(randNumber(), 'magenta');
    gradient.addColorStop(randNumber(), 'blue');
    gradient.addColorStop(randNumber(), 'red');
    context.fillStyle = gradient;
    context.fillText(text, 50, 100);
}

function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj[index].value;

    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function makeImage() {
    var canvas = document.getElementById('tshirtCanvas');
    canvas.addEventListener('click', function () {
        window.location = canvas.toDataURL('image/png');
    });
}