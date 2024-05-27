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

let url = "https://catfact.ninja/fact";

// fetch(url).then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data.fact);
//     return fetch(url)
// })
// .catch((err) => {
//     console.log(err);
// });

async function getData(){
    try {
        let res = await fetch(url);
        let data = await data.json();
        console.log(data.fact);
    } catch (error) {
        console.log("Error : ",error);
    }

    console.log("End..");
}