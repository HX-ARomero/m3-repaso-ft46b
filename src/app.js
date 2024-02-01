const express = require("express");
const episodeRouter = require("./routes/episode");
const app = express();
const morgan = require("morgan");

//* MIDDLEWARES
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());
app.use(morgan("dev"));

app.use("/episode", episodeRouter);

//* RUTAS
app.get("/", (req, res) => {
  res.status(200).send("Hola Mundo!!!");
});

module.exports = app;

//* module.exports = { }
//* exports = module.exports;
//* ESTE MÓDULO EXPORTA => module.exports