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

MongoClient.connect(
  connectionString,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database");
    const db = client.db("tutorial");
    const userCollection = db.collection("user");
    app.get("/create", (req, res) => {
      res.render("index.ejs");
    });
    app.get("/", (req, res) => {
      userCollection
        .find()
        .toArray()
        .then((result) => {
          console.log(result);
          res.send(result);
        });
    });
    app.post("/user", (req, res) => {
      userCollection.insertOne(req.body, update, options).then((result) => {
        console.log(result);
        res.send("update new user");
      });
    });
    app.put("/user", (req, res) => {
      userCollection.findOneAndUpdate(
        { name: "hoang" },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote,
          },
        },
        options
      );
    });
  }
);
