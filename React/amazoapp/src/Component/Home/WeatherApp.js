import React, { Component } from 'react';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else {
      this.setState({ error: "Geo not supported" });
    }
  }

  showPosition = (data) => {
    const latitude = data.coords.latitude;
    const longitude = data.coords.longitude;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const weatherData = data.list[0].temp.day;
        this.setState({ weatherData });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        this.setState({ error: "Error fetching weather data" });
      });
  }

  showError = (error) => {
    console.error("Geolocation error:", error);
    this.setState({ error: "Error getting location" });
  }

  render() {
    const { weatherData, error } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        {weatherData && <p>Weather: {weatherData}&#176;C</p>}
      </div>
    );
  }
}

export default WeatherApp;
