import { getWeather } from "./weather.js";

// ============================
// State Variables
// ============================
let location = "Naga, Camarines  Sur";

// ============================
// DOM References
// ============================
const form = document.querySelector("form");
const searchField = document.querySelector("#search-location");
const unitCheckbox = document.querySelector("#unit-checkbox");
const unitLabel = document.querySelector("#unit-label");

// Weather Display DOM References
const conditionContainer = document.querySelector("#condition");
const locationDisplay = document.querySelector("#location-name");
const temperatureDisplay = document.querySelector("#temperature");
const descriptionDisplay = document.querySelector("#description");

// ============================
// PUBLIC Methods
// ============================
export function setupAppListeners() {
  form.addEventListener("submit", handleFormSubmit);
  unitCheckbox.addEventListener("click", handleUnitToggle);
}

export async function updateView() {
  const paths = await getWeather(location);
  // Display Error Message
  if (paths.error) {
    locationDisplay.textContent = "Location Not Found";
    temperatureDisplay.textContent = "--";
    conditionContainer.innerHTML = "";
    descriptionDisplay.textContent = "";
    return;
  }
  // Display Location
  locationDisplay.textContent = paths.location;

  // Handle Temperature Conversion
  const convertedTemperature = convertTemperature(paths.temperature, false);
  temperatureDisplay.dataset.value = convertedTemperature;
  displayTemperature(convertedTemperature);
  unitLabel.textContent = unitCheckbox.checked ? "°F" : "°C";

  // Display Weather Condition Icon
  conditionContainer.innerHTML = await getConditionIcon(paths.icon);

  // Display Description
  descriptionDisplay.textContent = paths.description;
}

// ============================
// EVENT LISTENERS
// ============================

function handleFormSubmit(e) {
  e.preventDefault();
  location = searchField.value;
  searchField.value = "";
  updateView();
}

function handleUnitToggle(e) {
  const convertedTemperature = convertTemperature(
    temperatureDisplay.dataset.value,
    true
  );
  temperatureDisplay.dataset.value = convertedTemperature;
  displayTemperature(convertedTemperature);
  unitLabel.textContent = unitCheckbox.checked ? "°F" : "°C";
}

// ============================
// Private Helpers
// ============================
async function getConditionIcon(code) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/1st%20Set%20-%20Color/${code}.svg`
    ).then((res) => res.text());
    const data = await response;
    return data;
  } catch (error) {
    return undefined;
  }
}

function convertTemperature(temperature, convert) {
  // If Checkbox is checked, convert to Fahrenheit
  if (!convert) return temperature;
  if (unitCheckbox.checked) {
    return ((temperature * 9) / 5 + 32).toFixed(1);
  } else {
    return (((temperature - 32) * 5) / 9).toFixed(1);
  }
}

function displayTemperature(temperature) {
  temperatureDisplay.textContent = temperatureDisplay.dataset.value;
  const span = document.createElement("span");
  if (unitCheckbox.checked) {
    span.textContent += "°F";
  } else {
    span.textContent += "°C";
  }
  temperatureDisplay.appendChild(span);
}
