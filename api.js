const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors"); // Import CORS middleware
const app = express();

// Allow CORS for all origins
app.use(cors());

// Define your routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/zodiac", (req, res) => {
  const year = req.query.year;
  res.json({ year }); // Example response
});

// Export the handler
module.exports.handler = serverless(app);
