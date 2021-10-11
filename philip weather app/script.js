/** @format */

let weatherCountry = document.querySelector(".country");
let weatherCity = document.querySelector(".city");
let weatherTemp = document.querySelector(".temp");
let weatherFeels = document.querySelector(".feels");
let weatherClouds = document.querySelector(".clouds");
let weatherHumidity = document.querySelector(".humidity");
let weatherDesc = document.querySelector(".weather-desc");
let weatherWindSpeed = document.querySelector(".wind-spd");
let welcome = document.querySelector(".greeting"); // Welcome msg
let allWeatherInfo = document.querySelectorAll(".weather-styling"); // All elements

allWeatherInfo.forEach((item) => {
	setTimeout(() => {
		item.style.transform = "translateX(500px)";
	}, 1500);
});

setTimeout(() => {
	welcome.style.transform = "translateX(500px)";
}, 500);

fetch(
	"https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=0db1b7888cb9ae37326ea1be83af4fa3"
).then((response) => {
	response.json().then((response) => {
		weatherCountry.innerHTML =
			"<span>Country</span>: " + response.sys.country;

		weatherCity.innerHTML = "<span>City:</span> " + response.name;

		weatherTemp.innerHTML =
			"<span>Temperature:</span> " + response.main.temp + "°C";

		weatherFeels.innerHTML =
			"<span>Feels like:</span> " + response.main.feels_like + "°C";

		weatherClouds.innerHTML = "<span>Clouds:</span> " + response.clouds.all;

		weatherHumidity.innerHTML =
			"<span>Humidity:</span> " + response.main.humidity;

		weatherDesc.innerHTML =
			"<span>Weather desc:</span> " + response.weather[0].description;

		weatherWindSpeed.innerHTML =
			"<span>Wind speed:</span> " + response.wind.speed + "Mph";
	});
});
