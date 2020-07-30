'use strict'

var selectarrivalltime = document.getElementById('timeToReady1')
var setarrivalltime = JSON.parse(localStorage.getItem("setarrivalltime"));
selectarrivalltime.textContent= setarrivalltime
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.onload = function () {
    var fiveMinutes = 60 * setarrivalltime,
        display = document.querySelector('#timeToReady1');
    startTimer(fiveMinutes, display);
};
