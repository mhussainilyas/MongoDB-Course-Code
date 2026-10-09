use("shopApp");

// ===================
// Ek user insert karo
// ===================

// db.users.insertOne({
//   name: "Hussain",
//   email: "hussain@gmail.com",
//   city: "Lahore",
//   age: 21,
// });

// =====================
// Ek aur user add karo.
// =====================

// db.users.insertOne({
//   name: "Suleman",
//   email: "suleman@gmail.com",
//   city: "Lahore",
//   age: 22,
// });

// ==========================
// Ek saath 3 users add karo.
// ==========================

// db.users.insertMany([
//   {
//     name: "Zaryab",
//     email: "zaryab@gmail.com",
//     city: "Lahore",
//     age: 20,
//   },
//   {
//     name: "Hamid",
//     email: "hamid@gmail.com",
//     city: "Multan",
//     age: 19,
//   },
//   {
//     name: "Shoaib",
//     email: "shoaib@gmail.com",
//     city: "Faisalabad",
//     age: 19,
//   },
// ]);

// =====================
// Sare users show karo.
// =====================

// db.users.find();

// ================================================
// Sirf un users ko show karo jo Lahore se hain.
// ================================================

db.users.find({city: "Lahore"})