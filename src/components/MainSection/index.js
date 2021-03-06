import React, { Component } from 'react'
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { launchRocket, nextRocket, previousRocket, nextPayload, previousPayload } from '../../actions/rockets';
import { nextMission, previousMission, nextTarget, previousTarget } from '../../actions/missions';
import { addResource, removeResource } from '../../actions/inventory';
import ButtonCountdown from '../ButtonCountdown';
import ButtonResource from '../ButtonResource';
import * as styles from './style';

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



		console.log(styles.payloadCurrent);
	}

	componentDidMount () {
		this.refs.img.style.visibility = "hidden";
	}
	
	render() {
		const { inventory, rockets, missions } = this.props       
		const currentRocket = rockets.current.rocket;
		const currentPayload = rockets.current.payload;		
        const currentMission = missions.current.mission;     
        const currentTarget = missions.current.target;     
		const state = this.state;	

		return (
			<section className="main" >								
				<div className="resources" style={styles.divStyle}>
					<div className="text">Cardboard : {inventory.cardboard} </div>
					<ButtonCountdown text="Rummage in bins" onClick={this.cardboardClick} cooldown={20}/>
					<div className="text">Tape : {inventory.tape} </div>
					<ButtonCountdown text="Go to the hardware store" onClick={this.tapeClick} cooldown={40}/>														
				</div>
				<div className="middle" style={styles.divRight}>			
					<h2>Rocket Builder</h2>
					<div className="payload">
						Payload :
						<div className="payloadCurrent" style={styles.payloadCurrent}>
							<div className="text">{currentPayload.name}</div>						
							<div style={styles.divNextPrevious} onClick={()=> this.previous("payload")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("payload")}>Next ⟶</div>
						</div>
					</div>
					<div className="booster">
						Booster :
						<div className="boosterCurrent" style={styles.payloadCurrent}>
							<div className="text">{currentRocket.name}</div>
							{
				                currentRocket.resources.map(function(resource)  {	
				                	
				                	const style = (state.missingResources.indexOf(resource) !== -1) ? styles.divResourceRed : {};
				                	
				                    return <div style={style} key={resource.name}>{resource.name} : {inventory[resource.shortName]}/{resource.count}</div>
				                })
							}
							<div style={styles.divNextPrevious} onClick={() => this.previous("rocket")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("rocket")}>Next ⟶</div>
						</div>
					</div>
					<div className="mission">
						Mission : 
						<div className="missionCurrent" style={styles.payloadCurrent}>
						     <div className="text">{currentMission.name}</div>                       
                             <div style={styles.divNextPrevious} onClick={()=> this.previous("mission")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("mission")}>Next ⟶</div>							
						</div>
					</div>
                    <div className="target">
                        Target : 
                        <div className="targetCurrent" style={styles.payloadCurrent}>
                             <div className="text">{currentTarget.name}</div>                       
                             <div style={styles.divNextPrevious} onClick={()=> this.previous("target")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("target")}>Next ⟶</div>                          
                        </div>
                    </div>

				</div>
				<div className="middle" style={styles.divRight}>			
					<h2>Mission Planner</h2>
					<div className="payload">
						Payload :
						<div className="payloadCurrent" style={styles.payloadCurrent}>
							<div className="text">{currentPayload.name}</div>						
							<div style={styles.divNextPrevious} onClick={()=> this.previous("payload")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("payload")}>Next ⟶</div>
						</div>
					</div>
					<div className="booster">
						Booster :
						<div className="boosterCurrent" style={styles.payloadCurrent}>
							<div className="text">{currentRocket.name}</div>
							{
				                currentRocket.resources.map(function(resource)  {	
				                	
				                	const style = (state.missingResources.indexOf(resource) !== -1) ? styles.divResourceRed : {};
				                	
				                    return <div style={style} key={resource.name}>{resource.name} : {inventory[resource.shortName]}/{resource.count}</div>
				                })
							}
							<div style={styles.divNextPrevious} onClick={() => this.previous("rocket")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("rocket")}>Next ⟶</div>
						</div>
					</div>
					<div className="mission">
						Mission : 
						<div className="missionCurrent" style={styles.payloadCurrent}>
						     <div className="text">{currentMission.name}</div>                       
                             <div style={styles.divNextPrevious} onClick={()=> this.previous("mission")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("mission")}>Next ⟶</div>							
						</div>
					</div>
                    <div className="target">
                        Target : 
                        <div className="targetCurrent" style={styles.payloadCurrent}>
                             <div className="text">{currentTarget.name}</div>                       
                             <div style={styles.divNextPrevious} onClick={()=> this.previous("target")}>⟵ Previous</div> <div style={styles.divNextPrevious} onClick={()=> this.next("target")}>Next ⟶</div>                          
                        </div>
                    </div>

				</div>
				<div className="right" style={styles.divStyle}>					
					<div className="text">Rockets launched : {rockets.totalLaunches} </div>
					<ButtonResource text="Launch !" highlight={this.highlightResource} inventory={inventory} rocket={currentRocket} onClick={this.launchClick} />
				</div>				
				
				<div className="right" style={styles.divRight}>					
					<img ref="img" alt="" src={currentRocket.image}></img>
				</div>
			</section>
		)
	}

	next (type) {
		if (type === "rocket")
			this.props.dispatch(nextRocket());
        else if (type === "mission")
            this.props.dispatch(nextMission());
        else if (type === "target")
            this.props.dispatch(nextTarget());
		else
			this.props.dispatch(nextPayload());
	}

	previous (type) {
		if (type === "rocket")
			this.props.dispatch(previousRocket());
        else if (type === "mission")
            this.props.dispatch(previousMission());
        else if (type === "target")
            this.props.dispatch(previousTarget());
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