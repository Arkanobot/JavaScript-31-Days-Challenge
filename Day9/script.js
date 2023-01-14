const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello!");

// Interpolated
console.log("%s - This is a Copyright Logo", "Ⓒ");

// Styled

console.log("%c I am some styled text", "font-size: 10px; background: red");

// warning!
console.warn("This is a Warning!");

// Error :|
console.error("This is an Error!");

// Info
console.info("This is a Info Message");

// Testing
console.assert(1 === 1, "That is Wrong!"); // will test the first condition and log the next statement if the condition is false
//example1
const p = document.querySelector("p");
console.assert(p.classList.contains("Nothing"), "It does not contain Nothing!");

// clearing
console.clear(); // this clears the console

// Viewing DOM Elements
console.log(p); // prints the element that was selected
console.dir(p); // this will give back the element and all the options that cone with it as a drop down

// Grouping together
dogs.forEach((dog) => {
  // console.group(`${dog.name}`); // defines group start  and stats as opened
  console.groupCollapsed(`${dog.name}`); // defines group start and starts as collapsed instead of open
  console.log(
    `This is ${dog.name} and it is ${dog.age * 7} dog years old` // groups all the element under the specific name
  );
  console.groupEnd(`${dog.name}`); // defines group end
});

// counting
console.count(" whatever"); // counts whatever you type inside the bracket as many times as you console it

// timing
console.time("fetching data"); // setting the name for the timing
fetch("https://api.github.com/users/wesbos") // getting something from github
  .then((data) => data.json()) // performing action
  .then((data) => {
    console.timeEnd("fetching data"); // ending the timing with the same name declared above
    console.log(data); // consoling the data
  });

// performance.now also gives out timing

//table
console.table(dogs); // takes an array / object and makes it into table
