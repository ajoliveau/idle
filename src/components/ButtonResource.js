import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Button that consumes resources when clicked
// TODO : Add modal window or highlight missing resources on click if not enough ?

class ButtonResource extends Component {	

	constructor ( props ) {
        super(props);
        
        this.buttonClicked = this.buttonClicked.bind(this);
    }

	render() {

		const buttonStyle = {
			position: 'relative',
			"textAlign": 'center',
			border: '1px solid black',			
			height: '15px',
			"marginBottom": '20px',
			"marginTop": '5px',
			padding: '5px 10px',
			cursor: 'pointer',
			userSelect: 'none',
			display: 'inline-block'
		};

		const { text } = this.props

		return (
			<div className="button_resource" onClick={this.buttonClicked} style={buttonStyle} >
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
	highlight: PropTypes.func,
};

export default ButtonResource;
