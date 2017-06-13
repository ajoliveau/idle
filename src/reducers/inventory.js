import { 
	ADD_RESOURCE,
	REMOVE_RESOURCE,	
} from '../actions/inventory'

const initialState = {
	cardboard: 0,
	tape: 0
}

export default function inventory(state = initialState, action) {

	switch (action.type) {
		
		case ADD_RESOURCE:
		return {        
			...state, 
			[action.payload.resource]: state[action.payload.resource]+= action.payload.count,

		}

		case REMOVE_RESOURCE:
		return {        
			...state, 
			[action.payload.resource]: state[action.payload.resource]-= action.payload.count,

		}
		
		default:
		return state
	}
}
