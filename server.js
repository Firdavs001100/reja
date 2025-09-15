console.log("Wev server is starting...");

const express = require("express");
const app = express();

//1
app.use(express.static("public"));


//2
//3
app.set("views", "./views");
app.set("view engine", "ejs");

//4