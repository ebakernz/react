import React from "react"

export default class FilterLink extends React.Component {
  render() {
    const { id, title, group, color, urlTitle } = this.props;
    let linkType = "market-group";

    console.log(group);
    if(group != null) {
    	linkType = group;
    }

    return (
      	<a class={"filter-link ajaxable " + linkType} data-id={id} data-group={group} href={"/marketplace/filter/" + group + "/" + urlTitle}>
			{title}
		</a>
    );
  }
}
