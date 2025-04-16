const API_KEY = '8a79083123d8ef1d5ad73557ee563fc6';
const forecastDays = document.querySelectorAll('.forecast-day');

// Set your desired location
const lat = 37.9800; 
const lon = -122.0304;

// API URL using imperial units (Fahrenheit)
const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

function displayResults(data) {
    const dailyForecasts = data.daily;

    for (let i = 0; i < 4; i++) {
        const forecast = dailyForecasts[i];
        const dayElement = forecastDays[i];
        const tempElement = dayElement.querySelector('.forecast-temp');
        const iconElement = dayElement.querySelector('.forecast-icon');
        const descElement = dayElement.querySelector('.forecast-description');
        const dateElement = dayElement.querySelector('.date');

        const date = new Date(forecast.dt * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const weekday = getWeekdayName(date.getDay());

        dateElement.textContent = `${month}/${day}`;

        // Label the day
        if (i === 0) {
            dayElement.querySelector('h3').textContent = 'Today';
        } else {
            dayElement.querySelector('h3').textContent = weekday;
        }

        // Set temperature in Fahrenheit
        tempElement.textContent = `${forecast.temp.day.toFixed(0)}°c`;

        // Use high-resolution weather icon
        const iconSrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        iconElement.setAttribute('src', iconSrc);
        iconElement.setAttribute('alt', forecast.weather[0].description);

        // Set weather description
        descElement.textContent = forecast.weather[0].description;
    }
}

function getWeekdayName(dayIndex) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[dayIndex];
}

// Fetch and display forecast
apiFetch();
