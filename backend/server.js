const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const WEATHER_API_KEY = 'e5dc64d82bbf64708d7b56c2ac1e88d0';

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&lang=pt_br&units=metric`;
  
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao buscar dados de clima');
  }
});

app.get('/forecast', async (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&lang=pt_br&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao buscar previsão de 5 dias');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
