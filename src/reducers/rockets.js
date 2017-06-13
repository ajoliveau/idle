import { 
	SWITCH_ROCKET,
	NEXT_ROCKET,
	PREVIOUS_ROCKET,
	LAUNCH_ROCKET,
} from '../actions/rockets'
import { mod } from '../utils'

const initialState = {
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
	],
	current: {		
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
	totalLaunches: 0,
}

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
			current: state.rockets[mod(state.current.id + 1, state.rockets.length)],

		}

		case PREVIOUS_ROCKET:
		return {        
			...state,
			current: state.rockets[mod(state.current.id - 1, state.rockets.length)],

		}

		case LAUNCH_ROCKET:		
		return {        
			...state,
			current: {
				...state.current,
				launches: state.current.launches + 1,
			},
			rockets: state.rockets.map(rocket => rocket.id === state.current.id ?
				{...rocket, launches: rocket.launches+1} :
				rocket
			),
			totalLaunches: state.totalLaunches+1,
		}

		default:
		return state
	}
}
