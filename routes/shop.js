const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("Root");
    res.send("<h1>This is my first app.</h1>");
  });

module.exports = router;