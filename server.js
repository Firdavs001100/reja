console.log("Web server is starting...");

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs")

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        user = JSON.parse(data);
    }
});

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
    res.render("harid");
});

app.get("/gift", (req, res) => {
    res.send(`<h1>Gift Page</h1>`);
});

app.get("/author", (req, res) => {
    res.render("author", {
        user: user
    });
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});