import { combineReducers } from 'redux'
import alert from './alert'
import posts from './posts'

const reducers = combineReducers({
  alert,
  posts,
})

export default reducers
