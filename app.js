console.log("Web server is starting...");

const mongodb = require("mongodb");
const express = require("express");
const app = express();

// MongoDB call
const db = require("./server").db();

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session code
//3: Views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/create-item", (req, res) => {
  console.log("User entered to the route: /create-item");
  console.log("Req: ", req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
    console.log(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;

  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(() => {
      res.json({ state: "All plan/goals were succesfully deleted" });
    });
  }
});

app.get("/", (req, res) => {
  console.log("User entered to the route: /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end(`Something went wrong: ${err}`);
      } else {
        res.render("reja", { plans: data });
      }
    });
});

app.get("/gift", (req, res) => {
  res.send(`<h1>Gift Page</h1>`);
});

app.get("/author", (req, res) => {
  res.render("author", {
    user: user,
  });
});

module.exports = app;
