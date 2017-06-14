import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

// Button that disables himself when clicked and displays a progression bar that fills up until it's ready to
// be clicked again

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

		const buttonStyle = (this.state.onCooldown ? styles.buttonStyleCooldown : styles.buttonStyle);	
		const { text } = this.props

		return (
			<div className="button_cooldown" onClick={this.buttonClicked} style={buttonStyle} >
				{text}
				<div className="cooldown" ref="cooldown" style={styles.cooldownStyle}></div>
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
