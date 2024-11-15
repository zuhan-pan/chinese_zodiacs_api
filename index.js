const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

// Enable CORS globally
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Path to the JSON file
const zodiacFilePath = './zodiacData.json';

// Utility to read and write JSON file
const readZodiacData = () => {
  const rawData = fs.readFileSync(zodiacFilePath);
  return JSON.parse(rawData);
};

const writeZodiacData = data => {
  fs.writeFileSync(zodiacFilePath, JSON.stringify(data, null, 2));
};

// Route to get all zodiac signs
app.get('/api/zodiacs', (req, res) => {
  const data = readZodiacData();
  res.json(data.zodiacs);
});

// Route to get a zodiac sign by name
app.get('/api/zodiacs/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const data = readZodiacData();
  const zodiac = data.zodiacs.find(z => z.name.toLowerCase() === name);

  if (zodiac) {
    res.json(zodiac);
  } else {
    res.status(404).json({ message: 'Zodiac not found' });
  }
});

// Route to get a zodiac sign by year
app.get('/api/zodiac', (req, res) => {
  const year = req.query.year;
  if (!year) {
    return res
      .status(400)
      .json({ message: 'Please provide a year as a query parameter.' });
  }
  const data = readZodiacData();
  const zodiac = data.zodiacs.find(z => z.years.includes(year));

  if (zodiac) {
    res.json(zodiac);
  } else {
    res.status(404).json({ message: 'Zodiac for the provided year not found' });
  }
});

// Route to add a new zodiac sign
app.post('/api/zodiacs', (req, res) => {
  const newZodiac = req.body;
  const data = readZodiacData();

  if (
    !newZodiac.name ||
    !newZodiac.years ||
    !newZodiac.traits ||
    !newZodiac.element ||
    !newZodiac.compatibility
  ) {
    return res.status(400).json({ message: 'Invalid zodiac data.' });
  }

  data.zodiacs.push(newZodiac);
  writeZodiacData(data);
  res.status(201).json(newZodiac);
});

// Route to update a zodiac sign by name
app.put('/api/zodiacs/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const updatedZodiac = req.body;
  const data = readZodiacData();

  const index = data.zodiacs.findIndex(z => z.name.toLowerCase() === name);
  if (index === -1) {
    return res.status(404).json({ message: 'Zodiac not found' });
  }

  data.zodiacs[index] = { ...data.zodiacs[index], ...updatedZodiac };
  writeZodiacData(data);
  res.json(data.zodiacs[index]);
});

// Route to delete a zodiac sign by name
app.delete('/api/zodiacs/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const data = readZodiacData();

  const newZodiacs = data.zodiacs.filter(z => z.name.toLowerCase() !== name);
  if (newZodiacs.length === data.zodiacs.length) {
    return res.status(404).json({ message: 'Zodiac not found' });
  }

  data.zodiacs = newZodiacs;
  writeZodiacData(data);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
