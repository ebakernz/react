import React from "react"
import { connect } from "react-redux"

import { fetchCategories } from "../actions/categoriesActions"
import { fetchMarkets } from "../actions/marketsActions"
import { fetchProducts } from "../actions/productsActions"

import FilterLink from "../components/layout/FilterLink"
import Product from "../components/Product"
import MarketGroupSimple from "../components/MarketGroupSimple"
import Tagline from "../components/layout/Tagline"

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
export default class Marketplace extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchMarkets()),
		this.props.dispatch(fetchCategories()),
		this.props.dispatch(fetchProducts())
	}

	fetchMarkets() {
		this.props.dispatch(fetchMarkets())
	}

	fetchCategories() {
		this.props.dispatch(fetchCategories())
	}

	fetchProducts() {
		this.props.dispatch(fetchProducts())
	}

	render() {

		const colouring = "MarketPlace";

		console.log(this.props);
		const { categories, markets, products } = this.props;

		const MarketComponents = markets.map((market) => {
			return <MarketGroupSimple key={market.id} {...market} />;
		});

		const MarketFilterLinks = markets.map((market) => {
			return <FilterLink key={market.id} {...market} />;
		})

		const CategoryFilterLinks = categories.map((category) => {
			return <FilterLink key={category.id} {...category} />;
		})

		const ProductComponents = products.map((product) => {
			return <Product key={product.id} {...product} />;
		});

		return(
			<div>
				<div class="search-parameters white-bg">
					<div class="inner">

						<section class="filters">
							<h4>FILTER</h4>
							{MarketFilterLinks}
							{CategoryFilterLinks}
						</section>

				     </div>
				</div>
				
				<Tagline colouring={colouring} />

				<div class="content">
					<div class="inner cf">

						<div class="keys cf">
					      <p class="search-terms<% if SearchFormKeywords %> show<% else %> hide<% end_if %>">
					        <span>SEARCH ></span>
					        <span class="group">Keyword </span>
					        <span class="category">&gt; SearchFormKeywords</span>
					      </p>
					      <div class="cf">
					      	{MarketComponents}		      
					      </div>
					    </div>

						<div class="products">
				        	{ProductComponents}
				     	 </div>

					</div>
				</div>

			</div>
		);
	}
}