import { 
	ADD_CARDBOARD,
	ADD_TAPE
} from '../actions/inventory'

const initialState = {
	cardboard: 0,
	tape: 0
}

export default function inventory(state = initialState, action) {

	switch (action.type) {
		case ADD_CARDBOARD:
		return {        
			...state, 
			cardboard: state.cardboard+= action.payload.count,

		}
		case ADD_TAPE:
		return {        
			...state, 
			tape: state.tape+= action.payload.count,
			
		}
		default:
		return state
	}
}
