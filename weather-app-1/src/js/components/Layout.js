import React from "react";

import Footer from "./Footer";
import Header from "./Header";

//import Api from "../utils/api";	// will fetch data from weather api

export default class Layout extends React.Component {
	
	// Init data for UI
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
		// citiesWeather is cache object, stores JSON reponses from API

		// Get the data from the cache if possible
		if( citiesWeather[currentCity] ) {
			this.updateData();
		
		} else {
			// Request new data to the API
			// call the get method in the Api module, pass the current city name
			// in the 'promise', make sure to update the cache object with data received
			// call the updateData method to set new value in states
			Api.get(cities[currentCity])
            .then(function(data) {
                citiesWeather[currentCity] = data;
                this.updateData();
        	}.bind(this));
		}
	}

	updateData() {

		// Update the data for the UI
		this.setState({
			weather: citiesWeather[currentCity].weather[0].id,
			temp: Math.round(citiesWeather[currentCity].main.temp - 273.15), // Kelvin to Celcius
			humidity: Math.round(citiesWeather[currentCity].main.humidity),
			wind: Math.round(citiesWeather[currentCity].wind.speed)
		})

	}

	componentWillMount() {

		// get the query string data
		query = location.search.split('=')[1];

		// Figure out if we need to display more than one city's weather
		if(query !== undefined) {
			cities = query.split(','); // get an array of city names

			// Set the interval to load new cities
			if(cities.length > 1) {
				setInterval((function() {
					currentCity++;
					if( currentCity === cities.length ) {
						currentCity = 0;
					}
					this.fetchData(); // Reload the city every 5 seconds
				}).bind(this), 5000);
			}

		} else {

			cities[0] = 'London'; // set London as the default city

		}

		// create a timer to clear the cache after 5 minutes, so we can get updated data from the API
		setInterval( function() {
			citiesWeather = []; // empty the cache
		}, (1000*60*5));

		this.fetchData();

	}

	render() {

		// get weather icon (sun,cloud) id from Weather API, create classname
		const weatherClass = classNames('wi wi-owm-' + this.state.weather);

		// compose classname for the wrapper background colour
		const bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold

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

		// Render the DOM elements
		return (
			<div className={bgColorClass}>
				<h1 className="city">{cities[currentCity]}</h1>
				<div className="weather">
					<i className={weatherClass}></i>
				</div>
				<section className="weather-details">
					<div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
	       			<div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity} %</div>
	        		<div className="wind"><i className="wi wi-small-craft-advisory"></i>{this.state.wind} <span className="vel">Km/h</span></div>
				</section>
			</div>		
		);
	}


}
