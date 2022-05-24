
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
let players = [0,1,2,3,4];
let pointArray = [0,1,2,3,4];

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
    players = [
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
    
    if (document.getElementById("oneDice").checked){
        area1.style.display="block";
        area2.style.display="none";
    }
    if (document.getElementById("twoDice").checked){
        area1.style.display="none";
        area2.style.display="block";
    }
    if (document.getElementById("twoPlay").checked){
        tulostus = "Player 1: " + players[0].name + ", points: " + players[0].points + "<br>" + "Player 2: " + players[1].name + ", points: " + players[1].points;
    }
    if (document.getElementById("threePlay").checked){
        tulostus = "Player 1: " + players[0].name + ", points: " + players[0].points + "<br>" + "Player 2: " + players[1].name + ", points: " + players[1].points + "<br>" + "Player 3: " + players[2].name + ", points: " + players[2].points;
    }
    if (document.getElementById("fourPlay").checked){
        tulostus = "Player 1: " + players[0].name + ", points: " + players[0].points + "<br>" + "Player 2: " + players[1].name + ", points: " + players[1].points + "<br>" + "Player 3: " + players[2].name + ", points: " + players[2].points + "<br>" + "Player 4: " + players[3].name + ", points: " + players[3].points;
    }
    if (document.getElementById("fivePlay").checked){
        tulostus = "Player 1: " + players[0].name + ", points: " + players[0].points + "<br>" + "Player 2: " + players[1].name + ", points: " + players[1].points + "<br>" + "Player 3: " + players[2].name + ", points: " + players[2].points + "<br>" + "Player 4: " + players[3].name + ", points: " + players[3].points + "<br>" + "Player 5: " + players[4].name + ", points: " + players[4].points;
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
       /* if (ekaluku == 0 || tokaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
            delete pisteet[pisteet.length];
        }*/
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
    //laskePisteet();
}

function laskePisteet(){
    let pituus = pisteet.length;
    for (let i = 0; i < pisteet.length; i++){
        points = points + pisteet[i];
    }
    points = points + pituus;
    pointArray = [];
    pointArray.push(points);
    players[0].points = pointArray[0];
    upDate();
}

function stopRoll(){
    laskePisteet();
    document.getElementById("alertArea").innerHTML = "Your points: " + points;
}
