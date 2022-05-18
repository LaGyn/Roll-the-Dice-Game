const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2;
}

resize();
window.addEventListener('resize', resize);

// Canvas:
ctx.fillRect(150, 100, window.innerWidth /2, window.innerHeight/2);
