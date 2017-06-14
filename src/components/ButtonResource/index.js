import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

// Button that consumes resources when clicked
// TODO : Add modal window or highlight missing resources on click if not enough ?

class ButtonResource extends Component {	

	constructor ( props ) {
        super(props);
        
        this.buttonClicked = this.buttonClicked.bind(this);
    }

	render() {

		const { text } = this.props

		return (
			<div className="button_resource" onClick={this.buttonClicked} style={styles.buttonStyle} >
				{text}				
			</div>
		)
	}

	buttonClicked () {
		const { inventory, rocket } = this.props;
		const resourcesNeeded = rocket.resources;
		
		let canClick = true;
		let missingResources = [];

		for (const resource of resourcesNeeded) {
			if (inventory[resource.shortName] < resource.count) {
				canClick = false;
				missingResources.push(resource);
			}
		}

		if (canClick)
			this.props.onClick(resourcesNeeded);
		else
			this.props.highlight(missingResources);
	}
}



ButtonResource.propTypes = {
	text: PropTypes.string.isRequired,
	inventory: PropTypes.object.isRequired,
	rocket: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	highlight: PropTypes.func.isRequired,
};

export default ButtonResource;
