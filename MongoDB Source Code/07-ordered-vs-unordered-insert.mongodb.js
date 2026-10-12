use("myStore");

// ==================
//   Ordered Insert
// ==================

/*
db.users.insertMany([
  { _id: 1, name: "Hussain", age: 21 },
  { _id: 2, name: "Suleman", age: 22 },
  { _id: 3, name: "Zaryab", age: 20 },
  { _id: 1, name: "Asadullah", age: 21 }, // duplicate _id Error
  { _id: 4, name: "Mustafa", age: 19 },
  { _id: 5, name: "Faizan", age: 12 },
]);
*/

// ====================
//   Unordered Insert
// ====================

db.users.insertMany(
  [
    { _id: 1, name: "Hussain", age: 21 },
    { _id: 2, name: "Suleman", age: 22 },
    { _id: 3, name: "Zaryab", age: 20 },
    { _id: 1, name: "Asadullah", age: 21 }, // duplicate _id Error
    { _id: 4, name: "Mustafa", age: 19 },
    { _id: 5, name: "Faizan", age: 12 },
  ],
  { ordered: false },
);
