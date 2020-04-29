const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#89CFF0";

ctx.fillRect(0,0, canvas.width, canvas.height);

let bird = new Image();
const birdImgs = ["images/bird.png", "images/bird_flipped.png"];
let currentImage = 0;
bird.src=birdImgs[currentImage];
let bX = 50;
let bY = 250;
let bDY = 1;
let speed = 2.4 ;
let gravity = 0.15;
numTriangles = 5;
jumpSpeed = -4.5
let rT = [];
let lT = [];
let score = 0;
let borderTriangles = Math.floor(canvas.width / 50);
let isGameOver = false;

document.querySelector(".btn").addEventListener("click", ()=> {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show");
    score = 0;
    bX = 50;
    bY = 250;
    bDY = 1;
    speed = 2.4 ;
    gravity = 0.15;
    numTriangles = 5;
    jumpSpeed = -4.5
    isGameOver = false;
    currentImage = 0;
    bird.src=birdImgs[currentImage];
    createRtTrianlges();
    createLftTriangles();
    renderGraphics();
});

function renderRightTriangles(topPosition) {
    ctx.beginPath();
    ctx.moveTo(canvas.width, topPosition);
    ctx.lineTo(canvas.width-50, topPosition+25);
    ctx.lineTo(canvas.width, topPosition+50);
    ctx.closePath();
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}

function renderBtmTriangles(leftPosition) {
    ctx.beginPath();
    ctx.moveTo(leftPosition, canvas.height);
    ctx.lineTo(leftPosition+25, canvas.height-25);
    ctx.lineTo(leftPosition+50, canvas.height);
    ctx.closePath();
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}

function renderTopTriangles(leftPosition) {
    ctx.beginPath();
    ctx.moveTo(leftPosition, 0);
    ctx.lineTo(leftPosition+25, 25);
    ctx.lineTo(leftPosition+50, 0);
    ctx.closePath();
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}


function renderLeftTriangles(topPosition) {
    ctx.beginPath();
    ctx.moveTo(0, topPosition);
    ctx.lineTo(50, topPosition+25);
    ctx.lineTo(0, topPosition+50);
    ctx.closePath();
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
}

function createRtTrianlges() {
    rT = [];
    const segment = Math.floor(canvas.width / numTriangles);
    let offset = 0;
    for (let i=0; i<numTriangles; i++) {
        let newTriangle = Math.floor(Math.random()*(segment - 50)) + offset;
        rT.push(newTriangle);
        offset += segment;
    }
}

function createLftTriangles() {
    lT = [];
    const segment = Math.floor(canvas.width / numTriangles);
    let offset = 0;
    for (let i=0; i<numTriangles; i++) {
        let newTriangle = Math.floor(Math.random()*(segment - 50)) + offset;
        lT.push(newTriangle);
        offset += segment;
    }
}
createRtTrianlges();   
createLftTriangles();

function draw() {
    if (!isGameOver) {
        renderGraphics();
    }
}

function renderGraphics() {
    ctx.fillStyle = "#89CFF0";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#57869c';
    ctx.font = "30px Arial";
    ctx.fillText("Score: "+score, 80, 60);
    ctx.drawImage(bird, bX, bY);
    requestAnimationFrame(draw);
    if (isAtEdge()) {
        if (speed < 0) {
            createRtTrianlges();
        } else {
            createLftTriangles();
        }
        speed = -speed;
        score++;
        if (currentImage === 0) {
            currentImage = 1;
        } else {
            currentImage = 0;
        }
        bird.src=birdImgs[currentImage];
    }
    bX = bX + speed;
    bY += bDY;
    bDY += gravity; 
    for (let i=0; i<borderTriangles; i++) {
        let position = 50 * i;
        renderBtmTriangles(position);
        renderTopTriangles(position);
    }
    for (let i=0; i<numTriangles; i++) {
        renderRightTriangles(rT[i]);
        renderLeftTriangles(lT[i]);
        checkCollisionRight(canvas.width-50, rT[i]+25); 
        checkCollisionLeft(50, lT[i]+25);
    }
    checkCollisionBottom();
    checkCollisionTop();
}

function gameOver() {
    isGameOver = true;
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show");
}

function checkCollisionBottom() {
    if (bY+bird.height >= canvas.height-25) {
        gameOver();
    }
}

function checkCollisionTop() {
    if (bY <= 15) {
        gameOver();
    }
}


function checkCollisionRight(x,y) {
    if ((bX+bird.width - 20 >= x) && (bY <= y && bY+bird.height >= y)) {
        gameOver();
    }
}

function checkCollisionLeft(x,y) {
    if ((bX  <= x - 20) && (bY <= y && bY+bird.height >= y)) {
        gameOver();
    }
}

document.addEventListener('keydown', function(e){
    bDY = jumpSpeed;
});

function isAtEdge() {
    if (bX + bird.width >= canvas.width || bX <= 0) {
        return true;
    } 
    return false;
}

draw();