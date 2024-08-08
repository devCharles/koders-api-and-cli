const express = require("express");

const kodersRoutes = require("./routes/koders.routes");

const app = express();

app.use(express.json());

app.use("/koders", kodersRoutes);

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "KodersAPI",
  });
});

module.exports = app;
