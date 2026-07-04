# 🌦️ WeatherCast

A modern, responsive weather application built using **Vanilla JavaScript**, **HTML5**, and **CSS3**. WeatherCast provides real-time weather information for any city using the WeatherAPI service. The application features a clean glassmorphism UI, dynamic weather themes, geolocation support, local storage caching, and smooth animations for an engaging user experience.

---

## ✨ Features

* 🔍 Search weather by city name
* 📍 Detect and display weather for the user's current location
* 🌡️ Display:

  * Current Temperature
  * Weather Condition
  * Humidity
  * Wind Speed
  * Feels Like Temperature
  * Pressure
  * UV Index
  * Visibility
* 🌤️ Dynamic weather icons
* 🎨 Dynamic background themes based on weather conditions
* 🌙 Automatic Day & Night theme switching
* 🌧️ Animated rain effect during rainy weather
* ⭐ Animated stars during night mode
* ⚡ LocalStorage caching (10-minute cache) to reduce unnecessary API requests
* 🚫 Graceful error handling for invalid city names
* 📱 Fully responsive design for desktop, tablet, and mobile devices
* ✨ Modern glassmorphism user interface

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* WeatherAPI
* Fetch API
* Async / Await
* LocalStorage
* Browser Geolocation API

---

## 📂 Project Structure

```text
WeatherCast/
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── config.js
│   ├── main.js
│   ├── storage.js
│   └── ui.js
│
├── assets/
│
├── index.html
└── README.md
```

---

## ⚙️ How It Works

1. The user searches for a city or allows location access.
2. The application checks LocalStorage for cached weather data.
3. If cached data is available and less than 10 minutes old, it is displayed instantly.
4. Otherwise, the application requests fresh weather data from WeatherAPI using the Fetch API.
5. The received JSON response is parsed and rendered dynamically.
6. The UI automatically updates with weather icons, animations, and themes based on the current weather conditions.

---

## 🧠 Engineering Concepts Used

* DOM Manipulation
* Modular JavaScript Architecture
* Async / Await
* Fetch API
* Error Handling with Try...Catch
* API Integration
* LocalStorage Caching
* Responsive Web Design
* CSS Variables
* CSS Animations
* Browser Geolocation API

---

## 🔮 Future Improvements

* 5-Day Weather Forecast
* Hourly Weather Forecast
* Air Quality Dashboard
* Sunrise & Sunset Information
* Weather Maps
* Favorite Cities
* Temperature Unit Toggle (°C / °F)
* PWA Support for Offline Usage

---

## 👨‍💻 Author

**Nishant Sharma**

Built as part of an internship project to demonstrate practical frontend development skills including API integration, asynchronous JavaScript, responsive design, browser APIs, and clean project architecture.
