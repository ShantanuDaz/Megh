import { proxy } from "valtio";
import { devtools } from "valtio/utils";
// Create the global state
const state = proxy({
  location: [18.63, 73.71],
  locationData: {
    Version: 1,
    Key: "2776775",
    Type: "City",
    Rank: 85,
    LocalizedName: "Nere",
    EnglishName: "Nere",
    PrimaryPostalCode: "",
    Region: {
      ID: "ASI",
      LocalizedName: "Asia",
      EnglishName: "Asia",
    },
    Country: {
      ID: "IN",
      LocalizedName: "India",
      EnglishName: "India",
    },
    AdministrativeArea: {
      ID: "MH",
      LocalizedName: "Maharashtra",
      EnglishName: "Maharashtra",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "IN",
    },
    TimeZone: {
      Code: "IST",
      Name: "Asia/Kolkata",
      GmtOffset: 5.5,
      IsDaylightSaving: false,
      NextOffsetChange: null,
    },
    GeoPosition: {
      Latitude: 18.62,
      Longitude: 73.704,
      Elevation: {
        Metric: {
          Value: 630,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 2066,
          Unit: "ft",
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [
      {
        Level: 2,
        LocalizedName: "Pune",
        EnglishName: "Pune",
      },
      {
        Level: 3,
        LocalizedName: "Mulshi",
        EnglishName: "Mulshi",
      },
    ],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "FutureRadar",
      "MinuteCast",
      "PremiumAirQuality",
    ],
  },
  data: {
    LocalObservationDateTime: "2024-12-09T17:42:00+05:30",
    EpochTime: 1733746320,
    WeatherText: "Partly sunny",
    WeatherIcon: 3,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 26.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 79,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/in/nere/2776775/current-weather/2776775?lang=en-us",
    Link: "http://www.accuweather.com/en/in/nere/2776775/current-weather/2776775?lang=en-us",
  },
});
devtools(state, { name: "state name", enabled: true });

export default state;
