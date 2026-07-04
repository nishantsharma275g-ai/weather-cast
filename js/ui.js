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
const rainLayer = document.querySelector(".rain");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

// ================================
// Display Weather
// ================================

function displayWeather(data) {

    cityName.textContent =
        `${data.location.name}, ${data.location.country}`;

    temperature.textContent =
        `${data.current.temp_c}°C`;

    condition.textContent =
        data.current.condition.text;
    updateTheme(
        data.current.condition.text,
        data.current.is_day
    );

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
function updateTheme(condition, isDay) {
    // Remove every previous theme
    document.body.classList.remove(
        "clear-day",
        "clear-night",
        "clouds-day",
        "clouds-night",
        "rain-day",
        "rain-night",
        "snow-day",
        "snow-night",
        "thunder-day",
        "thunder-night"
    );

    const weather = condition.toLowerCase();

    let theme = "";

    if (weather.includes("sunny") || weather.includes("clear")) {

        theme = isDay ? "clear-day" : "clear-night";

    } else if (
        weather.includes("cloud") ||
        weather.includes("overcast") ||
        weather.includes("mist") ||
        weather.includes("fog")
    ) {

        theme = isDay ? "clouds-day" : "clouds-night";

    } else if (
        weather.includes("rain") ||
        weather.includes("drizzle")
    ) {

        theme = isDay ? "rain-day" : "rain-night";

    } else if (weather.includes("snow")) {

        theme = isDay ? "snow-day" : "snow-night";

    } else if (
        weather.includes("thunder")
    ) {

        theme = isDay ? "thunder-day" : "thunder-night";

    } else {

        theme = isDay ? "clear-day" : "clear-night";

    }

    document.body.classList.add(theme);

    console.log("Applied Theme:", theme);
    console.log(document.body.className);

}

// ================================
// Loading
// ================================

function showLoading() {
    loadingMessage.textContent = "Loading weather...";
}

function hideLoading() {
    loadingMessage.textContent = "";
}

// ================================
// Error
// ================================

function showError(message) {
    errorMessage.textContent = message;
}