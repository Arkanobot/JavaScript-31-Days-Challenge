function removeTransition(e) {
  // function to remove transition
  if (e.propertyName !== "transform") return; // if element does not have propertyName called transform, return out of function
  e.target.classList.remove("playing"); // else, target the element class 'playing' and remove the class from element
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}" ]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return; // if there is no key associated with audio, get out of function

  key.classList.add("playing"); // cadds the class - Playing to the specific div which is pressed (keydown)
  audio.currentTime = 0; // rewind audio to start
  audio.play(); // play the audio attached
}

const onClick = (event) => {
  // on click event function
  const audio = document.querySelector(
    `audio[class = "${event.srcElement.id.toUpperCase()}"]`
  ); // if the audio has a class that matches the event id, then save it in const audio
  if (!audio) return; // if there is no audio associated, get out of function
  audio.currentTime = 0; // set audio time to start
  audio.play(); // play the attached audio
};

const keys = Array.from(document.querySelectorAll(".key")); // creating an array from the all the divs with .key class
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); // for each KEY in KEYS, adding an event listener and then checks if transition has ended (check CSS transition time), if true - calls function - removesTransition
window.addEventListener("keydown", playSound); // plays the sound when the Event Keydown happens
window.addEventListener("click", onClick); // plays the sound when the event click happens on the specific div
