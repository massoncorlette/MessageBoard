//connecting the routes here

const express = require("express");

const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/styles"));

const indexRouter = require("./routes/index");
const messageRouter = require("./routes/new");

app.use("/", indexRouter); // passing callback to route
app.use("/new", messageRouter); // passing callback to route

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Port listening");
});
