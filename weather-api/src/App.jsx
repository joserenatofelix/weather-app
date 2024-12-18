import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WatherInformations/WatherInformations'
import WatherInformations5Days from './components/WatherInformations5Days/WatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setweather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "e5dc64d82bbf64708d7b56c2ac1e88d0"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    
    setweather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)   

  }

  return(
     <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

  {weather && <WeatherInformations weather={weather}/>}
  {weather5Days && <WatherInformations5Days weather5Days={weather5Days}/>}
     </div>
  )
}

export default App
