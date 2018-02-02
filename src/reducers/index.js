import { combineReducers } from 'redux'
import inventory from './inventory'
import rockets from './rockets'
import missions from './missions'

const rootReducer = combineReducers({
  inventory,
  rockets,
  missions,
})

export default rootReducer
