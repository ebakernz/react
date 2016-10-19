import React from "react";
import Icon from "./layout/Icon"
import { ICONS } from "./layout/constants"

export default class MarketGroupSimple extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return <p>
			<span class="black medium">
				<Icon icon={ICONS[this.props.iconName]} />
			</span>
			{this.props.title} <span>Market</span>
		</p>
	}
}

