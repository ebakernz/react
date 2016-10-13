import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import MarketGroup from "../components/MarketGroup"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

export default class Home extends React.Component {

	render() {

		console.log(this.props);
		const { markets } = this.props;

		const MarketComponents = markets.map((market) => {
			return <MarketGroup key={market.id} {...market} />;
		});

		return(
			<section class="group-panels cf">
				<MarketGroup />
			</section>
		);
	}
}