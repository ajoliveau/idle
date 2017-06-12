import { 
  ADD_LAUNCH
} from '../actions'

const initialState = {
  launches: 0
}

export default function idle(state = initialState, action) {

  switch (action.type) {
    case ADD_LAUNCH:
      return {
        launches: state.launches++,
        ...state
      
      }
    default:
      return state
  }
}
