import {createStore as createReduxStore, applyMiddleware, Store} from 'redux'
import {initialState} from './app-state'
import {rootReducer} from '../reducers/root'

import thunk from 'redux-thunk'

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createReduxStore)

function createStore(): Store {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const store = createStore()
