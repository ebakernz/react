import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import { fetchMarkets } from "../actions/marketsActions"
import { fetchProducts } from "../actions/productsActions"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

@connect((store) => {
	// Whatever is retured gets mapped as props
	return {
		// get bits from the store
		markets: store.markets.markets,
		marketsFetched: store.markets.fetched,
		products: store.products.products,
		productsFetched: store.products.fetched
	}
})
export default class Layout extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchMarkets()),
		this.props.dispatch(fetchProducts())
	}

	fetchMarkets() {
		this.props.dispatch(fetchMarkets())
	}

	fetchProducts() {
		this.props.dispatch(fetchProducts())
	}

	render() {
		const { location, products } = this.props;
		
		return(
			<div class="wrapper">

				<Header location={location} />
				
				<div class="content">
			      <div class="inner cf">

			      

			      </div>
			    </div>

				<Footer />
			</div>
		);
	}
}