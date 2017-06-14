import { 
	SWITCH_ROCKET,
	NEXT_ROCKET,
	PREVIOUS_ROCKET,
	NEXT_PAYLOAD,
	PREVIOUS_PAYLOAD,
	LAUNCH_ROCKET,
} from '../actions/rockets'
import { mod } from '../utils'

const initialState = {
	payloads: [
		{
			id: 0,
			name: "None",
		},
		{
			id: 1,
			name: "Thermomether",
		},
		{
			id: 2,
			name: "Altimeter",
		},
		{
			id: 3,
			name: "Video camera",
		},		
	],
	rockets: [
		{
			id: 0,			
			name: "Cardboard rocket",
			resources: [
				{
					name: "Cardboard",
					shortName: "cardboard",
					count: 2,
				},
				{
					name: "Tape",
					shortName: "tape",
					count: 1,
				},
			],				
			launches: 0,
			image: '/assets/cardboard-launch.gif',
			imageDuration: 4750,
			
		},
		{
			id: 1,			
			name: "Big cardboard rocket",
			resources: [
				{
					name: "Cardboard",
					shortName: "cardboard",
					count: 10,
				},
				{
					name: "Tape",
					shortName: "tape",
					count: 5,
				},
			],				
			launches: 0,
			image: '/assets/cardboard-launch.gif',
			imageDuration: 4750,
			
		},
		{
			id: 2,			
			name: "Atlas Mercury",
			resources: [
				{
					name: "Cardboard",
					shortName: "cardboard",
					count: 10,
				},
				{
					name: "Tape",
					shortName: "tape",
					count: 5,
				},
			],				
			launches: 0,
			image: '/assets/cardboard-launch.gif',
			imageDuration: 4750,
			
		},
	],
	current: {
		payload: {},
		rocket: {}
	},
	totalLaunches: 0,
}

initialState.current.rocket = initialState.rockets[0];
initialState.current.payload = initialState.payloads[0];

export default function rockets(state = initialState, action) {
	switch (action.type) {
		case SWITCH_ROCKET:
		return {        
			...state,
			current: action.payload.rocket,

		}

		case NEXT_ROCKET:
		return {        
			...state,
			current: {
				...state.current,
			 	rocket: state.rockets[mod(state.current.rocket.id + 1, state.rockets.length)],
			}

		}

		case PREVIOUS_ROCKET:
		return {        
			...state,
			current: {
				...state.current,
			 	rocket: state.rockets[mod(state.current.rocket.id - 1, state.rockets.length)],
			}

		}

		case NEXT_PAYLOAD:
		return {        
			...state,
			current: {
				...state.current,
			 	payload: state.payloads[mod(state.current.payload.id + 1, state.payloads.length)],
			}

		}

		case PREVIOUS_PAYLOAD:
		return {        
			...state,
			current: {
				...state.current,
			 	payload: state.payloads[mod(state.current.payload.id - 1, state.payloads.length)],
			}

		}

		case LAUNCH_ROCKET:		
		return {        
			...state,
			current: {
				...state.current,
				rocket: {
					...state.current.rocket,
					launches: state.current.rocket.launches + 1,	
				}
				
			},
			rockets: state.rockets.map(rocket => rocket.id === state.current.rocketid ?
				{...rocket, launches: rocket.launches+1} :
				rocket
			),
			totalLaunches: state.totalLaunches+1,
		}

		default:
		return state
	}
}
