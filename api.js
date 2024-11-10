// netlify/functions/api.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors"); // Import CORS middleware
const app = express();

app.use(cors()); // Enable CORS for all routes

// Define your routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Export the handler
module.exports.handler = serverless(app);
