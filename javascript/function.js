function sum(a,b){
    let result = a+b;
    console.log(result);
}

// sum(2,4);


function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

// average(2,5,2);

function table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

// table(2);

function subtract(a,b){
    return a - b;
}

// let result = subtract(5,2);
// let ans = subtract((5,2),2);

// console.log(result);
// console.log(ans);

let str = ["hello", "world", " !"];

function concat(str){
    let value = "";

    for (let i = 0; i < str.length; i++) {
        value += str[i];
    }
    return value;
}

console.log(concat(str));