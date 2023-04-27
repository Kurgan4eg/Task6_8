const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightGreen = document.querySelector('#trafficLightGreen');

function makeRed() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('red');
    trafficLightRed.addEventListener('click', makeRed);
}

function makeYellow() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.addEventListener('click', makeYellow);
}

function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('green');
    trafficLightGreen.addEventListener('click', makeGreen);
}

trafficLightRed.addEventListener('click', makeRed);
trafficLightYellow.addEventListener('click', makeYellow);
trafficLightGreen.addEventListener('click', makeGreen);
