<<<<<<< HEAD
console.log("UnaHur - Anti-Social net");
const express = require("express");
const dotenv = require("dotenv");
const conectarDB = require('./config/db');

conectarDB();
=======
const express = require("express");
const dotenv = require("dotenv");
const conectarDB = require("./src/config/db");
const commentsRouter = require("./src/routes/comment.routes")
>>>>>>> a868d9873bb652a033d5e02a7d1b8b1354808099

dotenv.config();

const app = express();

app.use(express.json());
<<<<<<< HEAD
=======

conectarDB();

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/comments", commentsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
>>>>>>> a868d9873bb652a033d5e02a7d1b8b1354808099
