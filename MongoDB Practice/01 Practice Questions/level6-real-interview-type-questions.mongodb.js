use("shopApp");
// use("ecommerce");

// =========================================
// Find users jinka age greater than 20 hai.
// =========================================

// db.users.find({ age: { $gt: 20 } });

// ============================================
// Find product jiska price less than 5000 hai.
// ============================================

// db.products.find({ price: { $lt: 5000 } });

// =================================
// Find user jiska name Hussain hai.
// =================================

// db.users.findOne({ name: "Hussain" });

// ==============================
// Count users jo Lahore se hain.
// ==============================

// db.users.countDocuments({ city: "Lahore" });

// ==================================================
// Check karo database me kaun kaun collections hain.
// ==================================================

show("collections");
