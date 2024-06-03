const express = require("express");
const app = express();
// const {faker} = require("@faker-js/faker");

const port = 8080;

// let createRandomUser = () => {
//     return {
//         userId : faker.string.uuid(),
//         username : faker.internet.userName(),
//         email : faker.internet.email(),
//         avatar : faker.image.avatar(),
//         password : faker.internet.password(),
//         birthdate : faker.date.birthdate(),
//         registredAt : faker.date.past(),
//     };
// };

// console.log(createRandomUser());

// app.get("/",(req, res) => {
//     res.send("Welcome to express project!");
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
