var timerInterval = 0;
var ding = new Audio("song/son.mp3");
var play = false;
var test;

$(".counter__view-delay").text(timerInterval);

$(".counter__view-play").click(() => {
  if (play === false) {
    play = true;
    test = setInterval(() => {
      ding.play();
    }, timerInterval * 1000);
  }
  else {
    play = false;
    clearInterval(test);
  }
});

$(".counter__view-sub").click(() => {
  subInterval();
  $(".counter__view-delay").text(timerInterval.toString());
});

$(".counter__view-add").click(() => {
  addInterval();
  $(".counter__view-delay").text(timerInterval.toString());
});

function subInterval() {
  if (timerInterval >= 0.1) {
    timerInterval = timerInterval - 1;
  }
}

function addInterval() {
  timerInterval = timerInterval + 1;
}
