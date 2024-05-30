const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // for unique ids ,v4 - version 4
const methodOverride = require("method-override");
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "yashpal",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "shradha",
    content: "Hardwork is important to achieve sucess",
  },
  {
    id: uuidv4(),
    username: "rajat",
    content: "I got selected in google",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// create a new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// send a POST request
app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// display single post by using id
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  res.render("show.ejs", { post });
});

// edit the post
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
//   console.log(post);
//   res.send("patch request working");
res.redirect("/posts");
});

// edit the post
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
    
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
