import './Prevision.css';

function Prevision({ weather }) {
    // Verifica se os dados do clima existem
    if (!weather) {
        return <div>Carregando...</div>;  // Exibe um texto enquanto os dados não chegam
    }

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt={`Ícone de clima: ${weather.weather[0].description}`}
                />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    );
}

export default Prevision;
