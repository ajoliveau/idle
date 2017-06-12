import { combineReducers } from 'redux'
import idle from './idle'
import inventory from './inventory'
import rockets from './rockets'

const rootReducer = combineReducers({
  idle,
  inventory,
  rockets,
})

export default rootReducer
