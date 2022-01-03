const express = require("express");
const routers = express.Router();
const clientController = require("./controllers/clientController");

routers.post("/insert", clientController.store);
routers.get("/list", clientController.index);
routers.put("/update/:id", clientController.update);
routers.delete("/delete/:id", clientController.delete);

module.exports = routers;
