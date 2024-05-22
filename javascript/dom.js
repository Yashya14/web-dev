let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerHTML = "Click me!";

document.querySelector("body").prepend(input);
document.querySelector("body").prepend(btn);

btn.setAttribute("placeholder", "username");
btn.setAttribute("id","btn");


// document.querySelector("btn")
// btn.classList.add("blue")
btn.style.color = "white";
btn.style.backgroundColor = "blue";


let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
document.querySelector("body").append(h1);

h1.classList.add("purple");
h1.style.color = "purple";

let para = document.createElement("p");
para.innerHTML = "<b>DOM</b> practice question";

document.querySelector("body").append(para);