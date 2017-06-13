import { combineReducers } from 'redux'
import inventory from './inventory'
import rockets from './rockets'

const rootReducer = combineReducers({
  inventory,
  rockets,
})

export default rootReducer
