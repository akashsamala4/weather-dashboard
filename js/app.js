import { getWeather } from "./api.js";
import { saveLastCity, getLastCity } from "./storage.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("weatherResult");
const errorDiv = document.getElementById("error");
const loader = document.getElementById("loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function showError(message) {
  errorDiv.innerText = message;
}

function clearError() {
  errorDiv.innerText = "";
}

function displayWeather(data) {
  resultDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
}

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value;
  if (!city) return;

  try {
    clearError();
    showLoader();

    const data = await getWeather(city);
    displayWeather(data);
    saveLastCity(city);

  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
});

// Load last searched city
window.addEventListener("DOMContentLoaded", async () => {
  const lastCity = getLastCity();
  if (lastCity) {
    cityInput.value = lastCity;
    const data = await getWeather(lastCity);
    displayWeather(data);
  }
});
