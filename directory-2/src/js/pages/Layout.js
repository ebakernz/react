import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import { fetchProducts } from "../actions/productsActions"

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

@connect((store) => {
	// Whatever is retured gets mapped as props
	return {
		// get bits from the store
		products: store.products.products,
		productsFetched: store.products.fetched
	}
})
export default class Layout extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchProducts())
	}

	fetchProducts() {
		this.props.dispatch(fetchProducts())
	}

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