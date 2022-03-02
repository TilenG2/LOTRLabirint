var canv = document.createElement('canvas');
canv.id = 'fireAnim';
canv.style.width = '2.4vh';
canv.style.height = '2.4vh';

var div = document.createElement('div');

var time = document.getElementById('timer');
var local;
var min = 0;
var s = 0;

function myTimer() {
    s = Date.now() - local;
    s = Math.round(s / 1000);
    if (s == 60) {
        s = 0;
        min++;
        local = Date.now();
    }
    if (s < 10)
        time.innerHTML = min + ':0' + s;
    else
        time.innerHTML = min + ':' + s;
}


var myMusic = new Audio('sound/bacground.mp3');
var ringPicup = new Audio('sound/ringPickup.mp3');
var nom = new Audio('sound/nom.mp3');

function startSound() {
    if (typeof myMusic.loop == 'boolean') {
        myMusic.loop = true;
    } else {
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myMusic.play();

}


function generate() {
    startSound();
    local = Date.now();
    time.innerHTML = '0:00';
    var timer = setInterval(myTimer, 1000);
    playarea = document.getElementById('gamecontainer');
    var gameArray = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 6, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 5, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // solveArray = [
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [6, 6, 6, 6, 6, 6, 6, 6, 0, 1, 0, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        //     [0, 1, 0, 1, 0, 0, 0, 6, 0, 1, 0, 6, 0, 0, 0, 7, 0, 0, 0, 1, 0, 0, 0, 8, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 1, 0, 1, 1, 1, 0, 6, 1, 1, 0, 6, 0, 1, 0, 7, 0, 1, 1, 1, 0, 1, 0, 8, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        //     [0, 1, 0, 1, 0, 0, 0, 6, 0, 0, 0, 6, 0, 1, 0, 7, 0, 1, 0, 0, 0, 1, 0, 8, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        //     [0, 1, 0, 1, 1, 1, 0, 6, 6, 6, 6, 6, 1, 1, 0, 7, 0, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 8, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        //     [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 7, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 8, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        //     [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 7, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        //     [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 7, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 8, 8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        //     [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 7, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        //     [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 7, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 8, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        //     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 8, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        //     [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 7, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 8, 8, 8, 0, 1, 0, 1, 0, 1, 0],
        //     [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 7, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 8, 0, 1, 0, 0, 0, 0, 0],
        //     [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 7, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 8, 0, 1, 1, 1, 1, 1, 0],
        //     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 8, 0, 0, 0, 0, 0, 1, 0],
        //     [0, 1, 1, 1, 0, 7, 7, 7, 0, 7, 7, 7, 7, 7, 7, 7, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 8, 8, 8, 8, 8, 0, 1, 0],
        //     [0, 1, 0, 1, 0, 7, 0, 7, 0, 7, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 8, 0, 0, 0],
        //     [0, 1, 0, 1, 1, 7, 0, 7, 7, 7, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 8, 0, 1, 0],
        //     [0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 8, 0, 1, 0],
        //     [0, 1, 1, 1, 0, 7, 7, 7, 7, 7, 7, 7, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 8, 8, 8, 0],
        //     [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0],
        //     [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 7, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 8, 8, 8, 0],
        //     [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 7, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 1, 0],
        //     [0, 1, 0, 1, 0, 1, 1, 7, 7, 7, 7, 7, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 8, 8, 8, 0, 1, 0],
        //     [0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0],
        //     [0, 1, 0, 1, 0, 7, 7, 7, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 8, 0, 1, 0, 1, 0],
        //     [0, 1, 0, 1, 0, 7, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 8, 0, 1, 0, 1, 0],
        //     [0, 1, 1, 1, 0, 7, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 8, 8, 8, 8, 8, 0, 1, 0, 1, 0],
        //     [0, 0, 0, 0, 0, 7, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 8, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        //     [0, 7, 7, 7, 7, 7, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 8, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        //     [0, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        //     [0, 7, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 8, 8, 8, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        //     [0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        //     [0, 7, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 0, 1, 1, 1, 0, 1, 0],
        //     [0, 7, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 1, 0],
        //     [0, 7, 7, 7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 8, 8, 8, 8, 8, 0, 1, 0],
        //     [0, 0, 0, 7, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
        //     [0, 5, 7, 7, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 3],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        // ],
        wall = 0,
        moveable = 1,
        player = 2,
        goal = 3,
        // playerOnGoal = 4,
        ring = 5,
        // solvePath = 6,
        // solvePathRing = 7,
        // solvePathGoal = 8,
        enemyLR = 6,
        enemyLRCounter = 0,
        enemyLRToggle = true,
        enemyUD = 7,
        enemyUDCounter = 9,
        enemyUDToggle = true,
        winnable = false,
        playable = true,
        x, y, i = 0,
        newX, newY,
        tileWidth = 2.3,
        tileHeight = 2.3;
    playarea.style.width = (gameArray[0].length) * tileWidth + 'vh';
    playarea.style.height = (gameArray.length) * tileHeight + 'vh';
    playarea.style.margin = '0 auto';
    var temp,
        playerPos = [],
        enemyPos = [];
    enemyPos[0] = { y: 21, x: 5 };
    enemyPos[1] = { y: 12, x: 15 };
    var renderTile = function(cX, cY) {
            temp = document.createElement('b');
            temp.style.width = tileWidth + 'vh';
            temp.style.height = tileHeight + 'vh';
            temp.style.top = cY * (tileWidth - 0.01) + 'vh';
            temp.style.left = cX * (tileHeight - 0.01) + 'vh';

            switch (gameArray[cY][cX]) {
                case wall:
                    temp.classList.add('wall');
                    break;
                case moveable:
                    temp.classList.add('ground');
                    break;
                case player:
                    playerPos[i] = { x: cX, y: cY };
                    i++
                    if (winnable)
                        temp.classList.add('frodoring');
                    else
                        temp.classList.add('frodo');
                    break;
                case goal:
                    temp.classList.add('end');
                    temp.appendChild(canv);
                    break;
                    // case playerOnGoal:
                    //     temp.style.background = '#ff0';
                    //     temp.style.border = '1px solid #000';
                    //     playerPos[i] = { x: cX, y: cY };
                    //     i++
                    //     break;
                case ring:
                    temp.classList.add('ring');
                    break;
                case enemyLR:
                    enemyPos[0] = { y: cY, x: cX };
                    temp.classList.add('enemy');
                    break;
                case enemyUD:
                    temp.classList.add('enemy');
                    enemyPos[1] = { y: cY, x: cX };
                    break;
                default:
                    break;
            };
            document.getElementById('gamecontainer').appendChild(temp);
        }, // End render tile 

        renderWorld = function() {
            if (playable) {
                i = 0;
                document.getElementById('gamecontainer').innerHTML = "";
                //Draw World
                moveEnemyLR();
                moveEnemyUD();
                for (y = 0; y < gameArray.length; y++) {
                    // console.log("myY:" + y);
                    for (x = 0; x < gameArray[y].length; x++) {
                        // console.log("myx:" + x);
                        renderTile(x, y);
                    }
                };
                if ((playerPos[0].x == enemyPos[0].x && playerPos[0].y == enemyPos[0].y) || (playerPos[0].x == enemyPos[1].x && playerPos[0].y == enemyPos[1].y)) {
                    playable = false;
                    nom.play();
                    clearInterval(timer);
                    myMusic.pause();
                    myMusic = new Audio('sound/bacground.mp3');
                    document.getElementById('gamecontainer').innerHTML = "";
                    time.innerHTML = '';
                    document.getElementById('gamecontainer').appendChild(div);
                    div.id = 'replay';
                    min = 0;
                    div.innerHTML = '<p>It seem you got hit by an enemy want to try again?</p><input id="replayButton" type="button" onclick="replay()" value="Replay">';
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'You lost',
                        background: 'grey',
                        confirmButtonColor: '#b59e7b',
                        focusConfirm: false
                    });
                }
            } else {
                clearInterval(timer);
                myMusic.pause();
                myMusic = new Audio('sound/bacground.mp3');
                var endTime;
                if (s < 10)
                    endTime = min + ':0' + s;
                else
                    endTime = min + ':' + s;
                document.getElementById('gamecontainer').innerHTML = "";
                time.innerHTML = '';
                document.getElementById('gamecontainer').appendChild(div);
                div.id = 'replay';
                min = 0;
                div.innerHTML = '<p>If you wish you can try to beat your previus time by pressing the replay button</p><input id="replayButton" type="button" onclick="replay()" value="Replay">';
                Swal.fire({
                    title: 'Great job!',
                    text: 'Your time was ' + endTime,
                    background: 'grey',
                    confirmButtonColor: '#b59e7b',
                    focusConfirm: false
                });

            }
        },
        move = function(direction) {
            if (playable) {
                for (i = 0; i < playerPos.length; i++) {
                    switch (direction) {
                        case 0: // UP
                            newX = playerPos[i].x;
                            newY = playerPos[i].y - 1;
                            break;
                        case 1: // RIGHT
                            newX = playerPos[i].x + 1;
                            newY = playerPos[i].y;
                            break;
                        case 2: // DOWN
                            newX = playerPos[i].x;
                            newY = playerPos[i].y + 1;
                            break;
                        case 3: // LEFT
                            newX = playerPos[i].x - 1;
                            newY = playerPos[i].y;
                            break;
                        case 4:
                            newX = playerPos[i].x;
                            newY = playerPos[i].y;
                            break;
                        default:
                            break;
                    };

                    // nov in star Position
                    switch (gameArray[newY][newX]) {
                        case moveable:
                            gameArray[playerPos[i].y][playerPos[i].x] = moveable;
                            gameArray[newY][newX] = player;
                            break;
                        case goal:
                            if (winnable) {
                                playable = false;
                            }
                            break;
                        case ring:
                            ringPicup.play();
                            gameArray[playerPos[i].y][playerPos[i].x] = moveable;
                            gameArray[newY][newX] = player;
                            winnable = true;
                            break;
                        default:
                            break;
                    };
                }
                renderWorld();
            }
        }, // END MOVE  
        init = function() {
            document.addEventListener("keydown", function(event) { input(event); });
            renderWorld();
            window.focus();
        },
        moveEnemyLR = function() {
            if (enemyLRCounter < 6 && enemyLRToggle) {
                gameArray[enemyPos[0].y][enemyPos[0].x + 1] = 6;
                gameArray[enemyPos[0].y][enemyPos[0].x] = moveable;
                enemyLRCounter++;
                if (enemyLRCounter == 6)
                    enemyLRToggle = false;
            } else {
                gameArray[enemyPos[0].y][enemyPos[0].x - 1] = 6;
                gameArray[enemyPos[0].y][enemyPos[0].x] = moveable;
                enemyLRCounter--;
                if (enemyLRCounter == 0)
                    enemyLRToggle = true;
            }
        },
        moveEnemyUD = function() {
            if (enemyUDCounter < 20 && enemyUDToggle) {
                gameArray[enemyPos[1].y - 1][enemyPos[1].x] = 7;
                gameArray[enemyPos[1].y][enemyPos[1].x] = moveable;
                enemyUDCounter++;
                if (enemyUDCounter == 20)
                    enemyUDToggle = false;
            } else {
                gameArray[enemyPos[1].y + 1][enemyPos[1].x] = 7;
                gameArray[enemyPos[1].y][enemyPos[1].x] = moveable;
                enemyUDCounter--;
                if (enemyUDCounter == 0)
                    enemyUDToggle = true;
            }
        },
        map = {
            38: 0, // Up
            39: 1, // Right
            40: 2, // Down
            37: 3, // Left
            87: 0, // W
            68: 1, // D
            83: 2, // S
            65: 3, // A
            32: 4 //Space
        }, //inputmanager
        input = function(event) {

            var modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
            var mapped = map[event.which];

            if (!modifiers) {
                if (mapped !== undefined) {
                    event.preventDefault();
                    move(mapped);
                }
            }
        };
    init();

}; //End onload

function replay() {
    generate();
}

var img = new Image();
img.src = 'img/fire.jpg';
img.onload = function() {
    fire();
};

var ctx = canv.getContext('2d');
const coords = 250;
var frame = 0;
var frameCount = 0;

function fire() {
    window.requestAnimationFrame(step);
}

function step() {
    frameCount++;
    if (frameCount < 10) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.drawImage(img, frame * coords, 0, 250, 250, 0, 0, 300, 150);
    frame++;
    if (frame == 7)
        frame = 0;
    window.requestAnimationFrame(step);
}