var message = document.getElementById("message")

function sendMessage() {
    // message.innerHTML = "<h1>Your message was successfully sent 🎉🎉🎉🎉</h1>"
    alert("Your message was successfully sent 🎉🎉🎉🎉")
}

// Function to gallery images

let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');
const itemCount = items.length;

function showImage(index) {
    const newTransformValue = `translateX(-${index * 100}%)`;
    document.querySelector('.gallery').style.transform = newTransformValue;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % itemCount;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    showImage(currentIndex);
}

// Function to get weather data API

async function getWeather() {
    const apiKey = 'd367cb5936d1f47f39f89e30290559f9'; 
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}