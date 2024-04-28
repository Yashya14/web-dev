// que 1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// qure 2

let number = 287152;
let count = 0;

let copy = number;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

// que 3

let number1 = 287152;
let sum = 0;
let copy1 = number1;

while (copy1 > 0) {
  digit = copy1 % 10;
  sum += digit;
  copy1 = Math.floor(copy1 / 10);
}
console.log(sum);

// que 4

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// que 5

let arr1 = [2, 5, 23, 4, 10, 5, 7];
let largest = 0;

for (let i = 0; i < arr1.length; i++) {
  if (largest < arr1[i]) {
    largest = arr1[i];
  }
}

console.log(largest);