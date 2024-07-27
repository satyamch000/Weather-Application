const options = {
	method: 'GET',
	headers: {
	'content-type': 'application/octet-stream',
	'X-RapidAPI-Key': 'b6acc586e5mshe141bc0e7629882p1c39c4jsncce79955183e',
	'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
	};
	
	const getWeather = (city)=>{
	
		cityName.innerHTML = city
	fetch('https://weather-api99.p.rapidapi.com/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => { 
	
		
		
		console.log(response)

		temp.innerHTML = (response.main.temp - 273.15).toFixed(2)
		temp2.innerHTML = (response.main.temp - 273.15).toFixed(2)
		feels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
		humidity.innerHTML = response.main.humidity
		humidity2.innerHTML = response.main.humidity
		min_temp.innerHTML = (response.main.temp_min- 273.15).toFixed(2)
		max_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
		wind_speed.innerHTML = response.wind.speed
		wind_speed2.innerHTML = response.wind.speed
		wind_degrees.innerHTML = response.wind.deg
		sunrise.innerHTML = response.sys.sunrise
		sunset.innerHTML = response.sys.sunset
	
	})
	.catch(err => console.error(err));
	}
	
	submit.addEventListener("click", (e)=>{
		e.preventDefault()
	   getWeather(city.value)
	})
	
	getWeather("Delhi")
	
	fetch('https://weather-api99.p.rapidapi.com/weather?city=Kolkata', options)
			.then(response => response.json())
			.then(response => {
	
				htemp.innerHTML = (response.main.temp - 273.15).toFixed(2)
				hfeels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
				hhumidity.innerHTML = response.main.humidity
				hmin_temp.innerHTML =  (response.main.temp_min- 273.15).toFixed(2)
				hmax_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
				hwind_speed.innerHTML = response.wind.speed
				hwind_degrees.innerHTML = response.wind.deg
				console.log(response)
			})
			.catch(err => console.error(err))
	
	
	
	fetch('https://weather-api99.p.rapidapi.com/weather?city=Kerala', options)
			.then(response => response.json())
			.then(response => {
	
				ktemp.innerHTML = (response.main.temp - 273.15).toFixed(2)
				kfeels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
				khumidity.innerHTML = response.main.humidity
				kmin_temp.innerHTML =  (response.main.temp_min- 273.15).toFixed(2)
				kmax_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
				kwind_speed.innerHTML = response.wind.speed
				kwind_degrees.innerHTML = response.wind.deg
				console.log(response)
			})
			.catch(err => console.error(err))
	
	
	
	fetch('https://weather-api99.p.rapidapi.com/weather?city=Jaipur', options)
			.then(response => response.json())
			.then(response => {
	
				jtemp.innerHTML = (response.main.temp - 273.15).toFixed(2)
				jfeels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
				jhumidity.innerHTML = response.main.humidity
				jmin_temp.innerHTML =  (response.main.temp_min- 273.15).toFixed(2)
				jmax_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
				jwind_speed.innerHTML = response.wind.speed
				jwind_degrees.innerHTML = response.wind.deg
				console.log(response)
			})
			.catch(err => console.error(err))
	
	
	
	fetch('https://weather-api99.p.rapidapi.com/weather?city=Bokaro', options)
			.then(response => response.json())
			.then(response => {
	
				btemp.innerHTML = (response.main.temp - 273.15).toFixed(2)
				bfeels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
				bhumidity.innerHTML = response.main.humidity
				bmin_temp.innerHTML =  (response.main.temp_min- 273.15).toFixed(2)
				bmax_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
				bwind_speed.innerHTML = response.wind.speed
				bwind_degrees.innerHTML = response.wind.deg
				console.log(response)
			})
			.catch(err => console.error(err))
	
	
	
	fetch('https://weather-api99.p.rapidapi.com/weather?city=Pune', options)
			.then(response => response.json())
			.then(response => {
	
				ptemp.innerHTML = (response.main.temp - 273.15).toFixed(2)
				pfeels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2)
				phumidity.innerHTML = response.main.humidity
				pmin_temp.innerHTML =  (response.main.temp_min- 273.15).toFixed(2)
				pmax_temp.innerHTML = (response.main.temp_max- 273.15).toFixed(2)
				pwind_speed.innerHTML = response.wind.speed
				pwind_degrees.innerHTML = response.wind.deg
				console.log(response)
			})
			.catch(err => console.error(err))
