import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line import/no-extraneous-dependencies
import reducers from '../reducers/'
import mySaga from '../sagas/'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(mySaga)
  }

  store.runSagaTask()
  return store
}
