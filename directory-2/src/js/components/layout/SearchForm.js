import React from "react"

export default class SearchForm extends React.Component {
  



  render() {

    return (
      	<input value={this.props.value.name} placeholder="Search" onChange={this.handleChange.bind(this)} />
    );
  }
}
