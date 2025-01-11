import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Prevision from './components/Prevision/Prevision';
import Prevision5Days from './components/Prevision5Days/Prevision5Days';

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setweather5Days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;

    try {
      const apiInfo = await axios.get(`http://localhost:5000/weather?city=${city}`);
      const apiInfo5Days = await axios.get(`http://localhost:5000/forecast?city=${city}`);

      setweather5Days(apiInfo5Days.data);
      setWeather(apiInfo.data);
    } catch (error) {
      console.error('Erro ao buscar os dados', error);
    }
  }

  return (
    <div className="container">
      <h1 style={{ color: '#4B0082' }}>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <Prevision weather={weather} />}
      {weather5Days && <Prevision5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
