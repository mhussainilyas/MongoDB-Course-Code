use("shopApp");
// use("ecommerce");

// =========================================
// Ek user delete karo jiska naam Hamid hai.
// =========================================

// db.users.deleteOne({ name: "Hamid" });

// ===============================================================
// Sabhi users delete karo jinka age less than or equal to 20 hai.
// ===============================================================

db.users.deleteMany({ age: { $lte: 20 } });

// ===============================
// Ek product delete karo "Shoes".
// ===============================

// db.products.deleteOne({ name: "Shoes" });
