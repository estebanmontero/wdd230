const API_KEY = '27cf22e9fba28aaf0d1b8ce242ea327c';
const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 6.25184;
const lon = -75.56359;

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

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
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currenttemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
