import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	render() {
		return(
			<div class="wrapper">
				<Header />
				<h1>Content</h1>
				<Footer />
			</div>
		);
	}
}