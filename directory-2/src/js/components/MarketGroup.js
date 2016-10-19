import React from "react"
import Icon from "./layout/Icon"
import { ICONS } from "./layout/constants"

export default class MarketGroup extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return <a href={"marketplace/filter/" + this.props.urlTitle} class={"float-left w1x2-spaced " + this.props.color + "-bg"}>
			<span class="white large">
				<Icon icon={ICONS[this.props.iconName]} />
			</span>
			<h2 class="split-heading">{this.props.title} <span>Market</span></h2>
			<p>Click to see our partners for {this.props.title} benefits</p>
		</a>
	}
}