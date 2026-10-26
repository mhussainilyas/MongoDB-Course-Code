use("ecommerce");

// ===================================================
//   Find products whose price is greater than 1000.
// ===================================================

// db.products.find({ price: { $gt: 1000 } });

// ======================================================
//   Find products whose price is between 500 and 2000.
// ======================================================

// db.products.find({ price: { $gte: 500, $lte: 2000 } });

// db.products.find({
//   $and: [{ price: { $gte: 500 } }, { price: { $lte: 2000 } }],
// });

// ========================================================
//   Find products that belong to category "electronics".
// ========================================================

// db.products.find({ category: "electronics" });

// ==============================================
//   Find products whose stock is less than 10.
// ==============================================

// db.products.find({ stock: { $lt: 10 } });

// ==============================================
//   Find products whose that are out of stock.
// ==============================================

// db.products.find({ stock: 0 });

// ================================================
//   Find products sorted by price (low to high).
// ================================================

// db.products.find().sort({ price: 1 });

// =======================================
//   Find top 5 most expensive products.
// =======================================

// db.products.find().sort({ price: -1 }).limit(5);

// ==============================================
//   Find products whose name contains "phone".
// ==============================================

// db.products.find({ name: /phone/i });
// db.products.find({ name: { $regex: "phone", $options: "i" } });

// =====================================================
//   Find products whose discount is greater than 20%.
// =====================================================

// db.products.find({ discount: { $gt: 20 } });

// =============================================================
//   Find products that do not belong to electronics category.
// =============================================================

// db.products.find({ category: { $ne: "electronics" } });
// db.products.find({ category: { $not: { $eq: "electronics" } } });

// ======================================
//   Find products having tag "gaming".
// ======================================

// db.products.find({ tags: "gaming" });
// db.products.find({ tags: { $in: ["gaming"] } });

// ============================================================
//   Find products that have both "gaming" and "laptop" tags.
// ============================================================

// db.products.find({ tags: { $all: ["gaming", "laptop"] } });

// ========================================
//   Find products having exactly 3 tags.
// ========================================

// db.products.find({ tags: { $size: 3 } });

// =====================================
//   Add a new tag "new" to a product.
// =====================================

// db.products.updateOne({ name: "Water Bottle" }, { $push: { tags: "new" } });

// ====================================
//   Remove tag "new" from a product.
// ====================================

// db.products.updateOne({ name: "Water Bottle" }, { $pull: { tags: "new" } });

// =========================================
//   Find all orders placed by user Rahul.
// =========================================

// db.orders.find({ user: /rahul/i });

// ==========================================
//   Find orders whose total amount > 30000.
// ==========================================

// db.orders.find({ totalAmount: { $gt: 30000 } });

// ========================================
//   Find orders placed after 1 Mar 2025.
// ========================================

// db.orders.find({ orderDate: { $gt: new Date("2025-03-01") } });

// ========================================
//   Find orders with status = delivered.
// ========================================

// db.orders.find({ status: "delivered" });

// ===================================================
//   Find orders with status not equal to cancelled.
// ===================================================

// db.orders.find({ status: { $ne: "cancelled" } });
// db.orders.find({ status: { $not: { $eq: "cancelled" } } });

// ==================================
//   Increase product price by 10%.
// ==================================

// db.products.updateMany({}, { $mul: { price: 1.1 } });

// =================================
//   Increase product stock by 50.
// =================================

// db.products.updateMany({}, { $inc: { stock: 50 } });

// ======================================
//   Rename field price → productPrice.
// ======================================

// db.products.updateMany({}, { $rename: { price: "productPrice" } });

// =======================================
//   Remove discount field from product.
// =======================================

// db.products.updateMany({}, { $unset: { discount: 0 } });

// ========================================
//   Add field featured: true to product.
// ========================================

// db.products.updateMany({}, { $set: { featured: true } });

// =====================================
//   Delete products whose stock is 0.
// =====================================

// db.products.deleteMany({ stock: 0 });

// ============================================
//   Delete users who never placed any order.
// ============================================

// db.users.deleteMany({ orders: { $size: 0 } });

// =====================================
//   Delete orders older than 5 years.
// =====================================

// db.orders.deleteMany({
//   orderDate: {
//     $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
//   },
// });

// ============================================
//   Increase view count of a blog post by 1.
// ============================================

// db.blogs.updateMany({}, { $inc: { views: 1 } });

// =================================
//   Add new comment to blog post.
// =================================

// db.blogs.updateOne(
//   { title: "JavaScript Async Guide" },
//   {
//     $push: {
//       comments: {
//         user: "Hussain",
//         text: "Pak sar zameen shadbad",
//       },
//     },
//   },
// );

// ==============================
//   Remove a specific comment.
// ==============================

// db.blogs.updateOne(
//   { title: "Node.js Fundamentals" },
//   { $pull: { comments: { user: "Ayesha" } } },
// );

// =================================
//   Add product to user wishlist.
// =================================

// db.users.updateOne({ name: "Ali Khan" }, { $push: { wishlist: "mobile" } });

// =================================
//   Remove product from wishlist.
// =================================

// db.users.updateOne({ name: "Ali Khan" }, { $pull: { wishlist: "mobile" } });

// ==============================
//   Add item to shopping cart.
// ==============================

// db.users.updateOne({ name: "Ali Khan" }, { $push: { cart: "Lazer Pen" } });

// ==========================
//   Remove item from cart.
// ==========================

db.users.updateOne({ name: "Ali Khan" }, { $pull: { cart: "Lazer Pen" } });
