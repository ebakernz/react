import React from "react";

export default class MarketGroup extends React.Component {

	render() {

		const { market } = this.props;

		return(
			<a href={"marketplace/filter/" + market.urlTitle} class="float-left w1x2-spaced pos-$Pos">
				<span class="white large"><img src={market.icon} /></span>
				<h2 class="split-heading">{market.name} <span>Market</span></h2>
				<p>Click to see our partners for {market.name} benefits</p>
			</a>
		);
	}
}