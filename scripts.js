
/// TEHDÄÄN KUN SIVUSTO AVATAAN: 
// Asetetaan kokonais klikkien ja boostien määrät:
var currentEnergy = 0;
var totalEnergy = 90;
var totalRealClicks = 0;
var rocketBoosts = 0;
var energiaSieppari = 0;
var siirtokunta = 0;
var levelProgress = 0;




var sunClickAudio = new Audio('Music/sfx/Pop.mp3');
var msgRadioEffectAudio = new Audio('Music/sfx/messageRadioEffect.mp3')
var hoverSoundAudio = new Audio('Music/sfx/hoverPopSound.mp3')

function hoverSound() {
    hoverSoundAudio.play();

}



// Asettaa auringon epäklikattavaksi:
function onLoad() {
    document.getElementById('centerSun').setAttribute('draggable', false);
}

// Tätä käytetään Indexistä kutsumaan random fakta - se asettaa faktan esille ja asettaa random timerin minkä välioajoin se kutsuu faktaa
function randomFacts() {


    var min = 7,
      max = 10;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10


    getRandomFact()
    setTimeout(randomFacts, rand * 10000);
}


var listOfFacts = ['Did you know that space <br> is completely silent!', 'In the observable universe there are an estimated 2 trillion <br> (2,000,000,000,000) galaxies.', 'The International Space Station is the largest ever crewed object in space.', 'The universe is observed to be 13.8 billion years old and has been expanding since its formation in the Big Bang.', 'Space is a hard vacuum, meaning it is a void containing very little matter.', 'One million earths can fit in the sun.', 'There are more stars in the universe than grains of sand on earth.', "Gravity moves the same speed as light. So if sun suddenly disappeared, with it's light lasting for 8 minutes, it's gravity would last also 8 minutes."];


// TÄssä annetaan ylläolevan function kutsuma random fakta ja lopulta poistetaan se näkyvistä: HUOM!!! aseta poistuminen ennen kuin uusi tulee näkyvinin!
function getRandomFact(){
    var randomFakta = document.getElementById("randomFacts");

    var changeFactText = document.getElementById("changeFactText");
    var chooseFact = Math.floor(Math.random() * listOfFacts.length);


    window.setTimeout(
        function () {
        randomFakta.style.visibility = '';

        changeFactText.innerHTML = listOfFacts[chooseFact];


        msgRadioEffectAudio.play();
        }, 10000);

}



/// JA SITTEN KAIKKI MUU: 
/// JA SITTEN KAIKKI MUU: 
// ClickTimeOut auringon klikkaus numeron animaatiota varten
function clickTimeout(){
    window.setTimeout(
        function () {
        showClick.style.visibility = 'hidden';
        }, 1000);
}
function clickTimeout2(){
    window.setTimeout(
        function () {
        showClick1.style.visibility = 'hidden';
        }, 1000);
}
function clickTimeout3(){
    window.setTimeout(
        function () {
        showClick2.style.visibility = 'hidden';
        }, 1000);
}
function clickTimeout4(){
    window.setTimeout(
        function () {
        showClick3.style.visibility = 'hidden';
        }, 1000);
}
function clickTimeout5(){
    window.setTimeout(
        function () {
        showClick4.style.visibility = 'hidden';
        }, 1000);
}


// Main klikkaus mikä tulee aurinkoa klikatessa.



var soundtrack01 = new Audio('Music/backgroundMusic/ES_WeAretheVisitors-CurvedMirror.mp3');
var currentSong = "";
var isMusicPlaying = false 





var spaceAudio = new Audio();

function startGameSoundtrack(){

    var i = 0;
    var spacePlaylist = ['Music/backgroundMusic/Biogenesis.mp3','Music/backgroundMusic/ES_WeAretheVisitors-CurvedMirror.mp3', 'Music/backgroundMusic/HigherOrbit.mp3', 'Music/backgroundMusic/NoTimeForHeroes.mp3', 'Music/backgroundMusic/Tranquility_DriftFarAway.mp3'];

    spaceAudio.addEventListener('ended', function () {
        i = ++i < spacePlaylist.length ? i : 0;
        console.log(i)
        spaceAudio.src = spacePlaylist[i];
        spaceAudio.play();
    }, true);
    spaceAudio.volume = 0.8;
    spaceAudio.loop = false;
    spaceAudio.src = spacePlaylist[0];
    spaceAudio.play();

    currentSong = "soundtrack01"
    isMusicPlaying = true
}

function stopPlayMusic(){
    if (isMusicPlaying === true) {
        spaceAudio.pause();
        isMusicPlaying = false
        document.getElementById("audioPlayerControls").innerHTML = "Start Music"
    } else if (isMusicPlaying === false ) {
        spaceAudio.play();
        isMusicPlaying = true
        document.getElementById("audioPlayerControls").innerHTML = "Stop Music"
    }
}


var clickAnimationIndex = 0;

function clickSun(){

        currentEnergy+=1;
        totalEnergy+=1;
        levelUpListener();

        if (rocketBoosts >= 1){
            currentEnergy = currentEnergy += rocketBoosts;
            totalEnergy = totalEnergy += rocketBoosts;
            levelUpListener();
        }

        document.getElementById("currentEnergyNum").innerHTML = currentEnergy;
        document.getElementById("totalEnergy").innerHTML = totalEnergy;

        sunClickAudio.play();
        updateLevelProgress();

        totalRealClicks+=1;
        document.getElementById("totalRealClicks").innerHTML = totalRealClicks;

        // Koordinaatit saadaan tässä:


        // 

        if (clickAnimationIndex === 0){
            createHitMark(1);
            clickAnimationIndex = 1;
        } else if (clickAnimationIndex === 1){
            createHitMark(2);
            clickAnimationIndex = 2;
        }else if (clickAnimationIndex === 2){
            createHitMark(3);
            clickAnimationIndex = 3;
        }else if (clickAnimationIndex === 3){
            createHitMark(4);
            clickAnimationIndex = 4;
        }else if (clickAnimationIndex === 4){
            createHitMark(5);
            clickAnimationIndex = 0;
        }
        
}

function createHitMark(number){

    var hitMark = 0;

    switch(number){
        case 1:
            hitMark = document.getElementById("showClick");
            clickTimeout();
            break;
        case 2:
            hitMark = document.getElementById("showClick1");
            clickTimeout2();
            break;
        case 3:
            hitMark = document.getElementById("showClick2");
            clickTimeout3();
            break;
        case 4:
            hitMark = document.getElementById("showClick3");
            clickTimeout4();
            break;
        case 5:
            hitMark = document.getElementById("showClick4");
            clickTimeout5();
            break;
        default:
            hitMark = document.getElementById("showClick");
            clickTimeout();
            break;
    }


    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    hitMark.style.visibility = '';
    hitMark.style.position = 'absolute';
    hitMark.style.left = x + 'px';
    hitMark.style.top = y + 'px';
}



















// SAVEUS OMINAISUUS - Asetetaan Local storageen arvot nimi ja klikit
function saveSession(){

    var playerStatsForSave = {
        "energia":currentEnergy,
        "kaikkiKlikit":totalEnergy,
        "ostetutBoostit":rocketBoosts,
        "ostetutEnergiaSiepparit":energiaSieppari,
        "ostetutSiirtokunnat":siirtokunta,
        "levelProgress":levelProgress,
        "todellisetKlikit":totalRealClicks,
    }


    alert("tallennettu!")
    window.localStorage.setItem('stats', JSON.stringify(playerStatsForSave))


    var locationsOfEachShip = {
        "lokaatiotEnergiaSiepparit":storeLocationOfEnergiaSiepparit,
        "lokaatiotSiirtokunnat":storeLocationOfColonies,
    }


    window.localStorage.setItem('lokaatiotKaikista', JSON.stringify(locationsOfEachShip))
        // Retrieve
        // var stored_datas = JSON.parse(localStorage["datas"]);

    // window.localStorage.setItem('name', 'EbiTest');
}


// LATAUS OMINAISUUS - ladataan kaikki halutut arvot local storagesta:
function loadSession(){

    // HAETAAN STORAGESTA KAIKKI ASIAT JA LAITETAAN NE MUUTTUJIIN
    var load = localStorage.getItem('stats');
    var loadObject = JSON.parse(load); 

    var loadAllLocations = localStorage.getItem('lokaatiotKaikista');
    var palautetutLokaatiot = JSON.parse(loadAllLocations);

   // Käydääb läpi jokainen arrayn sisältämä osio ja palautetaan sieltä lokaatiot samoille paikoilleen:
   for (let i = 0; i < palautetutLokaatiot.lokaatiotEnergiaSiepparit.length; i++) {
        document.getElementById('gameArea').innerHTML += palautetutLokaatiot.lokaatiotEnergiaSiepparit[i];
        console.log("tämä palautettuun" + palautetutLokaatiot.lokaatiotEnergiaSiepparit[i])
   }
   for (let i = 0; i < palautetutLokaatiot.lokaatiotSiirtokunnat.length; i++) {
    document.getElementById('gameArea').innerHTML += palautetutLokaatiot.lokaatiotSiirtokunnat[i];
    console.log("tämä palautettuun" + palautetutLokaatiot.lokaatiotSiirtokunnat[i])
}


    // Käydääb läpi jokainen objektin key-value pair ja palautetaan sieltä arvot oikeisiin kohtiinsa:
    for (const [key, value] of Object.entries(loadObject)) {
        if (key === 'energia'){
            currentEnergy = value;
            document.getElementById("currentEnergyNum").innerHTML = currentEnergy;
        } else if (key === "kaikkiKlikit"){
            totalEnergy = value;
            document.getElementById("totalEnergy").innerHTML = totalEnergy;
        } else if (key === "levelProgress") {
            levelProgress = value;
            visualizeLevelProgress(value);
            alert("Rakenna level progress palautus")
        } else if (key === "ostetutBoostit") {
            rocketBoosts = value;
            visualizeRocketBoostBar(value*10);
            document.getElementById("boostejaYhteensa").innerHTML = rocketBoosts;
        } else if (key === "ostetutEnergiaSiepparit"){
            energiaSieppari = value;
            document.getElementById("autoKlikkereitaYhteensa").innerHTML = energiaSieppari;
            document.getElementById("rocket1").src = "Graphics/gameArea/rockets/hogl-animation-home.gif"
            energiaSieppariAmount.push("energiasieppari")
        } else if (key === "ostetutSiirtokunnat"){
            siirtokunta = value;
            document.getElementById("totalColonnies").innerHTML = siirtokunta;
        } else if (key === "todellisetKlikit"){
            totalRealClicks = value;
            document.getElementById("totalRealClicks").innerHTML = totalRealClicks;
        } else {
            console.log(`${key}:gggg ${value}`);
        }
        
      }

    console.log(palautetutLokaatiot)
    console.log()
    console.log(loadObject)
    //Täässä kohtaa 
    //load[Object.keys(load)[0]]; //returns 'someVal'

    console.log('palauttetu objekti: ', JSON.parse(load));

   /* save = window.localStorage.getItem('klikit');
    console.log(save)
    totalEnergy = parseInt(save)
    document.getElementById("currentEnergyNum").innerHTML = totalEnergy */
}





/*
function buySpaceRocketBoost(){
    rocketBoosts = rocketBoosts+1;
    document.getElementById("rocket1").src = "Graphics/gameArea/rockets/hogl-animation-home.gif";
}
*/

function buySpaceRocketBoost(){

    if (currentEnergy >= 100){
        rocketBoosts = rocketBoosts+=1;
        currentEnergy = currentEnergy - 100;
        document.getElementById("currentEnergyNum").innerHTML = currentEnergy;
        document.getElementById("boostejaYhteensa").innerHTML = rocketBoosts;
        alert("Saat nyt enemmän energiaa jokaisella klikillä!")
        updateRocketBoostBar(1);
    } else  {
        alert("Oijoi! Sinulla ei ole tarpeeksi kolikeita!")
    }




}





// tehdään lista montako energia siepparia on, jotta niitä voidaan hallita tallennuksien yhteydessä.
var energiaSieppariAmount = []

function buyEnergiaSieppari(){

    if (currentEnergy >= 100){
        
    }

    autoClicker();
    energiaSieppari = energiaSieppari +1;
    alert("Ostit uuden energiasiepparin! Hieno homma!");

    document.getElementById('gameArea').innerHTML += createLocation("energiaSieppari");
    document.getElementById("autoKlikkereitaYhteensa").innerHTML = energiaSieppari;
    energiaSieppariAmount.push("energiasieppari");

}

function autoClicker() {
      alert("Autoclicker päällä!")
      window.setInterval(
        function () {

            totalEnergy+=1;
            currentEnergy+=1;
            levelUpListener();


            if (rocketBoosts >= 1){
                currentEnergy = currentEnergy + rocketBoosts;
                totalEnergy = totalEnergy += rocketBoosts;
                levelUpListener();
            }



            document.getElementById("currentEnergyNum").innerHTML = currentEnergy;
            document.getElementById("totalEnergy").innerHTML = totalEnergy;
            
        }, 5000);
}



function buySpaceColony(){
    siirtokunta = siirtokunta +1;
    alert("Ostit uuden siirtokunta! VAU!");
    //document.getElementById("siirtokunta1").src = "Graphics/gameArea/rockets/starmancer.gif";

    document.getElementById('gameArea').innerHTML += createLocation("spaceColony");
    document.getElementById('totalColonnies').innerHTML = siirtokunta;

}



var storeLocationOfColonies = [];
var storeLocationOfEnergiaSiepparit = [];


function createLocationOld() {

    var min = -35;
    var maxWidth = 28;
    var maxHeight = 800;

    // WIDTH koordinaatit saa olla MAX -    margin-left:-35%;   margin-left:28%
    // HEIGHT koordinaatit saa olla MAX -   margin-top:0%;      margin-top:40%;;  
    // ULOS PITÄISI SIIS SAADA: style="margin-top:0%;margin-left:-30%;
    var width = Math.floor(Math.random() * (maxWidth - min + 1) + min); 
    // height saa olla max 800
    var height = Math.floor(Math.random() * (maxHeight - min + 1) + min);

    console.log("height  " + height);
    console.log("width  " + width);


    var elementinAlku = '<img id="siirtokunta1" class="leijuvat" src="Graphics/ufo.png" style="margin-top:';
    var keskiosio = '%;margin-left:';
    var elementinLoppu = '%;">'

    var kokoRipsu =  elementinAlku+width+keskiosio+height+elementinLoppu;
    

    storeLocationOfColonies.push(kokoRipsu)

    return kokoRipsu;

}





function createLocation(nameOfOBject) {

    var widthMin = -35;
    var heightMin = 0;
    var maxWidth = 28;
    var maxHeight = 35;
    var minHeightForLandObj = 37;
    var maxHeightForLandObj = 43;

    var orderedSpaceObject;

    var saveToArray = "";

    switch(nameOfOBject){
        case "spaceColony":
          var orderedSpaceObject = "ufo.png";
          saveToArray = "spaceColony";
          break;
        case "energiaSieppari":
            var orderedSpaceObject = "hogl-animation-home.gif";
            saveToArray = "energiaSieppari";
          break;
        default:
            alert("Virheellinen tilaus!")
      }


    // WIDTH koordinaatit saa olla MAX -    margin-left:-35%;   margin-left:28%
    // HEIGHT koordinaatit saa olla MAX -   margin-top:0%;      margin-top:40%;;  
    // ULOS PITÄISI SIIS SAADA: style="margin-top:0%;margin-left:-30%;

    if (saveToArray === "spaceColony") {
        var width = Math.floor(Math.random() * (maxWidth - widthMin + 1) + widthMin); //Generate Random number between 300 - 1000
        var height = Math.floor(Math.random() * (maxHeightForLandObj - minHeightForLandObj + 1) + minHeightForLandObj); //Generate Random number between 50 - 100
    
        // <img id="siirtokunta1" class="planetsForceRight" src="Graphics/starmancer.gif">; 
    
        var elementinAlku = '<img id="siirtokunta1" class="leijuvat" src="Graphics/gameArea/rockets/';
        var ekaDimensionCode = '" style="margin-top:'
        var keskiosio = '%;margin-left:';
        var elementinLoppu = '%;">'
    
        var kokoRipsu =  elementinAlku+orderedSpaceObject+ekaDimensionCode+height+keskiosio+width+elementinLoppu;
        
    
        if (saveToArray === "spaceColony"){
            storeLocationOfColonies.push(kokoRipsu)
        } else if(saveToArray === "energiaSieppari"){
            storeLocationOfEnergiaSiepparit.push(kokoRipsu)
        }
    
        return kokoRipsu;

    } else if(saveToArray === "energiaSieppari") {
        var width = Math.floor(Math.random() * (maxWidth - widthMin + 1) + widthMin); //Generate Random number between 300 - 1000
        var height = Math.floor(Math.random() * (maxHeight - heightMin + 1) + heightMin); //Generate Random number between 50 - 100
    
        // <img id="siirtokunta1" class="planetsForceRight" src="Graphics/starmancer.gif">; 
    
        var elementinAlku = '<img id="siirtokunta1" class="leijuvat" src="Graphics/gameArea/rockets/';
        var ekaDimensionCode = '" style="margin-top:'
        var keskiosio = '%;margin-left:';
        var elementinLoppu = '%;">'
    
        var kokoRipsu =  elementinAlku+orderedSpaceObject+ekaDimensionCode+height+keskiosio+width+elementinLoppu;
        
    
        if (saveToArray === "spaceColony"){
            storeLocationOfColonies.push(kokoRipsu)
        } else if(saveToArray === "energiaSieppari"){
            storeLocationOfEnergiaSiepparit.push(kokoRipsu)
        }
    
        return kokoRipsu;
    }


    

}




function hider(name){
    var objToHide = document.getElementById(name);
    objToHide.style.visibility = 'hidden';

}

function showHiddenDiv(name){
    var objToShow = document.getElementById(name);
    objToShow.style.visibility = 'visible';
}

var levelBarAmount = 0;

function updateLevelProgress () {
    if (totalEnergy >= levelBarAmount+100){
        levelBarAmount = totalEnergy;
        levelProgress = levelProgress+1;
        alert("Toimii!")
        visualizeLevelProgress(1);
    }
}


var lvlPgAmount = 0;
function visualizeLevelProgress(number) {

    lvlPgAmount = (lvlPgAmount + number)
    // amount+=number;
    document.getElementById("levelBarAmount").style.width = lvlPgAmount + "%";
}



function updateRocketBoostBar (number) {
    visualizeRocketBoostBar(10)
}


var boostBarAmount = 0;
function visualizeRocketBoostBar(number) {

    boostBarAmount = (boostBarAmount + number)
    // amount+=number;
    document.getElementById("spaceRocketBoostBarAmount").style.width = boostBarAmount + "%";
}







function levelUpListener(){

    if (levelProgress === 0 && totalEnergy >= 100){
        updateLevelProgress();
        trophyReturner('trophy01');
    } else if(levelProgress === 1 && totalEnergy >= 200){
        updateLevelProgress();
    } else if(levelProgress === 2 && totalEnergy >= 300){
        updateLevelProgress();
    } else if(levelProgress === 3 && totalEnergy >= 400){
        updateLevelProgress();
    } else if(levelProgress === 4 && totalEnergy >= 500){
        updateLevelProgress();
    } else if(levelProgress === 5 && totalEnergy >= 600){
        updateLevelProgress();
    } else if(levelProgress === 6 && totalEnergy >= 700){
        updateLevelProgress();
    } else if(levelProgress === 7 && totalEnergy >= 800){
        updateLevelProgress();
    } else if(levelProgress === 8 && totalEnergy >= 900){
        updateLevelProgress();
    } else if(levelProgress === 9 && totalEnergy >= 1000){
        updateLevelProgress();
    } else if(levelProgress === 10 && totalEnergy >= 1100){
        updateLevelProgress();
    } else if(levelProgress === 11 && totalEnergy >= 1200){
        updateLevelProgress();
    } else if(levelProgress === 12 && totalEnergy >= 1300){
        updateLevelProgress();
    } else if(levelProgress === 13 && totalEnergy >= 1400){
        updateLevelProgress();
    } else if(levelProgress === 14 && totalEnergy >= 1500){
        updateLevelProgress();
    } else if(levelProgress === 15 && totalEnergy >= 1600){
        updateLevelProgress();
    } else if(levelProgress === 16 && totalEnergy >= 1700){
        updateLevelProgress();
    } else if(levelProgress === 17 && totalEnergy >= 1800){
        updateLevelProgress();
    } else if(levelProgress === 18 && totalEnergy >= 1900){
        updateLevelProgress();
    } else if(levelProgress === 19 && totalEnergy >= 2000){
        updateLevelProgress();
    } else if(levelProgress === 20 && totalEnergy >= 2100){
        updateLevelProgress();
    } else if(levelProgress === 21 && totalEnergy >= 2200){
        updateLevelProgress();
    } else if(levelProgress === 22 && totalEnergy >= 2300){
        updateLevelProgress();
    } else if(levelProgress === 23 && totalEnergy >= 2400){
        updateLevelProgress();
    } else if(levelProgress === 24 && totalEnergy >= 2500){
        updateLevelProgress();
    } else if(levelProgress === 25 && totalEnergy >= 2600){
        updateLevelProgress();
    } else if(levelProgress === 26 && totalEnergy >= 2700){
        updateLevelProgress();
    } else if(levelProgress === 27 && totalEnergy >= 2800){
        updateLevelProgress();
    } else if(levelProgress === 28 && totalEnergy >= 2900){
        updateLevelProgress();
    } else if(levelProgress === 29 && totalEnergy >= 3000){
        updateLevelProgress();
    } else if(levelProgress === 30 && totalEnergy >= 3100){
        updateLevelProgress();
    }
    

}



var trophyTextArray = ['V<div id="trophyTip"><span class="openedTrophyTipText">Gain 100 total energy!</span></div>', 'Gain 1000 total energy']



function trophyReturner (openedTrophy) {

    switch(openedTrophy){
        case 'trophy01':
            document.getElementsByClassName('achievementIcon')[0].innerHTML = trophyTextArray[0]
            
            alert("SAIT SAAVUTUKSEN!")

            break;
        case trophy02:
            break;
    }


}