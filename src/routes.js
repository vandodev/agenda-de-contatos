const express = require("express");
const routers = express.Router();
const clientController = require("./controllers/clientController");

routers.post("/insert", clientController.store);

module.exports = routers;
