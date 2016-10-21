import React from "react";

import Nav from "./Includes/Nav";

export default class Header extends React.Component {
	render() {
		return(
			<header>
				<div class="inner cf">
					<h1><a href="/">Member Market Pl</a></h1>
					<Nav />
				</div>
			</header>
		);
	}
}