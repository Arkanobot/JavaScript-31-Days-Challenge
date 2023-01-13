const canvas = document.querySelector("#draw"); // selecting the canvas
const context = canvas.getContext("2d"); // context to draw on

canvas.width = window.innerWidth; // setting the canvas width to that of window
canvas.height = window.innerHeight; // setting the canvas height to that of window
context.strokeStyle = "hsl(0, 100%, 60%)";
context.lineJoin = "round"; // line join style
context.lineCap = "round";
context.lineWidth = 10; // setting the line Width
// context.globalCompositeOperation = "multiply";

let isDrawing = false; // setting a variable so that it is false when mouse up and true when mouse down
let lastX = 0; // variable for start coordinate
let lastY = 0; // variable y for start coordinate
let hue = 0; // setting the initial value for Hue
let direction = true; // setting the initial value for direction

function draw(e) {
  if (!isDrawing) {
    return; // stops the fn from running when they are not mouse down
  }
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`; // changing the Hue Color for the stroke
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++; // incrementing hue with every function call
  if (hue >= 360) {
    hue = 0; // setting hue to 0 if it reaches 360
  }
  if (context.lineWidth >= 10 || context.lineWidth <= 1) {
    direction = !direction; // setting up the value for direction for transition of stroke width
  }

  if (direction) {
    context.lineWidth++; // increasing stroke width  based on the above condition
  } else {
    context.lineWidth--; // decreasing stroke width based on above condition
  }
}

// adding event listeners to make sure draw is set to true only when mouse is clicked and is inside the window
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
