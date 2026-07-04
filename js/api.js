async function getWeatherByCity(city) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
}
async function getWeatherByCoordinates(latitude, longitude) {

    const url =
        `${BASE_URL}?key=${API_KEY}&q=${latitude},${longitude}&aqi=yes`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch your location weather.");
        }

        return await response.json();

    } catch (error) {

        throw error;

    }

}