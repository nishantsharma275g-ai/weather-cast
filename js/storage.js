// ================================
// Save Weather Cache
// ================================

function saveWeather(city, data) {

    const weatherData = {

        data: data,

        timestamp: Date.now()

    };

    localStorage.setItem(

        `weather_${city.toLowerCase()}`,

        JSON.stringify(weatherData)

    );

}
// ================================
// Get Weather Cache
// ================================

function getWeather(city) {

    const cache = localStorage.getItem(

        `weather_${city.toLowerCase()}`

    );

    if (!cache) {

        return null;

    }

    const weatherData = JSON.parse(cache);

    const cacheAge =
        Date.now() - weatherData.timestamp;

    const tenMinutes =
        10 * 60 * 1000;

    if (cacheAge > tenMinutes) {

        localStorage.removeItem(

            `weather_${city.toLowerCase()}`

        );

        return null;

    }

    return weatherData.data;

}