let milliSeconds = 0;
let secTime = 0;
const limitOne = 9;
const limitTwo = 99;
const limitThree = 999;
const limitFourth = 59;
const secTimeInterval = 1000;

const appendMilliSeconds = document.getElementById('milli_seconds');
const appendSeconds = document.getElementById('seconds');

const buttonStart = document.getElementById('start_button');
const buttonStop = document.getElementById('stop_button');
const buttonReset = document.getElementById('reset_button');
let milliInterval;
let secInterval;

const startMilliTimer = () => {
milliSeconds++;
    if (milliSeconds <= limitOne) {
        appendMilliSeconds.innerHTML = '00' + milliSeconds;
}
    else if (milliSeconds > limitOne && milliSeconds <= limitTwo) {
        appendMilliSeconds.innerHTML = '0' + milliSeconds;
}
else if (milliSeconds > limitTwo && milliSeconds <= limitThree) {
    appendMilliSeconds.innerHTML = '' + milliSeconds;
}
else {
milliSeconds = 0;
    appendMilliSeconds.innerHTML = '00' + milliSeconds;
}
};

const startSecTimer = () => {
    secTime++;
    if (secTime <= limitOne) {
        appendSeconds.innerHTML = '0' + secTime;
}
    else if (secTime <= limitFourth) {
        appendSeconds.innerHTML = '' + secTime;
}
    else {
    secTime = 0;
    appendSeconds.innerHTML = '0' + secTime;
}
};

buttonStart.onclick = function startStopWatch() {
clearInterval(milliInterval);
milliInterval = setInterval(startMilliTimer, 1);
secInterval = setInterval(startSecTimer, secTimeInterval);
};

buttonStop.onclick = function stopTimer() {
clearInterval(milliInterval);
clearInterval(secInterval);
};

buttonReset.onclick = function resetTimer() {
clearInterval(milliInterval);
clearInterval(secInterval);
milliSeconds = '000';
secTime = '00';
appendMilliSeconds.innerHTML = milliSeconds;
appendSeconds.innerHTML = secTime;
};