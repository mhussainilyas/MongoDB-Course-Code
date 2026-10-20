// ================================
// create database "instagramClone"
// ================================

use("instagramClone");

// ====================================
// create collections "posts" & "users"
// ====================================

// db.createCollection("posts");
// db.createCollection("users");

// ===========
// User signup
// ===========

// db.users.insertOne({
//   username: "Hussain",
//   followers: 170,
//   city: "Lahore",
// });

// ================
// User post upload
// ================

// db.posts.insertOne({
//   username: "Hussain",
//   caption: "coding lover",
//   likes: 70,
// });

// ===================
// Update post caption
// ===================

// db.posts.updateOne({ username: "Hussain" }, { $set: { caption: "Romantic" } });

// ========================
// Find all posts of a user
// ========================

// db.posts.find();

// ===========
// Delete post
// ===========

// db.posts.deleteOne({ username: "Hussain" });

// =============
// Drop Database
// =============

db.dropDatabase();
