const express = require("express");

const kodersRoutes = require("./routes/koders.routes");
const mentorsRoutes = require("./routes/mentors.routes");
const generationsRoutes = require("./routes/generations.routes");

const app = express();

app.use(express.json());

app.use("/koders", kodersRoutes);
app.use("/mentors", mentorsRoutes);
app.use("/generations", generationsRoutes);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "KodersAPI",
  });
});

module.exports = app;
