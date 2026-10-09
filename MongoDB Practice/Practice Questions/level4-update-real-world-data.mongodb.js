use("shopApp");
// use("ecommerce");

// ============================================
// Ek user ka city change karo Lahore → Karachi
// ============================================

// db.users.updateOne({ name: "Hussain" }, { $set: { city: "Karachi" } });

// ================================
// Ek product ka price update karo.
// ================================

// db.products.updateOne({ name: "Laptop" }, { $set: { price: 32000 } });

// ====================================
// Sabhi products ka stock update karo.
// ====================================

// db.products.updateMany({ category: "electronics" }, { $inc: { stock: 10 } });

// =============================
// Ek user ka email update karo.
// =============================

db.users.updateOne({ name: "Hussain" }, { $set: { email: "hsn7@gmail.com" } });
