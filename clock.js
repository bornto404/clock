addEventListener("load", clock);

function clock() {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 10) { hour = "0" + hour; }
    var minute = date.getMinutes();
    if (minute < 10) { minute = "0" + minute; }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    setTimeout("clock()", 100)
}