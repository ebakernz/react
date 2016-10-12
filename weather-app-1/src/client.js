import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// Handle cities from the query string
/*const query = ''; // Expects something like ?city=London,Paris,Berlin,Madrid
const cities = []; // Transform query string cities into array
const citiesWeather = []; // API cache
const currentCity = 0; // Index of current city displayed*/

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
/*
// Assign the React component to the DOM element
var element = React.createElement(Weather, {}); // create new element
ReactDOM.render(element, document.querySelector('.container')); // render inside container div*/

