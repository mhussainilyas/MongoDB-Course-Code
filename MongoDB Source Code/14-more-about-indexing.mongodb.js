use("ecommerce");

// ================
//   unique: true
// ================

// db.users.createIndex({ email: 1 }, { unique: true });

// ===========================================
//   partialFilterExpression (Partial Index)
// ===========================================

// db.users.createIndex(
//   { age: 1 },
//   { partialFilterExpression: { age: { $gte: 25 } } },
// );

// db.users.find({ age: 24 }).explain("executionStats");  // COLLSCAN
// db.users.find({ age: 28 }).explain("executionStats");  // IXSCAN

// ==================================
//   expireAfterSeconds (TTL Index)
// ==================================

// db.otps.insertOne({
//   otp: "123456",
//   createdAt: new Date(),
// });

// db.otps.createIndex({ createdAt: 1 }, {expireAfterSeconds: 5});

// =================
//   Covered Query
// =================

// db.products.createIndex({ name: 1, price: 1 });

// db.products.find({ name: "Smart Watch" }, { _id: 0, name: 1, price: 1 });

// db.products
//   .find({ name: "Smart Watch" }, { _id: 0, name: 1, price: 1 })
//   .explain("executionStats");

// ================================
//   Winning Plan (Query Planner)
// ================================

// db.products.createIndex({ name: 1 });
// db.products.createIndex({ name: 1, price: 1 });

// db.products.find({ name: "Smart Watch" }).explain("executionStats");  // name_1 is used

// ================
//   Sparse Index
// ================

// db.users.createIndex({ phone: 1 }, { sparse: true });

// *** This new document is not indexed because it doesn't contain phone field ***

// db.users.insertOne({
//   name: "Muhammad Hussain",
//   age: 21,
//   city: "Lahore",
//   email: "muhammadhussain@example.com",
//   isActive: true,
//   orders: ["ORD107"],
//   wishlist: ["Laptop", "Headphones"],
//   cart: ["Mouse", "Keyboard"],
// });


