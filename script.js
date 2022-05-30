
let modal = document.getElementById("myModal");
// Napit:
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

//Arvottavat nopat:
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
        ekaluku = Math.floor((Math.random() * [images.length])); //Arpoo luvun (0-5)
        tokaluku = Math.floor((Math.random() * [images.length]));
        img1.src = `diceimg/${[images[ekaluku]]}`; //Tulostaa arvotun nopan paikallensa
        img2.src = `diceimg/${[images[tokaluku]]}`;
        pisteet.push(ekaluku); //Lisää arvotun luvun taulukkoon (0-5)
        pisteet.push(tokaluku);
        if (ekaluku == tokaluku){ //Tuplat, jos luvut ovat samat lisätään luvut ylimääräisen kerran taulukkoon
            pisteet.push(ekaluku);
            pisteet.push(tokaluku);
        }
        if (ekaluku == 0 && tokaluku == 0){
            pisteet.push(20); //Tupla ykköset. Lisätään taulukkoon 20, sillä riviltä 103,104,106,107 tulee jo yhdet pisteet [0,0,0,0,20] (+pisteet.length) = 25pistettä
        }
        else if (ekaluku == 0 || tokaluku == 0){ //Jos jompikumpi on ykkönen niin ei tule pisteitä.
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
            for (i = 1; i = pisteet.length; i++){
                pisteet.pop();//Tyhjennetään taulukko
            }
            document.getElementById("roll").style.opacity = "0.6";
            document.getElementById("roll").style.pointerEvents = "none"; //Tehdään napista kelvoton käyttää
        }
    }
        
    if (document.getElementById("oneDice").checked){
        ekaluku = Math.floor((Math.random() * [images.length]));
        img3.src = `diceimg/${[images[ekaluku]]}`;
        pisteet.push(ekaluku);
        if (ekaluku == 0){
            document.getElementById("alertArea").innerHTML = "You rolled 1 ! Zero points!";
            for (i = 1; i = pisteet.length; i++){
                pisteet.pop();
            }
            document.getElementById("roll").style.opacity = "0.6";
            document.getElementById("roll").style.pointerEvents = "none";
        }
    }
}

function laskePisteet(){
    let pituus = pisteet.length;
    for (let i = 0; i < pisteet.length; i++){ //Käydään taulukko läpi ja lasketaan siinä olevat pisteet yhteen.
        points = points + pisteet[i];
    }
    points = points + pituus; //Koska pisteet ovat 0-5 eli yhtä lukemaa oikeita pisteitä pienemmät, lisätään taulukon pituus pisteisiin näin saadaan jokaiselle alkoille lisäpinna.
    for (i = 1; i = pisteet.length; i++){
        pisteet.pop(); //Tyhjennetään taulukko jotta seuraava pelaaja aloittaa nollasta
    }
    players[vuoro].points = points; //Osoitetaan pisteet oikealle pelaajalle
    newPoints = points;
    if (points >= 100){ //Jos pisteitä on sata tai yli, tulee voitto
        document.getElementById("alertArea").innerHTML = points + " points! " + players[vuoro].name + " you win!!";
    }
    else {
        document.getElementById("alertArea").innerHTML = "Your points: " + newPoints;
    }
    upDate(); 
    vuoronVaihto();
}

function vuoronVaihto(){
    let length = 0;
    if (document.getElementById("twoPlay").checked){
        length = players.length - 3; // == 2, players.length on alunperin 5.
    }
    if (document.getElementById("threePlay").checked){
        length = players.length - 2; // == 3
    }
    if (document.getElementById("fourPlay").checked){
        length = players.length -1; // == 4
    }
    
    if (vuoro < length){
        vuoro++; //Kasvatetaan vuoroa
    }
    if (vuoro >= length){ //Jos vuoro on suurempi tai yhtäsuuri kuin pelaajien määrä, vuoro asettuu taas nollaksi
        vuoro = 0;
    }
    points = players[vuoro].points; //Seuraavat pisteet ovat seuraavalle pelaajalle
    upDate();
}

function stopRoll(){
    laskePisteet();
    document.getElementById("roll").style.opacity = "1"; //Asetetaan pelausnappi taas toimimaan
    document.getElementById("roll").style.pointerEvents = "auto";
}
