const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const App = express();
mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});
App.use(express.json());
App.use(routes);

App.listen(3333, () => console.log("Servidor rodando"));
