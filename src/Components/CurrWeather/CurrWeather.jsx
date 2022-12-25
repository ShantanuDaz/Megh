import React from "react";
import "./CurrWeather.css";
const CurrWeather = ({
  weather = {},
  tempType = "C",
  changeTempType = () => {},
}) => {
  const getIcon = () => {
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
    <div className="glass weather">
      <div id="tempType">
        <label>
          <sup>o</sup>C
        </label>
        <input
          type="radio"
          checked={tempType === "C"}
          onChange={() => changeTempType("C")}
        />
        <label>
          <sup>o</sup>F
        </label>
        <input
          type="radio"
          checked={tempType === "F"}
          onChange={() => changeTempType("F")}
        />
      </div>
      <img src={getIcon()} alt="icon" />
      {/* <p>{weather?.weather ? weather?.weather[0]?.main : ""}</p> */}
      <p>{`${new Date()}`}</p>
      <p>{weather?.weather ? weather?.weather[0]?.description : ""}</p>
      <p>{changeTempFormate(weather?.weather ? weather?.main?.temp : 0)}</p>
      <p>
        {changeTempFormate(weather?.weather ? weather?.main?.temp_min : 0)} -{" "}
        {changeTempFormate(weather?.weather ? weather?.main?.temp_max : 0)}
      </p>
    </div>
  );
};

export default CurrWeather;
