// ================================
// DOM Elements
// ================================

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const weatherIcon = document.getElementById("weatherIcon");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

// ================================
// Display Weather
// ================================

function displayWeather(data){

    cityName.textContent =
        `${data.location.name}, ${data.location.country}`;

    temperature.textContent =
        `${data.current.temp_c}°C`;

    condition.textContent =
        data.current.condition.text;

    humidity.textContent =
        `${data.current.humidity}%`;

    wind.textContent =
        `${data.current.wind_kph} km/h`;

    feelsLike.textContent =
        `${data.current.feelslike_c}°C`;

    pressure.textContent =
        `${data.current.pressure_mb} mb`;

    visibility.textContent =
        `${data.current.vis_km} km`;

    weatherIcon.src =
        "https:" + data.current.condition.icon;

    weatherIcon.style.display = "inline-block";
    errorMessage.textContent = "";
}

// ================================
// Loading
// ================================

function showLoading(){
    loadingMessage.textContent = "Loading weather...";
}

function hideLoading(){
    loadingMessage.textContent = "";
}

// ================================
// Error
// ================================

function showError(message){
    errorMessage.textContent = message;
}