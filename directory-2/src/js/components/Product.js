import React from "react";

export default class Product extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return(
			<div class={"product popup-trigger " + this.props.colour}>
				<div class="category-band cf">			     
		        	<h4>{this.props.category}</h4>
		     	</div>
		     	<span class="bgimg"><img src={this.props.logo} width="270" /></span>
				<h3>{this.props.title}</h3>
			</div>
		);
	}
}