const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

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
        const data = await getWeatherByCity(city);
        displayWeather(data);

    }
    catch (error) {
        showError(error.message);
    }
    finally {
        hideLoading();
    }

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