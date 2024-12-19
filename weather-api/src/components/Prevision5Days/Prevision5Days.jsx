import './Prevision5Days.css';

function Prevision5Days({ weather5Days }) {
  if (!weather5Days) return <div>Carregando...</div>;

  const dailyForecast = weather5Days.list.reduce((acc, forecast) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = forecast;
    }
    return acc;
  }, {});

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  // Função para formatar a data no formato desejado
  function convertDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });
  }

  return (
    <div className="weather-container">
      <h3>Previsão Próximos 5 Dias</h3>
      <div className="weather-list">
        {next5DaysForecast.map(forecast => (
          <div key={forecast.dt} className="weather-item">
            <p className="forecast-day">{convertDate(forecast.dt * 1000)}</p>
            <img 
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} 
              alt={`Ícone de clima: ${forecast.weather[0].description}`} 
            />
            <p className="forecast-description">{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC max</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prevision5Days;
