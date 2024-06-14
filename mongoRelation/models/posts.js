const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "Insta",
  },
});

const Insta = mongoose.model("Insta", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   let user1 = new Insta({
//     username: "rahul",
//     email: "rahul@gmail.com",
//   });

//   let post1 = new Post({
//     content: "Hello World",
//     likes: 7,
//   });

//   post1.user = user1;

//   await post1.save();
//   await user1.save();
// };

// addData();

// const findData = async () => {
//     let user1 = await Insta.findOne({ username : "rahul"});

//     let post2 = new Post({
//         content: "love coding :)",
//         likes : 100
//     });

//     post2.user = user1;
//     await post2.save();
// };

// findData();

const getData = async () => {
    let res = await Post.find({}).populate("user");
    console.log(res);
};

getData();