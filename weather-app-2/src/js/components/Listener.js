import React from "react";
//import Fetch from "whatwg-fetch";

// Compose the final url by concatinating the variables plus the city's name which recieve as a parameter
// pass into the fetch method
// then we have a 'promise' that will receive the response from the API
// return it in JSON format

export default class Listener extends React.Component {
	constructor() {
		super();
		this.state = { items: [] };
	}

	componentDidMount() {
		var rootURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
		var apiURL = '&appid=f9b6b8d8680e6b24999da6bb88dfa21e';

		fetch(rootURL + place + apiURL)
			.then(result=>{
				this.setState({items:result.json()});
			})
	}

	render() {
		console.log(this.props);
		return(
			<div>
				<div>Items:</div>
				    { this.state.items.map(item=> { return <div>{http:\/\/item.name}</div>}) }         
            </div>  
		);
	}
	
}