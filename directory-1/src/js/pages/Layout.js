import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default class Layout extends React.Component {

	render() {
		const { location } = this.props;
		
		return(
			<div class="wrapper">

				<Header location={location} />
				
				<div class="content">
			      <div class="inner cf">
			      
			        {this.props.children}

			      </div>
			    </div>

				<Footer />
			</div>
		);
	}
}