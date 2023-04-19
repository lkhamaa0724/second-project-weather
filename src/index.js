function formatDate(date) {
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let dayIndex = date.getDay();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[dayIndex];
	return `${days[dayIndex]}, ${hours}:${minutes}`;
}

function emojiDisplay(temp) {
	if (temp < 0) {
		return "😒";
	} else if (temp > 15) {
		return "😊";
	} else if (temp < 15) {
		return "🙂";
	} else if (temp > 20) {
		return "😀";
	} else if (temp > 25) {
		return "😄";
	} else {
		return "😏";
	}
}

function displayWeatherCondition(response) {
	// console.log(response);
	document.querySelector("#city").innerHTML = response.data.name;
	document.querySelector("#temperature").innerHTML =
		Math.round(response.data.main.temp) + "°C";

	document.querySelector(".mon > .temp").innerHTML =
		Math.round(response.data.main.temp) + "°C";

	document.querySelector(".mon > .emoji").innerHTML = emojiDisplay(
		Math.round(response.data.main.temp)
	);

	document.querySelector("#humidity").innerHTML = response.data.main.humidity;
	document.querySelector("#wind").innerHTML = Math.round(
		response.data.wind.speed
	);
	document.querySelector("#description").innerHTML =
		response.data.weather[0].main +
		"<img src='https://openweathermap.org/img/wn/" +
		response.data.weather[0].icon +
		"@2x.png'>";
}

function displayForecast(myData) {
	console.log(myData.data.list);
	// Example forecast data for one week
	const forecastData = myData.data.list;

	// Group forecast data by date
	const groupedData = forecastData.reduce((result, data) => {
		// Convert timestamp to a date string in YYYY-MM-DD format
		const dateStr = new Date(data.dt_txt).toISOString().slice(0, 10);

		// If date hasn't been added to result yet, add it with initial high/low values
		if (!result[dateStr]) {
			result[dateStr] = {
				high: data.main.temp_max,
				low: data.main.temp_min,
			};
		} else {
			// Otherwise, update high/low values if necessary
			if (data.main.temp_max > result[dateStr].high) {
				result[dateStr].high = data.main.temp_max;
			}
			if (data.main.temp_min < result[dateStr].low) {
				result[dateStr].low = data.main.temp_min;
			}
		}

		return result;
	}, {});

	console.log(groupedData);
	const firstDate = Object.keys(groupedData)[0];
	const firstData = groupedData[firstDate];
	const first = firstData.high;
	const firstLow = firstData.low;
	const tueTemp = document.querySelector(".tue > .temp");
	const tueEmoji = document.querySelector(".tue > .emoji");
	tueTemp.innerHTML =
		Math.round(first) + "°C" + "<br/>" + Math.round(firstLow) + "°C";
	tueEmoji.innerHTML = emojiDisplay(Math.round(first));

	const secondDate = Object.keys(groupedData)[1];
	const secondData = groupedData[secondDate];
	const second = secondData.high;
	const secondLow = secondData.low;
	const wedTemp = document.querySelector(".wed > .temp");
	const wedEmoji = document.querySelector(".wed > .emoji");
	wedTemp.innerHTML =
		Math.round(second) + "°C" + "<br/>" + Math.round(secondLow) + "°C";
	wedEmoji.innerHTML = emojiDisplay(Math.round(second));

	const thirdDate = Object.keys(groupedData)[2];
	const thirdData = groupedData[thirdDate];
	const third = thirdData.high;
	const thirdLow = thirdData.low;
	const thuTemp = document.querySelector(".thu > .temp");
	const thuEmoji = document.querySelector(".thu > .emoji");
	thuTemp.innerHTML =
		Math.round(third) + "°C" + "<br/>" + Math.round(thirdLow) + "°C";
	thuEmoji.innerHTML = emojiDisplay(Math.round(third));

	const fourthDate = Object.keys(groupedData)[3];
	const fourthData = groupedData[fourthDate];
	const fourth = fourthData.high;
	const fourthLow = fourthData.low;
	const friTemp = document.querySelector(".fri > .temp");
	const friEmoji = document.querySelector(".fri > .emoji");
	friTemp.innerHTML =
		Math.round(fourth) + "°C" + "<br/>" + Math.round(fourthLow) + "°C";
	friEmoji.innerHTML = emojiDisplay(Math.round(fourth));

	const fifthDate = Object.keys(groupedData)[4];
	const fifthData = groupedData[fifthDate];
	const fifth = fifthData.high;
	const fifthLow = fifthData.low;
	const satTemp = document.querySelector(".sat > .temp");
	const satEmoji = document.querySelector(".sat > .emoji");
	satTemp.innerHTML =
		Math.round(fifth) + "°C" + "<br/>" + Math.round(fifthLow) + "°C";
	satEmoji.innerHTML = emojiDisplay(Math.round(fifth));

	const sixthDate = Object.keys(groupedData)[5];
	const sixthData = groupedData[sixthDate];
	const sixth = sixthData.high;
	const sixthLow = sixthData.low;
	const sunTemp = document.querySelector(".sun > .temp");
	const sunEmoji = document.querySelector(".sun > .emoji");
	sunTemp.innerHTML =
		Math.round(sixth) + "°C" + "<br/>" + Math.round(sixthLow) + "°C";
	sunEmoji.innerHTML = emojiDisplay(Math.round(sixth));

	// console.log(groupedData);
}

function searchCity(city) {
	let apiKey = "4da81fbae0921c94a93d57a85fcd39ab";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
	event.preventDefault();
	let city = document.querySelector("#city-input").value;
	searchCity(city);
}
function searchLocation(position) {
	let apiKey = "4da81fbae0921c94a93d57a85fcd39ab";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	let apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(displayWeatherCondition);
	axios.get(apiForecast).then(displayForecast);
}

function getCurrentLocation(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(searchLocation);
}
function convertToFahrenheit(event) {
	event.preventDefault();
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
	event.preventDefault();
	let temperatureElement = document.querySelector("#temperature");
	temperatureElement.innerHTML = 19;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

navigator.geolocation.getCurrentPosition(searchLocation);
