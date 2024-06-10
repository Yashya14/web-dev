// initialize db
const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from : "neha",
        to : "preeti",
        msg : "send me notes for the exam",
        createdAt : new Date(),
    },
    {
        from : "rohit",
        to : "mohit",
        msg : "teach me JS callbacks",
        createdAt : new Date(),
    },
    {
        from : "ram",
        to : "vina",
        msg : "call me again",
        createdAt : new Date(),
    },
    {
        from : "amit",
        to : "shyam",
        msg : "all the best",
        createdAt : new Date(),
    },
];

Chat.insertMany(allChats);
