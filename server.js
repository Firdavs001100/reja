console.log("Web server is starting...");

const express = require("express");
const app = express();
const http = require("http");

//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//2: Session code
//3: Views code
app.set("views", "./views");
app.set("view engine", "ejs");

//4: Routing code
app.get("/", (req, res) => {
    res.send(`<h1 style = "background: red">What's up</h1>`);
});

app.get("/gift", (req, res) => {
    res.send(`<h1>Gift Page</h1>`);
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running succesfully on port: ${PORT}`);
});