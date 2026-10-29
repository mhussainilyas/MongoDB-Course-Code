use("ecommerce");

// db.users.find({ name: "Ahmed Raza" });
// db.users.find({ name: "Ahmed Raza" }).explain();
db.users.find({ name: "Ahmed Raza" }).explain("executionStats");

// ================
//   Create Index
// ================

// db.users.createIndex({ name: 1 });

// ===============
//   Get Indexes
// ===============

// db.users.getIndexes();

// ================
//   Delete Index
// ================

// db.users.dropIndex({ name: 1 });
// db.users.dropIndex("name_1");