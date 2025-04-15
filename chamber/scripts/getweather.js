// WEATHER SECTION ---
const API_KEY = 'fb7cb41bc214f120411387cf5bbe861e';
const forecastDays = document.querySelectorAll('.forecast-day');

const lat = 34.0007
const lon = -81.0348

// Use the One Call API for forecast data
const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

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

        dateElement.textContent = `${month}/${day}`;

        if (i === 0) {
            dayElement.querySelector('h3').textContent = 'Today';
        } else {
            dayElement.querySelector('h3').textContent = getWeekdayName(date.getDay());
        }

        tempElement.textContent = `${forecast.temp.day.toFixed(0)}°C`;
        const iconSrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        iconElement.setAttribute('src', iconSrc);
        iconElement.setAttribute('alt', forecast.weather[0].description);
        descElement.textContent = forecast.weather[0].description;
    }
}

function getWeekdayName(dayIndex) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[dayIndex];
}

apiFetch();
