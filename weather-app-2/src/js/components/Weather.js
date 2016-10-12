import React from "react";

import Listener from "./Listener";

export default class Weather extends React.Component {
	constructor() {
		super();
		this.state = {
			weather: '',
			temp: 0,
			humidity: 0,
			wind: 0
		}
	}

	fetchData() {

		const Data = Listener.get(cities[currentCity]);
		console.log(Data);
		// citiesWeather is cache object, stores JSON reponses from API

		// Get the data from the cache if possible
		if( citiesWeather[currentCity] ) {
			this.updateData();
		
		} else {
			// Request new data to the API
			// call the get method in the Api module, pass the current city name
			// in the 'promise', make sure to update the cache object with data received
			// call the updateData method to set new value in states
			Listener.get(cities[currentCity])
            .then(function(data) {
                citiesWeather[currentCity] = data;
                this.updateData();
        	}.bind(this));
		}
	}

	render() {

		console.log('weather');
		console.log(this.props);

		// get weather icon (sun,cloud) id from Weather API, create classname
		var weatherClass = 'wi wi-owm-' + this.state.weather;
		
		// compose classname for the wrapper background colour
		var bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold

		// Set the background colour based on the temperature
		if(this.state.temp >= 30) {
			bgColorClass += 'very-warm';
		} else if(this.state.temp > 20 && this.state.temp < 30) {
			bgColorClass += 'warm';
		} else if(this.state.temp > 10 && this.state.temp < 20) {
			bgColorClass += 'normal';
		} else if(this.state.temp > 0 && this.state.temp < 10) {
			bgColorClass += 'cold';
		} else if(this.state.temp >= 0) {
			bgColorClass += 'very-cold';
		}

		var cities = 'London';

		return( 
			
			<div class={bgColorClass}>
				<h1 class="city">{cities}</h1>
				<div class="weather">
					<i class={weatherClass}></i>
				</div>
				<section class="weather-details">
					<div class="temp"><span class="temp-number">{this.state.temp}</span><span class="wi wi-degrees"></span></div>
	       			<div class="humidity"><i class="wi wi-raindrop"></i>{this.state.humidity} %</div>
	        		<div class="wind"><i class="wi wi-small-craft-advisory"></i>{this.state.wind} <span class="vel">Km/h</span></div>
				</section>
			</div>

		);
	}
}