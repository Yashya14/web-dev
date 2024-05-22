//? Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'

let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerHTML = "Click me!";

document.querySelector("body").prepend(input);
document.querySelector("body").prepend(btn);

//* Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

btn.setAttribute("placeholder", "username");
btn.setAttribute("id","btn");

//? Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

// document.querySelector("btn")
// btn.classList.add("blue")
btn.style.color = "white";
btn.style.backgroundColor = "blue";

//* Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
document.querySelector("body").append(h1);

h1.classList.add("purple");
h1.style.color = "purple";

//? Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

let para = document.createElement("p");
para.innerHTML = "<b>DOM</b> practice question";

document.querySelector("body").append(para);