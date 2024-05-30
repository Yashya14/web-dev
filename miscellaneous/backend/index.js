const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register",(req,res) => {
    let {username, password} = req.query;
    res.send(`standard GET request, Welcome ${username}!`);
});

app.post("/register",(req,res) => {
    let {username, password} = req.body;
    res.send(`standard POST request. Welcome ${username}!`);
});

app.listen(port,() => {
    console.log(`app listening on port ${port}`);
});