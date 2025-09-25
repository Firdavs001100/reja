console.log("Web server is starting...");

const express = require("express");
const app = express();

// MongoDB call
const db = require("./server").db();

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//2: Session code
//3: Views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/addItem", (req, res) => {
    res.json({ test: "success"});
});

app.get("/", (req, res) => {
    res.render("reja");
});

app.get("/gift", (req, res) => {
    res.send(`<h1>Gift Page</h1>`);
});

app.get("/author", (req, res) => {
    res.render("author", {
        user: user
    });
});

module.exports = app;