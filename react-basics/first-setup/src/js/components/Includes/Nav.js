import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const navClass = collapsed ? "" : "active";

		return(
			<div class="nav-panel">
				<nav class="mainnav">
					<ul class="main">		
						<li class="toplvl pos-1" activeClassName="active">
							<IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
						</li>
						<li class="toplvl pos-3" activeClassName="active">
							<Link to="marketplace">Marketplace</Link>
						</li>
					</ul>
				</nav>
				<div id="mob-icon" onClick={this.toggleCollapse.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		);
	}
}