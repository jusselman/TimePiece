
function checkTime(i) {

    if (i < 10) {
        // puts 0 in front of single digits
        i = "0" + i
    }
        // Still not too sure about this one //
    return i
}


function startTime() {
    // store the time in a variable
    var currentTime = new Date()
    var hour = currentTime.getHours()
    var minute = currentTime.getMinutes()
    var second = currentTime.getSeconds()

    //fuck military time //
    if (hour > 12) {
        // subtract 12 if greater than 12, 13 becomes 1!!!!!!!!//
        hour = hour - 12;
    }

    // update variables minute and second using checkTime function from line 1
    minute = checkTime(minute)
    second = checkTime(second)

    //select element with id="time" and change the text to the current time
    document.getElementById('time').textContent = hour + ":" + minute + ":" + second

    //refreshes the clock second by second //
    setTimeout(function () {
        startTime()
    }, 1000)
}

// add event listener to start function so finally time will be displayed
document.getElementById('time').addEventListener('onload', startTime(), false)
