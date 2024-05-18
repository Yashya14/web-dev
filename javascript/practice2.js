//? Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

//! Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number = 287152;

let count = 0;
let copy = number;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

//? Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let num1 = 287152;

let copy1 = num1;
let sum = 0;

while (copy1 > 0) {
  digit = copy1 % 10;
  sum += digit;
  copy1 = Math.floor(copy1 / 10);
}

console.log(sum);

//! Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3)

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);

//? Qs5. Find the largest number in an array with only positive numbers.

let arrs = [2, 4, 9, 12, 41, 100, , 1, 42];
let largest = 0;

for (let i = 0; i <= arrs.length; i++) {
  if (largest < arrs[i]) {
    largest = arrs[i];
  }
}

console.log(largest);

//! Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let randomNo = Math.floor(Math.random() * 6) + 1;

console.log(randomNo);

//? Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car = {
  name: "BMW",
  model: "7 series",
  color: "black",
};

console.log(car.name);

//! Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let Person = {
  name: "shradha",
  age: 21,
  city: "delhi",
};

Person.city = "New York";

Person.country = "United States";

console.table(Person);
