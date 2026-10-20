use("testDB");

// ==========
//   Cursor
// ==========

// const cursor = db.data.find();

// console.log(cursor);

// ====================
//   Display All Data
// ====================

// const cursor = db.data.find();

// while (cursor.hasNext()) {
//   console.log(cursor.next());
// }

// ==================
//   Cursor methods
// ==================

// db.data.find().next();

// db.data.find().hasNext();

// db.data.find().sort({ value: 1 });
// db.data.find().sort({ value: -1 });

// db.data.find().limit(40);

// db.data.find().skip(10);

// db.data.find().forEach(printjson);

// db.data.find().toArray();

// ===================
//   Cursor Chaining
// ===================

// const cursorData = db.data.find().sort({ value: -1 }).skip(5).limit(5);

// console.log(cursorData);

// ==============
//   Pagination
// ==============

const pg = 2;
const lim = 8;

const skipItems = (pg - 1) * lim;

const data = db.data.find().skip(skipItems).limit(lim);

console.log(data);
