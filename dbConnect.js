// export default dbConnect
const mysql = require("mysql");
//const dotenv = require("dotenv").config();

const dbConnect = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Nice/mk123",
  database: "intern_bano",
});
module.exports = dbConnect;
