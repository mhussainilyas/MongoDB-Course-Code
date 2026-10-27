use("universityDB");

// =========================
//   Referencing Documents
// =========================

// db.courses.insertMany([
//   {
//     _id: 1,
//     name: "Development",
//     price: 72000,
//     duration: 3,
//   },
//   {
//     _id: 2,
//     name: "Graphic Design",
//     price: 45000,
//     duration: 2,
//   },
// ]);

// db.students.insertMany([
//   {
//     _id: 1,
//     name: "Hussain",
//     email: "hussain@gmail.com",
//     courses: [1, 2],
//   },
//   {
//     _id: 2,
//     name: "Shoaib",
//     email: "shoaib@gmail.com",
//     courses: [1],
//   },
// ]);

// db.students.find();

db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courses",
      foreignField: "_id",
      as: "courses",
    },
  },
]);
