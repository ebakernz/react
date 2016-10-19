import React from "react"
const {PropTypes} = React;

const Icon = props => {

	return (
		<span class="icon svg">
			<svg width="260" height="260" viewBox="0 0 260 260">
				<path class="path"
					d={props.icon}
				></path>
			</svg>
		</span>
	);
};

Icon.PropTypes = {
	icon: PropTypes.string.isRequired
};

/*Icon.defaultProps = {
	size: 100
};*/

export default Icon;