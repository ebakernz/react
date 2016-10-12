import React from "react";

import Product from "../components/Product";
import * as ProductActions from "../actions/ProductActions";
import ProductStore from "../stores/ProductStore";
import MarketGroup from "../components/MarketGroup";

// PRODUCTS
export default class Marketplace extends React.Component {

	constructor() {
		super();
		this.getProducts = this.getProducts.bind(this);
		this.state = {
			products: ProductStore.getAll()
		}
	}

	componentWillMount() {
		ProductStore.on("change", this.getProducts);
	}

	componentWillUnmount() {
		ProductStore.removeListener("change", this.getProducts);
	}

	getProducts() {
		this.setState({
			products: ProductStore.getAll()
		});
	}

	reloadProducts() {
		ProductActions.reloadProducts();
	}

	render() {
		const { products } = this.state;

		const ProductComponents = products.map((product) => {
			return <Product key={product.id} {...product} />;
		});

		return(
			<div>
				
				<div class="keys cf">
			      <p class="search-terms<% if SearchFormKeywords %> show<% else %> hide<% end_if %>">
			        <span>SEARCH ></span>
			        <span class="group">Keyword </span>
			        <span class="category">&gt; SearchFormKeywords</span>
			      </p>
			      <div class="cf">
			      	<MarketGroup />
			      	<p><span class="black medium"></span>Market Benefit</p>
			      	<p><span class="black medium"></span>Club Benefit</p>			      
			      </div>
			    </div>

			    <button onClick={this.reloadProducts.bind(this)}>Reload</button>

				<div class="products">
		        	{ProductComponents}
		     	 </div>
			</div>
		);
	}
}