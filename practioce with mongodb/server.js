const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// morgan(function (tokens, req, res) {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, "content-length"),
//     "-",
//     tokens["response-time"](req, res),
//     "ms",
//   ].join(" ");
// });
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/quotes", (req, res) => {
  console.log(req.body);
});
