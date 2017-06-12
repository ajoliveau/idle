import { 
	SWITCH_ROCKET,
} from '../actions/rockets'

const initialState = {
	rockets: [
		{
			name: "Cardboard rocket",
			resources: {
				cardboard: 50,
				tape: 10,
			},
			launches: 0,			
		},
	],
	current: {		
		name: "Cardboard rocket",
		resources: {
			cardboard: 50,
			tape: 10,
		},
		launches: 0,			
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

		default:
		return state
	}
}
