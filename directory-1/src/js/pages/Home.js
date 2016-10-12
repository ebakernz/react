import React from "react";
import { Link } from "react-router";

import MarketGroup from "../components/MarketGroup";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default class Home extends React.Component {

	render() {

		return(
			<section class="group-panels cf">
				<MarketGroup />
			</section>
		);
	}
}