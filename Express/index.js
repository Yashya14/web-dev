const express = require("express");
const app = express();

let port = 8080;

app.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
});

app.get('/apple', (req, res) => {
    res.send("Welcome to apple!");
});

// app.get('*', (req, res) => {
//     res.send("page does not exist");
// });

// app.post('/', (req, res) => {
//     res.send("this is post request");
// });

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(username);
    res.send(`Welcome ${username}! to CodeDev`);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("no search query");
        console.log("no search query");
    }
    res.send(`<h1>Search results for query : ${q}</h1>`);
});

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   let code = {
//     name: "Orange",
//     color: "red",
//   };
//   res.send(code);
// });