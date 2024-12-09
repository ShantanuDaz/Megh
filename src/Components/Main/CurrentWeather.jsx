import { useSnapshot } from "valtio";
import state from "../../store/state";
import { useEffect, useState } from "react";
const CurrentWeather = () => {
  const snap = useSnapshot(state);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}currentconditions/v1/${
            snap.locationData.Key
          }?apikey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await res.json();
        state.data = data[0];
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
        <h4>{snap.data.WeatherText}</h4>
        <h1 className="text-3xl flex">
          {snap.data.Temperature.Metric.Value}
          <span className="text-xs">°C</span>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${
              snap.data.WeatherIcon < 10
                ? `0${snap.data.WeatherIcon}`
                : snap.data.WeatherIcon
            }-s.png`}
          />
        </h1>
        {/* <h4 className="text-s flex">
          Feels like {snap.data.RealFeelTemperature.Metric.Value}
          <span className="text-xs">°C</span>
        </h4> */}
      </section>
      <section></section>
    </section>
  );
};

export default CurrentWeather;
