import {Action} from '../actions/action'
import {AppState} from '../store/app-state'

const reducersMap = Object.assign({})

export function rootReducer(state: AppState, action: Action): AppState {
  if (reducersMap[action.type]) {
    return reducersMap[action.type](state, action)
  }
  if (typeof action.type === 'symbol') {
    console.error('Action not handled:', action)
  }
  return state
}
