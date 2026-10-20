use("ecommerce");

// ===============================
//   Find all users from Lahore.
// ===============================

// db.users.find({ city: "Lahore" });

// ===========================================
//   Find users whose age is greater than 25
// ===========================================

// db.users.find({ age: { $gt: 25 } });

// =====================================================
//   Find users whose age is less than or equal to 30.
// =====================================================

// db.users.find({ age: { $lte: 30 } });

// ========================================
//   Find users whose city is not Lahore.
// ========================================

// db.users.find({ city: { $ne: "Lahore" } });
// db.users.find({ city: { $nin: ["Lahore"] } });

// ==============================================
//   Find users whose age is between 20 and 30.
// ==============================================

// db.users.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] });
// db.users.find({ age: { $gt: 20, $lt: 30 } });

// ==========================================
//   Show only name and email of all users.
// ==========================================

// db.users.find({}, { name: 1, email: 1, _id: 0 });

// ==========================================
//   Find users whose name starts with "A".
// ==========================================

// db.users.find({ name: { $regex: "^A" } });
// db.users.find({ name: /^A/ });

// ==========================================
//   Find users whose email contains gmail.
// ==========================================

// db.users.find({ email: { $regex: "gmail" } });
// db.users.find({ email: /gmail/ });

// =======================================
//   Find users whose city field exists.
// =======================================

// db.users.find({ city: { $exists: true } });

// ================================================
//   Find users whose phone field does not exist.
// ================================================

// db.users.find({ phone: { $exists: false } });

// ================================
//   Sort users by age ascending.
// ================================

// db.users.find().sort({ age: 1 });

// =================================
//   Sort users by age descending.
// =================================

// db.users.find().sort({ age: -1 });

// ============================
//   Show only first 5 users.
// ============================

// db.users.find().limit(5);

// ==============================================
//   Skip first 10 users and show next 5 users.
// ==============================================

// const data = db.users.find().skip(10).limit(5);
// console.log(data);

// =================================================
//   Find users whose age is either 20, 25, or 30.
// =================================================

// db.users.find({ age: { $in: [20, 25, 30] } });

// ===========================================
//   Find users whose age is not 20, 25, 30.
// ===========================================

// db.users.find({ age: { $nin: [20, 25, 30] } });

// ==================================
//   Count total users in database.
// ==================================

// db.users.countDocuments();
// db.users.find().count();

// =========================================================
//   Find users whose name is Ali Khan and city is Lahore.
// =========================================================

// db.users.find({ name: "Ali Khan", city: "Lahore" });
// db.users.find({ $and: [{ name: "Ali Khan" }, { city: "Lahore" }] });

// ===============================================
//   Find users whose city is Lahore OR Karachi.
// ===============================================

// db.users.find({ $or: [{ city: "Lahore" }, { city: "Karachi" }] });

// ================================================
//   Find users whose age is not greater than 30.
// ================================================

// db.users.find({ age: { $lte: 30 } });
// db.users.find({ age: { $not: { $gt: 30 } } });

// ========================================
//   Find users whose name ends with "a".
// ========================================

// db.users.find({ name: { $regex: "a$" } });
// db.users.find({ name: /a$/ });

// ===============================================
//   Find users whose email domain is yahoo.com.
// ===============================================

// db.users.find({ email: { $regex: "yahoo.com$" } });
// db.users.find({ email: /yahoo\.com$/ });

// ==============================================
//   Find users whose age field type is number.
// ==============================================

// db.users.find({ age: { $type: "number" } });

// =================================
//   Find users where age is even.
// =================================

// db.users.find({ age: { $mod: [2, 0] } });

// db.users.find({
//   $expr: {
//     $eq: [{ $mod: ["$age", 2] }, 0],
//   },
// });

// ===============================================================
//   Find users whose name length is greater than 10 characters.
// ===============================================================

db.users.find({
  $expr: {
    $gt: [{ $strLenCP: "$name" }, 10],
  },
});
