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

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color: ");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("aqua", 1000);
    changeColor("maroon", 1000);
  } catch (e) {
    console.log(e);
  }
}

/*
changeColor("red", 1000)
  .then(() => {
    console.log("red color changed");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color changed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color changed");
    return changeColor("aqua", 1000);
  })
  .catch(() => {
    console.log("no color changed");
  }); */

//? callback nesting -> callback hell

/*
changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("aqua",1000);
        });
    });
}); */

//? Promises
/*
function saveDb(data) {
  return new Promise((resolve, reject) => {
    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed > 4) {
      resolve("Data saved successfully");
    } else {
      reject("Weak connection detected");
    }
  });
}
*/

/*
saveDb("Hello")
  .then((res) => {
    console.log("data1 saved successfully");
    console.log("result = ", res);
    return saveDb("hello world");
  })
  .then((res) => {
    console.log("data2 saved successfully");
    console.log("result = ", res);
  })
  .catch(() => {
    console.log("Promise rejected");
  }); */

// then() & catch() - > js object
