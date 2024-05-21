function sum(a, b) {
  let result = a + b;
  console.log(result);
}

// sum(2,4);

function average(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

// average(2,5,2);

function table(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

// table(2);

function subtract(a, b) {
  return a - b;
}

// let result = subtract(5,2);
// let ans = subtract((5,2),2);

// console.log(result);
// console.log(ans);

let str = ["hello", "world", " !"];

function concat(str) {
  let value = "";

  for (let i = 0; i < str.length; i++) {
    value += str[i];
  }
  return value;
}

// console.log(concat(str));

//! Practice question

//? Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5; //elements larger than a number num

function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getElements(arr, num);

//? Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let ans = "";

function extractUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      //if current character is not added, then add it in ans. //Otherwise it is a duplicate.
      ans += currChar;
    }
  }
  return ans;
}

let str1 = "abcdabcdefgggh";
console.log(extractUnique(str1));

//* Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length; // 9
    // console.log("val = ",ansLen);
    let currLen = country[i].length; // 24 idx 2

    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}
console.log(longestName(country));

//! Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let str2 = "apnacollege";
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str2));

//? Qs5. Write a JavaScript function to generate a random number within a range (start, end).

// let start = 100;
// let end = 200;
function generateRandom(start, end) {
  let diff = end - start;
  let result = Math.floor(Math.random() * diff) + start;
  return result;
}

console.log(generateRandom(1, 10));

//! Arrow function practice question.

let arrs = [1, 3, 4, 2, 6, 5];

const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total / arr.length;
};

console.log(arrayAverage(arrs));

//? question 2
const isEven = (n) => {
  if(n % 2 == 0){
    return "Even";
  }else{
    return "odd";
  }
  
};

console.log(isEven(30));

const object = {
  message : 'hello world',
  logMessage(){
    console.log(this.message);
  }
};

setTimeout(object.logMessage,1000); // undefined


let length = 4;

function callback(){
  console.log(this.length);
}

const onject1 = {
  length : 5,
  method(callback){
    callback();
  },

};

object.method(callback,1,2); // TypeError: object.method is not a function


