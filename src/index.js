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
	return `${days[dayIndex]} ${hours}:${minutes}`;
}

function search(event) {
	event.preventDefault();
	let cityElement = document.querySelector("#city");
	let cityInput = document.querySelector("#city-input");
	cityElement.innerHTML = cityInput.value;
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
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

// dateElement.innerHTML = formatDate(currentTime);
// dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;

// put in to function called formatDate
/// if (hours < 10) {
// 	hours = `0${hours}`;
// }
// let minutes = currentTime.getMinutes();
// if (minutes < 10) {
// 	minutes = `0${minutes}`;
// }
// let dayIndex = currentTime.getDay();
// let days = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday",
// ];
// dateElement.innerHTML = formatDate(currentTime);
// dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;
// console.log(days[dayIndex]);
// console.log(dateElement);
// console.log(hours, minutes);

// challenge
// let weather = {
// 	paris: {
// 		temp: 19.7,
// 		humidity: 80,
// 	},
// 	tokyo: {
// 		temp: 17.3,
// 		humidity: 50,
// 	},
// 	lisbon: {
// 		temp: 30.2,
// 		humidity: 20,
// 	},
// 	"san francisco": {
// 		temp: 20.9,
// 		humidity: 100,
// 	},
// 	moscow: {
// 		temp: -5,
// 		humidity: 20,
// 	},
// };

// addEventListener("submit", mySearch);
// function mySearch(event) {
// 	event.preventDefault();
// 	let city = document.querySelector("input").value;
// 	document.querySelector("#city-name-big").innerText = city;

// 	if (weather[city] !== undefined) {
// 		let temperature = weather[city].temp;
// 		let humidity = weather[city].humidity;
// 		let celsiusTemperature = Math.round(temperature);
// 		let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

// alert(
// 	`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
// );
// 	} else {
// 		console.log("Sorry baby");
// 	}
// }
// myDateFunction();
// function myDateFunction() {
// 	let h5 = document.querySelector("#date-time");

// 	let now = new Date();

// 	let date = now.getDate();
// 	let hours = now.getHours();
// 	let minutes = now.getMinutes();
// 	let year = now.getFullYear();

// 	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// 	let day = days[now.getDay()];

// 	let months = [
// 		"Jan",
// 		"Feb",
// 		"March",
// 		"Apr",
// 		"May",
// 		"Jun",
// 		"Jul",
// 		"Aug",
// 		"Sep",
// 		"Oct",
// 		"Nov",
// 		"Dec",
// 	];
// 	let month = months[now.getMonth()];
// 	h5.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;
// }

// let button1 = document.querySelector("#clickMe1");
// let button2 = document.querySelector("#clickMe2");

// addEventListener("click", clickMeBaby);
// function clickMeBaby(event) {
// 	console.log("You clicked on", event.target.outerText);
// }

// let city = "";
// city.toLowerCase();

// let myCity = prompt("Enter a city");
// cities = [
// 	{
// 		temp: 19.7,
// 		humidity: 80,
// 		city: "paris",
// 	},
// 	{
// 		temp: 17.3,
// 		humidity: 50,
// 		city: "tokyo",
// 	},
// 	{
// 		temp: 30.2,
// 		humidity: 20,
// 		city: "lisbon",
// 	},
// 	{
// 		temp: 20.9,
// 		humidity: 100,
// 		city: "san francisco",
// 	},
// 	{
// 		temp: -5,
// 		humidity: 20,
// 		city: "oslo",
// 	},
// ];

// if (myCity === "paris") {
// 	alert(
// 		"It is currently " +
// 			Math.round(cities[0].temp) +
// 			" F in " +
// 			cities[0].city +
// 			" with a humidity of " +
// 			cities[0].humidity +
// 			"%."
// 	);
// } else if (myCity === "tokyo") {
// 	alert(
// 		"It is currently " +
// 			Math.round(cities[1].temp) +
// 			" F in " +
// 			cities[1].city +
// 			" with a humidity of " +
// 			cities[1].humidity +
// 			"%."
// 	);
// } else if (myCity === "lisbon") {
// 	alert(
// 		"It is currently " +
// 			Math.round(cities[2].temp) +
// 			" F in " +
// 			cities[2].city +
// 			" with a humidity of " +
// 			cities[2].humidity +
// 			"%."
// 	);
// } else if (myCity === "san francisco") {
// 	alert(
// 		"It is currently " +
// 			Math.round(cities[3].temp) +
// 			" F in " +
// 			cities[3].city +
// 			" with a humidity of " +
// 			cities[3].humidity +
// 			"%."
// 	);
// } else if (myCity === "oslo") {
// 	alert(
// 		"It is currently " +
// 			Math.round(cities[4].temp) +
// 			" F in " +
// 			cities[4].city +
// 			" with a humidity of " +
// 			cities[4].humidity +
// 			"%."
// 	);
// } else {
// 	alert(
// 		"Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney."
// 	);
// }

// // console.clear();
// // let city = prompt("Enter a city");
// let myCity = 'paris';
// let cities = {
// 	paris: {
// 		temp: 19.7,
// 		humidity: 80
// 	},
// 	tokyo: {
// 		temp: 17.3,
// 		humidity: 50
// 	}
// };

// // Array: ['hi', 'baby']

// let myString = "Lkhamaa"
// let gender = "female"
// let age = 25

// let myArray = [myString, gender, age];
// console.log(myArray);

// // let myObject = {
// //   lkhamaa: {
// //     gender: gender,
// //     nas: age
// //   },
// //   buya : {
// //     gender: 'male',
// //     nas: '37'
// //   }
// // }

// // console.log(myObject);

// // // // Include the JavaScript file provided in your project, when loading your project, ask the user "Enter a city" (example: Paris), alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"

// // // If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable.

// // // Add this behavior to your project and submit the CodeSandbox URL

// // // Note: Please round the values in the Alert to the nearest whole number (no decimal points, e.g. 5.45 should be rounded to 5).

// // Functions

// // Challenge
// // 1. Create a function isWindy
// // 2. Add a speed parameter to the function
// // 3. If speed is greater than 5, alert ‘It is windy’
// // 4. Else, alert ‘It is not windy’
// // 5. Call the function twice with different arguments to test both scenarios
// // function isWindy(speed) {
// //   if (speed > 5) {
// //     alert(`It is windy`);
// //   } else {
// //     alert(`It is not windy`);
// //   }
// // }
// // let currentWind = 7;
// // let recentWind = 4;
// // isWindy(currentWind);
// // isWindy(recentWind);

// // Return JS
// // function isWindy(speed, unit) {
// //   if (speed > 5 && unit === "metric") {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // if (isWindy(2, "imperial")) {
// //   alert("It is windy");
// // } else {
// //   alert("It is not windy");
// // }

// // JS Date
// // <script>
//   let now = new Date();

//   let h2 = document.querySelector("h2");

//   let date = now.getDate();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let year = now.getFullYear();

//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   let day = days[now.getDay()];

//   let months = [
//     "Jan",
//     "Feb",
//     "March",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
//   ];
//   let month = months[now.getMonth()];

//   h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;
//     </script>

// let currentTime = new Date();

// Challenge 1
// console.log(currentTime);

// // Challenge 2
// console.log(currentTime.getMilliseconds());

// // Challenge 3
// console.log(currentTime.getDay());

// // Challenge 4
// console.log(currentTime.getFullYear());

// // Challenge 5
// console.log(currentTime.getMonth());

// // Challenge 6

// // Challenge 7
//

// JS Selectors
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Functions</title>
//   </head>
//   <body>
//     <h1>JS Events and Selectors</h1>
//     <button id="weather-button">
//       Show Weather
//     </button>

//     <script>
//       function handleClick() {
//         alert("It is 15 degrees");
//       }

//       let showWeatherButton = document.querySelector("#weather-button");
//       showWeatherButton.addEventListener("click", handleClick);
//     </script>
//   </body>
// </html>

// JS Selector
// // Challenge 1
// Log li with id special
// let specialCountry = document.querySelector("li#special");
// console.log(specialCountry)

// // Challenge 2
// // Log all li with class of country
// let countries = document.querySelectorAll("li.country");
// console.log(countries);

// // Challenge 3
// // Add class special to the li with id special
// specialCountry.classList.add('special');

// // Challenge 4
// // In your code, replace the content of the element with id special
// // by your favorite country (other than Portugal of course)
// specialCountry.innerHTML = "Thailand 🇹🇭";
