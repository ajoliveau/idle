import { 
	PROGRESSION_PROGRESS
} from '../actions/progression'

const initialState = {
	progression: [
		{
			id: 0,
			name: 'cardboard',
			minMission: 0,
			maxMission: 0,
			minTarget: 0,
			maxTarget: 2,
			minRocket: 0,
			maxRocket: 1,
			minPayload: 0,
			maxPayload: 3,

		}
	]
		
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
