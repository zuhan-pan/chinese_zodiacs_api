const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors"); // Import CORS middleware
const app = express();

app.use(cors()); // Enable CORS for all origins (add this before routes)

// Define routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/zodiac", (req, res) => {
  const year = req.query.year;
  res.json({ year });
});

// Export the handler
module.exports.handler = serverless(app);
