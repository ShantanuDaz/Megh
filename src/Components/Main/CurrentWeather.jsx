import { useSnapshot } from "valtio";
import state from "../../store/state";
import { useEffect, useState } from "react";
import { kelvinToCelsius } from "../../Utils";
const CurrentWeather = () => {
  const snap = useSnapshot(state);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/data/2.5/weather?lat=${
            snap.locationData.lat
          }&lon=${snap.locationData.lon}&appid=${import.meta.env.VITE_API_KEY}
          `
        );
        const data = await res.json();
        state.data = data;
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [snap.locationData]);

  return (
    <section className="p-3 rounded-md border-2">
      <section>
        <h4>{snap.data.weather[0].description}</h4>
        <h1 className="text-3xl ">
          <span className="flex items-center">
            {kelvinToCelsius(snap.data.main.temp)}
            <span className="text-xs">°C</span>
            <img
              src={`https://openweathermap.org/img/wn/${snap.data.weather[0].icon}@2x.png`}
            />
          </span>
        </h1>
        <h4 className="text-s flex">
          Feels like {kelvinToCelsius(snap.data.main.feels_like)}
          <span className="text-xs">°C</span>
        </h4>
        <h1 className="">
          <span className="flex items-center gap-10">
            <span>
              Max-{kelvinToCelsius(snap.data.main.temp_min)}
              <span className="text-xs">°C</span>
            </span>
            <span>
              Min-{kelvinToCelsius(snap.data.main.temp_max)}
              <span className="text-xs">°C</span>
            </span>
          </span>
        </h1>
      </section>
      <section></section>
    </section>
  );
};

export default CurrentWeather;
