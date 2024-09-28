import { useSnapshot } from "valtio";
import state from "../../store/state";
const CurrentWeather = () => {
  const snap = useSnapshot(state);
  return (
    <section className="p-3 rounded-md border-2">
      <section>
        <h4>{snap.data.WeatherText}</h4>
        <h1 className="text-3xl flex">
          {snap.data.Temperature.Metric.Value}
          <span className="text-xs">°C</span>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${snap.data.WeatherIcon}-s.png`}
          />
        </h1>
        <h4 className="text-s flex">
          Feels like {snap.data.RealFeelTemperature.Metric.Value}
          <span className="text-xs">°C</span>
        </h4>
      </section>
      <section></section>
    </section>
  );
};

export default CurrentWeather;
