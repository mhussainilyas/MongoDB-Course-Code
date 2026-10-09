// ==========================================
// Ab ek ecommerce website ka Database banao.
// ==========================================

use("ecommerce");

// ====================================
// Ek collection create karo "products"
// ====================================

// db.createCollection("products");

// ====================
// products insert karo
// ====================

// db.products.insertMany([
//   {
//     name: "iPhone",
//     price: 80000,
//     category: "electronics",
//     stock: 10,
//   },
//   {
//     name: "Laptop",
//     price: 60000,
//     category: "electronics",
//     stock: 5,
//   },
//   {
//     name: "Headphones",
//     price: 2000,
//     category: "electronics",
//     stock: 20,
//   },
//   {
//     name: "Shoes",
//     price: 3000,
//     category: "fashion",
//     stock: 15,
//   },
// ]);

// =======================
// Sare products show karo
// =======================

// db.products.find();

// ================================================
// Sirf electronics category ke products show karo.
// ================================================

// db.products.find({ category: "electronics" });

// ===========================================
// Count karo kitne products database me hain.
// ===========================================

db.products.countDocuments();
