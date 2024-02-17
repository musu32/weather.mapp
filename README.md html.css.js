<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* General styling */
        body {  background-image:url('whe ap bgdownload.jpeg');
            font-family: Arial, sans-serif;
            background-color: #e6931f;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .container {
            background-image: url('container.ap.jpeg');
            max-width: 600px;
            margin: 20px auto;
            background-color: #99cbe4;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #333;
        }

        /* Search input */
        #cityInput {
            width: calc(100% - 140px);
            padding: 10px;
            border: 1px solid #803838;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 16px;
        }

        /* Search button */
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #a26666;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #0056b3;
        }

        /* Weather display */
        .weather {
            
            margin-top: 10px;
            background-color: #9dcade;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .temp {
            font-size: 48px;
            margin: 20px 0;
            color: #333;
        }

        .city {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
        }

        .details {
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }

        .col {
            margin: 0 10px;
        }

        .col p {
            margin: 5px 0;
            color: #666;
        }

        /* Weather icons */
        .weather-icon {
            width: 100px;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Weather App</h1>
        <input type="text" id="cityInput" placeholder="Enter city">
        <button onclick="fetchWeatherData()">Search</button>
        <div id="weatherInfo" class="weather-info"></div>
    </div>

    <div class="weather">
        <img src="img.rain.gif" class="weather-icon">
        <h1 class="temp">22°C</h1>
        <h2 class="city">New York</h2>
        <div class="details">
            <div class="col">
                <img src="img.humidity.gif">
                <div>
                    <p class="humidity">50%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="img.wind.gif">
                <div>
                    <p class="wind">15 km/h</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>





*external css code
/* Weather container */
.weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Weather icon */
.weather-icon {
    width: 100px; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
}

/* Temperature */
.temp {
    font-size: 36px; /* Adjust size as needed */
    margin: 10px 0;
}

/* City name */
.city {
    font-size: 24px; /* Adjust size as needed */
    margin-bottom: 10px;
}

/* Weather details container */
.details {
    display: flex;
    justify-content: center;
}

/* Weather detail column */
.col {
    margin: 0 20px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Weather detail icon */
.col img {
    width: 50px; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
}

/* Weather detail text */
.col p {
    margin: 5px 0;
}

/* Search box */
#cityInput {
    padding: 10px;
    border: 2px solid #7b6868;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
}

/* Search button */
#searchBtn {
    padding: 10px 20px;
    background-color: #6b90b8;
    color: #d9acac;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Search button hover effect */
#searchBtn:hover {
    background-color: #0056b3;
}
