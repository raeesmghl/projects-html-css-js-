// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=islamabad';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '865c3d7044mshd38bca80f84fc92p108d3djsnebbce917b098',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function func() {
//     try {
//     	const response = await fetch(url, options);
//     	const result = await response.text();
//     	console.log(result);
//     } catch (error) {
//     	console.error(error);
//     }
// }
// func()








function getWeather() {
	var location = document.getElementById("location");

	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + location.value;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '865c3d7044mshd38bca80f84fc92p108d3djsnebbce917b098',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	async function func() {
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			var output = document.getElementById("output");
			var date = new Date();
			output.innerHTML = `
			<p>Date: ${date.toDateString()}</p>
			<p>Day: ${date.toLocaleString('en-us', { weekday: 'long' })}</p>
			<p>Time: ${date.toLocaleTimeString()}</p>
			<p>Temperature: ${data.temp} °C</p>
			<p>Humidity: ${data.humidity} %</p>
			<p>Wind Speed: ${data.wind_speed} m/s</p>
		`;
			console.log(data)
		} catch (error) {
			console.error(error);
		}
	}
	func()


}
