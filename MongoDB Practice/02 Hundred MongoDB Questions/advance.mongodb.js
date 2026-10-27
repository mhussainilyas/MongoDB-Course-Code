use("ecommerce");

// ====================================
//   Find products reviewed by Rahul.
// ====================================

// db.products.find({
//   "reviews.user": "Ali",
// });

// ============================================
//   Find products where Rahul gave rating 5.
// ============================================

// db.products.find({
//   reviews: {
//     $elemMatch: {
//       user: "Hussain",
//       rating: 5,
//     },
//   },
// });

// ===========================================================
//   Find products having rating greater than or equal to 4.
// ===========================================================

// db.products.find({
//   "reviews.rating": { $gte: 4 },
// });

// ================================================================
//   Find products where the same review document has rating ≥ 4.
// ================================================================

// db.products.find({
//   reviews: {
//     $elemMatch: {
//       rating: { $gte: 4 },
//     },
//   },
// });

// =============================================
//   Find products having more than 2 reviews.
// =============================================

// db.products.find({
//   $expr: {
//     $gt: [{ $size: "$reviews" }, 2],
//   },
// });

// ==========================================================================
//   Find products whose price is greater than 5000 and stock less than 10.
// ==========================================================================

// db.products.find({
//   $and: [{ price: { $gt: 5000 } }, { stock: { $lt: 10 } }],
// });

// ======================================================
//   Find products whose discount is between 10 and 30.
// ======================================================

// db.products.find({ discount: { $gte: 10, $lte: 30 } });

// db.products.find({
//   $and: [{ discount: { $gte: 10 } }, { discount: { $lte: 30 } }],
// });

// =============================================
//   Find products whose name starts with "G".
// =============================================

// db.products.find({ name: /^G/ });
// db.products.find({ name: { $regex: "^G" } });

// ================================================
//   Find products whose name ends with "Laptop".
// ================================================

// db.products.find({ name: /Laptop$/ });
// db.products.find({ name: { $regex: "Laptop$" } });

// ==========================================
//   Find products containing "gaming" tag.
// ==========================================

// db.products.find({
//   tags: { $in: ["gaming"] },
// });

// ==============================================================
//   Find products having both "gaming" and "electronics" tags.
// ==============================================================

// db.products.find({
//   tags: { $all: ["gaming", "electronics"] },
// });

// ========================================
//   Find products having exactly 3 tags.
// ========================================

// db.products.find({
//   tags: { $size: 3 },
// });

// ================================================
//   Find products where stock is an even number.
// ================================================

// db.products.find({
//   stock: { $mod: [2, 0] },
// });

// ==================================================================
//   Find products whose name length is greater than 10 characters.
// ==================================================================

// db.products.find({
//   $expr: {
//     $gt: [{ $strLenCP: "$name" }, 10],
//   },
// });

// ==============================================
//   Find products where discount field exists.
// ==============================================

// db.products.find({
//   discount: { $exists: true },
// });

// ==================================
//   Add a new review to a product.
// ==================================

// db.products.updateOne(
//   { name: "Gaming Laptop" },
//   {
//     $push: {
//       reviews: {
//         user: "Asad",
//         rating: 2,
//       },
//     },
//   },
// );

// ========================================
//   Update the rating of Hussain's review.
// ========================================

// db.products.updateOne(
//   { "reviews.user": "Hussain" },
//   { $set: { "reviews.$.rating": 1 } },
// );

// ==================================
//   Remove review written by Sara.
// ==================================

// db.products.updateOne(
//   { name: "Smartphone" },
//   {
//     $pull: {
//       reviews: {
//         user: "Sara",
//       },
//     },
//   },
// );

// ===================================
//   Add multiple tags to a product.
// ===================================

// db.products.updateOne(
//   { name: "Gaming Laptop" },
//   {
//     $push: {
//       tags: {
//         $each: ["pc", "setup"],
//       },
//     },
//   },
// );

// =======================================
//   Remove tag "gaming" from a product.
// =======================================

// db.products.updateOne(
//   { name: "Gaming Laptop" },
//   {
//     $pull: {
//       tags: "gaming",
//     },
//   },
// );

// ========================================
//   Remove multiple tags from a product.
// ========================================

// db.products.updateOne(
//   { name: "Gaming Laptop" },
//   {
//     $pull: {
//       tags: {
//         $in: ["pc", "setup"],
//       },
//     },
//   },
// );

// =================================================
//   Find products where ANY review has rating < 3
// =================================================

// db.products.find({
//   "reviews.rating": { $lt: 3 },
// });

// =========================================================================
//   Find products where SAME review has rating < 3 AND name is "Hussain".
// =========================================================================

// db.products.find({
//   reviews: {
//     $elemMatch: {
//       user: "Hussain",
//       rating: { $lt: 3 },
//     },
//   },
// });

// ===============================================
//   Find products where ALL reviews rating ≥ 4.
// ===============================================

// db.products.find({
//   reviews: {
//     $not: {
//       $elemMatch: {
//         rating: { $lt: 4 },
//       },
//     },
//   },
//   "reviews.0": { $exists: true },
// });

// ==================================================
//   Find products where Hussain exists in reviews.
// ==================================================

// db.products.find({
//   "reviews.user": "Hussain",
// });

// ======================================================================
//   Find products where Hussain reviewed AND rating < 3 (same review).
// ======================================================================

// db.products.find({
//   reviews: {
//     $elemMatch: {
//       user: "Hussain",
//       rating: { $lt: 3 },
//     },
//   },
// });

// =====================================
//   Find products with highest stock.
// =====================================

// db.products.find().sort({ stock: -1 }).limit(1);

// =======================================
//   Add tag "sale" where discount > 15.
// =======================================

// db.products.updateMany(
//   { discount: { $gt: 15 } },
//   {
//     $push: {
//       tags: "sale",
//     },
//   },
// );

// =======================================================
//   Add review only if product has less than 5 reviews.
// =======================================================

// db.products.updateMany(
//   {
//     $expr: {
//       $lt: [{ $size: "$reviews" }, 5],
//     },
//   },
//   {
//     $push: {
//       reviews: {
//         user: "HSN",
//         rating: 0,
//       },
//     },
//   },
// );

// ======================================
//   Find products where price > stock.
// ======================================

// db.products.find({
//   $expr: {
//     $gt: ["$price", "$stock"],
//   },
// });

// =================================================
//   Find products where discount is missing OR 0.
// =================================================

// db.products.find({
//   $or: [{ discount: { $exists: false } }, { discount: 0 }],
// });

// ======================================================
//   Find products where name length > category length.
// ======================================================

// db.products.find({
//   $expr: {
//     $gt: [{ $strLenCP: "$name" }, { $strLenCP: "$category" }],
//   },
// });

// ========================================================================
//   Find products having price between 10000 and 40000 and out of stock.
// ========================================================================

// db.products.find({
//   price: { $gt: 10000, $lt: 40000 },
//   stock: 0,
// });

// ===================================
//   Find users with empty wishlist.
// ===================================

// db.users.find({
//   wishlist: { $size: 0 },
// });

// ==========================================================
//   Find orders where amount > 10000 and status delivered.
// ==========================================================

// db.orders.find({
//   totalAmount: { $gt: 10000 },
//   status: "delivered",
// });

// =============================================================
//   Find products where stock is between 5 and 20 but not 10.
// =============================================================

// db.products.find({
//   stock: { $gt: 5, $lt: 20, $ne: 10 },
// });

// ==========================================================
//   Find products where either discount > 20 OR stock < 5.
// ==========================================================

// db.products.find({
//   $or: [{ discount: { $gt: 20 } }, { stock: { $lt: 5 } }],
// });

// ===============================================================
//   Find products where tags include "gaming" but not "mobile".
// ===============================================================

// db.products.find({
//   $and: [{ tags: { $in: ["gaming"] } }, { tags: { $nin: ["mobile"] } }],
// });

// =================================================
//   Find products where review count > 2 and < 5.
// =================================================

// db.products.find({
//   $expr: {
//     $and: [
//       { $gt: [{ $size: "$reviews" }, 2] },
//       { $lt: [{ $size: "$reviews" }, 5] },
//     ],
//   },
// });

// =================================================
//   Find products where no review has rating < 3.
// =================================================

db.products.find({
  reviews: {
    $not: {
      $elemMatch: {
        rating: { $lt: 3 },
      },
    },
  },
});
