import React from "react";
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  // on click of the responsive nav button, toggle the collapse state of the panel
  toggleResponsiveNav() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {

    const { location } = this.props;
    const { collapsed } = this.state;
  //  const homeClass = location.pathname === "/" ? "current" : "";
  //  const marketplaceClass = location.pathname.match(/^\/marketplace/) ? "current" : "non";
    const navActive = collapsed ? "" : "active";

    return (
      <header>
        <div class="inner cf">
          <h1><IndexLink to="/"><img src="images/marketplace-logo.png" /></IndexLink></h1>

          <div class={"nav-panel " + navActive}>
            <nav class="mainnav">
              <ul class="main">
                  <li>
                    <IndexLink to="/" onClick={this.toggleResponsiveNav.bind(this)}>Home</IndexLink>
                  </li>
                  <li>
                    <Link to="marketplace" onClick={this.toggleResponsiveNav.bind(this)}>MarketPlace</Link>
                  </li>
              </ul>
            </nav>
          </div>

          <div id="mob-icon" onClick={this.toggleResponsiveNav.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </header>
    );
  }
}