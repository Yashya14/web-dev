let arr = [2, 3, 4, 5, 6, 8];

// forEach
arr.forEach(function (e) {
  console.log(e);
});

// map
let newArr = arr.map((e) => {
  return e * 2;
});

console.log(newArr);

// filter
let res = arr.filter((e) => {
  return e % 2 == 0;
});

console.log(res);

//every -> return true or false i.e like AND
let result = arr.every((e) => {
  return e % 2 == 0;
});

console.log(result);

// reduce (accumulator,element )

let ans = arr.reduce((acc, ele) => {
  return acc + ele;
});

console.log(ans);

//? find maximum number from array

// let max = -1;
// for (let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let maxNum = arr.reduce((max, ele) => {
  if (max < ele) {
    return ele;
  } else {
    return max;
  }
});
console.log(maxNum);

//? minimum value in array
let minNum = arr.reduce((min, ele) => {
  if (min < ele) {
    return min;
  } else {
    return ele;
  }
});
console.log(minNum);

//! practice que

//? Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let arrs = [1, 2, 3, 4, 5];

let newArray = arrs.map((e) => {
  return e * e;
});

console.log(newArray);

let answer = newArray.reduce((acc, e) => 
 acc + e,0
);

let avg = answer / arrs.length;

console.log("result: " + avg);

//* Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let arrs2 = arrs.map((e) => {
  return e + 5;
});

console.log("value: " + arrs2);

//? Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let heros = ["ironman", "batman", "spiderman", "tony"];

let herosUpper = heros.map((e) => {
  return e.toUpperCase();
});

console.log(herosUpper);

//* Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//* variable number of arguments. The function should return a new array with the original
//* array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (ar, ...args) => {
  return [...ar, ...args.map((v) => v * 2)];
};

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

//? Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//? object which contains all the keys and values of the first object and second object.

let stud1 = {
  name: "yash",
  age: 19,
  subject: "science",
};

let stud2 = {
  course: "computer science",
  rollno: 23,
};

const mergeObjects = (obj1,obj2) => {
   return {...obj1, ...obj2};
};

console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
console.log(mergeObjects(stud1,stud2));