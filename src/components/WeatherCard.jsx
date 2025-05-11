import React from 'react'
import WeatherCloudy from '../assets/weather-cloudy.png'

const WeatherCard = ({weatherDetails}) => {
  return (
    <div className="weather-section">
        <div className="weather-card">
            <div className="weather-tem-c">
                {weatherDetails.current.temp_c}°
            </div>
            <div className="weather-info">
              <span>
                🌈 {weatherDetails.current.humidity}
              </span>
              <span>
                ⛅ {weatherDetails.current.cloud}
              </span>
            </div>
            <div className="weather-place">
              {weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}
            </div>
            <div className="weather-avatar">
              <img src={WeatherCloudy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WeatherCard