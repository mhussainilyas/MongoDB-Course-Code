use("myStore");

// db.createCollection("users");

/*
db.users.insertMany([
  {
    name: "Ali Khan",
    email: "ali@example.com",
    city: "Lahore",
    isMarried: false,
    age: 22,
  },
  {
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    city: "Karachi",
    isMarried: true,
    age: 30,
  },
  {
    name: "Sara Ahmed",
    email: "sara@example.com",
    city: "Islamabad",
    isMarried: false,
    age: 25,
  },
  {
    name: "Usman Malik",
    email: "usman@example.com",
    city: "Faisalabad",
    isMarried: true,
    age: 32,
  },
  {
    name: "Ayesha Noor",
    email: "ayesha@example.com",
    city: "Multan",
    isMarried: false,
    age: 24,
  },
  {
    name: "Hassan Ali",
    email: "hassan@example.com",
    city: "Rawalpindi",
    isMarried: true,
    age: 28,
  },
  {
    name: "Fatima Zahra",
    email: "fatima@example.com",
    city: "Peshawar",
    isMarried: false,
    age: 21,
  },
  {
    name: "Bilal Ahmed",
    email: "bilal@example.com",
    city: "Quetta",
    isMarried: true,
    age: 35,
  },
  {
    name: "Zainab Khan",
    email: "zainab@example.com",
    city: "Sialkot",
    isMarried: false,
    age: 27,
  },
  {
    name: "Hamza Sheikh",
    email: "hamza@example.com",
    city: "Gujranwala",
    isMarried: true,
    age: 29,
  },
]);
*/

// ==============
//   Projection
// ==============

// db.users.find();
// db.users.find({ name: "Zainab Khan" });

// *** INCLUDE (property: 1) ***
// db.users.find({ name: "Zainab Khan" }, { name: 1, email: 1, age: 1 });
// db.users.find({}, { name: 1, email: 1, age: 1 });

// *** EXCLUDE (property: 0) ***
// db.users.find({ name: "Hassan Ali" }, { _id: 0, isMarried: 0 });
// db.users.find({}, { _id: 0, isMarried: 0 });

// *** SPECIAL CASE ***
// db.users.find({ name: "Zainab Khan" }, { _id: 0, name: 1, email: 1 });
// db.users.find({ name: "Zainab Khan" }, { _id: 0, isMarried: 0, city: 0 });
