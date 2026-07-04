const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
// ================================
// Search Weather
// ================================

async function searchWeather() {
    function getCityInput() {
        return cityInput.value.trim();
    }

    const city = getCityInput();
    if (city === "") {
        showError("Please enter a city.");
        return;
    }
    try {
        showLoading();
        // Check cache first
        const cachedWeather = getWeather(city);

        if (cachedWeather) {

    displayWeather(cachedWeather);

    showCacheMessage("⚡ Loaded from cache");

    return;

}

        // Fetch from API
        const data = await getWeatherByCity(city);

        // Save into cache
        saveWeather(city, data);
        clearCacheMessage();

        // Display weather
        displayWeather(data);

    }
    catch (error) {
        showError(error.message);
    }
    finally {
        hideLoading();
    }

}
async function getLocationWeather() {

    if (!navigator.geolocation) {
        showError("Geolocation is not supported.");
        return;
    }

    showLoading();

    navigator.geolocation.getCurrentPosition(

        async function (position) {

            try {
                const latitude =
                    position.coords.latitude;
                const longitude =
                    position.coords.longitude;
                const data =
                    await getWeatherByCoordinates(
                        latitude,
                        longitude
                    );

                displayWeather(data);

            } catch (error) {
                showError(error.message);
            } finally {
                hideLoading();
            }
        },

        function () {

            hideLoading();
            showError(
                "Location permission denied."
            );
        }
    );
}

// ================================
// Events
// ================================

searchBtn.addEventListener("click", searchWeather);
cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});

locationBtn.addEventListener(
    "click",
    getLocationWeather
);
window.addEventListener("load", () => {

    getLocationWeather();

});