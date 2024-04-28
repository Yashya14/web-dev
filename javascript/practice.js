// practice que 1
let num = 24;

if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

// practice que 2

// let userName = prompt("Please enter your name : ");
// let age = prompt("Please enter your age : ");

// alert(`${userName} is ${age} years old`);

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
  console.log("number have the same last digit", a % 10);
} else {
  console.log("numbers don't have the same last digit");
}

// js part 3 - practice question

// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//   positive number].
//   For example: for array [7, 9, 0, -2] and n=3
//   Print, [7, 9, 0]

let arr = [7, 9, 0, -2];
let n = 3;

let ans = arr.slice(0, n);
console.log(ans);

// que 2
let arr1 = [7, 9, 0, -2];
let nums = 3;

let result = arr1.slice(arr.length - nums);
console.log(result);

// que 3

let str1 = prompt("Please enter your string : ");

if (str1.length == 0) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}

// que 4

let str2 = "YaShpAl";
let index = 3;

if (str2[index] == str2[index].toLocaleLowerCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

// que 5

let str3 = prompt("please enter your string : ");
console.log(`your string = ${str3}`);
console.log(`string without spaces is ${str3.trim()}`);

// que 6

let arrs = ["a", "b", "c", 23, 67, 34, -5];
let item = 34;
if (arrs.indexOf(item) != -1) {
  console.log("element exist in array");
} else {
  console.log("not exist element");
}
