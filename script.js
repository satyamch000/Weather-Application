// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b6acc586e5mshe141bc0e7629882p1c39c4jsncce79955183e',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// fetchData();


// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;


const options = {
method: 'GET',
headers: {
'content-type': 'application/octet-stream',
'X-RapidAPI-Key': 'b6acc586e5mshe141bc0e7629882p1c39c4jsncce79955183e',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

const getWeather = (city)=>{

    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then(response => { 

    
    
    console.log(response)
   
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
   getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
		.then(response => response.json())
		.then(response => {

			htemp.innerHTML = response.temp
			hfeels_like.innerHTML = response.feels_like
			hhumidity.innerHTML = response.humidity
			hmin_temp.innerHTML = response.min_temp
			hmax_temp.innerHTML = response.max_temp
			hwind_speed.innerHTML = response.wind_speed
			hwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kerala', options)
		.then(response => response.json())
		.then(response => {

			ktemp.innerHTML = response.temp
			kfeels_like.innerHTML = response.feels_like
			khumidity.innerHTML = response.humidity
			kmin_temp.innerHTML = response.min_temp
			kmax_temp.innerHTML = response.max_temp
			kwind_speed.innerHTML = response.wind_speed
			kwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
		.then(response => response.json())
		.then(response => {

			jtemp.innerHTML = response.temp
			jfeels_like.innerHTML = response.feels_like
			jhumidity.innerHTML = response.humidity
			jmin_temp.innerHTML = response.min_temp
			jmax_temp.innerHTML = response.max_temp
			jwind_speed.innerHTML = response.wind_speed
			jwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bokaro', options)
		.then(response => response.json())
		.then(response => {

			btemp.innerHTML = response.temp
			bfeels_like.innerHTML = response.feels_like
			bhumidity.innerHTML = response.humidity
			bmin_temp.innerHTML = response.min_temp
			bmax_temp.innerHTML = response.max_temp
			bwind_speed.innerHTML = response.wind_speed
			bwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
		.then(response => response.json())
		.then(response => {

			ptemp.innerHTML = response.temp
			pfeels_like.innerHTML = response.feels_like
			phumidity.innerHTML = response.humidity
			pmin_temp.innerHTML = response.min_temp
			pmax_temp.innerHTML = response.max_temp
			pwind_speed.innerHTML = response.wind_speed
			pwind_degrees.innerHTML = response.wind_degrees
			console.log(response)
		})
		.catch(err => console.error(err))