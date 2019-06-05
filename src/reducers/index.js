import { combineReducers } from 'redux'
import counter from './counter'
import todo from './todo'
import movies from './movieReducer'

export default combineReducers({
  counter,
  todo,
  movies
  //etc
})
