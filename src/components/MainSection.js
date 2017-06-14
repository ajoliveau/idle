import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { launchRocket, nextRocket, previousRocket, nextPayload, previousPayload } from '../actions/rockets';
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
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.timeoutLaunch = null;
		this.timeoutRed = null;

		this.state = {
			missingResources : []
		};
	}

	componentDidMount () {
		this.refs.img.style.visibility = "hidden";
	}
	
	render() {
		const { inventory, rockets } = this.props       
		const currentRocket = rockets.current.rocket;
		const currentPayload = rockets.current.payload;
		console.log(currentRocket);
		const state = this.state;	

		const divStyle = {
			width: "18%",
			height: "100px",
			float: "left",
			margin: "1%",
		}

		const divRight = {
			width: "28%",
			height: "100px",
			float: "left",
			margin: "1%",
		}

		const divNextPrevious = {
			display: 'inline',
			cursor: 'pointer',
			userSelect: 'none',
		}

		const divResourceRed = {
			color: 'red',
		}

		const payloadCurrent = {
			marginLeft: "30px",
		}

		return (
			<section className="main" >								
				<div className="resources" style={divStyle}>
					<div className="text">Cardboard : {inventory.cardboard} </div>
					<ButtonCountdown text="Rummage in bins" onClick={this.cardboardClick} cooldown={20}/>
					<div className="text">Tape : {inventory.tape} </div>
					<ButtonCountdown text="Go to the hardware store" onClick={this.tapeClick} cooldown={40}/>														
				</div>
				<div className="middle" style={divRight}>					
					<h2>Rocket Builder</h2>
					<div className="payload">
						Payload :
						<div className="payloadCurrent" style={payloadCurrent}>
							<div className="text">{currentPayload.name}</div>						
							<div style={divNextPrevious} onClick={()=> this.previous("payload")}>⟵ Previous</div> <div style={divNextPrevious} onClick={()=> this.next("payload")}>Next ⟶</div>
						</div>
					</div>
					<div className="booster">
						Booster :
						<div className="boosterCurrent" style={payloadCurrent}>
							<div className="text">{currentRocket.name}</div>
							{
				                currentRocket.resources.map(function(resource)  {	
				                	
				                	const style = (state.missingResources.indexOf(resource) != -1) ? divResourceRed : {};
				                	
				                    return <div style={style} key={resource.name}>{resource.name} : {inventory[resource.shortName]}/{resource.count}</div>
				                })
							}
							<div style={divNextPrevious} onClick={() => this.previous("rocket")}>⟵ Previous</div> <div style={divNextPrevious} onClick={()=> this.next("rocket")}>Next ⟶</div>
						</div>
					</div>

				</div>
				<div className="right" style={divStyle}>					
					<div className="text">Rockets launched : {rockets.totalLaunches} </div>
					<ButtonResource text="Launch !" highlight={this.highlightResource} inventory={inventory} rocket={currentRocket} onClick={this.launchClick} />
				</div>				
				
				<div className="right" style={divRight}>					
					<img ref="img" src={currentRocket.image}></img>
				</div>
			</section>
		)
	}

	next (type) {
		if (type === "rocket")
			this.props.dispatch(nextRocket());
		else
			this.props.dispatch(nextPayload());
	}

	previous (type) {
		if (type === "rocket")
			this.props.dispatch(previousRocket());
		else
			this.props.dispatch(previousPayload());
	}

	tapeClick () {
		this.props.dispatch(addResource('tape', 1));
	}	

	cardboardClick () {
		this.props.dispatch(addResource('cardboard', 1));
	}

	launchClick (resources) {
		clearTimeout(this.timeoutLaunch);
		for (const resource of resources) {
			this.props.dispatch(removeResource(resource.shortName, resource.count));
		}
		const img = this.refs.img
		img.src = img.src;
		img.style.visibility = "visible";

		this.timeoutLaunch = setTimeout(function(){ 
			img.style.visibility = "hidden";
		}, this.props.rockets.current.rocket.imageDuration);


		this.props.dispatch(launchRocket());
	}	

	highlightResource (resources) {	
		const me = this;
		clearTimeout(this.timeoutRed);
		this.timeoutRed = setTimeout(function() {
			me.setState({
				missingResources: []
			});	
		}, 2000);
		this.setState({
			missingResources: resources
		});				
	}

}

MainSection.propTypes = {
	
}

const mapStateToProps = ( state, ownProps ) => {
	return {
	};
};

MainSection = connect(mapStateToProps)(MainSection);

export default MainSection;