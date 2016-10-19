import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import { fetchMarkets } from "../actions/marketsActions"
import MarketGroup from "../components/MarketGroup"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Tagline from "../components/layout/Tagline"

@connect((store) => {
	// Whatever is retured gets mapped as props
	return {
		// get bits from the store
		markets: store.markets.markets,
		marketsFetched: store.markets.fetched
	}
})
export default class Home extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchMarkets())
	}

	fetchMarkets() {
		this.props.dispatch(fetchMarkets())
	}



	render() {

		const bannerImage = {
			backgroundImage: "url(images/home-banner.jpg)",
			height: "350px"
		}

		const colouring = 'HomePage';

		// console.log(this.props);
		const { markets } = this.props;

		const MarketComponents = markets.map((market) => {
			return <MarketGroup key={market.id} {...market} />;
		});

		return(
			<div>

				<div class="banner" style={bannerImage}>
         			Search form
       			</div>

       			<Tagline colouring={colouring} />

       			<div class="content">
       				<div class="inner">

						<section class="group-panels cf">
							{MarketComponents}
						</section>

					</div>
				</div>

			</div>
		);
	}
}