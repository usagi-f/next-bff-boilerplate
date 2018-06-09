// @flow
import { Action, Posts } from '../declare/reducers'

const initialState: Posts = []

const posts = (state: Posts = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_POSTS': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default posts
