import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';

class RocketBuilder extends Component {

	constructor ( props ) {
		super(props);
		
		this.highlightResource = this.highlightResource.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.timeoutLaunch = null;
		this.timeoutRed = null;

		this.state = {
			missingResources : []
		};



		console.log(styles.payloadCurrent);
	}

}