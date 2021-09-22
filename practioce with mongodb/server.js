const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://hoang123:hoang123@cluster0.9xd3z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
MongoClient.connect(
  connectionString,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database");
    const db = client.db("tutorial");
    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
    });
  }
);
