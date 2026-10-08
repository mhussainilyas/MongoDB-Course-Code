use("ecommerce");

// ==============
//     Create
// ==============

// db.Customers.insertOne({
//   name: "Hussain",
//   role: "user",
//   age: 21,
// });

// db.Customers.insertMany([
//   { name: "Suleman", role: "user", age: 22 },
//   { name: "Zaryab", role: "admin", age: 20 },
//   { name: "Hamid", role: "supplier", age: 19 },
// ]);

// ============
//     Read
// ============

// db.Customers.find();
// db.Customers.find().pretty();
// db.Customers.findOne({name: "Hussain"})
// db.Customers.find({role: "user"})

// ==============
//     Update
// ==============

// db.Customers.updateOne({ name: "Zaryab" }, { $set: { role: "user" } });
// db.Customers.updateMany({ role: "user" }, { $set: { role: "buyer" } });

// ==============
//     Delete
// ==============

// db.Customers.deleteOne({ name: "Hamid" });
// db.Customers.deleteMany({ role: "buyer" });
