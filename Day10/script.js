const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inRange = false;
  //if shift key is pressed and is being pressed
  if (e.shiftKey && this.checked) {
    // for each checkbox
    checkboxes.forEach((checkbox) => {
      //if this is the selected checkbox or if this was the last checked checkbox
      if (checkbox === this || checkbox === lastChecked) {
        //set the inRange opposite of what it is
        inRange = !inRange;
      }

      if (inRange) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
