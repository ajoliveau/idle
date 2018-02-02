import { 
	SWITCH_MISSION,
	NEXT_MISSION,
	PREVIOUS_MISSION,
	NEXT_TARGET,
	PREVIOUS_TARGET,
} from '../actions/missions'
import { mod } from '../utils'

const initialState = {
	missions: [
		{
			id: 0,
			name: "Flyby",
			alternateName: "Reach",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature"
			]
		},
		{
			id: 1,
			name: "Orbit",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Surface mapping",
				"Magnetic field",
			]
		},
		{
			id: 2,
			name: "Manned Orbit",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Surface mapping",
				"Magnetic field",
			]
		},
		{
			id: 3,
			name: "Probe",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity"
			]
		},
		{
			id: 4,
			name: "Manned Lander",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity",
				"Geology Analysis",
				"Surface properties",
			]
		},
		{
			id: 5,
			name: "Unmanned Rover",
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity",
				"Geology Analysis",
				"Surface properties",
			]
		},
	],
	targets: [
		{
			id: 0,
			name: "Up",
			distance: 0.05 , // = 50m 
			g: 0,
		},
		{
			id: 1,
			name: "Higher",
			distance: 0.4, // = 400m 
			g: 0,
		},
		{
			id: 2,
			name: "Even higher",
			distance: 1.5, 
			g: 0,
		},
		{
			id: 3,
			name: "Edge of space",
			distance: 80, 
			g: 0,
		},
		{
			id: 4,
			name: "Space",
			distance: 150, 
			g: 0,
		},
		{
			id: 5,
			name: "Low Earth Orbit",
			distance: 400, 
			g: 0,
		},
		{
			id: 6,
			name: "Medium Earth Orbit",
			distance: 20000,
			g: 0,
		},
		{
			id: 7,
			name: "Geosynchronous Earth Orbit",
			distance: 36000,
			g: 0,
		},
		{
			id: 8,
			name: "Moon",
			distance: 380000,
			g: 0.16,
		},
		{
			id: 9,
			name: "Mars",
			distance: 56000000,
			g: 0.379,
		},
	],
	current: {
		mission: {},
		target: {},
	}
}

initialState.current.mission = initialState.missions[0];
initialState.current.target = initialState.targets[0];

export default function inventory(state = initialState, action) {

	switch (action.type) {
		
		case SWITCH_MISSION:
		return {        
			...state,
			current: action.payload,

		}

		case NEXT_MISSION:
		return {        
			...state,
			current: {
				...state.current,
			 	mission: state.missions[mod(state.current.mission.id + 1, state.missions.length)],
			}

		}

		case PREVIOUS_MISSION:
		return {        
			...state,
			current: {
				...state.current,
			 	mission: state.missions[mod(state.current.mission.id - 1, state.missions.length)],
			}

		}

		case NEXT_TARGET:
		return {        
			...state,
			current: {
				...state.current,
			 	target: state.targets[mod(state.current.target.id + 1, state.targets.length)],
			}

		}

		case PREVIOUS_TARGET:
		return {        
			...state,
			current: {
				...state.current,
			 	target: state.targets[mod(state.current.target.id - 1, state.targets.length)],
			}

		}
		
		default:
		return state
	}
}
