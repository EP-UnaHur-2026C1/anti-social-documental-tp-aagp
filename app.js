const express = require("express");
const dotenv = require("dotenv");
const conectarDB = require("./src/config/db");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./src/config/swagger")
const commentsRouter = require("./src/routes/comment.routes")
const tagRouter = require("./src/routes/tag.routes")
const imageRouter = require("./src/routes/image.routes")
dotenv.config();

const app = express();

app.use(express.json());

conectarDB();

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use("/comments", commentsRouter);
app.use("/tags",tagRouter); // agregado para probar
app.use("/images",imageRouter); // agrego para probar

/* PRUEBA PARA VER SI FUNCIONA EL SWAGGER*/
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
