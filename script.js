
// Nappulat:
let modal = document.getElementById("myModal");
let btn = document.getElementById("startbtn");
let closebtn = document.getElementById("closeModal");
let play = document.getElementById("roll");

//Kuvat:
let img1 = document.getElementById("dice1");
let img2 = document.getElementById("dice2");
let img3 = document.getElementById("dice3");

//Yhdellä vai kahdella nopalla:
let area1 = document.getElementById("dice");
let area2 = document.getElementById("dices");

const images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

//Objekti array:
let players = [
    {
        name: name1,
        points: 0
    },
    {
        name: name2,
        points: 0
    },
    {
        name: name3,
        points: 0
    },
    {
        name: name4,
        points: 0
    },
    {
        name: name5,
        points: 0
    }
];

let pisteet = [];
let points = 0;
let tulostus = "";
let vuoro = 0;
let newPoints = 0;
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

    players[0].name = document.getElementById("name1").value;
    players[1].name = document.getElementById("name2").value;
    players[2].name = document.getElementById("name3").value;
    players[3].name = document.getElementById("name4").value;
    players[4].name = document.getElementById("name5").value;
    
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
    document.getElementById("alertArea").innerHTML = "";
    if (document.getElementById("twoDice").checked){
        ekaluku = Math.floor((Math.random() * [images.length]));
        tokaluku = Math.floor((Math.random() * [images.length]));
        img1.src = `diceimg/${[images[ekaluku]]}`;
        img2.src = `diceimg/${[images[tokaluku]]}`;
        pisteet.push(ekaluku);
        pisteet.push(tokaluku);
       /* if (ekaluku == 0 || tokaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
            delete pisteet[pisteet.length];*/
    }
        
    if (document.getElementById("oneDice").checked){
        ekaluku = Math.floor((Math.random() * [images.length]));
        img3.src = `diceimg/${[images[ekaluku]]}`;
        pisteet.push(ekaluku);
        if (ekaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
        }
    }
   // upDate();
}

function laskePisteet(){
    let pituus = pisteet.length;
    for (let i = 0; i < pisteet.length; i++){
        points = points + pisteet[i];
    }
    points = points + pituus;
    
    for (i = 1; i = pisteet.length; i++){
        pisteet.pop();
    }
    //points = points + newPoints;
    players[vuoro].points = points;
    newPoints = points;
    upDate(); 
    vuoronVaihto();
}

function vuoronVaihto(){
    
    let length = 0;
    if (document.getElementById("twoPlay").checked){
        length = players.length - 3; // =2
    }
    if (document.getElementById("threePlay").checked){
        length = players.length - 2;
    }
    if (document.getElementById("fourPlay").checked){
        length = players.length -1;
    }
    
    if (vuoro < length){
        vuoro++;
    }
    if (vuoro >= length){
        vuoro = 0;
    }
    points = players[vuoro].points;
    return vuoro;
    upDate();
}

function stopRoll(){
    laskePisteet();
    document.getElementById("alertArea").innerHTML = "Your points: " + newPoints;
}
