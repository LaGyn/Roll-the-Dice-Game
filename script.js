/*const canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

//Jotta noppien suhde kuvaan pysyy samanlaisena erikokoisilla screeneillä:
function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/2;
}

resize();
window.addEventListener('resize', resize);

// Canvas alue:
//ctx.fillRect(window.innerWidth/4, 50, canvas.width/2, canvas.height/2);

window.onload = function(){
    // Kuvat canvasiin:
    let x1 = window.innerWidth/2-270;
    let y1 = window.innerHeight/5;
    let img1 = document.getElementById("dice1");
    ctx.drawImage(img1, x1, y1);
    
    let x2 = window.innerWidth/2+10;
    let y2 = window.innerHeight/5;
    let img2 = document.getElementById("dice2");
    ctx.drawImage(img2, x2, y2);    
}*/

// Nappulat:
let modal = document.getElementById("myModal");
let btn = document.getElementById("startbtn");
let closebtn = document.getElementById("closeModal");
let play = document.getElementById("roll");

//Kuvat:

let img1 = document.getElementById("dice1");
let img2 = document.getElementById("dice2");
/*let img3 = document.getElementById("dice3.png");
let img4 = document.getElementById("dice5.png");
let img6 = document.getElementById("dice6.png");*/

let area1 = document.getElementById("dice");
let area2 = document.getElementById("dices");

const images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
const dices = [0, 1];
let pisteet = [];
let points = 0;

let player1 = document.getElementById("name1");
let player2 = document.getElementById("name2");
let player3 = document.getElementById("name3");
let player4 = document.getElementById("name4");
let player5 = document.getElementById("name5");

//Modaalin aukaisu:
btn.onclick = function(){
    modal.style.display = "block";
}

//Modaalin sulkeminen:
closebtn.onclick = function(){
    modal.style.display = "none";
    upDate();
}

//Lataa valitun/valitut nopat 
function upDate(){
    if (document.getElementById("oneDice").checked){
        area1.style.display="block";
        area2.style.display="none";
    }
    if (document.getElementById("twoDice").checked){
        area1.style.display="none";
        area2.style.display="block";
    }
    if (document.getElementById("twoPlay").checked){
        document.getElementById("results").innerHTML = "Player 1: " + player1 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 2: " + player2 + ", points: " + points;
    }
    if (document.getElementById("threePlay").checked){
        document.getElementById("results").innerHTML = "Player 1: " + player1 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 2: " + player2 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 3: " + player3 + ", points: " + points;
    }
    if (document.getElementById("fourPlay").checked){
        document.getElementById("results").innerHTML = "Player 1: " + player1 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 2: " + player2 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 3: " + player3 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 4: " + player4 + ", points: " + points;
    }
    if (document.getElementById("fivePlay").checked){
        document.getElementById("results").innerHTML = "Player 1: " + player1 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 2: " + player2 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 3: " + player3 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 4: " + player4 + ", points: " + points;
        document.getElementById("results").innerHTML = "Player 5: " + player5 + ", points: " + points;
    }
}

//Noppien arpominen:
function arpoo(){
    if (document.getElementById("twoDice").checked){
        let ekaluku = Math.floor((Math.random() * [images.length]));
        let tokaluku = Math.floor((Math.random() * [images.length]));
        dices[0] = ekaluku;
        dices[1] = tokaluku;
        points = points + ekaluku + 1 + tokaluku +1;
        img1.src = `diceimg/${[images[ekaluku]]}`;
        img2.src = `diceimg/${[images[tokaluku]]}`;
    } else if (document.getElementById("oneDice").checked){
        let ekaluku = Math.floor((Math.random() * [images.length]));
        points = points + ekaluku + 1;
        img1.src = `diceimg/${[images[ekaluku]]}`;
    }
    
    upDate();
    document.getElementById("results").innerHTML=points;
}

function laskePisteet(){
    pisteet.push(images[i]);
    for (let i = 0; i < pisteet.length; i++){
        points = points + pisteet[i];
    }
    console.log(points);
}

