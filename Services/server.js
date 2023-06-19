const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.listen(PORT, () => console.log('Server is running'));

app.get('/games', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
      { params: req.query }
    );
    res.json(data);
  } catch (err) {
    console.error('Error in games');
  }
});

app.get('/genres', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    );
    res.json(data);
  } catch (err) {
    console.error('Error in genres');
  }
});

app.get('/platforms/lists/parents', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/platforms/lists/parents?key=${process.env.API_KEY}`
    );
    res.json(data);
  } catch (err) {
    console.error('Error in genres');
  }
});
