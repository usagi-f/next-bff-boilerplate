// @flow
import { Action, Alert } from '../declare/reducers'

const initialState: Alert = {
  isShow: false,
  title: '',
  text: '',
}

const users = (state: Alert = initialState, action: Action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return Object.assign({}, state, {
        isShow: true,
        title: action.title || initialState.title,
        text: action.text || initialState.text,
      })
    case 'HIDE_ALERT':
      return Object.assign({}, state, {
        isShow: false,
        title: initialState.title,
        text: initialState.text,
      })
    default:
      return state
  }
}

export default users
