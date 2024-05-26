// call stack
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// let h1 = document.querySelector('h1');

// function changeColor(color,delay,nextColor){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     },delay);
// }

//? callback nesting -> callback hell

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("aqua",1000);
//         });
//     });
// })

//? Promises

function saveDb() {
  return new Promise((resolve, reject) => {
    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed > 4) {
      resolve("Data saved successfully");
    } else {
      reject("Weak connection detected");
    }
  });
}

saveDb()
  .then(() => {
    console.log("Promise resolved");
  })
  .catch(() => {
    console.log("Promise rejected");
  });
