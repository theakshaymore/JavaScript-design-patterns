const foreignWeatherApi = {
  fetch_weather(city_name) {
    return {
      city_name,
      temp_fehrenheit: 72,
      wind_speed_mph: 5,
      condition: "partly_cloudy",
    };
  },
};

class WeatherAdaptor {
  constructor(foreignAPI) {
    this._api = foreignAPI;
  }
}
