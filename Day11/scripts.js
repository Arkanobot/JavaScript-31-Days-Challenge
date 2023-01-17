// getting our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progressBar = player.querySelector(".progress");
const progressBarFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".player__buttonFullscreen");

function togglePlay() {
  // if video is paused, then the function plays the video, else opposite
  video[video.paused ? "play" : "pause"];
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime += praseFloat(this.dataset.skip);
}

function handleRangeUpdate() {}
video[this.name] = this.value;

function handleVideoProgress() {
  const videoProgress = (video.currentTime / video.duration) * 100;
  progressBar.getElementsByClassName.flexBasis = `${percent}%`;
}

function progressBarManual(e) {
  const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}

function toggleFullscreen() {
  // yet to impliment
}

//hookup the event listeners

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

video.addEventListener("progress", handleVideoProgress);
let mousedown = false;
progressBar.addEventListener("click", progressBarManual);
progressBar.addEventListener(
  "mousemove",
  (e) => mousedown && progressBarManual(e)
); // if mouse down is true , then progress bar manual function runs... else does not
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mouseup", () => (mousedown = false));
fullscreen.addEventListener("click", toggleFullscreen);
