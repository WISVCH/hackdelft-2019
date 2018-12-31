import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from 'ducks/root'
import rootSaga from 'sagas/root'

const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const enhancers = composeWithDevTools(
    applyMiddleware(...middleware)
  )

  let store = createStore(
    reducer,
    initialState,
    enhancers
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
