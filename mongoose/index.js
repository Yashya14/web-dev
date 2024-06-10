const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

main()
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.log("not connected"));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// A schema defines the structure of your collection documents. A Mongoose schema maps directly to a MongoDB collection.
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
// });


const userSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true,
    maxLength : 50
  },
  age: {
    type : Number,
    min : 1
  },
  email: {
    type : String,
    unique : true
  },

});

const User = mongoose.model("User", userSchema);

const user1 = new User({
    name : "ram",
    age : 14,
    email : "ram@gmail.com"
});

user1.save(); // async function

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
// User.findByIdAndUpdate("6665e6446ecbcc7a79eac25b",{email : "adam@google.in"},{new : true}).then((data) => {
//   console.log(data);
// });

// User.deleteOne({email : "eve@google.in"}).then((data) => {
//     console.log(data);
// })

// User.deleteMany({age : {$gt : 20}}).then((data) => {
//     console.log(data);
// })

// User.findOneAndDelete({name : "Eve"}).then((data) => {console.log(data)});

// User.findByIdAndDelete("6665f02392bc5867468ba54c").then((res) => {
//   console.log(res);
// });

app.get("/", (req, res) => {
  res.send("Welcome to Express.JS");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
