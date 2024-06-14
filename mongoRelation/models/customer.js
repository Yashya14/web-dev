const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//? Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).

//? Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

findCustomer();

// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Raju",
//   });

//   let order1 = await Order.findOne({item : "chips"});
//   let order2 = await Order.findOne({item : "chocolate"});

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomer();

// const addOrder = async() => {
//     let res = await Order.insertMany([
//         {item: "chips",price : 10},
//         {item: "samosa",price : 20},
//         {item: "chocolate",price : 40},
//     ]);
//     console.log(res);
// };

// addOrder();
