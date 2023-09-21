import React from "react";
import "./Forecast.css";
const Forecast = ({ forecast = [], tempType = "C" }) => {
  const getIcon = (weather) => {
    let data = weather?.weather ? weather?.weather[0] : {};
    const iconId = data?.icon;
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  };

  const changeTempFormate = (val = 0) => {
    let temp = val;
    if (tempType === "C") temp = val - 273.15;
    else if (tempType === "F") temp = (val - 273.15) * 1.8 + 32;
    return (
      <span>
        {temp.toFixed(2)}
        <sup>o</sup>
        {tempType}
      </span>
    );
  };
  return (
    <div id="forecast">
      {forecast.map((weather, i) => {
        return (
          <div className="glass weather" key={i}>
            <img src={getIcon(weather)} alt="icon" loading="lazy" />
            <p>{weather.dt_txt}</p>
            <p>{weather?.weather ? weather?.weather[0]?.description : ""}</p>
            <p>
              {changeTempFormate(weather?.weather ? weather?.main?.temp : 0)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
