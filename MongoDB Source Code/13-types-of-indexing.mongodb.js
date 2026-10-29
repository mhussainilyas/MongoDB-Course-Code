// use("ecommerce");
use("universityDB");

// ======================
//   Single Field Index
// ======================

// db.users.createIndex({ name: 1 });

// db.users.find({ name: "Ahmed Raza" }).explain("executionStats");  // IXSCAN
// db.users.find({ name: "Ahmed Raza", age: 25 }).explain("executionStats");  // IXSCAN

// ==================
//   Compound Index
// ==================

// db.users.createIndex({ name: 1, age: 1 });

// db.users.find({ name: "Ahmed Raza" }).explain("executionStats");  // IXSCAN
// db.users.find({ name: "Ahmed Raza", age: 25 }).explain("executionStats");  // IXSCAN
// db.users.find({ age: 25 }).explain("executionStats");  // COLLSCAN

// ==================
//   MultiKey Index
// ==================

// ***** For Arrays *****

// db.products.createIndex({ tags: 1 });

// db.products.find({ tags: "electronics" }).explain("executionStats");

// ***** FOR ARRAY OF OBJECTS (Bad Practice) *****

// db.products.createIndex({ reviews: 1 });

// db.products.find({ reviews: { user: "Rahul", rating: 5 } }).explain("executionStats");  // IXSCAN
// db.products.find({ "reviews.user": "Rahul" }).explain("executionStats");  // COLLSCAN

// ***** FOR ARRAY OF OBJECTS (Good Practice) *****

// db.products.createIndex({ "reviews.user": 1, "reviews.rating": 1 });

// db.products.find({ "reviews.user": "Hussain" }).explain("executionStats");  // IXSCAN
// db.products.find({ "reviews.user": "Hussain", "reviews.rating": 1 }).explain("executionStats");  // IXSCAN
// db.products.find({ "reviews.rating": 1 }).explain("executionStats");  // COLLSCAN

// ==============
//   Text Index
// ==============

// db.articles.createIndex({ title: "text" });

// db.articles.find({ $text: { $search: "understanding" } });
// db.articles.find({ $text: { $search: "introduction understanding" } });
// db.articles.find({ $text: { $search: "understanding" } }).explain("executionStats");  // IXSCAN

// ***** SCORE (Relevance) *****

// db.articles.createIndex({ title: "text", content: "text", tags: "text" });

// db.articles.find(
//   { $text: { $search: "documents" } },
//   { dataScore: { $meta: "textScore" } },
// ).sort({ dataScore: { $meta: "textScore" } });

// ***** WEIGHTS *****

// db.articles.createIndex(
//   { title: "text", content: "text", tags: "text" },
//   { weights: { tags: 5, content: 2, title: 1 } },
// );

// db.articles.find(
//   { $text: { $search: "documents" } },
//   { dataScore: { $meta: "textScore" } },
// ).sort({ dataScore: { $meta: "textScore" } });

// ===========================
//   Index Scan Intersection
// ===========================

// db.users.createIndex({ name: 1 });
// db.users.createIndex({ age: 1 });

// db.users.find({ age: 25 }).explain("executionStats");
// db.users.find({ name: "Ahmed Raza" }).explain("executionStats");
// db.users.find({ name: "Ahmed Raza", age: 25 }).explain("executionStats");
