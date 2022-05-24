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
let img3 = document.getElementById("dice3");

let area1 = document.getElementById("dice");
let area2 = document.getElementById("dices");

const images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
let players = [
    {
        name: document.getElementById("name1").value,
        points: 0
    },
    {
        name: document.getElementById("name2").value,
        points: 0
    },
    {
        name: document.getElementById("name3").value,
        points: 0
    },
    {
        name: document.getElementById("name4").value,
        points: 0
    },
    {
        name: document.getElementById("name5").value,
        points: 0
    }
];
let pisteet = [];
let points = 0;
let tulostus = "";

let ekaluku = 0;
let tokaluku = 0;

//Modaalin aukaisu:
btn.onclick = function(){
    modal.style.display = "block";
}

//Modaalin sulkeminen:
closebtn.onclick = function(){
    modal.style.display = "none";
    upDate();
}

//Lataa valitun/valitut nopat sekä tulostaa pelaajat+pisteet
function upDate(){

    let player1 = {
        name: document.getElementById("name1").value,
        points: 0
    }
    let player2 = {
        name: document.getElementById("name2").value,
        points: 0
    }
    let player3 = {
        name: document.getElementById("name3").value,
        points: 0
    }
    let player4 = {
        name: document.getElementById("name4").value,
        points: 0
    }
    let player5 = {
        name: document.getElementById("name5").value,
        points: 0
    }

    if (document.getElementById("oneDice").checked){
        area1.style.display="block";
        area2.style.display="none";
    }
    if (document.getElementById("twoDice").checked){
        area1.style.display="none";
        area2.style.display="block";
    }
    if (document.getElementById("twoPlay").checked){
        players = [player1, player2];
        tulostus = "Player 1: " + player1 + ", points: " + points + "<br>" + "Player 2: " + player2 + ", points: " + points;
    }
    if (document.getElementById("threePlay").checked){
        players = [player1, player2, player3];
        tulostus = "Player 1: " + player1 + ", points: " + points + "<br>" + "Player 2: " + player2 + ", points: " + points+ "<br>" + "Player 3: " + player3 + ", points: " + points;
    }
    if (document.getElementById("fourPlay").checked){
        players = [player1, player2, player3, player4];
        tulostus = "Player 1: " + player1 + ", points: " + points + "<br>" + "Player 2: " + player2 + ", points: " + points+ "<br>" + "Player 3: " + player3 + ", points: " + points+ "<br>" + "Player 4: " + player4 + ", points: " + points;
    }
    if (document.getElementById("fivePlay").checked){
        players = [player1, player2, player3, player4, player5];
        tulostus = "Player 1: " + player1 + ", points: " + points + "<br>" + "Player 2: " + player2 + ", points: " + points+ "<br>" + "Player 3: " + player3 + ", points: " + points+ "<br>" + "Player 4: " + player4 + ", points: " + points+ "<br>" + "Player 5: " + player5 + ", points: " + points;
    }
    document.getElementById("results").innerHTML = tulostus;
}

//Noppien arpominen:
function roll(){
    if (document.getElementById("twoDice").checked){
        ekaluku = Math.floor((Math.random() * [images.length]));
        tokaluku = Math.floor((Math.random() * [images.length]));
        img1.src = `diceimg/${[images[ekaluku]]}`;
        img2.src = `diceimg/${[images[tokaluku]]}`;
        pisteet.push(ekaluku);
        pisteet.push(tokaluku);
        if (ekaluku == 0 || tokaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
            delete pisteet[pisteet.length];
        }
        console.log(pisteet);
        //points = points + ekaluku + 1 + tokaluku +1;
    } 
    if (document.getElementById("oneDice").checked){
        ekaluku = Math.floor((Math.random() * [images.length]));
        img3.src = `diceimg/${[images[ekaluku]]}`;
        pisteet.push(ekaluku);
        if (ekaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
        }
        console.log(pisteet);
        //points = points + ekaluku + 1;
    }
    upDate();
   // laskePisteet();
}

function laskePisteet(){
    let pituus = pisteet.length;
    for (let i = 0; i < pisteet.length; i++){
        points = points + pisteet[i];
    }
    points = points + pituus;
    //return points;
    console.log(pituus);
}

function stopRoll(){
    laskePisteet();
    document.getElementById("alertArea").innerHTML = "Your points: " + points;
}
