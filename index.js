// Var
const minI = document.getElementsByClassName("min");
const secI = document.getElementsByClassName("sec");
const milliI = document.getElementsByClassName("milli");
var milliTime = 0;
var secTime = 0;
var minTime = 0;
const minInterval = 60000;
const secInterval = 1000;
const milliSecInterval = 10;
var testMilli;
var testSec;
var testMin;
const start = document.getElementsByClassName("start");
const pause = document.getElementsByClassName("pause");
const resume = document.getElementsByClassName("resume");
const reset = document.getElementsByClassName("reset");

// Functions
function initialize() {
    milliTime = 0;
    secTime = 0;
    minTime = 0;
    milliI[0].innerHTML = "00";
    secI[0].innerHTML = "00";
    minI[0].innerHTML = "00";
    pause[0].style.display = "none";
    resume[0].style.display = "none";
    reset[0].style.display = "none";
}

function startTime() {
    testMilli = setInterval(timerMilli, milliSecInterval);
    start[0].style.display = "none";
    pause[0].style.display = "block";
    resume[0].style.display = "none";
    reset[0].style.display = "block";
}

function timerMilli() {
    if (milliTime < 10) milliTime = "0" + milliTime;
    milliI[0].innerHTML = milliTime;
    milliTime++;

    if (milliTime > 99) {
        milliTime = 0;
        milliI[0].innerHTML = "00";

        secTime++;
        if (secTime < 10) secTime = "0" + secTime;
        secI[0].innerHTML = secTime;

        if (secTime > 59) {
            secTime = 0;
            secI[0].innerHTML = "00";

            minTime++;
            if (minTime < 10) minTime = "0" + minTime;
            minI[0].innerHTML = minTime;
        }
    }
}

//
function stopTime() {
    clearInterval(testMilli);
    pause[0].style.display = "none";
    resume[0].style.display = "block";
}

function resumeTime() {
    startTime();
    pause[0].style.display = "block";
    resume[0].style.display = "none";
}

function resetTime() {
    clearInterval(testMilli);
    start[0].style.display = "block";
    resume[0].disabled = false;
    pause[0].disabled = false;
    initialize();
}
