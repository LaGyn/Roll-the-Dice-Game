const canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

//Jotta noppien suhde kuvaan pysyy samanlaisena erikokoisilla screeneillä:
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

// Canvas alue:
//ctx.fillRect(window.innerWidth/4, 50, canvas.width/2, canvas.height/2);

window.onload = function(){
// Kuvat canvasiin:
let x1 = window.innerWidth/2-250;
let y1 = window.innerHeight/5;
let img1 = document.getElementById("dice1");
ctx.drawImage(img1, x1, y1);

let x2 = window.innerWidth/2+10;
let y2 = window.innerHeight/5;
let img2 = document.getElementById("dice2");
ctx.drawImage(img2, x2, y2);    
}