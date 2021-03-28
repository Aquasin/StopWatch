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

// Functions
function startTime() {
    testMilli = setInterval(timerMilli, milliSecInterval);
    // testSec = setInterval(timerSec, secInterval);
    // testMin = setInterval(timerMin, minInterval);
}

function timerMilli() {
    if (milliTime < 10) milliTime = "0" + milliTime;
    milliI[0].innerHTML = milliTime;
    // console.log(milliTime);
    milliTime++;
    if (milliTime > 99) {
        milliTime = 0;
        milliI[0].innerHTML = "00";

        secTime++;
        if (secTime < 10) secTime = "0" + secTime;
        secI[0].innerHTML = secTime;

        if (secTime > 9) {
            secTime = 0;
            secI[0].innerHTML = "00";
            minTime++;
            minI[0].innerHTML = minTime;
            console.log(minTime);
        }
    }
}

// function timerSec() {
//     if (secTime < 10) secTime = "0" + secTime;
//     secI[0].innerHTML = secTime;
//     console.log(secTime);
//     // secTime++;
//     if (secTime > 59) {
//         secTime = 0;
//         ++minTime;
//     }
// }

function timerMin() {
    minI[0].innerHTML = minTime;
    console.log(minTime);
    // minTime++;
}

//
function stopTime() {
    clearInterval(testMilli);
    // clearInterval(testSec);
    // clearInterval(testMin);
}

function resumeTime() {
    startTime();
}
