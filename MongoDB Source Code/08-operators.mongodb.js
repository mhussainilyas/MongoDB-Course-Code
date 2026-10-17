// use("school");
use("ecommerce");

// =======================
//   Comparison Operator
// =======================

// db.students.find({ age: { $eq: 25 } });
// db.students.find({ age: { $ne: 25 } });
// db.students.find({ age: { $lt: 25 } });
// db.students.find({ age: { $gt: 25 } });
// db.students.find({ age: { $lte: 25 } });
// db.students.find({ age: { $gte: 25 } });
// db.students.find({ age: { $in: [27, 25, 24] } });
// db.students.find({ age: { $nin: [27, 25, 24] } });

// ====================
//   Logical Operator
// ====================

// db.students.find({ $and: [{ city: "Lahore" }, { age: { $gte: 25 } }] });
// db.students.find({ $or: [{ city: "Lahore" }, { age: { $gte: 25 } }] });
// db.students.find({ $nor: [{ city: "Lahore" }, { age: { $gt: 25 } }] });
// db.students.find({ age: { $not: { $gt: 25 } } });

// ====================
//   Element Operator
// ====================

// db.students.find({ age: { $exists: true } });
// db.students.find({ age: { $not: { $exists: true } } });

// db.students.find({ age: { $type: "string" } });
// db.students.find({ age: { $type: "number" } });

// =======================
//   Evaluation Operator
// =======================

// db.products.find({ $expr: { $gt: ["$price", "$discountPrice"] } });
// db.products.find({ $expr: { $lt: ["$price", "$discountPrice"] } });
// db.products.find({ $expr: { $gt: [{ $add: ["$price", "$discountPrice"] }, 10000] } });

// db.newProducts.find({ product: { $regex: "o" } });
// db.newProducts.find({ product: { $regex: "ou" } });
// db.newProducts.find({ product: { $regex: "^p", $options: "i" } });
// db.newProducts.find({ product: /^p/i });

// db.newProducts.find({ sold: { $mod: [2, 0] } });

// ==================
//   Array Operator
// ==================

// db.users.find({ skills: { $all: ["HTML", "CSS"] } });
// db.users.find({ skills: { $in: ["JavaScript", "NodeJS"] } });
// db.users.find({ skills: { $nin: ["JavaScript", "NodeJS"] } });
// db.users.find({ skills: { $size: 3 } });
// db.products.find({ reviews: { $elemMatch: { user: "Rahul", rating: 5 } } });

// ===================
//   Update Operator
// ===================

// db.products.updateOne({ name: "Laptop" }, { $set: { price: 32000 } });
// db.products.updateMany({}, { $unset: { id: "" } });
// db.products.updateMany({}, { $inc: { price: 10000 } });
// db.products.updateMany({}, { $inc: { price: -10000 } });
// db.products.updateMany({}, { $mul: { price: 2 } });
// db.products.updateMany({}, { $rename: { itemsLeft: "inStock" } });
// db.products.updateMany({}, { $min: { price: 1000 } });
// db.products.updateMany({}, { $max: { price: 1000 } });

// db.products.updateMany({}, { $push: { categories: "HSN" } });
// db.products.updateMany({}, { $pull: { categories: "HSN" } });
// db.products.updateMany({}, { $addToSet: { categories: "Electronics" } });

db.products.find();
