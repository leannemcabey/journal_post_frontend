import { combineReducers } from 'redux'
import user from './user'
import journal from './journal'
import postcard from './postcard'

const rootReducer = combineReducers({
  user,
  journal,
  postcard
})

export default rootReducer
