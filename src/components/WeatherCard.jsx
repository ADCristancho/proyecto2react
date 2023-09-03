import { useState } from "react"


const WeatherCard = ({weather, temp}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)
  
  const handleChangeTemp = () =>setIsCelsius(!isCelsius)

  
  
    return (
      <article className="contenido">
          <h1>Weather Apps</h1>
          <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>      
      <div>
        <img className="clouds"
          src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}  />
      </div>     
      <section className="info">
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>Wind Speed</span>
          {weather?.wind.speed} </li>
          <li>Clouds<span>
            {weather?.clouds.all}</span>
           </li>
          <li>Pressure<span>
            {weather?.main.pressure}</span>
           </li>
        </ul>
       </section>
      </div>
      <h2 className="temperature">{isCelsius ? `${temp?.celsius} ℃`: `${temp?.farenheit} ℉`}</h2>
      <button onClick={handleChangeTemp}>{isCelsius ? "Change to ℉" : "Change to ℃"} </button>
      </article>
  )
}

export default WeatherCard