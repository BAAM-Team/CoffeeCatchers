'use strict'

var selectarrivalltime = document.getElementById('timeToReady1')

if (localStorage.getItem("timerDown") !== null) {
    var timerDown = JSON.parse(localStorage.getItem('timerDown'));
    var minutes = timerDown.minutes
    var seconds = timerDown.seconds/60
    var setarrivalltime = minutes + seconds
} else {
    var setarrivalltime = JSON.parse(localStorage.getItem("setarrivalltime"));
}

selectarrivalltime.textContent = setarrivalltime


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {


        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        var timerDown = {
            "minutes": minutes,
            "seconds": seconds
        }

        var timerDownstringify = JSON.stringify(timerDown)
        localStorage.setItem("timerDown", timerDownstringify)

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


