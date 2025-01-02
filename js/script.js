var message = document.getElementById("message")

function sendMessage() {
    // message.innerHTML = "<h1>Your message was successfully sent 🎉🎉🎉🎉</h1>"
    alert("Your message was successfully sent 🎉🎉🎉🎉")
}

// Function to gallery images

let currentIndex = 0; // Initialize current image index as 0
const items = document.querySelectorAll('.gallery-item'); // Select all elements with 'gallery-item' class
const itemCount = items.length; // Store total number of gallery items

function showImage(index) { // Function to display a specific image
    const newTransformValue = `translateX(-${index * 100}%)`; // Calculate translation value based on index
    document.querySelector('.gallery').style.transform = newTransformValue; // Apply translation to show image
}

function nextImage() { // Function to display next image 
    currentIndex = (currentIndex + 1) % itemCount; // Update current index to next image index  
    showImage(currentIndex); // Display next image 
}

function prevImage() { // Function to display previous image
    currentIndex = (currentIndex - 1 + itemCount) % itemCount; // Update current index to previous image index
    showImage(currentIndex); // Display previous image
}

// Function to get weather data API

async function getWeather() { // Function to get weather data
    const apiKey = 'd367cb5936d1f47f39f89e30290559f9'; // API key 
    const city = document.getElementById('city').value; // Get city name from input field
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL

    try { // Try to fetch data from API
        const response = await fetch(url); // Fetch data from API
        if (!response.ok) { // Check if response is not OK
            throw new Error('City not found'); // Throw an error
        }
        const data = await response.json(); // Convert response to JSON
        displayWeather(data); // Display weather data
    } catch (error) { // Catch any errors
        document.getElementById('weather-result').innerText = error.message; // Display error message
    }
}

function displayWeather(data) { // Function to display weather data
    const weatherResult = document.getElementById('weather-result'); // Get weather result element
    weatherResult.innerHTML = ` 
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}