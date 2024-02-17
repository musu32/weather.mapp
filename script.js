const apiKey = "d241b2c47ba79a6e615eebf20a1848f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchWeatherData() {
    const cityInput = document.getElementById('cityInput').value.trim();
    if (cityInput === "") {
        alert("Please enter a city name.");
        return;
    }
    
    const response = await fetch(apiUrl + cityInput + '&appid=' + apiKey);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } else {
        // Handle error cases
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
    }
}





