const express = require("express");
const nodemon = require("nodemon");

const App = express();
App.use(express.json);

App.listen(3333, () => console.log("Servidor rodando"));
