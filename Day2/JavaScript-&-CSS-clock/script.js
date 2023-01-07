const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); // gets the date in to the variable now
  const seconds = now.getSeconds(); // gets seconds from variable now
  const secondsDegrees = (seconds / 60) * 360 + 90; // converting seconds to degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // applying css transformation using Seconds Degrees

  const minutes = now.getMinutes(); // getting minutes from variable now
  const minutesDegrees = (minutes / 60) * 360 + 90; // converting minutes to degrees
  minHand.style.transform = `rotate(${minutesDegrees}deg)`; // applying css transformation using Minutes Degrees

  const hours = now.getHours(); // getting hours from variable now
  const hourDegrees = (hours / 12) * 360 + 90; // converting hours to degrees
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; // applying css transformation using hours Degrees
}

setInterval(setDate, 1000);
