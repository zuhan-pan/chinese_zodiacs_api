const express = require("express");
const app = express();
const port = 3000;

// Import the zodiac data
const zodiacData = require("./zodiacData.json");

// Route to get all zodiac signs
app.get("/api/zodiacs", (req, res) => {
  res.json(zodiacData.zodiacs);
});

// Route to get a zodiac sign by name
app.get("/api/zodiacs/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const zodiac = zodiacData.zodiacs.find((z) => z.name.toLowerCase() === name);

  if (zodiac) {
    res.json(zodiac);
  } else {
    res.status(404).json({ message: "Zodiac not found" });
  }
});

// Route to get a zodiac sign by year
app.get("/api/zodiac", (req, res) => {
  const year = req.query.year; // Get the 'year' query parameter

  if (!year) {
    return res
      .status(400)
      .json({ message: "Please provide a year as a query parameter." });
  }

  // Find the zodiac that includes the specified year
  const zodiac = zodiacData.zodiacs.find((z) => z.years.includes(year));

  if (zodiac) {
    res.json(zodiac);
  } else {
    res.status(404).json({ message: "Zodiac for the provided year not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
