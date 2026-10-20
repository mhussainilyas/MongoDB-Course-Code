// ======================================================
// MongoDB shell open karo aur available databases dekho.
// ======================================================

show("dbs");

// =============================================================
// Ek naya database banao "shopApp", Us database me switch karo.
// =============================================================

use("shopApp");

// ===========================
// Ek collection banao "users"
// ===========================

db.createCollection("users");

// ==========================================
// Check karo ki database create hua ya nahi.
// ==========================================

show("dbs");
