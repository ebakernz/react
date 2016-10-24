import React from "react"
import { connect } from "react-redux"

import { fetchCategories } from "../actions/categoriesActions"
import { fetchMarkets } from "../actions/marketsActions"
import { fetchProducts } from "../actions/productsActions"

@connect((store) => {
	// Whatever is retured gets mapped as props
	return {
		// get bits from the store
		markets: store.markets.markets,
		marketsFetched: store.markets.fetched,
		categories: store.categories.categories,
		categoriesFetched: store.categories.fetched,
		products: store.products.products,
		productsFetched: store.products.fetched
	}
})
export default class Admin extends React.Component {

	render() {
		return (
			<div class="content">
				<div class="inner cf">
					
					<h1>Admin</h1>

					

				</div>
			</div>
		)
	}

}