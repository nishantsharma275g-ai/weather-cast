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
const cacheMessage = document.getElementById("cacheMessage");
const lastUpdated = document.getElementById("lastUpdated");
const uv = document.getElementById("uv");
const starsLayer = document.querySelector(".stars");
const app = document.querySelector(".app");

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
    uv.textContent =
        data.current.uv;

    lastUpdated.textContent =
        `Last Updated: ${data.current.last_updated}`;

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
    // Change glass effect based on weather

    app.className = "app";

    if (theme.includes("clear")) {

        app.classList.add("glass-clear");

    } else if (theme.includes("cloud")) {

        app.classList.add("glass-cloud");

    } else if (theme.includes("rain")) {

        app.classList.add("glass-rain");

    } else if (theme.includes("thunder")) {

        app.classList.add("glass-thunder");

    } else if (theme.includes("snow")) {

        app.classList.add("glass-snow");

    }
    if (
        theme === "rain-day" ||
        theme === "rain-night"
    ) {
        rainLayer.style.display = "block";
    } else {
        rainLayer.style.display = "none";
    }
    if (!isDay) {
        starsLayer.style.display = "block";
    } else {
        starsLayer.style.display = "none";
    }

    console.log("Applied Theme:", theme);
    console.log(document.body.className);

}

// ================================
// Loading
// ================================

function showLoading() {
    loadingMessage.style.display = "block";
}

function hideLoading() {
    loadingMessage.style.display = "none";
}

// ================================
// Error
// ================================

function showError(message) {
    errorMessage.textContent = message;
}

// ================================
// Cache Status
// ================================

function showCacheMessage(message) {

    cacheMessage.textContent = message;

    setTimeout(() => {

        cacheMessage.textContent = "";

    }, 3000);

}

function clearCacheMessage() {

    cacheMessage.textContent = "";

}
// ================================
// Create Rain Animation
// ================================

function createRain() {
    rainLayer.innerHTML = "";
    for (let i = 0; i < 80; i++) {
        const drop = document.createElement("span");
        drop.className = "drop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDelay = Math.random() * 2 + "s";
        drop.style.animationDuration =
            0.6 + Math.random() * 0.6 + "s";
        rainLayer.appendChild(drop);
    }
}
createRain();

// ================================
// Create Stars Animation
// ================================

function createStars() {
    starsLayer.innerHTML = "";
    for (let i = 0; i < 120; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay =
            Math.random() * 2 + "s";
        starsLayer.appendChild(star);
    }
}

createStars();