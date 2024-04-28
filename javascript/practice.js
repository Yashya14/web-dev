// practice que 1
let num = 24;

if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

// practice que 2

let userName = prompt("Please enter your name : ");
let age = prompt("Please enter your age : ");

alert(`${userName} is ${age} years old`);

// practice que 3

let month = 4;
switch (month) {
  case 1:
    console.log("january, february, march");
    break;
  case 2:
    console.log("april, may ,june");
    break;
  case 3:
    console.log("july,august,september");
    break;
  case 4:
    console.log("october,november,december");
    break;

  default:
    console.log("number is invalid");
    break;
}

// que 4
let str = "appleapple";

if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("golden string");
} else {
  console.log("not golden string");
}

// que 5
let num1 = 104;
let num2 = 87;
let num3 = 34;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1, "is largest");
  } else {
    console.log(num3, "is largest");
  }
} else {
  if (num2 > num3) {
    console.log(num2, "is largest");
  } else {
    console.log(num3, "is largest");
  }
}

// que 6

let a = 45825232;
let b = 4562;

if (a % 10 === b % 10) {
    console.log("number have the same last digit",a%10);
}else{
    console.log("numbers don't have the same last digit");
}
