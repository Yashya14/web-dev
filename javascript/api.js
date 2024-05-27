let jsonData = '{"name":"john doe","age":23}';

// string to object
let res = JSON.parse(jsonData);
console.log(res);

let student = {
    name : "Nansh",
    age : 21
}

// objeect to string
let ans = JSON.stringify(student);
console.log(ans);

