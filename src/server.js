const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const kodersRoutes = require("./routes/koders.routes");
const mentorsRoutes = require("./routes/mentors.routes");
const generationsRoutes = require("./routes/generations.routes");

const app = express();

app.use(helmet());
app.use(cors()); // cualquier origen
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
