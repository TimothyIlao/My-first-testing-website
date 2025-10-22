var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");
let current = document.getElementById("current");

function playpause() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
};

player.onpause = function () {
  playbtn.classList.remove("fa-pause");
  playbtn.classList.add("fa-play");
};

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  let duration = player.duration;
  let prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
};

function timeFormat(ct) {
  let minutes = Math.floor(ct / 60);
  let seconds = Math.floor(ct % 60);
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}