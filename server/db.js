const mysql = require("mysql");
//const dotenv = require("dotenv").config();

const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  port: 3306,
  password: "Nice/mk123",
  database: "intern_bano",
});

db.getConnection((err) => {
  if (err) {
    console.log("Error while conneting to db..." + err);
    //throw err;
  } else {
    console.log("Connected to db....");
  }
});

module.exports = db;
