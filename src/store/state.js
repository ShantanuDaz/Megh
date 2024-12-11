import { proxy } from "valtio";
import { devtools } from "valtio/utils";
// Create the global state
const state = proxy({
  location: [18.63, 73.71],
  locationData: {
    name: "Delhi",
    lat: 28.6517178,
    lon: 77.2219388,
    country: "IN",
    state: "Delhi",
  },
  data: {
    coord: {
      lon: 77.2219,
      lat: 28.6517,
    },
    weather: [
      {
        id: 721,
        main: "Haze",
        description: "haze",
        icon: "50d",
      },
    ],
    base: "stations",
    main: {
      temp: 293.21,
      feels_like: 291.77,
      temp_min: 293.21,
      temp_max: 293.21,
      pressure: 1016,
      humidity: 19,
      sea_level: 1016,
      grnd_level: 990,
    },
    visibility: 3200,
    wind: {
      speed: 3.6,
      deg: 270,
    },
    clouds: {
      all: 0,
    },
    dt: 1733904334,
    sys: {
      type: 1,
      id: 9165,
      country: "IN",
      sunrise: 1733880840,
      sunset: 1733918104,
    },
    timezone: 19800,
    id: 1273294,
    name: "Delhi",
    cod: 200,
  },
});
devtools(state, { name: "state name", enabled: true });

export default state;
