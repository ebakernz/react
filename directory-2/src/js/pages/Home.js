import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import { fetchMarkets } from "../actions/marketsActions"
import MarketGroup from "../components/MarketGroup"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

@connect((store) => {
	// Whatever is retured gets mapped as props
	return {
		// get bits from the store
		markets: store.markets.markets,
		marketsFetched: store.markets.fetched
	}
})
export default class Home extends React.Component {

	render() {

		return(
			<section class="group-panels cf">
				<MarketGroup />
			</section>
		);
	}
}