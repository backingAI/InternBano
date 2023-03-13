const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const bcrypt = require("bcrypt");
const db = require("./db");

app
  .prepare()
  .then(() => {
    const server = express();
    // const showRoutes = require("./routes/index.js");
    // server.use("/api", showRoutes);

    // server.use(bodyParser.json());
    // server.use(bodyParser.urlencoded({ extended: true }));
    // server.use(expressSession({ secret: "mySecretKey", resave: false }));

    server.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );

    // server.use(cookieParser("mySecretKey"));
    // server.use(passport.initialize());
    // server.use(passport.session());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.post("/page-register", (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      const query =
        "INSERT INTO account (`username`, `password`) VALUES (?, ?)";
      const query2 = "SELECT * FROM account WHERE username = ?";

      console.log("into the post method of api");
      db.query(query2, [username], (err, result) => {
        if (err) {
          throw err;
        }
        if (result.length > 0) {
          res.send({ message: "Username already exists" });
        }
        if (result.length === 0) {
          const hashedPassowrd = bcrypt.hashSync(password, 10);
          db.query(query, [username, password], (err, result) => {
            if (err) {
              throw err;
            }
            res.send({ message: "User created" });
          });
        }
      });
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is ready on port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
