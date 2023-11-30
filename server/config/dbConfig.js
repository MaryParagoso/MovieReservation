const mongoose = require("mongoose");
mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;

connection.on("connected", () =>
  console.log("mongooDB is connected successfully")
);
connection.on("error", () => console.log("mongooDB failed"));
