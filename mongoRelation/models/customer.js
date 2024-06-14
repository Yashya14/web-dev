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

// customerSchema.pre("findOneAndDelete",async() => {
//   console.log("pre middleware");
// })


customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
  console.log("pre middleware");
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//? Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).

//? Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results

// const findCustomer = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

// findCustomer();

//? to add a new customer with their orders
// const addCust = async () => {
//   let newCust = new Customer({
//     name: "karan",
//   });

//   let newOrder = new Order({
//     item: "pizza",
//     price: 300,
//   });

//   newCust.orders.push(newOrder);

//   await newOrder.save();
//   await newCust.save();

//   console.log("Added new  customer");
// };

// addCust();

//? delete customer with their orders
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("666c4385471716f07b1bf514");
  console.log(data);
};

delCust();



// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "rahul",
//   });

//   let order1 = await Order.findOne({item : "cold drink"});
//   let order2 = await Order.findOne({item : "mango"});

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomer();

// const addOrder = async() => {
//     let res = await Order.insertMany([
//         {item: "cold drink",price : 10},
//         {item: "mango",price : 20},

//     ]);
//     console.log(res);
// };

// addOrder();
