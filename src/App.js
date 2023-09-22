import React, { useState, useEffect } from "react";
import "./App.css";
import { WeatherURL, WeatherAPIKey, ForecastURL, AQIURL } from "./APIDetails";
import CurrWeather from "./Components/CurrWeather/CurrWeather";
import Loacation from "./Components/Location/Location";
import Forecast from "./Components/Forecast/Forecast";
import Logo from "./Components/Logo/Logo";
function App() {
  const defaultLocation = () => {
    return {
      id: 56588,
      wikiDataId: "Q207098",
      type: "CITY",
      city: "Ghaziabad",
      name: "Ghaziabad",
      country: "India",
      countryCode: "IN",
      region: "Uttar Pradesh",
      regionCode: "UP",
      latitude: 28.666666666,
      longitude: 77.416666666,
      population: 2375820,
    };
  };
  const [location, setLocation] = useState(defaultLocation());
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [AQI, setAQI] = useState({});
  const [tempType, setTempType] = useState("C");

  useEffect(() => {
    getWeather();
    getForcast();
    getAQI();
    // eslint-disable-next-line
  }, [JSON.stringify(location)]);

  const getWeather = async () => {
    let url = `${WeatherURL}lat=${location.latitude}&lon=${location.longitude}&appid=${WeatherAPIKey}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather({});
    }
  };
  const getAQI = async () => {
    let url = `${AQIURL}lat=${location.latitude}&lon=${location.longitude}&appid=${WeatherAPIKey}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      setAQI(data.list[0]);
    } catch (error) {
      console.error(error);
      setAQI({});
    }
  };

  const getForcast = async () => {
    let url = `${ForecastURL}lat=${location.latitude}&lon=${location.longitude}&appid=${WeatherAPIKey}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      setForecast(data.list);
      // localStorage.setItem()
    } catch (error) {
      console.error(error);
      setForecast([]);
    }
  };
  const getBackgroundOrColor = (background = true) => {
    const des = (
      weather?.weather ? weather?.weather[0]?.description : ""
    ).replace(" ", "");
    const data = weather?.weather ? weather?.weather[0] : {};
    let dayOrNight = (data?.icon || "d").slice(-1);
    let url = `./Assets/images/${des}${dayOrNight}.png`;
    const img = new Image();
    img.src = url;

    img.onload = () => {
      // Image exists, set background image
      document.getElementById("app").style.backgroundImage = `url(${url})`;
    };

    img.onerror = () => {
      // Image doesn't exist, set background color to white
      document.getElementById("app").style.backgroundColor = "#282727";
      document.getElementById("app").style.color = "white";
    };
    return background ? url : dayOrNight;
  };
  return (
    <div
      id="app"
      style={{
        backgroundImage: `url(${getBackgroundOrColor()})`,
        backgroundColor: "#282727",
        color: getBackgroundOrColor(false) === "n" ? "white" : "black",
      }}
    >
      <div id="currentWeather">
        <Logo />
        <Loacation
          location={location}
          changeLocation={(loc) => setLocation(loc)}
        />
        <CurrWeather
          weather={weather}
          tempType={tempType}
          changeTempType={(val) => setTempType(val)}
          AQI={AQI}
        />
        <Forecast forecast={forecast} tempType={tempType} />
      </div>
    </div>
  );
}

export default App;
