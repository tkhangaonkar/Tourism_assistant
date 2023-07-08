var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");

const userRoutes = require("./users");
const profileRoutes = require("./profile");

var app = express();

app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/", userRoutes);

app.use("/profile", profileRoutes);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
