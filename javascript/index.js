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

//? Qs2. Write a JS program to find the no of digits in a number.
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

let number1 = 287152;
let sum = 0;
let copy1 = number1;

while (copy1 > 0) {
  digit = copy1 % 10;
  sum += digit;
  copy1 = Math.floor(copy1 / 10);
}
console.log(sum);

//? Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// Qs5. Find the largest number in an array with only positive numbers.

let arr1 = [2, 5, 23, 4, 10, 5, 7];
let largest = 0;

for (let i = 0; i < arr1.length; i++) {
  if (largest < arr1[i]) {
    largest = arr1[i];
  }
}

console.log(largest);
