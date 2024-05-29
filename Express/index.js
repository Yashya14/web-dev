const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("views", path.join(__dirname,"/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let dicevalue = Math.floor(Math.random() * 6) + 1;
  res.render("home.ejs",{value:dicevalue});
});

let followers = ["John", "shyam", "rajat"];
app.get("/ig/:username", (req, res) => {
  let {username} = req.params;
  res.render("instagram.ejs",{username,followers});
})

// app.get('/', (req, res) => {
//     res.send("Welcome to Home Page!");
// });

// app.get('/apple', (req, res) => {
//     res.send("Welcome to apple!");
// });

// app.get('*', (req, res) => {
//     res.send("page does not exist");
// });

// app.post('/', (req, res) => {
//     res.send("this is post request");
// });

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     console.log(username);
//     res.send(`Welcome ${username}! to CodeDev`);
// });

// app.get("/search", (req, res) => {
//     let {q} = req.query;
//     if(!q){
//         res.send("no search query");
//         console.log("no search query");
//     }
//     res.send(`<h1>Search results for query : ${q}</h1>`);
// });

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   let code = {
//     name: "Orange",
//     color: "red",
//   };
//   res.send(code);
// });