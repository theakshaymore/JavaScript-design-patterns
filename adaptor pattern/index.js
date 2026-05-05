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

  getWeather(city) {
    const raw = this._api.fetch_weather(city);
    return {
      cityName: raw.city_name,
      tempCelcius: Math.round((raw.temp_fehrenheit - 32) * (5 / 9)),
      windSpeedKmp: Math.round(raw.wind_speed_mph - 1.6),
      condition: raw.condition,
    };
  }
}

const weather = new WeatherAdaptor(foreignWeatherApi);
const result = weather.getWeather("Mumbai");
