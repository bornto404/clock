function clock(){
    var date = new Date();
    var hour = date.getHours();
    if (hour < 10) { hour = "0" + hour; }
    var minute = date.getMinutes();
    if (minute < 10) { minute = "0" + minute; }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    document.getElementById("clock").innerHTML = hour + ":" + minute;
    document.getElementById("calendar").innerHTML = day + "." + month + "." + year;
    setTimeout("clock()",300);
}