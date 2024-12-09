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
    LocalObservationDateTime: "2024-09-10T23:02:00+05:30",
    EpochTime: 1725989520,
    WeatherText: "Some clouds",
    WeatherIcon: 36,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 22.4,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 72,
        Unit: "F",
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: 24.3,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 76,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 24.3,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 76,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RelativeHumidity: 91,
    IndoorRelativeHumidity: 91,
    DewPoint: {
      Metric: {
        Value: 20.9,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 70,
        Unit: "F",
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 270,
        Localized: "W",
        English: "W",
      },
      Speed: {
        Metric: {
          Value: 6,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 3.7,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 12.2,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 7.6,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: "Low",
    Visibility: {
      Metric: {
        Value: 6.4,
        Unit: "km",
        UnitType: 6,
      },
      Imperial: {
        Value: 4,
        Unit: "mi",
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: "",
    CloudCover: 64,
    Ceiling: {
      Metric: {
        Value: 975,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 3200,
        Unit: "ft",
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1004.1,
        Unit: "mb",
        UnitType: 14,
      },
      Imperial: {
        Value: 29.65,
        Unit: "inHg",
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: "Steady",
      Code: "S",
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: -0.7,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: -1,
        Unit: "F",
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 22.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 73,
        Unit: "F",
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 22.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 72,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 21.4,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 71,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbGlobeTemperature: {
      Metric: {
        Value: 21.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 71,
        Unit: "F",
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0,
        Unit: "mm",
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: "in",
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 0.5,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.02,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 1.8,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.07,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 3,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.12,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 4.2,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.17,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 4.2,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.17,
          Unit: "in",
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 22.4,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 72,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 26.2,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 79,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 22.4,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 72,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 28.8,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 84,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 20.9,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 70,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 28.8,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 84,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/in/nere/2776775/current-weather/2776775?lang=en-us",
    Link: "http://www.accuweather.com/en/in/nere/2776775/current-weather/2776775?lang=en-us",
  },
});
devtools(state, { name: "state name", enabled: true });

export default state;
