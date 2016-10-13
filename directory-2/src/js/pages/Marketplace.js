import React from "react"
import { connect } from "react-redux"

import Product from "../components/Product"
import MarketGroup from "../components/MarketGroup"

export default class Marketplace extends React.Component {

	render() {

		console.log(this.props);
		const { products } = this.props;

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

				<div class="products">
		        	{ProductComponents}
		     	 </div>
			</div>
		);
	}
}