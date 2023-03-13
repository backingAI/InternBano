const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  res.end("we made it and its great");
});

module.exports = router;
