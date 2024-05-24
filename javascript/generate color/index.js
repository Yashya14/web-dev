let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let randomColor = getRandomColor();
  h1.innerHTML = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

let h1 = document.querySelector("h1");

h1.addEventListener("mouseout", function () {
  console.log("mouseout");
});

let btn1 = document.querySelector("button");

btn1.addEventListener("scroll", function () {
  console.log("sccroll ");
});

let input = document.querySelector("#inp");

// input.addEventListener("keypress", function () {
//   console.log("key press");
// });

//? Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.


btn1.addEventListener("click", function () {
    console.dir(this);
    this.style.backgroundColor = "green";
    this.style.color = "white";
});

