const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

main()
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// A schema defines the structure of your collection documents. A Mongoose schema maps directly to a MongoDB collection.
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name : "Eve",
//     age : 21,
//     email : "EVE@gmail.com"
// });

// user1.save(); // async function

// User.findOne().then((data) => {
//     console.log(data);
// });

// User.findOne({age : {$gte : 21}}).then((data) => {
//     console.log(data);
// });

// User.find().then((data) => {
//     console.log(data);
// });

// User.findById("6665e6446ecbcc7a79eac25b").then((data) => {
//     console.log(data);
// });

// User.updateOne({ name: "Eve" }, { age: 34 }).then((data) => {
//   console.log(data);
// });
// User.updateMany({age : { $gt: 22 }},{email : "user@google.in"}).then((data) => {
//   console.log(data);
// });

// User.findOneAndUpdate({age : 34},{email : "eve@google.in"}).then((data) => {
//   console.log(data);
// });

// {new : true } -> returns modified data
User.findByIdAndUpdate("6665e6446ecbcc7a79eac25b",{email : "adam@google.in"},{new : true}).then((data) => {
  console.log(data);
});

app.get("/", (req, res) => {
  res.send("Welcome to Express.JS");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
