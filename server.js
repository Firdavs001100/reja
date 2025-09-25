const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Firdavs:testmit34@cluster0.vlhfuvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongodb.MongoClient.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("Error on connection of MongoDB: ", err);
    } else {
      db = client.db("Reja"); // choose your database name
      module.exports.db = () => db; // 🔑 export a function

      const app = require("./app");
      console.log("✅ MongoDB connection success");

      const server = http.createServer(app);
      const PORT = 3000;
      server.listen(PORT, () => {
        console.log(`The server is running on http://localhost:${PORT}`);
      });
    }
  }
);
