import React from "react";

export default class MarketGroup extends React.Component {

	render() {
		return(
			<a href={"marketplace/filter/" + this.props.urlTitle} class="float-left w1x2-spaced pos-$Pos">
				<span class="white large"><img src={this.props.icon} /></span>
				<h2 class="split-heading">{this.props.name} <span>Market</span></h2>
				<p>Click to see our partners for {this.props.name} benefits</p>
			</a>
		);
	}
}

MarketGroup.defaultProps = {
	name: 'Club',
	icon: 'icons/clubs-icon.svg',
	urlTitle: 'club'
}