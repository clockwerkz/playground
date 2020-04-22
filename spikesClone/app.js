const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#89CFF0";

ctx.fillRect(0,0, canvas.width, canvas.height);

let bird = new Image();
bird.src="images/bird.png";
let bX = 50;
let bY = 250;
let speed = 1.3 ;
let gravity = 1;
numTriangles = 5;
let rT = [];
let jump = 0;

function renderRightTriangles(topPosition) {
    ctx.beginPath();
    ctx.moveTo(canvas.width, topPosition);
    ctx.lineTo(canvas.width-50, topPosition+25);
    ctx.lineTo(canvas.width, topPosition+50);
    ctx.closePath();
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}
function createRtTrianlges() {
    rT = [];
    for (let i=0; i<numTriangles; i++) {
        let newTriangle = Math.floor(Math.random()*(canvas.width - 50));
        rT.push(newTriangle);
    }
}
createRtTrianlges();   

function draw() {
    ctx.fillStyle = "#89CFF0";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(bird, bX, bY);
    requestAnimationFrame(draw);
    if (isAtEdge()) {
        if (speed < 0) {
            createRtTrianlges();
        } else {
            //render left side triangles
        }
        speed = -speed;
    }
    bX = bX + speed;
    bY = (jump <= 0) ? bY + gravity : bY - jump;
    if (jump > 0) {
        jump -= 1;
    } 
    gravity += 0.01;
    for (leti= i=0; i<rT.length; i++) {
        renderRightTriangles(rT[i]);
        checkCollision(canvas.width-50, rT[i]+25); 
    }
    
}

function checkCollision(x,y) {
    if ((bX+bird.width>= x) && (bY <= y && bY+bird.height >= y)) {
        location.reload();
    }
}

document.addEventListener('keydown', function(e){
    gravity = 1;
    jump = 15;
});

function isAtEdge() {
    if (bX + bird.width-15 >= canvas.width || bX <= -10) {
        return true;
    } 
    return false;
}

draw();