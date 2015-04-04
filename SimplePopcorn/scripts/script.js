var canvas = document.getElementById("the-canvas"),
            ctx = canvas.getContext("2d");

var sx = 0,
    sy = 100,

   updateX = 0,
   updateY = 0,
   flag = true,
   speed = 5,
   ballSize = 5,
   colorBall = 'black';




function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.fillStyle = colorBall;
    ctx.strokeStyle = colorBall;
    ctx.arc(sx, sy, ballSize, 0, 2 * Math.PI);

   document.getElementById('SizeBtn').addEventListener('click', function () {
        ballSize = document.getElementById('ballSize').value;
        colorBall = document.getElementById('colorBall').value;
			if(ballSize<5){
					ballSize=5;
			}
    });

    if (flag) {
        updateX = speed;
        updateY = speed;
    }

    if (sx > canvas.width-ballSize || sy > canvas.height-ballSize) {
        updateX = speed;
        updateY = -speed;
        flag = false;
    }

    if (sx == canvas.width-ballSize) {
        updateX = -speed;
        updateY = -speed;
    }

    if (sy < ballSize) {
        updateX = -speed;
        updateY = speed;
    }
    if (sx < ballSize) {
        updateX = speed;
        updateY = speed;
    }
    sx += updateX;
    sy += updateY;

    ctx.fill();
    ctx.stroke();
    requestAnimationFrame(animationFrame);
}

animationFrame();









//if (sx > canvas.width || sy > canvas.height) {
//    updateX = speed;
//    updateY = -speed;
//    flag = false;
//}

//if (sx == canvas.width-ballSize) {
//    updateX = -speed;
//    updateY = -speed;
//}

//if (sy < ballSize) {
//    updateX = -speed;
//    updateY = speed;
//}
//if (sx < ballSize) {
//    updateX = speed;
//    updateY = speed;
//}
//sx += updateX;
//sy += updateY;