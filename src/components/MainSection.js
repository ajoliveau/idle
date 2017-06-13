import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { launchRocket } from '../actions/rockets';
import { addResource, removeResource } from '../actions/inventory';
import ButtonCountdown from '../components/ButtonCountdown';
import ButtonResource from '../components/ButtonResource';

class MainSection extends Component {

	constructor ( props ) {
		super(props);
		this.launchClick = this.launchClick.bind(this);
		this.tapeClick = this.tapeClick.bind(this);
		this.cardboardClick = this.cardboardClick.bind(this);
		this.highlightResource = this.highlightResource.bind(this);
	}

	componentDidMount () {
		this.refs.img.style.visibility = "hidden";
	}

	render() {
		const { inventory, rockets } = this.props       
		const currentRocket = rockets.current;
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
					<div className="text">Goal : {currentRocket.name}</div>
					{
		                currentRocket.resources.map(function(resource)  {
		                    return <div key={resource.name}>{resource.name} : {inventory[resource.shortName]}/{resource.count}</div>
		                })
					}
					<br/><br/>
					<div className="text">Rockets launched : {rockets.totalLaunches} </div>
					<ButtonResource text="Launch !" highlight={this.highlightResource} inventory={inventory} rocket={currentRocket} onClick={this.launchClick} />
				</div>
				<div className="right" style={divRight}>					
					<img ref="img" src={currentRocket.image}></img>
				</div>
			</section>
		)
	}

	tapeClick () {
		this.props.dispatch(addResource('tape', 1));
	}	

	cardboardClick () {
		this.props.dispatch(addResource('cardboard', 1));
	}

	launchClick (resources) {
		for (const resource of resources) {
			this.props.dispatch(removeResource(resource.shortName, resource.count));
		}

		this.refs.img.style.visibility = "visible";

		this.props.dispatch(launchRocket());
	}	

	highlightResource (resource) {		
	}

}

MainSection.propTypes = {
	
}

const mapStateToProps = ( state, ownProps ) => {
	return {
		launches : state.launches
	};
};

MainSection = connect(mapStateToProps)(MainSection);

export default MainSection;