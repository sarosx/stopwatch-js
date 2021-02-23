var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var timer = false;

var stopWatch = document.querySelector(".stopwatch");

function run() {
  stopWatch.innerHTML =
    (hr < 10 ? "0" + hr : hr) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec) +
    ":" +
    (msec < 10 ? "0" + msec : msec);
  msec++;
  if (msec == 60) {
    msec = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }
}
function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

function reset() {
  clearInterval(timer);
  timer = false;
  msec = 0;
  sec = 0;
  min = 0;
  hr = 0;

  stopWatch.innerHTML =
    (hr < 10 ? "0" + hr : hr) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec) +
    ":" +
    (msec < 10 ? "0" + msec : msec);
}

function pause() {
  clearInterval(timer);
  timer = false;
}
