const apiKey = "e02ca5f933924a9d99d135725240508";
const apiUrl = "http://api.weatherapi.com/v1/current.json";

const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const location = locationInput.value.trim();
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?key=${apiKey}&q=${location}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.location.name;
      temperatureElement.textContent = `${Math.round(data.current.temp_c)}°C`;
      descriptionElement.textContent = data.current.condition.text;
      humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
      windElement.textContent = `Wind: ${data.current.wind_kph} km/h`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}