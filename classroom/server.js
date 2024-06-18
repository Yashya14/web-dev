const express = require("express");
const app = express();
const port = 3001;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const users = require("./routes/users");
const posts = require("./routes/posts");

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

// app.use(cookieParser("secretcode")); //? parse the cookie

const sessionOptions = {
  secret: "mysecretcode",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.sucessMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
})

//? /register?name=your_name

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  
  if(name === "anonymous"){
    req.flash("error", "user not registered");
  }else{
    req.flash("success", "user registered successfully");
  }

  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/greet", (req, res) => {
//   // res.cookie("user","Shradha") //? cookie
//   res.cookie("user", "RJ john", { signed: true }); //? cookie
//   console.dir(req.cookies);
//   res.send("sent cookies");
// });

// app.get("/verify" ,(req, res) => {
//     console.log(req.signedCookies);
//     res.send("verify cookies");
// });

// app.get("/", (req, res) => {
//   let { user } = req.cookies;

//   res.send(`Welcome ${user}`);
// });

app.use("/users", users);
app.use("/posts", posts);

app.listen(port, () => {
  console.log("listening on port " + port);
});
