import React from "react"

export default class Tagline extends React.Component {
  render() {

    const { colouring } = this.props;

    return (
      	<div class={"tagline " + colouring}>
          <h2>Products &amp; services for your club and your members</h2>
        </div>
    );
  }
}
