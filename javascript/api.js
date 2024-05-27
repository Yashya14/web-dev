let jsonData = '{"name":"john doe","age":23}';

// string to object
let res = JSON.parse(jsonData);
console.log(res);

let student = {
  name: "Nansh",
  age: 21,
};

// objeect to string
let ans = JSON.stringify(student);
console.log(ans);

// let url = "https://catfact.ninja/fact";

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

// async function getData(){
//     try {
//         let res = await fetch(url);
//         let data = await data.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.log("Error : ",error);
//     }

//     console.log("End..");
// }

// async function getData(){
//     try {
//         let res = await axios.get(url);
//         console.log(res.fact);
//     } catch (error) {
//         console.log("Error : ",error);
//     }

// }

/*
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let data = await getImage();
  console.log(data);

  let img = document.querySelector("#result");
  img.setAttribute("src", data);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    console.log(res);
    return res.data.message;
  } catch (error) {
    return "NO Image Found";
  }
}

*/

let url3 = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let data = await getColleges(country);
  console.log(data);
  showColleges(data);
});

function showColleges(college) {
    let list = document.querySelector("#list");
    list.innerText = "";
  for (col of college) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges() {
  try {
    let res = await axios.get(url3 + country);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
}
