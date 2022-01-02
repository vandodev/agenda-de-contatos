const express = require("express");
const routers = express.Router();

routers.get("/", (req, res) => {
  return res.json({ ok: true });
  // res.send("Hello World");
});

module.exports = routers;
