// netlify/functions/api.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

// Define your routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Export the handler
module.exports.handler = serverless(app);
