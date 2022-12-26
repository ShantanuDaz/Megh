import React from "react";
import "./CurrWeather.css";
const CurrWeather = ({
  weather = {},
  tempType = "C",
  AQI = {},
  changeTempType = () => {},
}) => {
  const getIcon = () => {
    let data = weather?.weather ? weather?.weather[0] : {};
    const iconId = data?.icon || "1d";
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

  const getAQISevearity = () => {
    let sev = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor",
    };
    return sev[AQI?.mian ? AQI?.mian?.aqi : 1];
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
      <div id="AQI">
        <img src={getIcon()} alt="icon" />
        <p>
          <p>
            <strong>{getAQISevearity()}</strong>
          </p>
          <p>
            AQI : <strong>{AQI?.components ? AQI?.components.pm2_5 : 0}</strong>
            {" ,"}
            {window.innerWidth > 1000 ? (
              <span>
                PM10 :{" "}
                <strong>{AQI?.components ? AQI?.components.pm10 : 0}</strong>
              </span>
            ) : (
              <p>
                PM10 :{" "}
                <strong>{AQI?.components ? AQI?.components.pm10 : 0}</strong>
              </p>
            )}
          </p>
          {window.innerWidth > 1000 && (
            <>
              <p>
                CO : <strong>{AQI?.components ? AQI?.components.co : 0}</strong>
                {" ,"}O<sub>3</sub> :{" "}
                <strong>{AQI?.components ? AQI?.components.o3 : 0}</strong>
              </p>
              <p>
                NO : <strong>{AQI?.components ? AQI?.components.no : 0}</strong>
                {" ,"}
                NO
                <sub>2</sub> :{" "}
                <strong>{AQI?.components ? AQI?.components.no2 : 0}</strong>
              </p>
              <p>
                NH<sub>3</sub> :{" "}
                <strong>{AQI?.components ? AQI?.components.nh3 : 0}</strong> ,SO
                <sub>2</sub> :{" "}
                <strong>{AQI?.components ? AQI?.components.so2 : 0}</strong>
              </p>
            </>
          )}
        </p>
      </div>
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
