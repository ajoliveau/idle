import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonCountdown extends Component {	

	constructor ( props ) {
        super(props);
        this.state = {
        	onCooldown: false

        };        

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    componentWillMount () {
    	this.cooldownTime = this.props.cooldown;
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

		if (this.state.onCooldown) {
			buttonStyle.cursor = 'default';
			buttonStyle.borderColor = '#b2b2b2';
			buttonStyle.color = '#b2b2b2';			
		}		

		const cooldownStyle = {
			'position': 'absolute',
			'top': '0px',
			'left': '0px',
			'zIndex': '-1',
			'height': '100%',
			'backgroundColor': '#DDDDDD',
		};



		const { text } = this.props

		return (
			<div className="button_cooldown" onClick={this.buttonClicked} style={buttonStyle} >
				{text}
				<div className="cooldown" ref="cooldown" style={cooldownStyle}></div>
			</div>
		)
	}

	buttonClicked () {
		if (this.state.onCooldown)
			return;
		this.setState({
		    onCooldown: true
		});



		// Send click action
		this.props.onClick();

		// Launch cooldown animation		
		const elem = this.refs.cooldown;
	    let width = 1;	   	    
	    
	    const id = setInterval(function() {
	    	if (width >= 100) {
	    		elem.style.width = '0%';
	    		this.setState({
	    		    onCooldown: false
	    		});
	    		clearInterval(id);
	    		console.log("end");
	    	} else {
	    	    width++;
	    	    elem.style.width = width + '%';
	    	}
	    }.bind(this), this.cooldownTime);	    	    
	}
}



ButtonCountdown.propTypes = {
	onClick: PropTypes.func.isRequired,
	cooldown: PropTypes.number
};

export default ButtonCountdown;
