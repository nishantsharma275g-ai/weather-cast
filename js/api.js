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