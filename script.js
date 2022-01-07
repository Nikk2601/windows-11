let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let file = document.getElementsByClassName("file")[0]
let filemanager = document.getElementsByClassName("filemanager")[0]
let arrow = document.getElementsByClassName("arrow")[0]
let arrowicons = document.getElementsByClassName("arrowicons")[0]

// console.log('hello');


start.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-845px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})
file.addEventListener("click", () => {
    if (filemanager.style.bottom == "5px") {
        filemanager.style.bottom = "-845px"
    }
    else {
        filemanager.style.bottom = "5px"
    }
})


arrow.addEventListener("click", () => {
    if (arrowicons.style.bottom == "50px") {
        arrowicons.style.bottom = "-845px"
    }
    else {
        arrowicons.style.bottom = "50px"
    }
})


var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');

function updateClock() {
    // Get the current time, day , month and year
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    // store day and month name in an array
    //   var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    // format date and time
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    // display date and time
    var period = hours > 12 ? 'AM' : 'PM';
    time.innerHTML = hours + ':' + minutes + ' ' + period;
    dateTime.innerHTML = monthNames[month] + ' ' + date + ', ' + year;
}

updateClock();
setInterval(updateClock, 1000);

