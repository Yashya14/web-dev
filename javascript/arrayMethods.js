let arr = [2,3,4,5,6,8];

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
let result =  arr.every((e) => {
    return e % 2 == 0;
});

console.log(result);

// reduce (accumulator,element )

let ans = arr.reduce((acc,ele) => {
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

let maxNum = arr.reduce((max,ele) => {
    if(max < ele){
        return ele;
    }else{
        return max;
    }
});
console.log(maxNum);

//? minimum value in array
let minNum = arr.reduce((min,ele) => {
    if(min < ele){
        return min;
    }else{
        return ele;
    }
});
console.log(minNum);

