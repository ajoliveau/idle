import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLaunch } from '../actions';
import { addCardboard, addTape } from '../actions/inventory';
import ButtonCountdown from '../components/ButtonCountdown'

class MainSection extends Component {

	constructor ( props ) {
		super(props);
		this.launchClick = this.launchClick.bind(this);
		this.tapeClick = this.tapeClick.bind(this);
		this.cardboardClick = this.cardboardClick.bind(this);

		console.log(this.props);
	}


	render() {
		const { idle, inventory, rockets } = this.props       
		
		const divStyle = {
			width: "20%",
			height: "100px",
			float: "left",
			margin: "1%",
		}

		const divRight = {
			width: "40%",
			height: "100px",
			float: "left",
			margin: "1%",
		}

		return (
			<section className="main" >								
				<div className="resources" style={divStyle}>
					<div className="text">Cardboard : {inventory.cardboard} </div>
					<ButtonCountdown text="Rummage in bins" onClick={this.cardboardClick} cooldown={20}/>
					<div className="text">Tape : {inventory.tape} </div>
					<ButtonCountdown text="Go to the hardware store" onClick={this.tapeClick} cooldown={40}/>														
				</div>
				<div className="middle" style={divStyle}>
					<div className="text">Goal : {rockets.current.name}</div>
					
					<br/><br/>
					<div className="text">Rockets launched : {idle.launches} </div>
					<ButtonCountdown text="Launch !" onClick={this.launchClick} cooldown={50} />
				</div>
				<div className="right" style={divRight}>
					<div className="text">Placeholder </div>
				</div>
			</section>
		)
	}

	tapeClick () {
		this.props.dispatch(addTape(1));
	}

	launchClick () {
		this.props.dispatch(addLaunch());
	}

	cardboardClick () {
		this.props.dispatch(addCardboard(1));
	}

	static propTypes = {
		idle: PropTypes.object.isRequired
	}

}

const mapStateToProps = ( state, ownProps ) => {
	return {
		launches : state.launches
	};
};

MainSection = connect(mapStateToProps)(MainSection);

export default MainSection;