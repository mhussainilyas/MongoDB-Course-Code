use("universityDB");

// =======================
//   Embedding Documents
// =======================

// db.students.insertOne({
//   _id: 1,
//   name: "Hussain",
//   courses: [
//     {
//       _id: 1,
//       courseName: "Development",
//       price: 42000,
//       duration: 3,
//     },
//     {
//       _id: 2,
//       courseName: "Designing",
//       price: 31000,
//       duration: 3,
//     },
//   ],
// });

// db.students.insertOne({
//   _id: 2,
//   name: "Suleman",
//   courses: [
//     {
//       _id: 1,
//       courseName: "Development",
//       price: 42000,
//       duration: 3,
//     },
//   ],
// });

// ======================
//   Real World Example
// ======================

// db.students.insertOne({
//   _id: 3,
//   name: "Zaryab",
//   email: "zaryab@gmail.com",
//   address: {
//     city: "Lahore",
//     state: "Punjab",
//     country: "Pakistan",
//   },
// });

// ========================
//   Embedded Field Query
// ========================

// db.students.find({
//   "address.city": "Lahore",
// });

// db.students.find({
//   "courses.courseName": "Designing",
// });

// =========================
//   Embedded Field Update
// =========================

// db.students.updateOne(
//   { name: "Zaryab" },
//   {
//     $set: {
//       "address.city": "Karachi",
//     },
//   },
// );

// db.students.updateOne(
//   { "courses.courseName": "Designing" },
//   {
//     $set: {
//       "courses.$.courseName": "Graphic Designing",
//     },
//   },
// );

// =============================
//   Embedded Field Projection
// =============================

// db.students.find({}, { "address.city": 1 });

