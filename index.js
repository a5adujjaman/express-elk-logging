const express = require("express");
const logger = require("./logger");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  logger.info("Root route accessed", { route: "/", method: "GET" });
  res.send("Hello from Express with Winston logging!");
});

app.get("/error", (req, res) => {
  logger.error("Something went wrong!", { route: "/error", method: "GET" });
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
