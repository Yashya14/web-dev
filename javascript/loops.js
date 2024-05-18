// for(let i = 1;i<=10;i++){
//     console.log(i);
// }

//! odd number between 0 to 15

// for(let i = 0;i<=15;i = i+1){5
//     console.log(i);
// }

//! Multiplication table
// let number = prompt("Please enter a number ");
// number = parseInt(number);

// for(let i = number;i <= number * 10;i = i+number){
//     console.log(i)
// }

// for (let i = 0; i < 2; i++) {
//   console.log("outer loop ", i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(j);
//   }
// }

// let a = 1;

// while(a <= 10){
//     console.log(a);
//     a++;
// }

// let heros = [
//   ["superman", "spiderman"],
//   ["batman", "groot", "ironman", "hulk"],
// ];

// for (hero of heros) {
//   for (items of hero) {
//     console.log(items);
//   }
// }

// Todo App

// let todo = [];

// let req = prompt("Please enter your request");

// while (true) {
//   if (req == "quit") {
//     console.log("Quiting App");
//     break;
//   }

//   if (req == "list") {
//     console.log("------------");
//     for (task of todo) {
//       console.log(task);
//     }
//     console.log("------------");
//   } else if (req == "add") {
//     let task = prompt("Please enter task you want to add");
//     todo.push(task);
//     console.log("Task added");
//   } else if (req == "delete") {
//     let idx = prompt("enter index task");
//     todo.splice(idx, 1);
//     console.log("Task deleted");
//   }
//   req = prompt("Please enter your request");
// }

