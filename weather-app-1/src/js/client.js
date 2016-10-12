import React from "react";
import ReactDOM from "react-dom";

import classNames from "classnames";  // 3rd party, build class names with dynamic data

import Api from "./utils/api";	// will fetch data from weather api


// Handle cities from the query string
const query = ''; // Expects something like ?city=London,Paris,Berlin,Madrid
const cities = []; // Transform query string cities into array
const citiesWeather = []; // API cache
const currentCity = 0; // Index of current city displayed

const app = document.getElementById('app');

ReactDOM.render(<Layout/>,app);
/*
// Assign the React component to the DOM element
var element = React.createElement(Weather, {}); // create new element
ReactDOM.render(element, document.querySelector('.container')); // render inside container div*/

