use("ecommerce")

// db.createCollection("Users")
db.createCollection("Customers")

show("collections")

db.Users.renameCollection("employees")

db.employees.drop()